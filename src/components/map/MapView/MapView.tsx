import React, { useEffect, useRef, useMemo } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { createRoot } from 'react-dom/client';
import { useMapStore } from '../../../stores/mapStore';
import { useKeepsakeStore } from '../../../stores/keepsakeStore';
import { MOCK_CLUBS } from '../../../services/mock/clubs.mock';
import { FloatingActionButton } from '../../FloatingActionButton';
import { Trophy, Shirt, Wind, Award } from 'lucide-react';

import { ItemType } from '../../../types/domain';
import type { Club } from '../../../types/domain';


// --- Pin Image Generation ---
// Generate an SVG string for the keepsake pin
const getKeepsakePinSvg = () => `
<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" fill="#22c55e" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="12" cy="10" r="3" fill="white"/>
</svg>
`;

// --- Popup Component ---
interface PopupProps {
    features: maplibregl.MapGeoJSONFeature[];
    clubs: Map<string, Club>;
}

const PopupContent: React.FC<PopupProps> = ({ features, clubs }) => {
    // Group items by Club ID
    const groupedItems = useMemo(() => {
        const groups: Record<string, { club: Club; items: any[]; count: number }> = {};

        features.forEach(f => {
            const props = f.properties;
            const clubId = props.clubId;
            const club = clubs.get(clubId);

            if (!club) return;

            if (!groups[clubId]) {
                groups[clubId] = { club, items: [], count: 0 };
            }

            if (props.pointType === 'club') {
                groups[clubId].count += 1; // Count the club location itself
            } else if (props.pointType === 'keepsake') {
                groups[clubId].items.push(props);
            }
        });

        // Convert dict to array
        return Object.values(groups).sort((a, b) => {
            // Priority 1: Has keepsakes?
            const aHasItems = a.items.length > 0;
            const bHasItems = b.items.length > 0;
            if (aHasItems && !bHasItems) return -1;
            if (!aHasItems && bHasItems) return 1;

            // Priority 2: Count of items
            if (a.items.length !== b.items.length) {
                return b.items.length - a.items.length;
            }

            // Priority 3: Alphabetical
            return a.club.name.localeCompare(b.club.name);
        });
    }, [features, clubs]);

    return (
        <div className="p-3 min-w-[200px] max-w-[300px] text-foreground font-sans">
            <h3 className="text-sm font-semibold mb-2 text-foreground border-b border-border pb-1">
                {features.length > 1 ? `${features.length} Items Found` : 'Location Details'}
            </h3>
            <div className="space-y-3 max-h-[250px] overflow-y-auto pr-1 custom-scrollbar">
                {groupedItems.map((group) => (
                    <div key={group.club.id} className="border-b border-border last:border-0 pb-2 last:pb-0">
                        <div className="flex items-center gap-2 mb-1.5">
                            <span
                                className="w-2.5 h-2.5 rounded-full ring-1 ring-border"
                                style={{ backgroundColor: group.club.colors[0] || '#ccc' }}
                            />
                            <span className="font-medium text-sm">{group.club.name}</span>
                        </div>

                        {group.items.length > 0 ? (
                            <div className="flex flex-wrap gap-1.5 ml-4">
                                {group.items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="text-[10px] bg-secondary text-secondary-foreground px-2 py-1 rounded-sm flex items-center gap-1 shadow-sm"
                                    >
                                        {/* Simple icon mapping based on type */}
                                        {item.itemType === ItemType.SHIRT && <Shirt className="w-3 h-3" />}
                                        {item.itemType === ItemType.SCARF && <Wind className="w-3 h-3" />}
                                        {item.itemType === ItemType.BADGE && <Award className="w-3 h-3" />}
                                        {item.itemType !== ItemType.SHIRT && item.itemType !== ItemType.SCARF && item.itemType !== ItemType.BADGE && <Trophy className="w-3 h-3" />}
                                        <span className="font-medium capitalize">{item.itemType?.toLowerCase() || 'Item'}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-muted-foreground text-xs ml-4">No keepsakes collected here yet.</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const MapView: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<maplibregl.Map | null>(null);
    const popupRef = useRef<maplibregl.Popup | null>(null);
    const lastHoveredIdRef = useRef<string | null>(null);
    const { center, zoom, setViewport } = useMapStore();
    const keepsakes = useKeepsakeStore(state => state.keepsakes);

    // Create a map for fast club lookup
    const clubsMap = useMemo(() => {
        return new Map(MOCK_CLUBS.map(c => [c.id, c]));
    }, []);

    // Prepare GeoJSON Data
    const geoJsonData = useMemo(() => {
        const features: any[] = [];

        // Identify clubs that have at least one keepsake
        const clubsWithKeepsakes = new Set(keepsakes.map(k => k.clubId));

        // Add Clubs (Only if they don't have keepsakes)
        MOCK_CLUBS.forEach(club => {
            if (clubsWithKeepsakes.has(club.id)) return; // Skip "Club" dot if we have a keepsake pin

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
                    color: club.colors[0] || '#888'
                }
            });
        });

        // Add Keepsakes
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
                    id: k.id,
                    itemType: k.type,
                    // Look up club color if needed
                    color: '#22c55e'
                }
            });
        });

        return {
            type: 'FeatureCollection',
            features
        };
    }, [keepsakes]);

    // Initialize Map
    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
            center: [center.longitude, center.latitude],
            zoom: zoom,
            attributionControl: false,
        });

        map.current.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right');

        // Load images and setup sources when map loads
        map.current.on('load', () => {
            if (!map.current) return;

            // Load Keepsake Pin Image
            const pinImage = new Image();
            pinImage.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(getKeepsakePinSvg());
            pinImage.onload = () => {
                if (!map.current) return;
                // Add image if not exists
                if (!map.current.hasImage('keepsake-pin')) {
                    map.current.addImage('keepsake-pin', pinImage);
                }
            };

            // Add Source
            map.current.addSource('places', {
                type: 'geojson',
                data: geoJsonData as any,
                cluster: true,
                clusterMaxZoom: 14,
                clusterRadius: 50
            });

            // Layer: Clusters (Circles)
            map.current.addLayer({
                id: 'clusters',
                type: 'circle',
                source: 'places',
                filter: ['has', 'point_count'],
                paint: {
                    'circle-color': [
                        'step',
                        ['get', 'point_count'],
                        '#60a5fa', // Blue-400
                        5,
                        '#facc15', // Yellow-400
                        10,
                        '#f472b6' // Pink-400
                    ],
                    'circle-radius': [
                        'step',
                        ['get', 'point_count'],
                        20,
                        100,
                        30,
                        750,
                        40
                    ],
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#1e293b' // Slate-800
                }
            });

            // Layer: Cluster Count
            map.current.addLayer({
                id: 'cluster-count',
                type: 'symbol',
                source: 'places',
                filter: ['has', 'point_count'],
                layout: {
                    'text-field': '{point_count_abbreviated}',
                    'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'], // Assuming generic fonts avail
                    'text-size': 12
                },
                paint: {
                    'text-color': '#0f172a' // Slate-900
                }
            });

            // Layer: Unclustered Clubs (Dots)
            map.current.addLayer({
                id: 'unclustered-clubs',
                type: 'circle',
                source: 'places',
                filter: ['all', ['!has', 'point_count'], ['==', 'pointType', 'club']],
                paint: {
                    'circle-color': ['get', 'color'],
                    'circle-radius': 6,
                    'circle-stroke-width': 1,
                    'circle-stroke-color': '#fff'
                }
            });

            // Layer: Unclustered Keepsakes (Large Pins)
            map.current.addLayer({
                id: 'unclustered-keepsakes',
                type: 'symbol',
                source: 'places',
                filter: ['all', ['!has', 'point_count'], ['==', 'pointType', 'keepsake']],
                layout: {
                    'icon-image': 'keepsake-pin',
                    'icon-size': 1, // Scaled by the SVG size (48px is large enough)
                    'icon-allow-overlap': true,
                    'icon-anchor': 'bottom'
                }
            });

            // Inspect a cluster on click
            map.current.on('click', 'clusters', async (e) => {
                const features = map.current?.queryRenderedFeatures(e.point, {
                    layers: ['clusters']
                });
                const clusterId = features?.[0]?.properties?.cluster_id;
                if (!clusterId || !map.current) return;

                const source: any = map.current.getSource('places');
                source.getClusterExpansionZoom(clusterId, (err: any, zoom: number) => {
                    if (err) return;
                    map.current?.easeTo({
                        center: (features?.[0]?.geometry as any).coordinates,
                        zoom: zoom
                    });
                });
            });

            // Inspect a cluster text on click
            map.current.on('click', 'cluster-count', async (e) => {
                const features = map.current?.queryRenderedFeatures(e.point, {
                    layers: ['cluster-count']
                });
                const clusterId = features?.[0]?.properties?.cluster_id;
                if (!clusterId || !map.current) return;

                const source: any = map.current.getSource('places');
                source.getClusterExpansionZoom(clusterId, (err: any, zoom: number) => {
                    if (err) return;
                    map.current?.easeTo({
                        center: (features?.[0]?.geometry as any).coordinates,
                        zoom: zoom
                    });
                });
            });

            // Global Hover Handler
            const interactiveLayers = ['clusters', 'cluster-count', 'unclustered-clubs', 'unclustered-keepsakes'];
            const hoverCounterRef = { current: 0 };

            map.current.on('mousemove', async (e) => {
                if (!map.current) return;

                const features = map.current.queryRenderedFeatures(e.point, {
                    layers: interactiveLayers
                });

                // NO FEATURES HOVERED
                if (!features || features.length === 0) {
                    map.current.getCanvas().style.cursor = '';
                    if (popupRef.current) {
                        popupRef.current.remove();
                        popupRef.current = null;
                        lastHoveredIdRef.current = null;
                    }
                    hoverCounterRef.current++; // Invalidate pending asyncs
                    return;
                }

                // FEATURE HOVERED
                map.current.getCanvas().style.cursor = 'pointer';

                const feature = features[0];
                const props = feature.properties || {};
                const geometry = feature.geometry as any;

                // Determine unique ID for state tracking
                const clusterId = props.cluster_id;
                const pointId = props.id || props.clubId;
                const isCluster = !!props.cluster;

                // Construct a unique ID string
                const hoverId = isCluster ? `cluster-${clusterId}` : `point-${pointId}-${props.pointType}`;

                if (lastHoveredIdRef.current === hoverId) {
                    return;
                }

                lastHoveredIdRef.current = hoverId;
                const currentHoverCount = ++hoverCounterRef.current;

                // Remove old popup
                if (popupRef.current) {
                    popupRef.current.remove();
                    popupRef.current = null;
                }

                // Fetch content
                let popupFeatures: any[] = [];
                const coordinates = geometry.coordinates.slice();

                if (isCluster) {
                    const source: any = map.current.getSource('places');
                    try {
                        const leaves = await new Promise<any[]>((resolve, reject) => {
                            source.getClusterLeaves(clusterId, 100, 0, (error: any, result: any[]) => {
                                if (error) reject(error);
                                else resolve(result);
                            });
                        });
                        popupFeatures = leaves;
                    } catch (err) {
                        console.error('Error fetching cluster leaves:', err);
                        return;
                    }
                } else {
                    popupFeatures = [feature];
                }

                // CHECK CANCELLATION: If a new hover event happened while we waited
                if (hoverCounterRef.current !== currentHoverCount) return;

                // Create and Show Popup
                const popupNode = document.createElement('div');
                const root = createRoot(popupNode);
                root.render(<PopupContent features={popupFeatures} clubs={clubsMap} />);

                popupRef.current = new maplibregl.Popup({
                    closeButton: false,
                    closeOnClick: false,
                    className: 'keepsake-popup',
                    maxWidth: '320px',
                    offset: 15
                })
                    .setLngLat(coordinates)
                    .setDOMContent(popupNode)
                    .addTo(map.current);
            });

            // Cleanup popup when mouse leaves the map canvas completely
            map.current.on('mouseout', () => {
                if (popupRef.current) {
                    popupRef.current.remove();
                    popupRef.current = null;
                }
                lastHoveredIdRef.current = null;
                hoverCounterRef.current++;
            });
        });

        // Cleanup map on unmount
        return () => {
            map.current?.remove();
            map.current = null;
        };
    }, []); // Run once on mount

    // Update Data
    useEffect(() => {
        if (!map.current) return;
        const source = map.current.getSource('places') as maplibregl.GeoJSONSource;
        if (source) {
            source.setData(geoJsonData as any);
        }
    }, [geoJsonData]);

    // Viewport Sync
    useEffect(() => {
        if (!map.current) return;
        const onMove = () => {
            if (!map.current) return;
            const c = map.current.getCenter();
            setViewport({ longitude: c.lng, latitude: c.lat }, map.current.getZoom());
        };
        map.current.on('moveend', onMove);
        return () => {
            map.current?.off('moveend', onMove);
        };
    }, [setViewport]);

    return (
        <div ref={mapContainer} className="w-full h-full bg-background relative">
            <FloatingActionButton />
        </div>
    );
};
