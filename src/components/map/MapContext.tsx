import React, { createContext, useContext } from 'react';
import maplibregl from 'maplibre-gl';

interface MapContextType {
    map: maplibregl.Map | null;
}

const MapContext = createContext<MapContextType>({ map: null });

export const useMap = () => useContext(MapContext);

export const MapProvider: React.FC<{ map: maplibregl.Map | null; children: React.ReactNode }> = ({ map, children }) => {
    return (
        <MapContext.Provider value={{ map }}>
            {children}
        </MapContext.Provider>
    );
};
