import React, { useEffect, useRef, useMemo, useCallback, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { createRoot, type Root } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { useMapStore } from '../../../stores/mapStore';
import { useKeepsakeStore } from '../../../stores/keepsakeStore';
import { MOCK_CLUBS } from '../../../services/mock/clubs.mock';
import { ClusterMarker } from '../ClusterMarker';
import { ClubMarker, KeepsakeMarker } from '../ClubMarker';
import { HoverPreview } from '../HoverPreview';
import { ZoomControl } from '../ZoomControl';
import { 
    useSupercluster, 
    isCluster, 
    isPoint,
    type PointFeature, 
    type MapFeature,
    type ClubPointProperties,
    type KeepsakePointProperties
} from '../../../hooks/useSupercluster';
import type { Club } from '../../../types/domain';
import type { BBox } from 'geojson';

// Marker management for React rendering
interface MarkerInstance {
    marker: maplibregl.Marker;
    root: Root;
    element: HTMLDivElement;
}

export const MapView: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<maplibregl.Map | null>(null);
    const markersRef = useRef<Map<string, MarkerInstance>>(new Map());
    const popupRef = useRef<maplibregl.Popup | null>(null);
    const popupRootRef = useRef<Root | null>(null);
    
    const { center, zoom, setViewport, flyToTarget } = useMapStore();
    const keepsakes = useKeepsakeStore(state => state.keepsakes);
    
    // Track map bounds for clustering
    const [bounds, setBounds] = useState<BBox | null>(null);
    const [currentZoom, setCurrentZoom] = useState(zoom);

    // Create a map for fast club lookup
    const clubsMap = useMemo(() => {
        return new Map<string, Club>(MOCK_CLUBS.map(c => [c.id, c]));
    }, []);

    // Identify clubs that have keepsakes
    const clubsWithKeepsakes = useMemo(() => {
        return new Set(keepsakes.map(k => k.clubId));
    }, [keepsakes]);

    // Prepare GeoJSON point features for Supercluster
    const points = useMemo((): PointFeature[] => {
        const features: PointFeature[] = [];

        // Add all clubs
        MOCK_CLUBS.forEach(club => {
            const hasKeepsakes = clubsWithKeepsakes.has(club.id);
            
            features.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [club.coordinates.longitude, club.coordinates.latitude]
                },
                properties: {
                    pointType: 'club',
                    clubId: club.id,
                    clubName: club.name,
                    color: club.colors[0] || '#888',
                    color2: club.colors[1] || club.colors[0] || '#888',
                    hasKeepsakes,
                } as ClubPointProperties
            });
        });

        // Add keepsakes as separate points
        keepsakes.forEach(k => {
            features.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [k.coordinates.longitude, k.coordinates.latitude]
                },
                properties: {
                    pointType: 'keepsake',
                    clubId: k.clubId,
                    keepsakeId: k.id,
                    itemType: k.type,
                    color: '#22c55e', // Green for keepsakes
                } as KeepsakePointProperties
            });
        });

        return features;
    }, [keepsakes, clubsWithKeepsakes, clubsMap]);

    // Use Supercluster for clustering
    const { clusters, getClusterExpansionZoom, getClusterLeaves } = useSupercluster({
        points,
        bounds,
        zoom: currentZoom,
    });

    // Generate unique key for a feature
    const getFeatureKey = useCallback((feature: MapFeature): string => {
        if (isCluster(feature)) {
            return `cluster-${feature.properties.cluster_id}`;
        }
        const props = feature.properties;
        if (props.pointType === 'keepsake') {
            return `keepsake-${props.keepsakeId}`;
        }
        return `club-${props.clubId}`;
    }, []);

    // Handle cluster click - zoom in
    const handleClusterClick = useCallback((clusterId: number, coordinates: [number, number]) => {
        if (!map.current) return;
        const expansionZoom = getClusterExpansionZoom(clusterId);
        map.current.easeTo({
            center: coordinates,
            zoom: Math.min(expansionZoom, 18),
            duration: 500
        });
    }, [getClusterExpansionZoom]);

    // Show hover popup
    const showPopup = useCallback((
        coordinates: [number, number],
        feature: MapFeature
    ) => {
        if (!map.current) return;

        // Remove existing popup
        if (popupRef.current) {
            popupRef.current.remove();
        }

        // Get features to display
        let features: PointFeature[] = [];
        let clusterProps = undefined;
        
        if (isCluster(feature)) {
            features = getClusterLeaves(feature.properties.cluster_id, 50);
            clusterProps = feature.properties;
        } else {
            features = [feature];
        }

        // Determine anchor: flip to 'top' (popup below marker) when near top of viewport
        const screenPoint = map.current.project(coordinates);
        const mapHeight = map.current.getContainer().clientHeight;
        const anchor = screenPoint.y < mapHeight * 0.45 ? 'top' : 'bottom';

        // Create popup element and render synchronously so popup is
        // sized correctly before MapLibre positions it (prevents top-left flash)
        const popupElement = document.createElement('div');
        popupRootRef.current = createRoot(popupElement);
        flushSync(() => {
            popupRootRef.current!.render(
                <HoverPreview 
                    features={features}
                    clubsMap={clubsMap}
                    isCluster={isCluster(feature)}
                    clusterProps={clusterProps}
                />
            );
        });

        popupRef.current = new maplibregl.Popup({
            closeButton: false,
            closeOnClick: false,
            className: 'keepsake-popup',
            maxWidth: '340px',
            offset: 15,
            anchor,
        })
            .setLngLat(coordinates)
            .setDOMContent(popupElement)
            .addTo(map.current);
    }, [clubsMap, getClusterLeaves]);

    // Hide popup
    const hidePopup = useCallback(() => {
        if (popupRef.current) {
            popupRef.current.remove();
            popupRef.current = null;
        }
    }, []);

    // Handle zoom change from control
    const handleZoomChange = useCallback((newZoom: number) => {
        if (!map.current) return;
        map.current.easeTo({ zoom: newZoom, duration: 300 });
    }, []);

    // Reset zoom to default without changing center position
    const handleZoomReset = useCallback(() => {
        if (!map.current) return;
        map.current.easeTo({ zoom: 2, duration: 600 });
    }, []);

    // Update bounds when map moves
    const updateBounds = useCallback(() => {
        if (!map.current) return;
        
        const b = map.current.getBounds();
        setBounds([
            b.getWest(),
            b.getSouth(),
            b.getEast(),
            b.getNorth()
        ]);
        setCurrentZoom(map.current.getZoom());
    }, []);

    // React to flyTo requests from the store (e.g. from SearchBox)
    useEffect(() => {
        if (!flyToTarget || !map.current) return;
        map.current.flyTo({
            center: [flyToTarget.center.longitude, flyToTarget.center.latitude],
            zoom: flyToTarget.zoom,
            duration: 1200,
        });
    }, [flyToTarget]);

    // Initialize map
    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
            center: [center.longitude, center.latitude],
            zoom: zoom,
            attributionControl: false,
        });

        map.current.on('load', () => {
            updateBounds();
        });

        map.current.on('moveend', () => {
            updateBounds();
            if (map.current) {
                const c = map.current.getCenter();
                setViewport({ longitude: c.lng, latitude: c.lat }, map.current.getZoom());
            }
        });

        map.current.on('zoomend', () => {
            updateBounds();
        });

        return () => {
            // Cleanup markers
            markersRef.current.forEach(({ marker }) => marker.remove());
            markersRef.current.clear();
            
            map.current?.remove();
            map.current = null;
        };
    }, []);

    // Sync markers with clusters
    useEffect(() => {
        if (!map.current) return;

        const currentKeys = new Set<string>();

        // Create/update markers for each cluster/point
        clusters.forEach((feature) => {
            const key = getFeatureKey(feature);
            currentKeys.add(key);
            
            const coordinates = feature.geometry.coordinates as [number, number];
            
            let markerInstance = markersRef.current.get(key);

            if (!markerInstance) {
                // Create new marker
                const element = document.createElement('div');
                element.className = 'map-marker-container';
                
                const root = createRoot(element);
                
                const marker = new maplibregl.Marker({
                    element,
                    anchor: isCluster(feature) ? 'center' : 
                           (isPoint(feature) && feature.properties.pointType === 'keepsake') ? 'bottom' : 'center'
                })
                    .setLngLat(coordinates)
                    .addTo(map.current!);

                markerInstance = { marker, root, element };
                markersRef.current.set(key, markerInstance);
            } else {
                // Update position
                markerInstance.marker.setLngLat(coordinates);
            }

            // Render appropriate component
            if (isCluster(feature)) {
                markerInstance.root.render(
                    <ClusterMarker
                        properties={feature.properties}
                        onClick={() => handleClusterClick(
                            feature.properties.cluster_id, 
                            coordinates
                        )}
                        onMouseEnter={() => showPopup(coordinates, feature)}
                        onMouseLeave={hidePopup}
                    />
                );
            } else if (feature.properties.pointType === 'keepsake') {
                const club = clubsMap.get(feature.properties.clubId);
                markerInstance.root.render(
                    <KeepsakeMarker
                        properties={feature.properties}
                        clubColor={club?.colors[0] || '#888'}
                        onClick={() => {/* TODO: Open keepsake detail */}}
                        onMouseEnter={() => showPopup(coordinates, feature)}
                        onMouseLeave={hidePopup}
                    />
                );
            } else {
                markerInstance.root.render(
                    <ClubMarker
                        properties={feature.properties}
                        onClick={() => {/* TODO: Open club detail */}}
                        onMouseEnter={() => showPopup(coordinates, feature)}
                        onMouseLeave={hidePopup}
                    />
                );
            }
        });

        // Remove markers that are no longer in view
        markersRef.current.forEach((instance, key) => {
            if (!currentKeys.has(key)) {
                instance.marker.remove();
                markersRef.current.delete(key);
            }
        });
    }, [clusters, getFeatureKey, handleClusterClick, showPopup, hidePopup, clubsMap]);

    return (
        <div ref={mapContainer} className="w-full h-full bg-background relative">
            <ZoomControl zoom={currentZoom} onZoomChange={handleZoomChange} onReset={handleZoomReset} />
        </div>
    );
};
