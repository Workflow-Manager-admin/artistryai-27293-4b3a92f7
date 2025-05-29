import React, { useState } from 'react';
import './App.css';

// PUBLIC_INTERFACE
/**
 * ArtistryAI App - minimalist main container with tab navigation for sections.
 * - Tabs: Home, About Us, Tutorials, Upgrade
 * - Each section visually distinct and accessible, respecting the black/white/gradient theme
 */
function App() {
  const [activeTab, setActiveTab] = useState('Home');

  // Section content definitions
  const sections = {
    Home: {
      title: "Home",
      content: (
        <>
          <h2>Welcome to ArtistryAI</h2>
          <p className="feature-description">
            Welcome to ArtistryAI, your AI-powered companion for learning to draw with confidence. This is your starting point for guided creativity.
          </p>
        </>
      ),
    },
    "About Us": {
      title: "About Us",
      content: (
        <>
          <h2>About ArtistryAI</h2>
          <p className="feature-description">
            ArtistryAI was created to empower aspiring artists of all levels with step-by-step guidance, interactive tutorials, and personalized progress suggestions — all in a distraction-free environment.
          </p>
        </>
      ),
    },
    Tutorials: {
      title: "Tutorials",
      content: (
        <>
          <h2>Interactive Tutorials</h2>
          <p className="feature-description">
            Explore our rich library of interactive drawing tutorials. Whether you’re a beginner or looking to master advanced techniques, you’ll find something to develop your skill.
          </p>
        </>
      ),
    },
    Upgrade: {
      title: "Upgrade",
      content: (
        <>
          <h2>Upgrade to Pro</h2>
          <p className="feature-description">
            Unlock premium features for advanced progress tracking, exclusive tutorials, and enhanced AI-guided drawing assistance. Elevate your art journey with ArtistryAI Pro.
          </p>
        </>
      ),
    },
  };

  // Tab labels in order
  const tabKeys = ["Home", "About Us", "Tutorials", "Upgrade"];

  return (
    <div className="app">
      {/* Minimalist top navbar with centered logo */}
      <nav className="navbar" aria-label="Main">
        <div className="navbar-logo-center">
          <div className="logo" tabIndex="0">
            <span className="logo-symbol" aria-hidden="true">✦</span>
            <span className="logo-appname">ArtistryAI</span>
          </div>
        </div>
      </nav>
      <main className="main-container" tabIndex="-1">
        {/* Accessible tab bar navigation */}
        <nav
          aria-label="Section Navigation"
          className="tab-nav"
        >
          <ul className="tab-list" role="tablist">
            {tabKeys.map((key) => (
              <li key={key} role="presentation">
                <button
                  role="tab"
                  aria-selected={activeTab === key}
                  tabIndex={activeTab === key ? 0 : -1}
                  className={`tab-btn${activeTab === key ? " active" : ""}`}
                  onClick={() => setActiveTab(key)}
                  style={{
                    background:
                      activeTab === key
                        ? "var(--accent-gradient)"
                        : "transparent",
                    color:
                      activeTab === key
                        ? "#fff"
                        : "var(--text-secondary)",
                    fontWeight: activeTab === key ? 700 : 400,
                  }}
                >
                  {sections[key].title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <section className="workspace-section" aria-label={activeTab + " Section"}>
          <div className="workspace workspace-single">
            {/* Visually distinct card for the section */}
            <div className="feature-card" tabIndex="0">
              {sections[activeTab].content}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;