import { MapView } from './components/map/MapView/MapView';
import { SearchBox } from './components/map/SearchBox';
import { Trophy } from 'lucide-react';

function App() {
  return (
    <div className="dark w-full h-full bg-background text-foreground overflow-hidden relative">
      <header className="absolute top-4 right-5 z-20 pointer-events-none">
        <div className="inline-flex items-center gap-2.5 pointer-events-auto">
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <Trophy className="w-3.5 h-3.5 text-emerald-300" />
          </div>
          <div className="leading-none">
            <h1 className="text-[22px] font-semibold tracking-tight text-white/95 drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]">
              Keepsake
            </h1>
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/45 mt-0.5">
              Collection Tracker
            </p>
          </div>
        </div>
      </header>
      <SearchBox />
      <MapView />
    </div>
  );
}

export default App;
