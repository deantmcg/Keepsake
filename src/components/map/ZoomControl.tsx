import React from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ZoomControlProps {
    zoom: number;
    minZoom?: number;
    maxZoom?: number;
    onZoomChange: (zoom: number) => void;
    onReset?: () => void;
}

const btnStyle: React.CSSProperties = {
    width: '38px',
    height: '38px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: 'none',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    color: 'rgba(255,255,255,0.7)',
    cursor: 'pointer',
    transition: 'color 150ms, background 150ms',
    padding: 0,
};

export const ZoomControl: React.FC<ZoomControlProps> = ({
    zoom,
    minZoom = 0,
    maxZoom = 20,
    onZoomChange,
    onReset,
}) => {
    const handleZoomIn = () => onZoomChange(Math.min(zoom + 1, maxZoom));
    const handleZoomOut = () => onZoomChange(Math.max(zoom - 1, minZoom));

    const hoverHandlers = (e: React.MouseEvent<HTMLButtonElement>, enter: boolean) => {
        (e.currentTarget as HTMLButtonElement).style.color = enter ? '#ffffff' : 'rgba(255,255,255,0.7)';
        (e.currentTarget as HTMLButtonElement).style.background = enter ? 'rgba(255,255,255,0.07)' : 'transparent';
    };

    return (
        <div
            style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1rem',
                zIndex: 50,
                pointerEvents: 'auto',
                background: 'rgba(0,0,0,0.65)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.55)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
            }}
        >
            <button
                onClick={handleZoomIn}
                onMouseEnter={e => hoverHandlers(e, true)}
                onMouseLeave={e => hoverHandlers(e, false)}
                style={{ ...btnStyle, borderTop: 'none' }}
                title="Zoom in"
            >
                <ZoomIn style={{ width: '15px', height: '15px' }} />
            </button>
            <button
                onClick={handleZoomOut}
                onMouseEnter={e => hoverHandlers(e, true)}
                onMouseLeave={e => hoverHandlers(e, false)}
                style={btnStyle}
                title="Zoom out"
            >
                <ZoomOut style={{ width: '15px', height: '15px' }} />
            </button>
            {onReset && (
                <button
                    onClick={onReset}
                    onMouseEnter={e => hoverHandlers(e, true)}
                    onMouseLeave={e => hoverHandlers(e, false)}
                    style={btnStyle}
                    title="Reset to world view"
                >
                    <RotateCcw style={{ width: '15px', height: '15px' }} />
                </button>
            )}
        </div>
    );
};
