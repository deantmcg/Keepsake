import React, { useMemo } from 'react';
import { Trophy, Shirt, Wind, Award, MapPin, CircleCheckBig } from 'lucide-react';
import type { PointFeature, ClusterProperties, KeepsakePointProperties } from '../../hooks/useSupercluster';
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
    const itemTypeLabel: Record<string, string> = {
        [ItemType.SHIRT]: 'Shirt',
        [ItemType.SCARF]: 'Scarf',
        [ItemType.BADGE]: 'Badge',
        [ItemType.OTHER]: 'Other',
    };

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
        
        const { clubCount, keepsakeCount } = clusterProps;
        
        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin style={{ width: '14px', height: '14px', color: 'rgba(255,255,255,0.45)', flexShrink: 0 }} />
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>{clubCount}</span>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: 'rgba(148,163,184,0.9)' }}>clubs</span>
                </div>
                {keepsakeCount > 0 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CircleCheckBig style={{ width: '14px', height: '14px', color: '#34d399', flexShrink: 0 }} />
                        <span style={{ fontSize: '15px', fontWeight: 700, color: '#34d399' }}>{keepsakeCount}</span>
                        <span style={{ fontSize: '15px', fontWeight: 700, color: 'rgba(148,163,184,0.9)' }}>item</span>
                    </div>
                )}
            </div>
        );
    };

    // Limit displayed clubs for large clusters
    const displayLimit = isCluster ? 8 : 10;
    const displayedGroups = groupedItems.slice(0, displayLimit);
    const remainingCount = groupedItems.length - displayLimit;

    return (
        <div className="p-4 min-w-[240px] max-w-[340px] font-sans">
            {renderClusterHeader()}
            
            <div className="hide-scrollbar" style={{ display: 'flex', flexDirection: 'column', gap: '3px', maxHeight: '300px', overflowY: 'auto', paddingRight: '4px', scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}>
                {displayedGroups.map((group) => (
                    <div 
                        key={group.club.id} 
                        style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            padding: '5px 4px',
                            borderRadius: '8px',
                            margin: '0 -4px'
                        }}
                    >
                        {/* Club color badge */}
                        <div 
                            style={{ 
                                width: '24px',
                                height: '24px',
                                borderRadius: '6px',
                                flexShrink: 0,
                                boxShadow: '0 2px 4px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.2)',
                                background: `linear-gradient(135deg, ${group.club.colors[0] || '#666'}, ${group.club.colors[1] || group.club.colors[0] || '#666'})`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {group.keepsakes.length > 0 && (
                                <span style={{ color: '#fff', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.4))', display: 'flex' }}>
                                    {getItemIcon((group.keepsakes[0].properties as KeepsakePointProperties).itemType)}
                                </span>
                            )}
                        </div>
                        
                        {/* Club info */}
                        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', minWidth: 0 }}>
                                <span style={{ fontSize: '12px', fontWeight: 600, color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {group.club.name}
                                </span>
                                <span style={{ fontSize: '10px', color: 'rgba(148,163,184,0.6)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                    {group.club.city}, {group.club.country}
                                </span>
                            </div>

                            {group.keepsakes.length > 0 && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}>
                                    {Object.entries(
                                        group.keepsakes.reduce<Record<string, number>>((acc, keepsake) => {
                                            const itemType = (keepsake.properties as KeepsakePointProperties).itemType;
                                            acc[itemType] = (acc[itemType] ?? 0) + 1;
                                            return acc;
                                        }, {})
                                    ).map(([type, count]) => (
                                        <span
                                            key={`${group.club.id}-${type}`}
                                            style={{
                                                fontSize: '10px',
                                                color: 'rgba(226,232,240,0.95)',
                                                background: 'rgba(15,23,42,0.45)',
                                                border: '1px solid rgba(148,163,184,0.25)',
                                                borderRadius: '999px',
                                                padding: '1px 6px',
                                                lineHeight: 1.4,
                                            }}
                                        >
                                            {count} {itemTypeLabel[type] || 'Item'}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                
                {remainingCount > 0 && (
                    <div style={{ fontSize: '11px', color: 'rgba(148,163,184,0.7)', textAlign: 'center', paddingTop: '6px', marginTop: '2px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        +{remainingCount} more clubs
                    </div>
                )}
            </div>
            
            {/* Click hint for clusters */}
            {isCluster && (
                <p style={{ fontSize: '11px', color: 'rgba(148,163,184,0.5)', textAlign: 'center', marginTop: '10px' }}>
                    Click cluster to zoom
                </p>
            )}
        </div>
    );
};
