import React, { useState, useEffect, useRef } from 'react';
import { Plus, X, Trophy, Shirt, Wind, Award } from 'lucide-react';
import { AddKeepsakeModal } from './AddKeepsakeModal';

type KeepsakeType = 'match' | 'shirt' | 'scarf' | 'badge';

export const FloatingActionButton: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedType, setSelectedType] = useState<KeepsakeType | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleItemClick = (type: KeepsakeType) => {
        setSelectedType(type);
        setIsExpanded(false);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsExpanded(false);
            }
        };

        if (isExpanded) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isExpanded]);

    const items = [
        { type: 'match' as KeepsakeType, label: 'Match', icon: Trophy },
        { type: 'shirt' as KeepsakeType, label: 'Shirt', icon: Shirt },
        { type: 'scarf' as KeepsakeType, label: 'Scarf', icon: Wind },
        { type: 'badge' as KeepsakeType, label: 'Pin Badge', icon: Award },
    ];

    return (
        <>
            <div ref={menuRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
                {isExpanded && (
                    <div className="flex flex-col gap-2">
                        {items.map((item) => (
                            <button
                                key={item.type}
                                onClick={() => handleItemClick(item.type)}
                                className="flex items-center justify-between gap-3 bg-background/95 backdrop-blur-md border border-border rounded-full px-4 py-3 shadow-lg hover:bg-muted transition-colors group cursor-pointer"
                            >
                                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                                    {item.label}
                                </span>
                                <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                            </button>
                        ))}
                    </div>
                )}

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-14 h-14 rounded-full bg-foreground hover:bg-foreground/90 text-background shadow-lg transition-all flex items-center justify-center cursor-pointer"
                    aria-label={isExpanded ? 'Close menu' : 'Add keepsake'}
                >
                    {isExpanded ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Plus className="w-6 h-6" />
                    )}
                </button>
            </div>

            {selectedType && (
                <AddKeepsakeModal
                    type={selectedType}
                    onClose={() => setSelectedType(null)}
                />
            )}
        </>
    );
};
