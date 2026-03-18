import { create } from 'zustand';
import type { CollectionItem, Coordinates } from '../types/domain';

export interface KeepsakeWithLocation extends CollectionItem {
    coordinates: Coordinates;
}

interface KeepsakeState {
    keepsakes: KeepsakeWithLocation[];
    showOnlyKeepsakes: boolean;
    addKeepsake: (keepsake: KeepsakeWithLocation) => void;
    removeKeepsake: (id: string) => void;
    setShowOnlyKeepsakes: (value: boolean) => void;
}

export const useKeepsakeStore = create<KeepsakeState>((set) => ({
    keepsakes: [],
    showOnlyKeepsakes: false,
    addKeepsake: (keepsake) => set((state) => ({
        keepsakes: [...state.keepsakes, keepsake],
    })),
    removeKeepsake: (id) => set((state) => ({
        keepsakes: state.keepsakes.filter(k => k.id !== id),
    })),
    setShowOnlyKeepsakes: (value) => set({ showOnlyKeepsakes: value }),
}));
