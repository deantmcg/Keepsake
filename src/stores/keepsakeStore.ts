import { create } from 'zustand';
import type { CollectionItem, Coordinates } from '../types/domain';

export interface KeepsakeWithLocation extends CollectionItem {
    coordinates: Coordinates;
}

interface KeepsakeState {
    keepsakes: KeepsakeWithLocation[];
}

export const useKeepsakeStore = create<KeepsakeState>(() => ({
    keepsakes: [],
}));
