export interface Club {
    id: string;
    name: string;
    normalizedName: string;
    shortName?: string;
    country: string;
    city: string;
    stadium?: Stadium;
    coordinates: Coordinates;
    founded?: number;
    colors: string[];
    logoUrl?: string; // Placeholder for now
}

export interface Stadium {
    id: string;
    name: string;
    city: string;
    country: string;
    coordinates: Coordinates;
    capacity?: number;
    opened?: number;
    imageUrl?: string;
    clubs: string[]; // Club IDs that use this stadium
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export const ItemType = {
    BADGE: 'BADGE',
    SCARF: 'SCARF',
    SHIRT: 'SHIRT',
    OTHER: 'OTHER'
} as const;

export type ItemType = (typeof ItemType)[keyof typeof ItemType];

export interface CollectionItem {
    id: string;
    type: ItemType;
    clubId: string;
    season?: string; // e.g., "2023/24"
    dateAcquired: string; // ISO date
    notes?: string;
    imageUrl?: string;
    // For shirts specifically
    shirtDetails?: {
        kitType: 'HOME' | 'AWAY' | 'THIRD' | 'GOALKEEPER' | 'SPECIAL';
        size?: string;
        playerName?: string;
        playerNumber?: number;
    };
}

export const VisitReason = {
    MATCHDAY: 'MATCHDAY',
    STADIUM_TOUR: 'STADIUM_TOUR',
    EVENT: 'EVENT',
    OTHER: 'OTHER'
} as const;

export type VisitReason = (typeof VisitReason)[keyof typeof VisitReason];

export interface StadiumVisit {
    id: string;
    stadiumId: string;
    date: string; // ISO date
    reason: VisitReason;
    matchId?: string; // Optional link to match
    notes?: string;
    photos?: string[];
}

export interface Match {
    id: string;
    stadiumId: string;
    homeClubId: string;
    awayClubId: string;
    date: string; // ISO date
    competition?: string;
    score?: {
        home: number;
        away: number;
    };
    attendance?: number;
    notes?: string;
}
