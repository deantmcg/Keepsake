import { create } from 'zustand';
import type { Coordinates } from '../types/domain';

interface MapState {
    center: Coordinates;
    zoom: number;
    selectedMarkerId: string | null;
    selectedMarkerType: 'CLUB' | 'STADIUM' | 'MATCH' | null;

    // Actions
    setCenter: (center: Coordinates) => void;
    setZoom: (zoom: number) => void;
    setViewport: (center: Coordinates, zoom: number) => void;
    selectMarker: (id: string, type: 'CLUB' | 'STADIUM' | 'MATCH') => void;
    clearSelection: () => void;
}

const DEFAULT_CENTER: Coordinates = { latitude: 20, longitude: 0 }; // World view
const DEFAULT_ZOOM = 2;

export const useMapStore = create<MapState>((set) => ({
    center: DEFAULT_CENTER,
    zoom: DEFAULT_ZOOM,
    selectedMarkerId: null,
    selectedMarkerType: null,

    setCenter: (center) => set({ center }),
    setZoom: (zoom) => set({ zoom }),
    setViewport: (center, zoom) => set({ center, zoom }),
    selectMarker: (id, type) => set({ selectedMarkerId: id, selectedMarkerType: type }),
    clearSelection: () => set({ selectedMarkerId: null, selectedMarkerType: null }),
}));
