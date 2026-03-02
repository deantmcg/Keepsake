import React, { useMemo } from 'react';
import { Trophy, Shirt, Wind, Award, MapPin } from 'lucide-react';
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
            <div className="flex items-center gap-3 mb-3 pb-2 border-b border-border">
                <div className="flex items-center gap-1.5 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold">{point_count}</span>
                    <span className="text-muted-foreground">locations</span>
                </div>
                {keepsakeCount > 0 && (
                    <div className="flex items-center gap-1 text-sm text-green-400">
                        <Trophy className="w-3.5 h-3.5" />
                        <span className="font-medium">{keepsakeCount}</span>
                        <span className="text-muted-foreground">keepsakes</span>
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
        <div className="p-3 min-w-[220px] max-w-[320px] font-sans">
            {renderClusterHeader()}
            
            <div className="space-y-2.5 max-h-[280px] overflow-y-auto pr-1 custom-scrollbar">
                {displayedGroups.map((group) => (
                    <div 
                        key={group.club.id} 
                        className="flex items-start gap-2.5 group"
                    >
                        {/* Club color badge */}
                        <div 
                            className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 shadow-sm"
                            style={{ 
                                background: `linear-gradient(135deg, ${group.club.colors[0] || '#666'}, ${group.club.colors[1] || group.club.colors[0] || '#666'})` 
                            }}
                        >
                            {group.keepsakes.length > 0 ? (
                                <Trophy className="w-4 h-4 text-white drop-shadow" />
                            ) : (
                                <span className="text-white text-xs font-bold">
                                    {group.club.shortName?.charAt(0) || group.club.name.charAt(0)}
                                </span>
                            )}
                        </div>
                        
                        {/* Club info */}
                        <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm text-foreground truncate">
                                {group.club.name}
                            </p>
                            
                            {group.keepsakes.length > 0 ? (
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {group.keepsakes.slice(0, 4).map((k, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-flex items-center gap-0.5 text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded"
                                        >
                                            {getItemIcon(k.properties.pointType === 'keepsake' ? k.properties.itemType : '')}
                                            <span className="capitalize">
                                                {k.properties.pointType === 'keepsake' 
                                                    ? k.properties.itemType.toLowerCase() 
                                                    : 'item'}
                                            </span>
                                        </span>
                                    ))}
                                    {group.keepsakes.length > 4 && (
                                        <span className="text-[10px] text-muted-foreground">
                                            +{group.keepsakes.length - 4} more
                                        </span>
                                    )}
                                </div>
                            ) : (
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    {group.club.city}, {group.club.country}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
                
                {remainingCount > 0 && (
                    <p className="text-xs text-muted-foreground text-center pt-2 border-t border-border">
                        +{remainingCount} more clubs...
                    </p>
                )}
            </div>
            
            {/* Click hint for clusters */}
            {isCluster && (
                <p className="text-[10px] text-muted-foreground mt-2 text-center opacity-70">
                    Click to zoom in
                </p>
            )}
        </div>
    );
};
