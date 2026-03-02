import React, { useMemo } from 'react';
import type { ClusterProperties } from '../../hooks/useSupercluster';

interface ClusterMarkerProps {
    properties: ClusterProperties;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

// Generate SVG donut chart showing keepsake vs club proportion
function DonutChart({ 
    keepsakeCount, 
    clubCount, 
    size, 
    topColors 
}: { 
    keepsakeCount: number; 
    clubCount: number; 
    size: number;
    topColors: string[];
}) {
    const total = keepsakeCount + clubCount;
    const keepsakeRatio = keepsakeCount / total;
    
    // SVG arc calculation
    const radius = size / 2;
    const strokeWidth = size * 0.15;
    const innerRadius = radius - strokeWidth;
    const circumference = 2 * Math.PI * innerRadius;
    
    // Calculate arc lengths
    const keepsakeArc = circumference * keepsakeRatio;
    
    // If we have colors from clubs, show them in segments
    const hasMultipleColors = topColors.length > 1 && keepsakeCount === 0;
    
    if (hasMultipleColors) {
        // Multi-color arc for clusters with only clubs (no keepsakes)
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
            {/* Keepsake arc (green) */}
            {keepsakeCount > 0 && (
                <circle
                    cx={radius}
                    cy={radius}
                    r={innerRadius}
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${keepsakeArc} ${circumference - keepsakeArc}`}
                    strokeLinecap="round"
                    style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                    className="drop-shadow-[0_0_4px_rgba(34,197,94,0.6)]"
                />
            )}
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
    const { point_count, keepsakeCount, clubCount, topColors, hasKeepsakes } = properties;

    // Dynamic sizing based on point count
    const size = useMemo(() => {
        if (point_count < 10) return 40;
        if (point_count < 50) return 50;
        if (point_count < 100) return 60;
        return 70;
    }, [point_count]);

    return (
        <div
            className={`
                relative cursor-pointer transition-transform duration-200
                hover:scale-110 hover:z-10
                ${hasKeepsakes ? 'cluster-with-keepsakes' : ''}
            `}
            style={{ width: size, height: size }}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Donut Chart Background */}
            <DonutChart
                keepsakeCount={keepsakeCount}
                clubCount={clubCount}
                size={size}
                topColors={topColors || []}
            />
            
            {/* Center content */}
            <div 
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ pointerEvents: 'none' }}
            >
                <span className="text-white font-bold text-sm leading-none">
                    {point_count}
                </span>
                {keepsakeCount > 0 && (
                    <span className="text-green-400 text-[9px] font-medium leading-none mt-0.5">
                        {keepsakeCount} ★
                    </span>
                )}
            </div>
            
            {/* Pulse effect for clusters with keepsakes */}
            {hasKeepsakes && (
                <div 
                    className="absolute inset-0 rounded-full bg-green-500/20 animate-ping"
                    style={{ animationDuration: '2s' }}
                />
            )}
        </div>
    );
};
