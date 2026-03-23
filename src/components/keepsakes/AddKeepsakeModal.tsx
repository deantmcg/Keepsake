import React, { useState, useMemo, useRef, useEffect } from 'react';
import { X, Shirt, Wind, Award, Trophy, Search } from 'lucide-react';
import type { Club } from '../../types/domain';
import { ItemType } from '../../types/domain';
import { useKeepsakeStore } from '../../stores/keepsakeStore';
import { searchMatches } from '../../services/matches';
import type { MatchData } from '../../services/matches';

interface AddKeepsakeModalProps {
    club: Club;
    onClose: () => void;
}

const KIT_TYPES = [
    { value: 'HOME', label: 'Home' },
    { value: 'AWAY', label: 'Away' },
    { value: 'THIRD', label: 'Third' },
    { value: 'GOALKEEPER', label: 'Goalkeeper' },
    { value: 'SPECIAL', label: 'Other' },
] as const;

const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 600,
    color: 'rgba(148,163,184,0.7)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '6px',
};

const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: '#fafafa',
    /* 16px minimum prevents iOS Safari from zooming in when the input is focused */
    fontSize: '16px',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box',
};

export const AddKeepsakeModal: React.FC<AddKeepsakeModalProps> = ({ club, onClose }) => {
    const addKeepsake = useKeepsakeStore(state => state.addKeepsake);

    const [itemType, setItemType] = useState<'SHIRT' | 'SCARF' | 'BADGE' | 'MATCH'>('SHIRT');
    const [season, setSeason] = useState('');
    const [kitType, setKitType] = useState<'HOME' | 'AWAY' | 'THIRD' | 'GOALKEEPER' | 'SPECIAL'>('HOME');
    const [notes, setNotes] = useState('');
    const [matchQuery, setMatchQuery] = useState('');
    const [selectedMatch, setSelectedMatch] = useState<MatchData | null>(null);
    const [showMatchResults, setShowMatchResults] = useState(false);
    const matchSearchRef = useRef<HTMLDivElement>(null);

    const matchResults = useMemo(() => {
        if (itemType !== 'MATCH') return [];
        return searchMatches(matchQuery, club.id);
    }, [matchQuery, itemType, club.id]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (matchSearchRef.current && !matchSearchRef.current.contains(e.target as Node)) {
                setShowMatchResults(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (itemType === 'MATCH' && !selectedMatch) return;

        const keepsake = {
            id: crypto.randomUUID(),
            type: itemType as typeof ItemType[keyof typeof ItemType],
            clubId: club.id,
            matchId: itemType === 'MATCH' && selectedMatch ? selectedMatch.id : undefined,
            season: itemType === 'SHIRT' ? (season || undefined) : undefined,
            dateAcquired: itemType === 'MATCH' && selectedMatch ? selectedMatch.date : new Date().toISOString().split('T')[0],
            notes: notes || undefined,
            coordinates: club.coordinates,
            ...(itemType === 'SHIRT' ? { shirtDetails: { kitType } } : {}),
        };

        addKeepsake(keepsake);
        onClose();
    };

    const glassStyle: React.CSSProperties = {
        background: 'linear-gradient(to bottom, rgba(30,41,59,0.98), rgba(15,23,42,0.98))',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05) inset',
        color: '#fafafa',
        width: '100%',
        maxWidth: '420px',
        margin: '0 1rem',
    };

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 100,
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                overflowY: 'auto',
                paddingTop: '2rem',
                paddingBottom: '2rem',
            }}
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div style={glassStyle}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 20px 16px' }}>
                    <div>
                        <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                            Add Keepsake
                        </h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{
                                width: '10px', height: '10px', borderRadius: '50%', flexShrink: 0,
                                background: `linear-gradient(135deg, ${club.colors[0] || '#888'}, ${club.colors[1] || club.colors[0] || '#888'})`,
                                boxShadow: '0 0 0 1px rgba(255,255,255,0.15)',
                            }} />
                            <span style={{ fontSize: '13px', color: 'rgba(148,163,184,0.9)' }}>
                                {club.name}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'rgba(255,255,255,0.08)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '8px',
                            color: 'rgba(255,255,255,0.6)',
                            cursor: 'pointer',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}
                        aria-label="Close"
                    >
                        <X style={{ width: '14px', height: '14px' }} />
                    </button>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', margin: '0 20px' }} />

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ padding: '16px 20px 20px' }}>
                    {/* Item Type */}
                    <div style={{ marginBottom: '16px' }}>
                        <label style={labelStyle}>Type</label>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                            {([
                                { type: 'SHIRT', label: 'Shirt', Icon: Shirt },
                                { type: 'SCARF', label: 'Scarf', Icon: Wind },
                                { type: 'BADGE', label: 'Badge', Icon: Award },
                                { type: 'MATCH', label: 'Match', Icon: Trophy },
                            ] as const).map(({ type, label, Icon }) => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => setItemType(type)}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '6px',
                                        padding: '12px 8px',
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        border: itemType === type
                                            ? '1px solid rgba(34,197,94,0.5)'
                                            : '1px solid rgba(255,255,255,0.08)',
                                        background: itemType === type
                                            ? 'rgba(34,197,94,0.12)'
                                            : 'rgba(255,255,255,0.04)',
                                        color: itemType === type ? '#22c55e' : 'rgba(255,255,255,0.5)',
                                        transition: 'all 150ms',
                                        fontFamily: 'inherit',
                                    }}
                                >
                                    <Icon style={{ width: '18px', height: '18px' }} />
                                    <span style={{ fontSize: '11px', fontWeight: 600 }}>{label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Shirt-specific fields */}
                    {itemType === 'SHIRT' && (
                        <>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={labelStyle}>Season</label>
                                <input
                                    type="text"
                                    value={season}
                                    onChange={e => setSeason(e.target.value)}
                                    placeholder="e.g. 2023/24"
                                    style={inputStyle}
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck={false}
                                />
                            </div>
                            <div style={{ marginBottom: '16px' }}>
                                <label style={labelStyle}>Kit Type</label>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                                    {KIT_TYPES.map(({ value, label }) => (
                                        <button
                                            key={value}
                                            type="button"
                                            onClick={() => setKitType(value)}
                                            style={{
                                                padding: '8px 4px',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                border: kitType === value
                                                    ? '1px solid rgba(34,197,94,0.5)'
                                                    : '1px solid rgba(255,255,255,0.08)',
                                                background: kitType === value
                                                    ? 'rgba(34,197,94,0.12)'
                                                    : 'rgba(255,255,255,0.04)',
                                                color: kitType === value ? '#22c55e' : 'rgba(255,255,255,0.5)',
                                                fontSize: '12px',
                                                fontWeight: 600,
                                                fontFamily: 'inherit',
                                                transition: 'all 150ms',
                                            }}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {/* Match search */}
                    {itemType === 'MATCH' && (
                        <div style={{ marginBottom: '16px' }} ref={matchSearchRef}>
                            <label style={labelStyle}>Search Match</label>
                            {selectedMatch ? (
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '10px 12px',
                                    background: 'rgba(34,197,94,0.08)',
                                    border: '1px solid rgba(34,197,94,0.3)',
                                    borderRadius: '8px',
                                }}>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#fafafa' }}>
                                            {selectedMatch.homeTeam.name} {selectedMatch.homeTeam.score} - {selectedMatch.awayTeam.score} {selectedMatch.awayTeam.name}
                                        </div>
                                        <div style={{ fontSize: '11px', color: 'rgba(148,163,184,0.7)', marginTop: '2px' }}>
                                            {selectedMatch.competition} · {new Date(selectedMatch.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => { setSelectedMatch(null); setMatchQuery(''); }}
                                        style={{
                                            background: 'rgba(255,255,255,0.08)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '6px',
                                            color: 'rgba(255,255,255,0.5)',
                                            cursor: 'pointer',
                                            width: '24px',
                                            height: '24px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            marginLeft: '8px',
                                        }}
                                        aria-label="Clear selection"
                                    >
                                        <X style={{ width: '12px', height: '12px' }} />
                                    </button>
                                </div>
                            ) : (
                                <div style={{ position: 'relative' }}>
                                    <div style={{ position: 'relative' }}>
                                        <Search style={{
                                            position: 'absolute',
                                            left: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            width: '14px',
                                            height: '14px',
                                            color: 'rgba(148,163,184,0.5)',
                                            pointerEvents: 'none',
                                        }} />
                                        <input
                                            type="text"
                                            value={matchQuery}
                                            onChange={e => { setMatchQuery(e.target.value); setShowMatchResults(true); }}
                                            onFocus={() => setShowMatchResults(true)}
                                            placeholder="Search by team, competition, date..."
                                            style={{ ...inputStyle, paddingLeft: '32px' }}
                                            autoComplete="off"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            spellCheck={false}
                                        />
                                    </div>
                                    {showMatchResults && matchResults.length > 0 && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            right: 0,
                                            marginTop: '4px',
                                            background: 'rgba(15,23,42,0.98)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '8px',
                                            maxHeight: '200px',
                                            overflowY: 'auto',
                                            zIndex: 10,
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                                        }}>
                                            {matchResults.map(match => (
                                                <button
                                                    key={match.id}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedMatch(match);
                                                        setMatchQuery('');
                                                        setShowMatchResults(false);
                                                    }}
                                                    style={{
                                                        display: 'block',
                                                        width: '100%',
                                                        padding: '10px 12px',
                                                        border: 'none',
                                                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                                                        background: 'transparent',
                                                        color: '#fafafa',
                                                        cursor: 'pointer',
                                                        textAlign: 'left',
                                                        fontFamily: 'inherit',
                                                        transition: 'background 100ms',
                                                    }}
                                                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                                                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                                                >
                                                    <div style={{ fontSize: '13px', fontWeight: 600 }}>
                                                        {match.homeTeam.name} {match.homeTeam.score} - {match.awayTeam.score} {match.awayTeam.name}
                                                    </div>
                                                    <div style={{ fontSize: '11px', color: 'rgba(148,163,184,0.6)', marginTop: '2px' }}>
                                                        {match.competition} · {new Date(match.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} · {match.stadium}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    {showMatchResults && matchQuery && matchResults.length === 0 && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            right: 0,
                                            marginTop: '4px',
                                            padding: '12px',
                                            background: 'rgba(15,23,42,0.98)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '8px',
                                            color: 'rgba(148,163,184,0.6)',
                                            fontSize: '12px',
                                            textAlign: 'center',
                                        }}>
                                            No matches found
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Notes */}
                    <div style={{ marginBottom: '20px' }}>
                        <label style={labelStyle}>
                            Notes{' '}
                            <span style={{ color: 'rgba(148,163,184,0.4)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
                                (optional)
                            </span>
                        </label>
                        <textarea
                            value={notes}
                            onChange={e => setNotes(e.target.value)}
                            placeholder="Where did you get it? Any story?"
                            rows={2}
                            style={{ ...inputStyle, resize: 'none' }}
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck={false}
                        />
                    </div>

                    {/* Actions */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                            type="button"
                            onClick={onClose}
                            style={{
                                flex: 1,
                                padding: '11px',
                                borderRadius: '10px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: 'transparent',
                                color: 'rgba(255,255,255,0.6)',
                                fontSize: '13px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={itemType === 'MATCH' && !selectedMatch}
                            style={{
                                flex: 2,
                                padding: '11px',
                                borderRadius: '10px',
                                border: '1px solid rgba(34,197,94,0.4)',
                                background: itemType === 'MATCH' && !selectedMatch
                                    ? 'rgba(34,197,94,0.05)'
                                    : 'rgba(34,197,94,0.15)',
                                color: itemType === 'MATCH' && !selectedMatch
                                    ? 'rgba(34,197,94,0.4)'
                                    : '#22c55e',
                                fontSize: '13px',
                                fontWeight: 600,
                                cursor: itemType === 'MATCH' && !selectedMatch ? 'not-allowed' : 'pointer',
                                fontFamily: 'inherit',
                            }}
                        >
                            Add to Collection
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
