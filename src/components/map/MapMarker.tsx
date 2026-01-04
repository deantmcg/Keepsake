import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import { createRoot } from 'react-dom/client';
import { useMap } from './MapContext';

interface MapMarkerProps {
    latitude: number;
    longitude: number;
    children?: React.ReactNode;
    onClick?: () => void;
    anchor?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const MapMarker: React.FC<MapMarkerProps> = ({
    latitude,
    longitude,
    children,
    onClick,
    anchor = 'bottom'
}) => {
    const { map } = useMap();
    const markerRef = useRef<maplibregl.Marker | null>(null);
    const elementRef = useRef<HTMLDivElement>(document.createElement('div'));
    const rootRef = useRef<ReturnType<typeof createRoot> | null>(null);

    // Initialize Marker
    useEffect(() => {
        if (!map) return;

        // Create container
        const el = elementRef.current;

        // Add click listener
        const handleClick = () => onClick?.();
        el.addEventListener('click', handleClick);

        // Create Root
        rootRef.current = createRoot(el);

        // Create MapLibre Marker
        markerRef.current = new maplibregl.Marker({
            element: el,
            anchor: anchor
        })
            .setLngLat([longitude, latitude])
            .addTo(map);

        return () => {
            markerRef.current?.remove();
            el.removeEventListener('click', handleClick);
            // Ideally unmount root, but React 18 handles this mostly gracefully in this hybrid setup
            // rootRef.current?.unmount(); // Note: setTimeout might be needed in some rigorous cases
        };
    }, [map]); // Re-create if map changes (init)

    // Update Position
    useEffect(() => {
        markerRef.current?.setLngLat([longitude, latitude]);
    }, [longitude, latitude]);

    // Render React Children into the marker element
    useEffect(() => {
        if (rootRef.current) {
            rootRef.current.render(children);
        }
    }, [children]);

    return null; // Renders into the map via portal/root
};
