import React, { useState } from 'react';
import { X } from 'lucide-react';
import { MOCK_MATCHES, formatMatchForDropdown, getClubById } from '../services/mock/matches.mock';
import { MOCK_CLUBS } from '../services/mock/clubs.mock';
import { useKeepsakeStore } from '../stores/keepsakeStore';
import type { KeepsakeWithLocation } from '../stores/keepsakeStore';
import { ItemType } from '../types/domain';
import { SearchableSelect } from './SearchableSelect';

interface AddKeepsakeModalProps {
    type: 'match' | 'shirt' | 'scarf' | 'badge';
    onClose: () => void;
}

export const AddKeepsakeModal: React.FC<AddKeepsakeModalProps> = ({ type, onClose }) => {
    const addKeepsake = useKeepsakeStore(state => state.addKeepsake);
    
    // Match form state
    const [selectedMatchId, setSelectedMatchId] = useState('');
    
    // Shirt form state
    const [shirtClubId, setShirtClubId] = useState('');
    const [shirtKitType, setShirtKitType] = useState<'HOME' | 'AWAY' | 'THIRD'>('HOME');
    const [shirtSeason, setShirtSeason] = useState('2023/24');
    
    // Scarf form state
    const [scarfClubId, setScarfClubId] = useState('');
    
    // Badge form state
    const [badgeClubId, setBadgeClubId] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        let keepsake: KeepsakeWithLocation | null = null;
        
        if (type === 'match' && selectedMatchId) {
            const match = MOCK_MATCHES.find(m => m.id === selectedMatchId);
            if (!match) return;
            
            const homeClub = getClubById(match.homeClubId);
            if (!homeClub) return;
            
            keepsake = {
                id: `keepsake-${Date.now()}`,
                type: ItemType.OTHER,
                clubId: match.homeClubId,
                dateAcquired: new Date().toISOString(),
                notes: `Match: ${formatMatchForDropdown(match)}`,
                coordinates: homeClub.coordinates
            };
        } else if (type === 'shirt' && shirtClubId) {
            const club = getClubById(shirtClubId);
            if (!club) return;
            
            keepsake = {
                id: `keepsake-${Date.now()}`,
                type: ItemType.SHIRT,
                clubId: shirtClubId,
                season: shirtSeason,
                dateAcquired: new Date().toISOString(),
                shirtDetails: {
                    kitType: shirtKitType
                },
                coordinates: club.coordinates
            };
        } else if (type === 'scarf' && scarfClubId) {
            const club = getClubById(scarfClubId);
            if (!club) return;
            
            keepsake = {
                id: `keepsake-${Date.now()}`,
                type: ItemType.SCARF,
                clubId: scarfClubId,
                dateAcquired: new Date().toISOString(),
                coordinates: club.coordinates
            };
        } else if (type === 'badge' && badgeClubId) {
            const club = getClubById(badgeClubId);
            if (!club) return;
            
            keepsake = {
                id: `keepsake-${Date.now()}`,
                type: ItemType.BADGE,
                clubId: badgeClubId,
                dateAcquired: new Date().toISOString(),
                coordinates: club.coordinates
            };
        }
        
        if (keepsake) {
            addKeepsake(keepsake);
            onClose();
        }
    };

    const getTitle = () => {
        switch (type) {
            case 'match': return 'Add Match';
            case 'shirt': return 'Add Shirt';
            case 'scarf': return 'Add Scarf';
            case 'badge': return 'Add Pin Badge';
        }
    };

    const isFormValid = () => {
        switch (type) {
            case 'match': return selectedMatchId !== '';
            case 'shirt': return shirtClubId !== '';
            case 'scarf': return scarfClubId !== '';
            case 'badge': return badgeClubId !== '';
            default: return false;
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-background border border-border rounded-lg shadow-xl max-w-md w-full">
                <div className="flex items-center justify-between p-4 border-b border-border">
                    <h2 className="text-lg font-semibold text-foreground">{getTitle()}</h2>
                    <button
                        onClick={onClose}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    {type === 'match' && (
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Select Match
                            </label>
                            <SearchableSelect
                                value={selectedMatchId}
                                onChange={setSelectedMatchId}
                                options={MOCK_MATCHES.map(match => ({
                                    value: match.id,
                                    label: formatMatchForDropdown(match)
                                }))}
                                placeholder="Choose a match..."
                            />
                        </div>
                    )}
                    
                    {type === 'shirt' && (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Team
                                </label>
                                <SearchableSelect
                                    value={shirtClubId}
                                    onChange={setShirtClubId}
                                    options={MOCK_CLUBS.map(club => ({
                                        value: club.id,
                                        label: club.name
                                    }))}
                                    placeholder="Choose a team..."
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Kit Type
                                </label>
                                <SearchableSelect
                                    value={shirtKitType}
                                    onChange={(value) => setShirtKitType(value as 'HOME' | 'AWAY' | 'THIRD')}
                                    options={[
                                        { value: 'HOME', label: 'Home' },
                                        { value: 'AWAY', label: 'Away' },
                                        { value: 'THIRD', label: 'Alternative' }
                                    ]}
                                    placeholder="Select kit type..."
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Season
                                </label>
                                <SearchableSelect
                                    value={shirtSeason}
                                    onChange={setShirtSeason}
                                    options={[
                                        { value: '2024/25', label: '2024/25' },
                                        { value: '2023/24', label: '2023/24' },
                                        { value: '2022/23', label: '2022/23' },
                                        { value: '2021/22', label: '2021/22' },
                                        { value: '2020/21', label: '2020/21' }
                                    ]}
                                    placeholder="Select season..."
                                />
                            </div>
                        </>
                    )}
                    
                    {type === 'scarf' && (
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Team
                            </label>
                            <SearchableSelect
                                value={scarfClubId}
                                onChange={setScarfClubId}
                                options={MOCK_CLUBS.map(club => ({
                                    value: club.id,
                                    label: club.name
                                }))}
                                placeholder="Choose a team..."
                            />
                        </div>
                    )}
                    
                    {type === 'badge' && (
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Team
                            </label>
                            <SearchableSelect
                                value={badgeClubId}
                                onChange={setBadgeClubId}
                                options={MOCK_CLUBS.map(club => ({
                                    value: club.id,
                                    label: club.name
                                }))}
                                placeholder="Choose a team..."
                            />
                        </div>
                    )}
                    
                    <div className="flex gap-2 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={!isFormValid()}
                            className="flex-1 px-4 py-2 bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
