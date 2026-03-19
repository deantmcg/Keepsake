import React, { useMemo } from 'react';
import type { ClusterProperties } from '../../hooks/useSupercluster';

interface ClusterMarkerProps {
    properties: ClusterProperties;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

// Generate SVG donut chart for club composition
function DonutChart({ 
    size, 
    topColors 
}: { 
    size: number;
    topColors: string[];
}) {
    // SVG arc calculation
    const radius = size / 2;
    const strokeWidth = size * 0.15;
    const innerRadius = radius - strokeWidth;
    const circumference = 2 * Math.PI * innerRadius;

    // If we have colors from clubs, show them in segments
    const hasMultipleColors = topColors.length > 1;
    
    if (hasMultipleColors) {
        // Multi-color arc for clusters with multiple club colors
        const segmentArc = circumference / topColors.length;
        let offset = 0;
        
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Background ring */}
                <circle
                    cx={radius}
                    cy={radius}
                    r={innerRadius}
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth={strokeWidth}
                />
                {/* Color segments */}
                {topColors.map((color, i) => {
                    const segment = (
                        <circle
                            key={i}
                            cx={radius}
                            cy={radius}
                            r={innerRadius}
                            fill="none"
                            stroke={color}
                            strokeWidth={strokeWidth}
                            strokeDasharray={`${segmentArc} ${circumference - segmentArc}`}
                            strokeDashoffset={-offset}
                            strokeLinecap="round"
                            style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                        />
                    );
                    offset += segmentArc;
                    return segment;
                })}
                {/* Inner fill */}
                <circle
                    cx={radius}
                    cy={radius}
                    r={innerRadius - strokeWidth / 2}
                    fill="rgba(30, 41, 59, 0.95)"
                />
            </svg>
        );
    }
    
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            {/* Background ring (clubs - gray) */}
            <circle
                cx={radius}
                cy={radius}
                r={innerRadius}
                fill="none"
                stroke="rgba(148, 163, 184, 0.4)"
                strokeWidth={strokeWidth}
            />
            {/* Inner fill */}
            <circle
                cx={radius}
                cy={radius}
                r={innerRadius - strokeWidth / 2}
                fill="rgba(30, 41, 59, 0.95)"
            />
        </svg>
    );
}

export const ClusterMarker: React.FC<ClusterMarkerProps> = ({
    properties,
    onClick,
    onMouseEnter,
    onMouseLeave,
}) => {
    const { point_count, keepsakeCount, clubCount, topColors } = properties;

    // Dynamic sizing based on point count
    const size = useMemo(() => {
        if (point_count < 10) return 40;
        if (point_count < 50) return 50;
        if (point_count < 100) return 60;
        return 70;
    }, [point_count]);

    return (
        <div
            className="relative cursor-pointer transition-transform duration-200 hover:scale-110 hover:z-10"
            style={{ width: size, height: size }}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Donut Chart Background */}
            <DonutChart
                size={size}
                topColors={topColors || []}
            />
            
            {/* Center content */}
            <div 
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ pointerEvents: 'none' }}
            >
                <span className="text-white font-bold text-sm leading-none">
                    {clubCount}
                </span>
                {keepsakeCount > 0 && (
                    <span className="text-white text-[9px] font-medium leading-none mt-0.5">
                        {keepsakeCount} ✔
                    </span>
                )}
            </div>
        </div>
    );
};
