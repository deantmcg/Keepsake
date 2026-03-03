import { useMemo } from 'react';
import Supercluster from 'supercluster';
import type { BBox } from 'geojson';

// Custom properties for our points
export interface ClubPointProperties {
    pointType: 'club';
    clubId: string;
    clubName: string;
    color: string;
    color2: string;
    hasKeepsakes: boolean;
}

export interface KeepsakePointProperties {
    pointType: 'keepsake';
    clubId: string;
    keepsakeId: string;
    itemType: string;
    color: string;
}

export type PointProperties = ClubPointProperties | KeepsakePointProperties;

// Custom aggregated properties (used during reduce)
export interface AggregatedProperties {
    keepsakeCount: number;
    clubCount: number;
    topColors: string[];
    hasKeepsakes: boolean;
}

// Full cluster properties (includes supercluster-added fields)
export interface ClusterProperties extends AggregatedProperties {
    cluster: true;
    cluster_id: number;
    point_count: number;
}

export type PointFeature = GeoJSON.Feature<GeoJSON.Point, PointProperties>;
export type ClusterFeature = GeoJSON.Feature<GeoJSON.Point, ClusterProperties>;
export type MapFeature = PointFeature | ClusterFeature;

interface UseSuperclusterOptions {
    points: PointFeature[];
    bounds: BBox | null;
    zoom: number;
    options?: Supercluster.Options<PointProperties, AggregatedProperties>;
}

interface UseSuperclusterReturn {
    clusters: MapFeature[];
    supercluster: Supercluster<PointProperties, AggregatedProperties> | null;
    getClusterExpansionZoom: (clusterId: number) => number;
    getClusterLeaves: (clusterId: number, limit?: number) => PointFeature[];
}

const defaultOptions: Supercluster.Options<PointProperties, AggregatedProperties> = {
    radius: 40,      // Cluster radius in pixels - lower = clusters break apart sooner
    maxZoom: 14,     // Stop clustering at this zoom level
    minZoom: 0,
    // Map function: transform each point for aggregation
    map: (props): AggregatedProperties => ({
        keepsakeCount: props.pointType === 'keepsake' ? 1 : 0,
        clubCount: props.pointType === 'club' ? 1 : 0,
        topColors: [props.color],
        hasKeepsakes: props.pointType === 'keepsake' || 
            (props.pointType === 'club' && props.hasKeepsakes),
    }),
    // Reduce function: aggregate properties across points in cluster
    reduce: (accumulated, props) => {
        accumulated.keepsakeCount += props.keepsakeCount;
        accumulated.clubCount += props.clubCount;
        accumulated.hasKeepsakes = accumulated.hasKeepsakes || props.hasKeepsakes;
        // Keep unique colors, max 5
        const newColors = props.topColors.filter(
            (c: string) => !accumulated.topColors.includes(c)
        );
        accumulated.topColors = [...accumulated.topColors, ...newColors].slice(0, 5);
    },
};

export function useSupercluster({
    points,
    bounds,
    zoom,
    options = {},
}: UseSuperclusterOptions): UseSuperclusterReturn {
    // Create and load the supercluster index
    const supercluster = useMemo(() => {
        if (points.length === 0) return null;

        const index = new Supercluster<PointProperties, AggregatedProperties>({
            ...defaultOptions,
            ...options,
        });

        index.load(points);
        return index;
    }, [points, options]);

    // Get clusters for current viewport
    const clusters = useMemo(() => {
        if (!supercluster || !bounds) return [];
        
        const roundedZoom = Math.floor(zoom);
        return supercluster.getClusters(bounds, roundedZoom) as MapFeature[];
    }, [supercluster, bounds, zoom]);

    // Helper to get expansion zoom for a cluster
    const getClusterExpansionZoom = (clusterId: number): number => {
        if (!supercluster) return zoom;
        return supercluster.getClusterExpansionZoom(clusterId);
    };

    // Helper to get leaves (actual points) within a cluster
    const getClusterLeaves = (clusterId: number, limit = 100): PointFeature[] => {
        if (!supercluster) return [];
        return supercluster.getLeaves(clusterId, limit) as PointFeature[];
    };

    return {
        clusters,
        supercluster,
        getClusterExpansionZoom,
        getClusterLeaves,
    };
}

// Type guard to check if a feature is a cluster
export function isCluster(feature: MapFeature): feature is ClusterFeature {
    return 'cluster' in feature.properties && feature.properties.cluster === true;
}

// Type guard to check if a feature is a point
export function isPoint(feature: MapFeature): feature is PointFeature {
    return !('cluster' in feature.properties);
}
