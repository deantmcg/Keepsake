import type { Club, Stadium } from '../types/domain';
import clubsRaw from './data/clubs.json';
import stadiumsRaw from './data/stadiums.json';

const stadiums = stadiumsRaw as Stadium[];

export const CLUBS: Club[] = (clubsRaw as any[]).map(club => ({
    ...club,
    stadium: stadiums.find(s => s.id === club.stadiumId)
})) as Club[];
