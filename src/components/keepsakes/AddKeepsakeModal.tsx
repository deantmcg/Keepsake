import React, { useState } from 'react';
import { X, Shirt, Wind, Award } from 'lucide-react';
import type { Club } from '../../types/domain';
import { ItemType } from '../../types/domain';
import { useKeepsakeStore } from '../../stores/keepsakeStore';

interface AddKeepsakeModalProps {
    club: Club;
    onClose: () => void;
}

const KIT_TYPES = [
    { value: 'HOME', label: 'Home' },
    { value: 'AWAY', label: 'Away' },
    { value: 'THIRD', label: 'Third' },
    { value: 'GOALKEEPER', label: 'Goalkeeper' },
    { value: 'SPECIAL', label: 'Other' },
] as const;

const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 600,
    color: 'rgba(148,163,184,0.7)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '6px',
};

const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: '#fafafa',
    fontSize: '13px',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box',
};

export const AddKeepsakeModal: React.FC<AddKeepsakeModalProps> = ({ club, onClose }) => {
    const addKeepsake = useKeepsakeStore(state => state.addKeepsake);

    const [itemType, setItemType] = useState<'SHIRT' | 'SCARF' | 'BADGE'>('SHIRT');
    const [season, setSeason] = useState('');
    const [kitType, setKitType] = useState<'HOME' | 'AWAY' | 'THIRD' | 'GOALKEEPER' | 'SPECIAL'>('HOME');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const keepsake = {
            id: crypto.randomUUID(),
            type: itemType as typeof ItemType[keyof typeof ItemType],
            clubId: club.id,
            season: itemType === 'SHIRT' ? (season || undefined) : undefined,
            dateAcquired: new Date().toISOString().split('T')[0],
            notes: notes || undefined,
            coordinates: club.coordinates,
            ...(itemType === 'SHIRT' ? { shirtDetails: { kitType } } : {}),
        };

        addKeepsake(keepsake);
        onClose();
    };

    const glassStyle: React.CSSProperties = {
        background: 'linear-gradient(to bottom, rgba(30,41,59,0.98), rgba(15,23,42,0.98))',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05) inset',
        color: '#fafafa',
        width: '100%',
        maxWidth: '420px',
        margin: '0 1rem',
    };

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
            }}
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div style={glassStyle}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 20px 16px' }}>
                    <div>
                        <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                            Add Keepsake
                        </h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{
                                width: '10px', height: '10px', borderRadius: '50%', flexShrink: 0,
                                background: `linear-gradient(135deg, ${club.colors[0] || '#888'}, ${club.colors[1] || club.colors[0] || '#888'})`,
                                boxShadow: '0 0 0 1px rgba(255,255,255,0.15)',
                            }} />
                            <span style={{ fontSize: '13px', color: 'rgba(148,163,184,0.9)' }}>
                                {club.name} · {club.city}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'rgba(255,255,255,0.08)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '8px',
                            color: 'rgba(255,255,255,0.6)',
                            cursor: 'pointer',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}
                        aria-label="Close"
                    >
                        <X style={{ width: '14px', height: '14px' }} />
                    </button>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', margin: '0 20px' }} />

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ padding: '16px 20px 20px' }}>
                    {/* Item Type */}
                    <div style={{ marginBottom: '16px' }}>
                        <label style={labelStyle}>Type</label>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                            {([
                                { type: 'SHIRT', label: 'Shirt', Icon: Shirt },
                                { type: 'SCARF', label: 'Scarf', Icon: Wind },
                                { type: 'BADGE', label: 'Badge', Icon: Award },
                            ] as const).map(({ type, label, Icon }) => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => setItemType(type)}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '6px',
                                        padding: '12px 8px',
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        border: itemType === type
                                            ? '1px solid rgba(34,197,94,0.5)'
                                            : '1px solid rgba(255,255,255,0.08)',
                                        background: itemType === type
                                            ? 'rgba(34,197,94,0.12)'
                                            : 'rgba(255,255,255,0.04)',
                                        color: itemType === type ? '#22c55e' : 'rgba(255,255,255,0.5)',
                                        transition: 'all 150ms',
                                        fontFamily: 'inherit',
                                    }}
                                >
                                    <Icon style={{ width: '18px', height: '18px' }} />
                                    <span style={{ fontSize: '11px', fontWeight: 600 }}>{label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Shirt-specific fields */}
                    {itemType === 'SHIRT' && (
                        <>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={labelStyle}>Season</label>
                                <input
                                    type="text"
                                    value={season}
                                    onChange={e => setSeason(e.target.value)}
                                    placeholder="e.g. 2023/24"
                                    style={inputStyle}
                                />
                            </div>
                            <div style={{ marginBottom: '16px' }}>
                                <label style={labelStyle}>Kit Type</label>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                                    {KIT_TYPES.map(({ value, label }) => (
                                        <button
                                            key={value}
                                            type="button"
                                            onClick={() => setKitType(value)}
                                            style={{
                                                padding: '8px 4px',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                border: kitType === value
                                                    ? '1px solid rgba(34,197,94,0.5)'
                                                    : '1px solid rgba(255,255,255,0.08)',
                                                background: kitType === value
                                                    ? 'rgba(34,197,94,0.12)'
                                                    : 'rgba(255,255,255,0.04)',
                                                color: kitType === value ? '#22c55e' : 'rgba(255,255,255,0.5)',
                                                fontSize: '12px',
                                                fontWeight: 600,
                                                fontFamily: 'inherit',
                                                transition: 'all 150ms',
                                            }}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {/* Notes */}
                    <div style={{ marginBottom: '20px' }}>
                        <label style={labelStyle}>
                            Notes{' '}
                            <span style={{ color: 'rgba(148,163,184,0.4)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
                                (optional)
                            </span>
                        </label>
                        <textarea
                            value={notes}
                            onChange={e => setNotes(e.target.value)}
                            placeholder="Where did you get it? Any story?"
                            rows={2}
                            style={{ ...inputStyle, resize: 'none' }}
                        />
                    </div>

                    {/* Actions */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                            type="button"
                            onClick={onClose}
                            style={{
                                flex: 1,
                                padding: '11px',
                                borderRadius: '10px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: 'transparent',
                                color: 'rgba(255,255,255,0.6)',
                                fontSize: '13px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            style={{
                                flex: 2,
                                padding: '11px',
                                borderRadius: '10px',
                                border: '1px solid rgba(34,197,94,0.4)',
                                background: 'rgba(34,197,94,0.15)',
                                color: '#22c55e',
                                fontSize: '13px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                            }}
                        >
                            Add to Collection
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
