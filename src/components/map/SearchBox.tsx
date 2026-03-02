import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { MOCK_CLUBS } from '../../services/mock/clubs.mock';
import { useMapStore } from '../../stores/mapStore';
import type { Club } from '../../types/domain';

// NOTE: This component uses inline styles because the project CSS is hand-crafted
// (no Tailwind JIT processing), so arbitrary utility classes are not generated.

const MAX_RESULTS = 8;
const NAVIGATE_ZOOM = 14;

function scoreClub(club: Club, query: string): number {
    const q = query.toLowerCase();
    const name = club.name.toLowerCase();
    const short = (club.shortName ?? '').toLowerCase();
    const city = club.city.toLowerCase();
    const country = club.country.toLowerCase();

    if (name === q || short === q) return 100;
    if (name.startsWith(q) || short.startsWith(q)) return 80;
    if (name.includes(q) || short.includes(q)) return 60;
    if (city.startsWith(q) || country.startsWith(q)) return 40;
    if (city.includes(q) || country.includes(q)) return 20;
    return 0;
}

function highlight(text: string, query: string): React.ReactNode {
    if (!query) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return (
        <>
            {text.slice(0, idx)}
            <mark style={{ background: 'rgba(52,211,153,0.25)', color: '#6ee7b7', borderRadius: '2px', padding: 0 }}>
                {text.slice(idx, idx + query.length)}
            </mark>
            {text.slice(idx + query.length)}
        </>
    );
}

export const SearchBox: React.FC = () => {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const flyTo = useMapStore(state => state.flyTo);

    const results = useMemo(() => {
        const trimmed = query.trim();
        if (!trimmed) return [];
        return MOCK_CLUBS
            .map(club => ({ club, score: scoreClub(club, trimmed) }))
            .filter(({ score }) => score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, MAX_RESULTS)
            .map(({ club }) => club);
    }, [query]);

    // Reset active index when results change
    useEffect(() => {
        setActiveIndex(-1);
    }, [results]);

    // Close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const selectClub = useCallback((club: Club) => {
        flyTo(club.coordinates, NAVIGATE_ZOOM);
        setQuery('');
        setOpen(false);
        inputRef.current?.blur();
    }, [flyTo]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!open || results.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex(i => Math.min(i + 1, results.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex(i => Math.max(i - 1, 0));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeIndex >= 0 && results[activeIndex]) {
                selectClub(results[activeIndex]);
            } else if (results.length > 0) {
                selectClub(results[0]);
            }
        } else if (e.key === 'Escape') {
            setOpen(false);
            inputRef.current?.blur();
        }
    }, [open, results, activeIndex, selectClub]);

    // Scroll active item into view
    useEffect(() => {
        if (activeIndex >= 0 && listRef.current) {
            const item = listRef.current.children[activeIndex] as HTMLElement;
            item?.scrollIntoView({ block: 'nearest' });
        }
    }, [activeIndex]);

    const showDropdown = open && results.length > 0;

    return (
        <div
            ref={containerRef}
            style={{
                position: 'absolute',
                top: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 30,
                width: '360px',
                maxWidth: 'calc(100vw - 2rem)',
            }}
        >
            {/* Input row */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 12px',
                    background: 'rgba(0,0,0,0.65)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderBottom: showDropdown ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(255,255,255,0.12)',
                    borderRadius: showDropdown ? '12px 12px 0 0' : '12px',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.55)',
                    transition: 'border-radius 100ms',
                }}
            >
                <Search style={{ width: '15px', height: '15px', color: 'rgba(255,255,255,0.35)', flexShrink: 0 }} />
                <input
                    ref={inputRef}
                    value={query}
                    onChange={e => { setQuery(e.target.value); setOpen(true); }}
                    onFocus={() => query && setOpen(true)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search clubs, cities, countries…"
                    className="search-input"
                    style={{
                        flex: 1,
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.9)',
                        fontFamily: 'inherit',
                        minWidth: 0,
                    }}
                    aria-label="Search"
                    aria-autocomplete="list"
                    aria-expanded={showDropdown}
                    autoComplete="off"
                    spellCheck={false}
                />
                {query && (
                    <button
                        onClick={() => { setQuery(''); setOpen(false); inputRef.current?.focus(); }}
                        tabIndex={-1}
                        aria-label="Clear"
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '2px',
                            color: 'rgba(255,255,255,0.35)',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <X style={{ width: '13px', height: '13px' }} />
                    </button>
                )}
            </div>

            {/* Dropdown */}
            {showDropdown && (
                <ul
                    ref={listRef}
                    role="listbox"
                    style={{
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        background: 'rgba(0,0,0,0.72)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderTop: 'none',
                        borderRadius: '0 0 12px 12px',
                        maxHeight: '300px',
                        overflowY: 'auto',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
                    }}
                >
                    {results.map((club, i) => (
                        <li
                            key={club.id}
                            role="option"
                            aria-selected={i === activeIndex}
                            onMouseEnter={() => setActiveIndex(i)}
                            onMouseDown={e => { e.preventDefault(); selectClub(club); }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '10px 14px',
                                cursor: 'pointer',
                                background: i === activeIndex ? 'rgba(255,255,255,0.09)' : 'transparent',
                                borderBottom: i < results.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                                transition: 'background 80ms',
                            }}
                        >
                            {/* Club colour dot */}
                            <span
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    flexShrink: 0,
                                    background: club.colors[0] || '#888',
                                    boxShadow: '0 0 0 1px rgba(255,255,255,0.12)',
                                }}
                            />
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {highlight(club.name, query.trim())}
                                </p>
                                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: '2px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {highlight(`${club.city}, ${club.country}`, query.trim())}
                                    {club.stadium && (
                                        <span style={{ color: 'rgba(255,255,255,0.22)' }}> · {club.stadium.name}</span>
                                    )}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
