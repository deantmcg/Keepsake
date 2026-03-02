import React from 'react';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface ZoomControlProps {
    zoom: number;
    minZoom?: number;
    maxZoom?: number;
    onZoomChange: (zoom: number) => void;
}

export const ZoomControl: React.FC<ZoomControlProps> = ({
    zoom,
    minZoom = 0,
    maxZoom = 20,
    onZoomChange,
}) => {
    const handleZoomIn = () => onZoomChange(Math.min(zoom + 1, maxZoom));
    const handleZoomOut = () => onZoomChange(Math.max(zoom - 1, minZoom));

    return (
        <div 
            className="z-50 bg-slate-950 border-2 border-green-500 rounded-lg shadow-2xl p-4 flex flex-col gap-3 pointer-events-auto"
            style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem'
            }}
        >
            {/* Zoom buttons */}
            <div className="flex gap-2">
                <button
                    onClick={handleZoomOut}
                    className="p-2 hover:bg-muted rounded-md transition-colors"
                    title="Zoom out"
                >
                    <ZoomOut className="w-4 h-4" />
                </button>
                <button
                    onClick={handleZoomIn}
                    className="p-2 hover:bg-muted rounded-md transition-colors"
                    title="Zoom in"
                >
                    <ZoomIn className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};
