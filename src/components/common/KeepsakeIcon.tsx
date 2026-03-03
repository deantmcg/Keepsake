import React from 'react';

export const KeepsakeIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => {
    return (
        <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className={className}
        >
            {/* Outer Hexagon / Shield Shape */}
            <path 
                d="M12 2L4 5V11C4 16.5 12 21 12 21C12 21 20 16.5 20 11V5L12 2Z" 
                fill="currentColor" 
                fillOpacity="0.2"
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            
            {/* Trophy Icon */}
            <path 
                d="M8 8H16" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round"
            />
            <path 
                d="M8 8C8 12 10 13 12 13C14 13 16 12 16 8" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M12 13V16" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round"
            />
            <path 
                d="M10 16H14" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round"
            />
            {/* Trophy Handles */}
            <path 
                d="M8 9H7C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H8" 
                stroke="currentColor" 
                strokeWidth="1.2" 
                strokeLinecap="round"
            />
            <path 
                d="M16 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H16" 
                stroke="currentColor" 
                strokeWidth="1.2" 
                strokeLinecap="round"
            />
        </svg>
    );
};
