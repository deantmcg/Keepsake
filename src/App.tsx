import { MapView } from './components/map/MapView/MapView';

function App() {
  return (
    <div className="dark w-full h-full bg-background text-foreground overflow-hidden relative">
      <header className="absolute top-0 left-0 right-0 z-10 p-4 pointer-events-none">
        <div className="bg-background/80 backdrop-blur-md border border-border rounded-full px-6 py-2 inline-flex items-center shadow-lg pointer-events-auto">
          <h1 className="text-foreground font-semibold tracking-tight mr-4">Keepsake</h1>
        </div>
      </header>
      <MapView />
    </div>
  );
}

export default App;
