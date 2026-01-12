import { create } from 'zustand';
import type { CollectionItem, Coordinates } from '../types/domain';

export interface KeepsakeWithLocation extends CollectionItem {
    coordinates: Coordinates;
}

interface KeepsakeState {
    keepsakes: KeepsakeWithLocation[];
    
    // Actions
    addKeepsake: (keepsake: KeepsakeWithLocation) => void;
    removeKeepsake: (id: string) => void;
}

export const useKeepsakeStore = create<KeepsakeState>((set) => ({
    keepsakes: [],
    
    addKeepsake: (keepsake) => set((state) => ({
        keepsakes: [...state.keepsakes, keepsake]
    })),
    
    removeKeepsake: (id) => set((state) => ({
        keepsakes: state.keepsakes.filter(k => k.id !== id)
    })),
}));
