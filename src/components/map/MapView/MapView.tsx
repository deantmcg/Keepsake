import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useMapStore } from '../../../stores/mapStore';
import { MOCK_CLUBS } from '../../../services/mock/clubs.mock';
import { MapProvider } from '../MapContext';
import { MapMarker } from '../MapMarker';

// Internal component for the Pin Design
const ClubPin: React.FC<{ color: string; isCollected: boolean }> = ({ color, isCollected }) => (
    <div className="group relative cursor-pointer hover:z-50">
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={isCollected ? '#22c55e' : color}
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
                width: '24px',
                height: '24px',
                filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.5))',
                transformOrigin: 'bottom center',
                transition: 'transform 0.2s ease-out'
            }}
            className="group-hover:-translate-y-1 group-hover:scale-110"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" fill="white" stroke="none" />
        </svg>
        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
            <div className="bg-background border border-border text-foreground text-[10px] font-medium px-2 py-1 rounded shadow-sm whitespace-nowrap flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                <span>{color}</span>
                {isCollected && <span className="text-green-500 font-bold">•</span>}
            </div>
        </div>
    </div>
);

export const MapView: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const [mapInstance, setMapInstance] = useState<maplibregl.Map | null>(null);
    const { center, zoom, setViewport, selectMarker } = useMapStore();

    // Initialize Map
    useEffect(() => {
        if (!mapContainer.current) return;
        if (mapInstance) return; // Already initialized

        const map = new maplibregl.Map({
            container: mapContainer.current,
            style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
            center: [center.longitude, center.latitude],
            zoom: zoom,
            attributionControl: false,
        });

        // Add controls
        map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right');

        map.on('load', () => {
            setMapInstance(map);
        });

        map.on('moveend', () => {
            const c = map.getCenter();
            setViewport({ longitude: c.lng, latitude: c.lat }, map.getZoom());
        });

        return () => {
            map.remove();
        };
    }, []);

    // Note: MOCK_CLUBS is just a list. In real app, we filter/map this.
    return (
        <div ref={mapContainer} className="w-full h-full bg-background relative">
            <MapProvider map={mapInstance}>
                {MOCK_CLUBS.map(club => {
                    const isCollected = parseInt(club.id) % 3 === 0;
                    return (
                        <MapMarker
                            key={club.id}
                            latitude={club.coordinates.latitude}
                            longitude={club.coordinates.longitude}
                            onClick={() => {
                                selectMarker(club.id, 'CLUB');
                                mapInstance?.flyTo({
                                    center: [club.coordinates.longitude, club.coordinates.latitude],
                                    zoom: 12
                                });
                            }}
                        >
                            <ClubPin color={club.colors[0]} isCollected={isCollected} />
                        </MapMarker>
                    );
                })}
            </MapProvider>
        </div>
    );
};
