import type { Match } from '../../types/domain';
import { MOCK_CLUBS } from './clubs.mock';

export const MOCK_MATCHES: Match[] = [
    {
        id: 'm1',
        stadiumId: 's1',
        homeClubId: '1', // Arsenal
        awayClubId: '2', // Man Utd
        date: '2023-09-03',
        competition: 'Premier League',
        score: {
            home: 3,
            away: 1
        },
        attendance: 60000
    },
    {
        id: 'm2',
        stadiumId: 's2',
        homeClubId: '3', // Liverpool
        awayClubId: '1', // Arsenal
        date: '2023-12-23',
        competition: 'Premier League',
        score: {
            home: 1,
            away: 1
        },
        attendance: 53000
    },
    {
        id: 'm3',
        stadiumId: 's3',
        homeClubId: '4', // Real Madrid
        awayClubId: '5', // Barcelona
        date: '2024-03-10',
        competition: 'La Liga',
        score: {
            home: 2,
            away: 1
        },
        attendance: 80000
    },
    {
        id: 'm4',
        stadiumId: 's4',
        homeClubId: '6', // Bayern Munich
        awayClubId: '7', // Borussia Dortmund
        date: '2024-01-27',
        competition: 'Bundesliga',
        score: {
            home: 3,
            away: 2
        },
        attendance: 75000
    },
    {
        id: 'm5',
        stadiumId: 's5',
        homeClubId: '9', // Juventus
        awayClubId: '10', // AC Milan
        date: '2024-02-14',
        competition: 'Serie A',
        score: {
            home: 2,
            away: 2
        },
        attendance: 40000
    }
];

// Helper function to get club name by ID
export const getClubById = (id: string) => {
    return MOCK_CLUBS.find(club => club.id === id);
};

// Helper function to format match for dropdown
export const formatMatchForDropdown = (match: Match) => {
    const homeClub = getClubById(match.homeClubId);
    const awayClub = getClubById(match.awayClubId);
    const date = new Date(match.date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    
    const homeShortName = homeClub?.shortName || homeClub?.name || 'Unknown';
    const awayShortName = awayClub?.shortName || awayClub?.name || 'Unknown';
    
    if (match.score) {
        return `${homeShortName} ${match.score.home} - ${match.score.away} ${awayShortName} (${date})`;
    }
    
    return `${homeShortName} vs ${awayShortName} (${date})`;
};
