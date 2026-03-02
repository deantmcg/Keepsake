import React, { useMemo } from 'react';
import { Trophy, Shirt, Wind, Award, MapPin, Sparkles } from 'lucide-react';
import type { PointFeature, ClusterProperties } from '../../hooks/useSupercluster';
import type { Club } from '../../types/domain';
import { ItemType } from '../../types/domain';

interface HoverPreviewProps {
    features: PointFeature[];
    clubsMap: Map<string, Club>;
    isCluster: boolean;
    clusterProps?: ClusterProperties;
}

export const HoverPreview: React.FC<HoverPreviewProps> = ({
    features,
    clubsMap,
    isCluster,
    clusterProps,
}) => {
    // Group items by club
    const groupedItems = useMemo(() => {
        const groups: Record<string, { 
            club: Club; 
            keepsakes: PointFeature[];
            isClubPoint: boolean;
        }> = {};

        features.forEach(f => {
            const props = f.properties;
            const clubId = props.clubId;
            const club = clubsMap.get(clubId);
            if (!club) return;

            if (!groups[clubId]) {
                groups[clubId] = { 
                    club, 
                    keepsakes: [], 
                    isClubPoint: false 
                };
            }

            if (props.pointType === 'club') {
                groups[clubId].isClubPoint = true;
            } else if (props.pointType === 'keepsake') {
                groups[clubId].keepsakes.push(f);
            }
        });

        // Sort: keepsakes first, then alphabetical
        return Object.values(groups).sort((a, b) => {
            if (a.keepsakes.length !== b.keepsakes.length) {
                return b.keepsakes.length - a.keepsakes.length;
            }
            return a.club.name.localeCompare(b.club.name);
        });
    }, [features, clubsMap]);

    // Get icon for item type
    const getItemIcon = (itemType: string) => {
        const iconClass = "w-3 h-3";
        switch (itemType) {
            case ItemType.SHIRT: return <Shirt className={iconClass} />;
            case ItemType.SCARF: return <Wind className={iconClass} />;
            case ItemType.BADGE: return <Award className={iconClass} />;
            default: return <Trophy className={iconClass} />;
        }
    };

    // For clusters, show summary header
    const renderClusterHeader = () => {
        if (!isCluster || !clusterProps) return null;
        
        const { point_count, keepsakeCount } = clusterProps;
        
        return (
            <div className="flex items-center gap-4 mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-slate-300" />
                    </div>
                    <div>
                        <span className="text-lg font-bold text-white">{point_count}</span>
                        <span className="text-xs text-slate-400 ml-1">locations</span>
                    </div>
                </div>
                {keepsakeCount > 0 && (
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                            <span className="text-lg font-bold text-emerald-400">{keepsakeCount}</span>
                            <span className="text-xs text-slate-400 ml-1">collected</span>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    // Limit displayed clubs for large clusters
    const displayLimit = isCluster ? 5 : 10;
    const displayedGroups = groupedItems.slice(0, displayLimit);
    const remainingCount = groupedItems.length - displayLimit;

    return (
        <div className="p-4 min-w-[240px] max-w-[340px] font-sans">
            {renderClusterHeader()}
            
            <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1 custom-scrollbar">
                {displayedGroups.map((group) => (
                    <div 
                        key={group.club.id} 
                        className="flex items-start gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors duration-150 -mx-2"
                    >
                        {/* Club color badge */}
                        <div 
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg ring-1 ring-inset ring-white/20"
                            style={{ 
                                background: `linear-gradient(135deg, ${group.club.colors[0] || '#666'}, ${group.club.colors[1] || group.club.colors[0] || '#666'})` 
                            }}
                        >
                            {group.keepsakes.length > 0 ? (
                                <Trophy className="w-5 h-5 text-white drop-shadow-lg" />
                            ) : (
                                <span className="text-white text-sm font-bold drop-shadow">
                                    {group.club.shortName?.charAt(0) || group.club.name.charAt(0)}
                                </span>
                            )}
                        </div>
                        
                        {/* Club info */}
                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm text-white truncate">
                                {group.club.name}
                            </p>
                            
                            {group.keepsakes.length > 0 ? (
                                <div className="flex flex-wrap gap-1.5 mt-1.5">
                                    {group.keepsakes.slice(0, 4).map((k, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-flex items-center gap-1 text-[10px] bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-400 px-2 py-1 rounded-md border border-emerald-500/20"
                                        >
                                            {getItemIcon(k.properties.pointType === 'keepsake' ? k.properties.itemType : '')}
                                            <span className="capitalize font-medium">
                                                {k.properties.pointType === 'keepsake' 
                                                    ? k.properties.itemType.toLowerCase() 
                                                    : 'item'}
                                            </span>
                                        </span>
                                    ))}
                                    {group.keepsakes.length > 4 && (
                                        <span className="text-[10px] text-slate-400 flex items-center">
                                            +{group.keepsakes.length - 4}
                                        </span>
                                    )}
                                </div>
                            ) : (
                                <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {group.club.city}, {group.club.country}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
                
                {remainingCount > 0 && (
                    <div className="text-xs text-slate-400 text-center pt-3 mt-2 border-t border-white/10">
                        <span className="bg-slate-700/50 px-3 py-1 rounded-full">
                            +{remainingCount} more clubs
                        </span>
                    </div>
                )}
            </div>
            
            {/* Click hint for clusters */}
            {isCluster && (
                <p className="text-[11px] text-slate-500 mt-3 text-center">
                    Click cluster to zoom
                </p>
            )}
        </div>
    );
};
