import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ChevronDown, X, Search } from 'lucide-react';

interface Option {
    value: string;
    label: string;
}

interface SearchableSelectProps {
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    placeholder?: string;
    className?: string;
}

export const SearchableSelect: React.FC<SearchableSelectProps> = ({
    value,
    onChange,
    options,
    placeholder = 'Select...',
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const selectedOption = options.find(opt => opt.value === value);
    
    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Focus input when dropdown opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
        setSearchTerm('');
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange('');
        setSearchTerm('');
    };

    // Calculate dropdown position
    const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
    useEffect(() => {
        if (!isOpen) return;

        const updatePosition = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            setDropdownStyle({
                position: 'fixed',
                top: rect.bottom + 8,
                left: rect.left,
                width: rect.width,
                zIndex: 9999,
            });
        };

        updatePosition();
        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', updatePosition, true);

        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition, true);
        };
    }, [isOpen]);

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-full px-4 py-3 
                    bg-black/30
                    border border-white/12 
                    rounded-xl 
                    text-foreground 
                    focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400/40
                    flex items-center justify-between 
                    cursor-pointer
                    transition-all duration-150
                    hover:border-white/20 hover:bg-black/40
                    ${isOpen ? 'ring-2 ring-emerald-500/30 border-emerald-400/40' : ''}
                `}
            >
                <span className={`truncate ${selectedOption ? 'text-foreground' : 'text-slate-400'}`}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <div className="flex items-center gap-2 ml-2 shrink-0">
                    {selectedOption && (
                        <div 
                            onClick={handleClear}
                            className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            <X className="w-4 h-4 text-slate-400 hover:text-white" />
                        </div>
                    )}
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
            </button>

            {isOpen && ReactDOM.createPortal(
                <div 
                    style={dropdownStyle}
                    className="bg-slate-900/98 border border-white/12 rounded-xl shadow-2xl shadow-black/45 max-h-72 overflow-hidden flex flex-col backdrop-blur-xl"
                >
                    {/* Search input */}
                    <div className="p-3 border-b border-white/10">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search..."
                                className="
                                    w-full pl-10 pr-4 py-2.5
                                    bg-black/30
                                    border border-white/10
                                    rounded-lg
                                    text-foreground text-sm
                                    placeholder:text-slate-500
                                    focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-400/40
                                    transition-all duration-150
                                "
                            />
                        </div>
                    </div>
                    
                    {/* Options list */}
                    <div className="overflow-y-auto custom-scrollbar">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleSelect(option.value)}
                                    className={`
                                        w-full px-4 py-3 text-left 
                                        transition-all duration-150 cursor-pointer
                                        border-l-2
                                        ${option.value === value 
                                            ? 'bg-emerald-500/15 text-emerald-400 font-medium border-l-emerald-500' 
                                            : 'text-foreground hover:bg-white/5 border-l-transparent hover:border-l-white/20'
                                        }
                                    `}
                                >
                                    {option.label}
                                </button>
                            ))
                        ) : (
                            <div className="px-4 py-6 text-slate-500 text-sm text-center">
                                No results found
                            </div>
                        )}
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};
