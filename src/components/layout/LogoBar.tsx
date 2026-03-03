import React from 'react';
import { KeepsakeIcon } from '../common/KeepsakeIcon';

export const LogoBar: React.FC = () => {
    const glassStyle: React.CSSProperties = {
        background: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        pointerEvents: 'auto'
    };

    return (
        <div 
            style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                zIndex: 10,
                pointerEvents: 'none'
            }}
        >
            <div style={glassStyle}>
                <div style={{ color: '#fff', display: 'flex', alignItems: 'center' }}>
                    <KeepsakeIcon className="w-5 h-5" />
                </div>
                <span 
                    style={{ 
                        color: 'white', 
                        fontSize: '15px', 
                        fontWeight: 700,
                        letterSpacing: '-0.01em'
                    }}
                >
                    Keepsake
                </span>
            </div>
        </div>
    );
};
