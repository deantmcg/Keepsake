import React from 'react';

interface StadiumIconProps {
    size?: number;
    color?: string;
    style?: React.CSSProperties;
}

/**
 * 3D perspective stadium bowl, viewed from a slight elevation at the front.
 * Layers (back → front):
 *   1. Outer top rim ellipse (widest silhouette)
 *   2. Outer side walls + front base arc  → the exterior shell
 *   3. Inner stand rim ellipse            → top edge of the seating bowl
 *   4. Inner stand walls + inner base arc → the stand bowl
 *   5. Pitch ellipse deep in the bowl
 *   6. Halfway line + centre circle + spot
 */
export const StadiumIcon: React.FC<StadiumIconProps> = ({
    size = 14,
    color = 'currentColor',
    style,
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={style}
        aria-hidden="true"
    >
        {/* ── Outer shell ──────────────────────────────────── */}

        {/* Outer top rim — the widest ellipse at the very top of the walls */}
        <ellipse cx="12" cy="5.5" rx="11" ry="4" stroke={color} strokeWidth="1.3" />

        {/* Outer left wall */}
        <line x1="1" y1="5.5" x2="1" y2="14.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
        {/* Outer right wall */}
        <line x1="23" y1="5.5" x2="23" y2="14.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
        {/* Outer front base arc — the visible lower face of the stadium */}
        <path d="M 1 14.5 Q 12 20 23 14.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" fill="none" />

        {/* ── Stand bowl ───────────────────────────────────── */}

        {/* Inner stand rim — concentric ellipse showing depth of seating */}
        <ellipse cx="12" cy="5.5" rx="8" ry="2.7" stroke={color} strokeWidth="0.85" opacity="0.7" />

        {/* Inner stand left wall */}
        <line x1="4" y1="5.5" x2="4" y2="13.5" stroke={color} strokeWidth="0.85" strokeLinecap="round" opacity="0.7" />
        {/* Inner stand right wall */}
        <line x1="20" y1="5.5" x2="20" y2="13.5" stroke={color} strokeWidth="0.85" strokeLinecap="round" opacity="0.7" />
        {/* Inner stand front arc */}
        <path d="M 4 13.5 Q 12 17.5 20 13.5" stroke={color} strokeWidth="0.85" strokeLinecap="round" fill="none" opacity="0.7" />

        {/* ── Pitch at the bottom of the bowl ──────────────── */}

        {/* Pitch ellipse — deep perspective, flattened */}
        <ellipse cx="12" cy="11" rx="6" ry="2" stroke={color} strokeWidth="0.75" opacity="0.55" />

        {/* Halfway line — vertical across the pitch ellipse */}
        <line x1="12" y1="9" x2="12" y2="13" stroke={color} strokeWidth="0.65" opacity="0.55" />

        {/* Centre circle */}
        <ellipse cx="12" cy="11" rx="1.6" ry="0.9" stroke={color} strokeWidth="0.65" opacity="0.55" />

        {/* Centre spot */}
        <circle cx="12" cy="11" r="0.4" fill={color} opacity="0.6" />
    </svg>
);
