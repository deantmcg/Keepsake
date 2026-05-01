import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useKeepsakeStore } from '../../stores/keepsakeStore';
import { useMapStore } from '../../stores/mapStore';
import { useIsMobile } from '../../hooks/useIsMobile';

export const MapFilter: React.FC = () => {
    const [expanded, setExpanded] = useState(true);
    const showOnlyKeepsakes = useKeepsakeStore(state => state.showOnlyKeepsakes);
    const setShowOnlyKeepsakes = useKeepsakeStore(state => state.setShowOnlyKeepsakes);
    const showStadiums = useMapStore(state => state.showStadiums);
    const setShowStadiums = useMapStore(state => state.setShowStadiums);
    const isMobile = useIsMobile();

    const activeCount = (showOnlyKeepsakes ? 1 : 0) + (showStadiums ? 1 : 0);

    const panelBase: React.CSSProperties = {
        background: 'rgba(0,0,0,0.65)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.55)',
    };

    return (
        <div style={{
            position: 'absolute',
            top: isMobile ? '64px' : '80px',
            left: '20px',
            zIndex: 20,
            pointerEvents: 'auto',
            minWidth: '130px',
        }}>
            {/* Toggle button */}
            <button
                onClick={() => setExpanded(v => !v)}
                style={{
                    ...panelBase,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '8px 12px',
                    borderRadius: expanded ? '12px 12px 0 0' : '12px',
                    borderBottom: expanded ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(255,255,255,0.12)',
                    color: activeCount > 0 ? '#22c55e' : 'rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 500,
                    fontFamily: 'inherit',
                    width: '100%',
                    transition: 'border-radius 100ms',
                }}
            >
                <SlidersHorizontal style={{ width: '13px', height: '13px', flexShrink: 0 }} />
                <span style={{ flex: 1, textAlign: 'left' }}>Filter</span>
                {activeCount > 0 && (
                    <span style={{
                        background: '#22c55e',
                        color: '#000',
                        fontSize: '10px',
                        fontWeight: 700,
                        borderRadius: '10px',
                        padding: '0 6px',
                        lineHeight: '16px',
                    }}>
                        {activeCount}
                    </span>
                )}
                <ChevronDown style={{
                    width: '12px', height: '12px', flexShrink: 0,
                    transform: expanded ? 'rotate(180deg)' : 'none',
                    transition: 'transform 200ms',
                }} />
            </button>

            {/* Expanded panel */}
            {expanded && (
                <div style={{
                    ...panelBase,
                    borderTop: 'none',
                    borderRadius: '0 0 12px 12px',
                    padding: '10px 14px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }}>
                    {/* Keepsakes filter */}
                    <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        userSelect: 'none',
                    }}>
                        <input
                            type="checkbox"
                            checked={showOnlyKeepsakes}
                            onChange={e => setShowOnlyKeepsakes(e.target.checked)}
                            style={{
                                width: '15px',
                                height: '15px',
                                cursor: 'pointer',
                                accentColor: '#22c55e',
                                flexShrink: 0,
                            }}
                        />
                        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', whiteSpace: 'nowrap' }}>
                            Keepsakes only
                        </span>
                    </label>

                    {/* Divider */}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />

                    {/* Map section label */}
                    <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>
                        Map
                    </span>

                    {/* Show clubs */}
                    <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        userSelect: 'none',
                    }}>
                        <input
                            type="checkbox"
                            checked={!showStadiums}
                            onChange={() => setShowStadiums(false)}
                            style={{
                                width: '15px',
                                height: '15px',
                                cursor: 'pointer',
                                accentColor: '#22c55e',
                                flexShrink: 0,
                            }}
                        />
                        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', whiteSpace: 'nowrap' }}>
                            Show clubs
                        </span>
                    </label>

                    {/* Show stadiums */}
                    <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        userSelect: 'none',
                    }}>
                        <input
                            type="checkbox"
                            checked={showStadiums}
                            onChange={e => setShowStadiums(e.target.checked)}
                            style={{
                                width: '15px',
                                height: '15px',
                                cursor: 'pointer',
                                accentColor: '#0ea5e9',
                                flexShrink: 0,
                            }}
                        />
                        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', whiteSpace: 'nowrap' }}>
                            Show stadiums
                        </span>
                    </label>
                </div>
            )}
        </div>
    );
};
