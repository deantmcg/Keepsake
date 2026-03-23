import matchesRaw from './data/matches.json';

export interface MatchTeam {
    id: string;
    name: string;
    code: string;
    score: number;
}

export interface MatchData {
    id: string;
    date: string;
    competition: string;
    stadium: string;
    stadiumCity: string;
    homeTeam: MatchTeam;
    awayTeam: MatchTeam;
}

export const MATCHES: MatchData[] = (matchesRaw as any[]).map(m => ({
    id: m.id,
    date: m.date,
    competition: m.competition,
    stadium: m.stadium,
    stadiumCity: m.stadiumCity,
    homeTeam: {
        id: m.homeTeam.id,
        name: m.homeTeam.name,
        code: m.homeTeam.code,
        score: m.homeTeam.score,
    },
    awayTeam: {
        id: m.awayTeam.id,
        name: m.awayTeam.name,
        code: m.awayTeam.code,
        score: m.awayTeam.score,
    },
})).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function searchMatches(query: string, clubId?: string): MatchData[] {
    const q = query.toLowerCase().trim();

    let filtered = MATCHES;

    if (clubId) {
        filtered = filtered.filter(
            m => m.homeTeam.id === clubId || m.awayTeam.id === clubId
        );
    }

    if (!q) return filtered.slice(0, 20);

    return filtered
        .filter(m => {
            const homeTeam = m.homeTeam.name.toLowerCase();
            const awayTeam = m.awayTeam.name.toLowerCase();
            const comp = m.competition.toLowerCase();
            const date = m.date;
            const stadium = m.stadium.toLowerCase();
            const label = `${homeTeam} ${awayTeam} ${comp} ${date} ${stadium}`;
            return label.includes(q);
        })
        .slice(0, 20);
}

export function formatMatch(m: MatchData): string {
    const date = new Date(m.date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
    return `${m.homeTeam.name} ${m.homeTeam.score} - ${m.awayTeam.score} ${m.awayTeam.name} (${date})`;
}
