import React, { useMemo } from 'react';
import { ArrowLeft, Shirt, Wind, Award, Trophy, Trash2, PackageOpen } from 'lucide-react';
import { useKeepsakeStore, type KeepsakeWithLocation } from '../../stores/keepsakeStore';
import { CLUBS } from '../../services/clubs';
import { MATCHES } from '../../services/matches';
import type { MatchData } from '../../services/matches';
import type { Club } from '../../types/domain';
import { ItemType } from '../../types/domain';

interface KeepsakeListPageProps {
    onBack: () => void;
}

function getItemIcon(type: string) {
    const s: React.CSSProperties = { width: '16px', height: '16px' };
    switch (type) {
        case ItemType.SHIRT: return <Shirt style={s} />;
        case ItemType.SCARF: return <Wind style={s} />;
        case ItemType.BADGE: return <Award style={s} />;
        default: return <Trophy style={s} />;
    }
}

function getMatchById(matchId: string): MatchData | undefined {
    return MATCHES.find(m => m.id === matchId);
}

function getItemLabel(k: KeepsakeWithLocation) {
    if (k.type === ItemType.SHIRT && k.shirtDetails) {
        const kitMap: Record<string, string> = {
            HOME: 'Home', AWAY: 'Away', THIRD: 'Third',
            GOALKEEPER: 'Goalkeeper', SPECIAL: 'Other',
        };
        const kit = kitMap[k.shirtDetails.kitType] ?? k.shirtDetails.kitType;
        return `${kit} Shirt${k.season ? ` · ${k.season}` : ''}`;
    }
    if (k.type === ItemType.MATCH && k.matchId) {
        const match = getMatchById(k.matchId);
        if (match) {
            return `${match.homeTeam.name} ${match.homeTeam.score} - ${match.awayTeam.score} ${match.awayTeam.name}`;
        }
    }
    const typeMap: Record<string, string> = {
        SHIRT: 'Shirt', SCARF: 'Scarf', BADGE: 'Badge', MATCH: 'Match', OTHER: 'Other',
    };
    return typeMap[k.type] ?? k.type;
}

