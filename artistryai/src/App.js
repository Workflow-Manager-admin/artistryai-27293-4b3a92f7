import React from 'react';
import './App.css';
import AIDrawingGuidance from "./components/AIDrawingGuidance";
import InteractiveTutorials from "./components/InteractiveTutorials";
import ProgressTracking from "./components/ProgressTracking";

// PUBLIC_INTERFACE
/**
 * ArtistryAI App - minimalist main container.
 * - Navbar is reduced to just the logo, centered.
 * - Workspace is centered, spacious, and uncluttered.
 */
function App() {
  return (
    <div className="app">
      {/* Unobtrusive top navbar, logo only, perfectly centered */}
      <nav className="navbar" aria-label="Main">
        <div className="navbar-logo-center">
          <div className="logo" tabIndex="0">
            <span className="logo-symbol" aria-hidden="true">✦</span>
            <span className="logo-appname">ArtistryAI</span>
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