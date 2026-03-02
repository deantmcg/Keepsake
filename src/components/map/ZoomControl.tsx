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
            className="z-50 pointer-events-auto"
            style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1rem'
            }}
        >
            <div className="flex flex-col gap-2">
                <button
                    onClick={handleZoomIn}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black/45 backdrop-blur-md text-slate-200 hover:text-white hover:bg-black/60 transition-all duration-150 shadow-md shadow-black/30"
                    title="Zoom in"
                >
                    <ZoomIn className="w-4 h-4" />
                </button>
                <button
                    onClick={handleZoomOut}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black/45 backdrop-blur-md text-slate-200 hover:text-white hover:bg-black/60 transition-all duration-150 shadow-md shadow-black/30"
                    title="Zoom out"
                >
                    <ZoomOut className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};
