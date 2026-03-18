import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { StadiumIcon } from './StadiumIcon';
import { MOCK_CLUBS } from '../../services/mock/clubs.mock';
import { useMapStore } from '../../stores/mapStore';
import type { Club, Stadium } from '../../types/domain';

// NOTE: This component uses inline styles because the project CSS is hand-crafted
// (no Tailwind JIT processing), so arbitrary utility classes are not generated.

const MAX_RESULTS = 8;
const NAVIGATE_ZOOM = 14;

type SearchResult =
    | { kind: 'club'; club: Club }
    | { kind: 'stadium'; stadium: Stadium; tenants: Club[] };

interface SearchBoxProps {
    /** When true the component renders as a compact icon-button that expands on tap (mobile mode). */
    isMobile?: boolean;
}

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

function scoreStadium(stadium: Stadium, query: string): number {
    const q = query.toLowerCase();
    const name = stadium.name.toLowerCase();
    const city = stadium.city.toLowerCase();
    const country = stadium.country.toLowerCase();

    if (name === q) return 95;
    if (name.startsWith(q)) return 75;
    if (name.includes(q)) return 55;
    if (city.startsWith(q) || country.startsWith(q)) return 35;
    if (city.includes(q) || country.includes(q)) return 15;
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

export const SearchBox: React.FC<SearchBoxProps> = ({ isMobile = false }) => {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    /** Mobile only: whether the full search bar is expanded */
    const [mobileExpanded, setMobileExpanded] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const flyTo = useMapStore(state => state.flyTo);

    const results = useMemo((): SearchResult[] => {
        const trimmed = query.trim();
        if (!trimmed) return [];

        // Score clubs
        const clubResults = MOCK_CLUBS
            .map(club => ({ kind: 'club' as const, club, score: scoreClub(club, trimmed) }))
            .filter(r => r.score > 0);

        // Score unique stadiums (deduplicate by stadium.id)
        const seenStadiumIds = new Set<string>();
        const stadiumResults: { kind: 'stadium'; stadium: Stadium; tenants: Club[]; score: number }[] = [];
        for (const club of MOCK_CLUBS) {
            if (!club.stadium) continue;
            const s = club.stadium;
            if (seenStadiumIds.has(s.id)) continue;
            seenStadiumIds.add(s.id);
            const score = scoreStadium(s, trimmed);
            if (score > 0) {
                const tenants = MOCK_CLUBS.filter(c => c.stadium?.id === s.id);
                stadiumResults.push({ kind: 'stadium', stadium: s, tenants, score });
            }
        }

        return [...clubResults, ...stadiumResults]
            .sort((a, b) => b.score - a.score)
            .slice(0, MAX_RESULTS)
            .map(({ kind, score: _score, ...rest }) =>
                kind === 'club'
                    ? { kind, club: (rest as { club: Club }).club }
                    : { kind, stadium: (rest as { stadium: Stadium; tenants: Club[] }).stadium, tenants: (rest as { stadium: Stadium; tenants: Club[] }).tenants }
            );
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
                if (isMobile) {
                    setMobileExpanded(false);
                    setQuery('');
                }
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [isMobile]);

    const selectResult = useCallback((result: SearchResult) => {
        if (result.kind === 'club') {
            flyTo(result.club.coordinates, NAVIGATE_ZOOM);
        } else {
            flyTo(result.stadium.coordinates, NAVIGATE_ZOOM);
        }
        setQuery('');
        setOpen(false);
        if (isMobile) setMobileExpanded(false);
        inputRef.current?.blur();
    }, [flyTo, isMobile]);

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
                selectResult(results[activeIndex]);
            } else if (results.length > 0) {
                selectResult(results[0]);
            }
        } else if (e.key === 'Escape') {
            setOpen(false);
            inputRef.current?.blur();
            if (isMobile) { setMobileExpanded(false); setQuery(''); }
        }
    }, [open, results, activeIndex, selectResult, isMobile]);

    // Scroll active item into view
    useEffect(() => {
        if (activeIndex >= 0 && listRef.current) {
            const item = listRef.current.children[activeIndex] as HTMLElement;
            item?.scrollIntoView({ block: 'nearest' });
        }
    }, [activeIndex]);

    // Focus input when mobile search expands
    useEffect(() => {
        if (isMobile && mobileExpanded) {
            const raf = requestAnimationFrame(() => inputRef.current?.focus());
            return () => cancelAnimationFrame(raf);
        }
    }, [isMobile, mobileExpanded]);

    const showDropdown = open && results.length > 0;

    // ─── Mobile: collapsed search icon button ───
    if (isMobile && !mobileExpanded) {
        return (
            <button
                onClick={() => setMobileExpanded(true)}
                aria-label="Open search"
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '36px', height: '36px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    color: 'rgba(255,255,255,0.7)',
                    flexShrink: 0,
                }}
            >
                <Search style={{ width: '15px', height: '15px' }} />
            </button>
        );
    }

    // ─── Mobile: expanded search overlay ───
    if (isMobile && mobileExpanded) {
        return (
            <div
                ref={containerRef}
                style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0,
                    zIndex: 40,
                    padding: '8px 12px',
                    background: 'rgba(0,0,0,0.85)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
            >
                {/* Input row */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '10px 12px',
                    background: 'rgba(255,255,255,0.07)',
                    border: `1px solid ${showDropdown ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.12)'}`,
                    borderBottom: showDropdown ? '1px solid rgba(255,255,255,0.07)' : undefined,
                    borderRadius: showDropdown ? '12px 12px 0 0' : '12px',
                    transition: 'border-radius 100ms',
                }}>
                    <Search style={{ width: '15px', height: '15px', color: 'rgba(255,255,255,0.35)', flexShrink: 0 }} />
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={e => { setQuery(e.target.value); setOpen(true); }}
                        onFocus={() => query && setOpen(true)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search clubs, stadiums, cities…"
                        className="search-input"
                        style={{
                            flex: 1,
                            background: 'transparent',
                            border: 'none',
                            outline: 'none',
                            fontSize: '16px',
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
                    <button
                        onClick={() => { setMobileExpanded(false); setQuery(''); setOpen(false); }}
                        tabIndex={-1}
                        aria-label="Close search"
                        style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            padding: '2px', color: 'rgba(255,255,255,0.5)',
                            display: 'flex', alignItems: 'center',
                        }}
                    >
                        <X style={{ width: '15px', height: '15px' }} />
                    </button>
                </div>

                {/* Dropdown */}
                {showDropdown && (
                    <ul
                        ref={listRef}
                        role="listbox"
                        style={{
                            listStyle: 'none', margin: 0, padding: 0,
                            background: 'rgba(0,0,0,0.72)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderTop: 'none',
                            borderRadius: '0 0 12px 12px',
                            maxHeight: '50vh',
                            overflowY: 'auto',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
                        }}
                    >
                        {results.map((result, i) => (
                            <li
                                key={result.kind === 'club' ? result.club.id : result.stadium.id}
                                role="option"
                                aria-selected={i === activeIndex}
                                onMouseEnter={() => setActiveIndex(i)}
                                onMouseDown={e => { e.preventDefault(); selectResult(result); }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    padding: '12px 14px',
                                    cursor: 'pointer',
                                    background: i === activeIndex ? 'rgba(255,255,255,0.09)' : 'transparent',
                                    borderBottom: i < results.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                                    transition: 'background 80ms',
                                }}
                            >
                                {result.kind === 'club' ? (
                                    <span style={{
                                        width: '10px', height: '10px', borderRadius: '50%', flexShrink: 0,
                                        background: result.club.colors[0] || '#888',
                                        boxShadow: '0 0 0 1px rgba(255,255,255,0.12)',
                                    }} />
                                ) : (
                                    <span style={{
                                        width: '18px', height: '18px', borderRadius: '4px', flexShrink: 0,
                                        background: 'rgba(255,255,255,0.08)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <StadiumIcon size={11} color="rgba(255,255,255,0.55)" />
                                    </span>
                                )}
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    {result.kind === 'club' ? (
                                        <>
                                            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                {highlight(result.club.name, query.trim())}
                                            </p>
                                            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: '2px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                {highlight(`${result.club.city}, ${result.club.country}`, query.trim())}
                                                {result.club.stadium && (
                                                    <span style={{ color: 'rgba(255,255,255,0.22)' }}> · {result.club.stadium.name}</span>
                                                )}
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                {highlight(result.stadium.name, query.trim())}
                                            </p>
                                            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: '2px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                {highlight(`${result.stadium.city}, ${result.stadium.country}`, query.trim())}
                                                {result.tenants.length > 0 && (
                                                    <span style={{ color: 'rgba(255,255,255,0.22)' }}>
                                                        {' · '}{result.tenants.map(c => c.shortName ?? c.name).join(', ')}
                                                    </span>
                                                )}
                                            </p>
                                        </>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }

    // ─── Desktop: always-visible centered search bar ───
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
                    height: '38px',
                }}
            >
                <Search style={{ width: '15px', height: '15px', color: 'rgba(255,255,255,0.35)', flexShrink: 0 }} />
                <input
                    ref={inputRef}
                    value={query}
                    onChange={e => { setQuery(e.target.value); setOpen(true); }}
                    onFocus={() => query && setOpen(true)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search clubs, stadiums, cities…"
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
                    {results.map((result, i) => (
                        <li
                            key={result.kind === 'club' ? result.club.id : result.stadium.id}
                            role="option"
                            aria-selected={i === activeIndex}
                            onMouseEnter={() => setActiveIndex(i)}
                            onMouseDown={e => { e.preventDefault(); selectResult(result); }}
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
                            {result.kind === 'club' ? (
                                /* Club colour dot */
                                <span
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        flexShrink: 0,
                                        background: result.club.colors[0] || '#888',
                                        boxShadow: '0 0 0 1px rgba(255,255,255,0.12)',
                                    }}
                                />
                            ) : (
                                /* Stadium icon */
                                <span
                                    style={{
                                        width: '18px',
                                        height: '18px',
                                        borderRadius: '4px',
                                        flexShrink: 0,
                                        background: 'rgba(255,255,255,0.08)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <StadiumIcon size={11} color="rgba(255,255,255,0.55)" />
                                </span>
                            )}
                            <div style={{ flex: 1, minWidth: 0 }}>
                                {result.kind === 'club' ? (
                                    <>
                                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {highlight(result.club.name, query.trim())}
                                        </p>
                                        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: '2px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {highlight(`${result.club.city}, ${result.club.country}`, query.trim())}
                                            {result.club.stadium && (
                                                <span style={{ color: 'rgba(255,255,255,0.22)' }}> · {result.club.stadium.name}</span>
                                            )}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {highlight(result.stadium.name, query.trim())}
                                        </p>
                                        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: '2px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {highlight(`${result.stadium.city}, ${result.stadium.country}`, query.trim())}
                                            {result.tenants.length > 0 && (
                                                <span style={{ color: 'rgba(255,255,255,0.22)' }}>
                                                    {' · '}{result.tenants.map(c => c.shortName ?? c.name).join(', ')}
                                                </span>
                                            )}
                                        </p>
                                    </>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

