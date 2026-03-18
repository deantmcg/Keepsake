import { useState } from 'react';
import { MapView } from './components/map/MapView/MapView';
import { SearchBox } from './components/map/SearchBox';
import { KeepsakeListPage } from './components/keepsakes/KeepsakeListPage';
import { AddKeepsakeModal } from './components/keepsakes/AddKeepsakeModal';
import { useKeepsakeStore } from './stores/keepsakeStore';
import { Trophy, Map, Archive } from 'lucide-react';
import type { Club } from './types/domain';

type Page = 'map' | 'keepsakes';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('map');
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const keepsakeCount = useKeepsakeStore(state => state.keepsakes.length);

  const handleClubClick = (club: Club) => {
    setSelectedClub(club);
  };

  return (
    <div className="dark w-full h-full bg-background text-foreground overflow-hidden relative">
      {/* Top-right header with logo + navigation */}
      <header style={{
        position: 'absolute', top: '1rem', right: '1.25rem', zIndex: 20,
        pointerEvents: 'none',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          pointerEvents: 'auto',
        }}>
          {/* Logo */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '50%',
              background: 'rgba(52,211,153,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Trophy style={{ width: '14px', height: '14px', color: '#6ee7b7' }} />
            </div>
            <div style={{ lineHeight: '1' }}>
              <h1 style={{
                fontSize: '22px', fontWeight: 600, letterSpacing: '-0.025em',
                color: 'rgba(255,255,255,0.95)',
                textShadow: '0 1px 10px rgba(0,0,0,0.5)',
              }}>
                Keepsake
              </h1>
              <p style={{
                fontSize: '10px', textTransform: 'uppercase',
                letterSpacing: '0.18em', color: 'rgba(255,255,255,0.45)', marginTop: '2px',
              }}>
                Collection Tracker
              </p>
            </div>
          </div>

          {/* Navigation tabs */}
          <nav style={{
            display: 'flex', gap: '2px',
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '10px',
            padding: '3px',
          }}>
            <button
              onClick={() => setCurrentPage('map')}
              style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                padding: '5px 10px', borderRadius: '7px', fontSize: '12px', fontWeight: 500,
                cursor: 'pointer', border: 'none', fontFamily: 'inherit', transition: 'all 150ms',
                background: currentPage === 'map' ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: currentPage === 'map' ? '#fff' : 'rgba(255,255,255,0.5)',
              }}
            >
              <Map style={{ width: '12px', height: '12px' }} />
              Map
            </button>
            <button
              onClick={() => setCurrentPage('keepsakes')}
              style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                padding: '5px 10px', borderRadius: '7px', fontSize: '12px', fontWeight: 500,
                cursor: 'pointer', border: 'none', fontFamily: 'inherit', transition: 'all 150ms',
                background: currentPage === 'keepsakes' ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: currentPage === 'keepsakes' ? '#fff' : 'rgba(255,255,255,0.5)',
              }}
            >
              <Archive style={{ width: '12px', height: '12px' }} />
              My Collection
              {keepsakeCount > 0 && (
                <span style={{
                  background: '#22c55e', color: '#000',
                  fontSize: '10px', fontWeight: 700,
                  borderRadius: '10px', padding: '0 5px', lineHeight: '16px',
                }}>
                  {keepsakeCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Map page */}
      {currentPage === 'map' && (
        <>
          <SearchBox />
          <MapView onClubClick={handleClubClick} />
        </>
      )}

      {/* Keepsakes list page */}
      {currentPage === 'keepsakes' && (
        <KeepsakeListPage onBack={() => setCurrentPage('map')} />
      )}

      {/* Add keepsake modal */}
      {selectedClub && (
        <AddKeepsakeModal
          club={selectedClub}
          onClose={() => setSelectedClub(null)}
        />
      )}
    </div>
  );
}

export default App;
