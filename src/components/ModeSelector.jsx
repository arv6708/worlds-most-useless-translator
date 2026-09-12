import React from 'react';
import { MODES } from '../services/translationData';
import { sound } from '../services/audioService';
import { AlertTriangle } from 'lucide-react';

export default function ModeSelector({ selectedMode, setSelectedMode, isBrutal, setIsBrutal }) {
  const handleSelectMode = (modeId) => {
    sound.playClick();
    setSelectedMode(modeId);
  };

  const handleToggleBrutal = (brutal) => {
    if (brutal) {
      sound.playBuzzer();
    } else {
      sound.playClick();
    }
    setIsBrutal(brutal);
  };

  return (
    <section className="category-selector-section">
      <div className="category-header">
        <div className="category-title">
          <span>🎭</span>
          <span>SELECT CONVERSATIONAL CONTEXT</span>
        </div>

        <div className="brutal-toggle-wrapper">
          <button 
            className={`brutal-toggle-btn ${!isBrutal ? 'active-polite' : ''}`}
            onClick={() => handleToggleBrutal(false)}
          >
            😇 POLITE MODE
          </button>
          <button 
            className={`brutal-toggle-btn ${isBrutal ? 'active-brutal' : ''}`}
            onClick={() => handleToggleBrutal(true)}
          >
            😈 BRUTAL MODE
          </button>
        </div>
      </div>

      {isBrutal && (
        <div className="brutal-warning">
          <AlertTriangle size={14} />
          <span>⚠️ WARNING: BRUTAL MODE MAY CAUSE FRIENDSHIPS TO REQUIRE MAINTENANCE.</span>
        </div>
      )}

      <div className="category-grid">
        {MODES.map((m) => (
          <div 
            key={m.id}
            className={`category-card ${selectedMode === m.id ? 'active' : ''}`}
            onClick={() => handleSelectMode(m.id)}
          >
            <div className="cat-icon">{m.icon}</div>
            <div className="cat-name">{m.name}</div>
            <div className="cat-desc">{m.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
