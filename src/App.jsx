import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TickerBanner from './components/TickerBanner';
import ModeSelector from './components/ModeSelector';
import SoloTranslator from './components/SoloTranslator';
import TwoPersonMode from './components/TwoPersonMode';
import TranslatorBattle from './components/TranslatorBattle';
import FriendTrollMode from './components/FriendTrollMode';
import ChaosModal from './components/ChaosModal';
import ReceiptModal from './components/ReceiptModal';
import BoothHotkeys from './components/BoothHotkeys';
import { translateSentence } from './services/translationEngine';
import { sound } from './services/audioService';

export default function App() {
  const [activeTab, setActiveTab] = useState('solo'); // 'solo', 'two_person', 'battle', 'troll'
  const [selectedMode, setSelectedMode] = useState('college');
  const [isBrutal, setIsBrutal] = useState(true);
  const [isBoothMode, setIsBoothMode] = useState(false);

  // Active translation state
  const [translationData, setTranslationData] = useState(() => 
    translateSentence("I'll study after dinner.", { mode: 'college', isBrutal: true })
  );

  // Modals
  const [showChaos, setShowChaos] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  const handleTabChange = (tab) => {
    sound.playClick();
    setActiveTab(tab);
  };

  const handleTriggerChaos = () => {
    setShowChaos(true);
  };

  const handleOpenReceipt = () => {
    sound.playReceiptPrint();
    setShowReceipt(true);
  };

  return (
    <div className={`app-container ${isBoothMode ? 'booth-active' : ''}`}>
      {/* Top Navigation */}
      <Navbar 
        isBoothMode={isBoothMode} 
        setIsBoothMode={setIsBoothMode} 
      />

      {/* Ticker Stream of Real Meanings */}
      <TickerBanner />

      {/* Presentation Hook */}
      <div style={{ textAlign: 'center', margin: '1rem 0 1.25rem', padding: '0 1rem' }}>
        <p style={{ fontFamily: 'var(--font-accent)', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
          Every language has words. Humans have intentions.<br />
          <strong style={{ color: 'var(--neon-cyan)', fontSize: '1.25rem', textShadow: '0 0 10px rgba(0,240,255,0.4)' }}>
            We translate the intentions nobody asked us to translate.
          </strong>
        </p>
      </div>

      {/* Main Experience Mode Tabs */}
      <nav className="app-mode-tabs">
        <button 
          className={`mode-tab-btn ${activeTab === 'solo' ? 'active' : ''}`}
          onClick={() => handleTabChange('solo')}
        >
          <span className="tab-icon">🎤</span>
          <span>TALK TO TRANSLATOR</span>
        </button>

        <button 
          className={`mode-tab-btn ${activeTab === 'two_person' ? 'active' : ''}`}
          onClick={() => handleTabChange('two_person')}
        >
          <span className="tab-icon">👥</span>
          <span>TWO-PERSON MODE</span>
        </button>

        <button 
          className={`mode-tab-btn ${activeTab === 'battle' ? 'active' : ''}`}
          onClick={() => handleTabChange('battle')}
        >
          <span className="tab-icon">⚔️</span>
          <span>TRANSLATOR BATTLE</span>
        </button>

        <button 
          className={`mode-tab-btn ${activeTab === 'troll' ? 'active' : ''}`}
          onClick={() => handleTabChange('troll')}
        >
          <span className="tab-icon">😂</span>
          <span>TROLL MY FRIEND</span>
        </button>
      </nav>

      {/* Category / Context Selector for Solo & Applicable Modes */}
      {(activeTab === 'solo' || activeTab === 'two_person') && (
        <ModeSelector 
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
          isBrutal={isBrutal}
          setIsBrutal={setIsBrutal}
        />
      )}

      {/* Main Screen Views */}
      <main>
        {activeTab === 'solo' && (
          <SoloTranslator 
            selectedMode={selectedMode}
            isBrutal={isBrutal}
            onTriggerChaos={handleTriggerChaos}
            onOpenReceipt={handleOpenReceipt}
            translationData={translationData}
            setTranslationData={setTranslationData}
          />
        )}

        {activeTab === 'two_person' && (
          <TwoPersonMode 
            selectedMode={selectedMode}
            isBrutal={isBrutal}
            onTriggerChaos={handleTriggerChaos}
            onOpenReceipt={handleOpenReceipt}
          />
        )}

        {activeTab === 'battle' && (
          <TranslatorBattle 
            isBrutal={isBrutal}
          />
        )}

        {activeTab === 'troll' && (
          <FriendTrollMode 
            isBrutal={isBrutal}
          />
        )}
      </main>

      {/* Stage Hotkey Guide for Booth Mode */}
      <BoothHotkeys 
        isBoothMode={isBoothMode}
        onTriggerChaos={handleTriggerChaos}
        onOpenReceipt={handleOpenReceipt}
        onToggleBattle={() => handleTabChange('battle')}
      />

      {/* Chaos Escalation Modal (MAKE IT WORSE) */}
      {showChaos && (
        <ChaosModal 
          originalTranslation={translationData}
          onClose={() => setShowChaos(false)}
        />
      )}

      {/* Thermal Receipt Souvenir Modal */}
      {showReceipt && (
        <ReceiptModal 
          data={translationData}
          modeName={selectedMode}
          onClose={() => setShowReceipt(false)}
        />
      )}

      {/* Footer Branding */}
      <footer style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.8rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
        WORLD'S MOST USELESS TRANSLATOR™ — Built for pure chaos, friendship testing, and acoustic audacity.
      </footer>
    </div>
  );
}
