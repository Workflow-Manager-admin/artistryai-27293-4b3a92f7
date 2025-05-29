import React from 'react';
import './App.css';
import AIDrawingGuidance from "./components/AIDrawingGuidance";
import InteractiveTutorials from "./components/InteractiveTutorials";
import ProgressTracking from "./components/ProgressTracking";

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app">
      <nav className="navbar" aria-label="Main">
        <div className="container navbar-inner">
          <div className="logo" tabIndex="0">
            <span className="logo-symbol" aria-hidden="true">✦</span>
            <span className="logo-appname">ArtistryAI</span>
          </div>
          <div className="nav-minimal">
            {/* Future: Add minimalist nav icons or settings if needed */}
          </div>
        </div>
      </nav>

      <main className="main-container">
        <section className="workspace-section" aria-label="Workspace">
          <div className="workspace">
            <AIDrawingGuidance />
            <InteractiveTutorials />
            <ProgressTracking />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;