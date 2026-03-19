import React from 'react';
import { Shirt, Wind, Award, Trophy } from 'lucide-react';
import type { ClubPointProperties, KeepsakePointProperties } from '../../hooks/useSupercluster';

interface ClubMarkerProps {
    properties: ClubPointProperties;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

interface KeepsakeMarkerProps {
    properties: KeepsakePointProperties;
    clubColor: string;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

// Shield-shaped marker for clubs
export const ClubMarker: React.FC<ClubMarkerProps> = ({
    properties,
    onClick,
    onMouseEnter,
    onMouseLeave,
}) => {
    const { color, color2, hasKeepsakes, keepsakeCount, clubName } = properties;
    const gradId = `cg-${properties.clubId}`;
    
    return (
        <div
            className={`
                cursor-pointer transition-all duration-200
                hover:scale-125 hover:z-10
                ${hasKeepsakes ? 'drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]' : ''}
            `}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            title={clubName}
        >
            <div className="flex flex-col items-center gap-0.5">
                {hasKeepsakes && (
                    <div className="px-1.5 py-0.5 text-[9px] font-bold leading-none text-white pointer-events-none">
                        {keepsakeCount}
                    </div>
                )}
                <svg
                    width="24"
                    height="28"
                    viewBox="0 0 24 28"
                    className="drop-shadow-md"
                >
                    <defs>
                        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={color} />
                            <stop offset="100%" stopColor={color2 ?? color} />
                        </linearGradient>
                    </defs>
                    {/* Shield shape */}
                    <path
                        d="M12 2 L22 6 L22 14 C22 20 12 26 12 26 C12 26 2 20 2 14 L2 6 L12 2 Z"
                        fill={`url(#${gradId})`}
                        stroke="white"
                        strokeWidth="1.5"
                    />
                    {/* Inner highlight */}
                    <path
                        d="M12 5 L19 8 L19 13 C19 17.5 12 22 12 22 C12 22 5 17.5 5 13 L5 8 L12 5 Z"
                        fill="rgba(255,255,255,0.15)"
                    />
                </svg>
            </div>
        </div>
    );
};

// Pin-shaped marker for keepsakes with item type icon
export const KeepsakeMarker: React.FC<KeepsakeMarkerProps> = ({
    properties,
    clubColor,
    onClick,
    onMouseEnter,
    onMouseLeave,
}) => {
    const { itemType } = properties;
    
    // Get icon based on item type
    const getIcon = () => {
        const iconClass = "w-3.5 h-3.5 text-white";
        switch (itemType) {
            case 'SHIRT': return <Shirt className={iconClass} />;
            case 'SCARF': return <Wind className={iconClass} />;
            case 'BADGE': return <Award className={iconClass} />;
            default: return <Trophy className={iconClass} />;
        }
    };
    
    return (
        <div
            className={`
                cursor-pointer transition-all duration-200
                hover:scale-125 hover:z-10
                drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]
            `}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Pin container */}
            <div className="relative">
                <svg 
                    width="36" 
                    height="44" 
                    viewBox="0 0 36 44"
                    className="drop-shadow-lg"
                >
                    {/* Pin shape with club color accent */}
                    <defs>
                        <linearGradient id={`pin-gradient-${properties.keepsakeId}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#22c55e" />
                            <stop offset="100%" stopColor="#16a34a" />
                        </linearGradient>
                    </defs>
                    
                    {/* Outer glow */}
                    <ellipse
                        cx="18"
                        cy="40"
                        rx="6"
                        ry="2"
                        fill="rgba(0,0,0,0.3)"
                    />
                    
                    {/* Pin body */}
                    <path
                        d="M18 42 C18 42 32 26 32 16 C32 8 26 2 18 2 C10 2 4 8 4 16 C4 26 18 42 18 42 Z"
                        fill={`url(#pin-gradient-${properties.keepsakeId})`}
                        stroke="white"
                        strokeWidth="2"
                    />
                    
                    {/* Club color ring */}
                    <circle
                        cx="18"
                        cy="16"
                        r="10"
                        fill={clubColor}
                        stroke="white"
                        strokeWidth="1.5"
                    />
                </svg>
                
                {/* Icon overlay */}
                <div className="absolute top-[10px] left-1/2 -translate-x-1/2 flex items-center justify-center w-5 h-5">
                    {getIcon()}
                </div>
            </div>
        </div>
    );
};