export const KeepsakeListPage: React.FC<KeepsakeListPageProps> = ({ onBack }) => {
    const { keepsakes, removeKeepsake } = useKeepsakeStore();

    const clubsMap = useMemo(() => {
        return new Map<string, Club>(CLUBS.map(c => [c.id, c]));
    }, []);

    const groupedKeepsakes = useMemo(() => {
        const groups: Record<string, { club: Club; items: KeepsakeWithLocation[] }> = {};

        keepsakes.forEach(k => {
            const club = clubsMap.get(k.clubId);
            if (!club) return;
            if (!groups[k.clubId]) {
                groups[k.clubId] = { club, items: [] };
            }
            groups[k.clubId].items.push(k);
        });

        return Object.values(groups).sort((a, b) =>
            a.club.name.localeCompare(b.club.name)
        );
    }, [keepsakes, clubsMap]);

    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--background)',
            color: 'var(--foreground)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
        }}>
            {/* Header */}
            <div style={{
                flexShrink: 0,
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
            }}>
                <button
                    onClick={onBack}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: 'rgba(255,255,255,0.7)',
                        cursor: 'pointer',
                        padding: '7px 12px',
                        fontSize: '13px',
                        fontWeight: 500,
                        fontFamily: 'inherit',
                        flexShrink: 0,
                    }}
                >
                    <ArrowLeft style={{ width: '14px', height: '14px' }} />
                    Map
                </button>

                <div>
                    <h1 style={{ fontSize: '17px', fontWeight: 700, color: '#fff' }}>
                        My Collection
                    </h1>
                    <p style={{ fontSize: '12px', color: 'rgba(148,163,184,0.7)', marginTop: '2px' }}>
                        {keepsakes.length} {keepsakes.length === 1 ? 'item' : 'items'}
                        {groupedKeepsakes.length > 0 && (
                            <> across {groupedKeepsakes.length} {groupedKeepsakes.length === 1 ? 'club' : 'clubs'}</>
                        )}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '24px 20px' }}>
                {keepsakes.length === 0 ? (
                    <div style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        justifyContent: 'center', height: '100%', gap: '12px',
                        color: 'rgba(148,163,184,0.5)',
                        paddingBottom: '60px',
                    }}>
                        <PackageOpen style={{ width: '52px', height: '52px', opacity: 0.35 }} />
                        <p style={{ fontSize: '16px', fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
                            No keepsakes yet
                        </p>
                        <p style={{ fontSize: '13px', textAlign: 'center', maxWidth: '280px', lineHeight: '1.5' }}>
                            Click on any club marker on the map to add shirts, scarves, or badges to your collection
                        </p>
                        <button
                            onClick={onBack}
                            style={{
                                marginTop: '8px',
                                padding: '10px 22px',
                                borderRadius: '10px',
                                border: '1px solid rgba(34,197,94,0.4)',
                                background: 'rgba(34,197,94,0.1)',
                                color: '#22c55e',
                                fontSize: '13px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                            }}
                        >
                            Go to Map
                        </button>
                    </div>
                ) : (
                    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                        {groupedKeepsakes.map(group => (
                            <div key={group.club.id} style={{ marginBottom: '28px' }}>
                                {/* Club header */}
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    marginBottom: '12px',
                                }}>
                                    <div style={{
                                        width: '28px', height: '28px', borderRadius: '8px', flexShrink: 0,
                                        background: `linear-gradient(135deg, ${group.club.colors[0] || '#888'}, ${group.club.colors[1] || group.club.colors[0] || '#888'})`,
                                        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                                    }} />
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <span style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>
                                            {group.club.name}
                                        </span>
                                        <span style={{ fontSize: '12px', color: 'rgba(148,163,184,0.55)', marginLeft: '8px' }}>
                                            {group.club.city}, {group.club.country}
                                        </span>
                                    </div>
                                    <span style={{
                                        fontSize: '11px', color: 'rgba(148,163,184,0.5)',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: '20px',
                                        padding: '2px 10px',
                                        flexShrink: 0,
                                    }}>
                                        {group.items.length} {group.items.length === 1 ? 'item' : 'items'}
                                    </span>
                                </div>

                                {/* Keepsake cards grid */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
                                    gap: '8px',
                                }}>
                                    {group.items.map(item => (
                                        <div
                                            key={item.id}
                                            style={{
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                borderRadius: '12px',
                                                padding: '12px 14px',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '10px',
                                            }}
                                        >
                                            {/* Type icon */}
                                            <div style={{
                                                width: '34px', height: '34px', borderRadius: '8px',
                                                background: 'rgba(34,197,94,0.1)',
                                                border: '1px solid rgba(34,197,94,0.2)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: '#22c55e', flexShrink: 0,
                                            }}>
                                                {getItemIcon(item.type)}
                                            </div>

                                            {/* Details */}
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <p style={{
                                                    fontSize: '13px', fontWeight: 600, color: '#fff',
                                                    marginBottom: '2px', overflow: 'hidden',
                                                    textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                                                }}>
                                                    {getItemLabel(item)}
                                                </p>
                                                {item.type === ItemType.MATCH && item.matchId && (() => {
                                                    const match = getMatchById(item.matchId);
                                                    if (!match) return null;
                                                    return (
                                                        <p style={{
                                                            fontSize: '11px', color: 'rgba(148,163,184,0.6)',
                                                            marginBottom: '2px',
                                                            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                                                        }}>
                                                            {match.competition} · {match.stadium}
                                                        </p>
                                                    );
                                                })()}
                                                {item.notes && (
                                                    <p style={{
                                                        fontSize: '11px', color: 'rgba(148,163,184,0.6)',
                                                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                                                        marginBottom: '2px',
                                                    }}>
                                                        {item.notes}
                                                    </p>
                                                )}
                                                <p style={{ fontSize: '10px', color: 'rgba(148,163,184,0.4)' }}>
                                                    {new Date(item.dateAcquired).toLocaleDateString()}
                                                </p>
                                            </div>

                                            {/* Delete button */}
                                            <button
                                                onClick={() => removeKeepsake(item.id)}
                                                title="Remove keepsake"
                                                style={{
                                                    background: 'none', border: 'none', cursor: 'pointer',
                                                    color: 'rgba(255,255,255,0.2)', padding: '2px',
                                                    display: 'flex', alignItems: 'center',
                                                    flexShrink: 0, transition: 'color 150ms',
                                                }}
                                                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(239,68,68,0.7)')}
                                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}
                                            >
                                                <Trash2 style={{ width: '13px', height: '13px' }} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
