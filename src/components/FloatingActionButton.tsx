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
            <div ref={menuRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
                {isExpanded && (
                    <div className="flex flex-col gap-2 mb-1">
                        {items.map((item, index) => (
                            <button
                                key={item.type}
                                onClick={() => handleItemClick(item.type)}
                                className="flex items-center gap-3 bg-black/55 backdrop-blur-md rounded-full pl-4.5 pr-3.5 py-2.5 shadow-md shadow-black/30 hover:bg-black/70 transition-colors duration-150 group cursor-pointer"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <span className="text-sm font-medium text-slate-100 whitespace-nowrap group-hover:text-white transition-colors">
                                    {item.label}
                                </span>
                                <item.icon className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                            </button>
                        ))}
                    </div>
                )}

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-500/30 transition-all duration-150 flex items-center justify-center cursor-pointer active:scale-95"
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
