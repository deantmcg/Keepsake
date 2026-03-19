import { useState } from 'react';
import { MapView } from './components/map/MapView/MapView';
import { SearchBox } from './components/map/SearchBox';
import { KeepsakeListPage } from './components/keepsakes/KeepsakeListPage';
import { AddKeepsakeModal } from './components/keepsakes/AddKeepsakeModal';
import { useKeepsakeStore } from './stores/keepsakeStore';
import { useIsMobile } from './hooks/useIsMobile';
import { Trophy, Map, Archive } from 'lucide-react';
import type { Club } from './types/domain';

type Page = 'map' | 'keepsakes';

const NAV_HEIGHT = 38;

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('map');
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const keepsakeCount = useKeepsakeStore(state => state.keepsakes.length);
  const isMobile = useIsMobile();

  const handleClubClick = (club: Club) => {
    setSelectedClub(club);
  };

  return (
    <div className="dark w-full h-full bg-background text-foreground overflow-hidden relative">

      {isMobile ? (
        /* ─── Mobile: single full-width top bar ─── */
        <header style={{
          position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '8px 12px',
          background: 'rgba(0,0,0,0.65)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          height: `${NAV_HEIGHT + 16}px`,
          gap: '8px',
        }}>
          {/* Logo – icon + wordmark */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '50%',
              background: 'rgba(52,211,153,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Trophy style={{ width: '14px', height: '14px', color: '#6ee7b7' }} />
            </div>
            <span style={{
              fontSize: '16px', fontWeight: 600, letterSpacing: '-0.025em',
              color: 'rgba(255,255,255,0.95)',
            }}>
              Keepsake
            </span>
          </div>

          {/* Right side: search icon (handled by SearchBox) + nav tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {/* SearchBox renders its own mobile trigger */}
            <SearchBox isMobile />

            {/* Navigation tabs – icons only on mobile */}
            <nav style={{
              display: 'flex', gap: '2px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '10px',
              padding: '3px',
            }}>
              <button
                onClick={() => setCurrentPage('map')}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '30px', height: '30px', borderRadius: '7px',
                  cursor: 'pointer', border: 'none', fontFamily: 'inherit', transition: 'all 150ms',
                  background: currentPage === 'map' ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: currentPage === 'map' ? '#fff' : 'rgba(255,255,255,0.5)',
                  position: 'relative',
                }}
                aria-label="Map view"
              >
                <Map style={{ width: '14px', height: '14px' }} />
              </button>
              <button
                onClick={() => setCurrentPage('keepsakes')}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '30px', height: '30px', borderRadius: '7px',
                  cursor: 'pointer', border: 'none', fontFamily: 'inherit', transition: 'all 150ms',
                  background: currentPage === 'keepsakes' ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: currentPage === 'keepsakes' ? '#fff' : 'rgba(255,255,255,0.5)',
                  position: 'relative',
                }}
                aria-label="My Collection"
              >
                <Archive style={{ width: '14px', height: '14px' }} />
                {keepsakeCount > 0 && (
                  <span style={{
                    position: 'absolute', top: '2px', right: '2px',
                    background: '#22c55e', color: '#000',
                    fontSize: '9px', fontWeight: 700,
                    borderRadius: '6px', padding: '0 3px', lineHeight: '13px',
                    pointerEvents: 'none',
                  }}>
                    {keepsakeCount}
                  </span>
                )}
              </button>
            </nav>
          </div>
        </header>
      ) : (
        /* ─── Desktop: top-right header (logo + nav) aligned with search bar ─── */
        <header style={{
          position: 'absolute', top: '1rem', right: '1.25rem', zIndex: 20,
          pointerEvents: 'none',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            pointerEvents: 'auto',
            height: `${NAV_HEIGHT}px`,
          }}>
            {/* Navigation tabs */}
            <nav style={{
              display: 'flex', gap: '2px', height: '100%', alignItems: 'center',
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
                  height: '100%',
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
                  height: '100%',
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
      )}

      {/* Map page */}
      {currentPage === 'map' && (
        <>
          {!isMobile && <SearchBox />}
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
