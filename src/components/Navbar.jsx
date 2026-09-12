import React, { useState } from 'react';
import { Volume2, VolumeX, Mic, MicOff, Maximize, Minimize, Sparkles, Languages, User } from 'lucide-react';
import { sound } from '../services/audioService';
import { speech } from '../services/speechService';

export default function Navbar({ isBoothMode, setIsBoothMode }) {
  const [isMuted, setIsMuted] = useState(sound.isMuted());
  const [isTTS, setIsTTS] = useState(speech.ttsEnabled);
  const [voicePersona, setVoicePersona] = useState(speech.getPersona());

  const handleToggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) sound.playClick();
  };

  const handleToggleTTS = () => {
    const tts = speech.toggleTTS();
    setIsTTS(tts);
    sound.playClick();
  };

  const handlePersonaCycle = () => {
    sound.playClick();
    const personas = [
      { id: 'sassy_chechi', label: '💅 Sassy Chechi' },
      { id: 'ammayi_drama', label: '🎭 Dramatic Ammayi' },
      { id: 'cartoon_chipmunk', label: '🐿️ Funny Chipmunk' }
    ];

    const currentIdx = personas.findIndex(p => p.id === voicePersona);
    const nextIdx = (currentIdx + 1) % personas.length;
    const nextPersona = personas[nextIdx];

    speech.setPersona(nextPersona.id);
    setVoicePersona(nextPersona.id);
  };

  const handleToggleBooth = () => {
    sound.playClick();
    if (!isBoothMode) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
    setIsBoothMode(!isBoothMode);
  };

  const personaLabels = {
    sassy_chechi: '💅 Sassy Chechi Voice',
    ammayi_drama: '🎭 Dramatic Ammayi Voice',
    cartoon_chipmunk: '🐿️ Funny Chipmunk Voice'
  };

  return (
    <header className="app-header">
      <div className="header-top">
        <div className="logo-badge">
          <span className="logo-icon">🌍</span>
          <div>
            <h1 className="logo-text">WORLD'S MOST USELESS TRANSLATOR™</h1>
          </div>
        </div>

        <div className="header-controls">
          {/* Active Language Pair Badge */}
          <div 
            className="control-btn active" 
            style={{ 
              borderColor: 'var(--neon-lime)', 
              color: 'var(--neon-lime)', 
              background: 'rgba(57, 255, 20, 0.12)',
              cursor: 'default'
            }}
            title="Translating English into brutally honest Malayalam & Manglish"
          >
            <Languages size={16} />
            <span>🇬🇧 ENGLISH ➔ 🌴 MALAYALAM</span>
          </div>

          {/* Funny Female Voice Persona Button */}
          <button 
            className="control-btn active"
            style={{ borderColor: 'var(--neon-pink)', color: 'var(--neon-pink)', background: 'rgba(255, 0, 127, 0.12)' }}
            onClick={handlePersonaCycle}
            title="Click to switch funny girl voice styles"
          >
            <span>{personaLabels[voicePersona] || '💅 Sassy Girl Voice'}</span>
          </button>

          <button 
            className={`control-btn ${!isMuted ? 'active' : ''}`} 
            onClick={handleToggleSound}
            title={isMuted ? "Unmute sound effects" : "Mute sound effects"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            <span>{isMuted ? "MUTED" : "SFX ON"}</span>
          </button>

          <button 
            className={`control-btn ${isTTS ? 'active' : ''}`} 
            onClick={handleToggleTTS}
            title="Toggle Robotic/Female Voiceover (TTS)"
          >
            <Sparkles size={16} />
            <span>{isTTS ? "VOICE ON" : "VOICE OFF"}</span>
          </button>

          <button 
            className={`control-btn ${isBoothMode ? 'active' : ''}`} 
            onClick={handleToggleBooth}
            title="Toggle TV / Booth Big Screen Mode"
          >
            {isBoothMode ? <Minimize size={16} /> : <Maximize size={16} />}
            <span>{isBoothMode ? "NORMAL VIEW" : "BOOTH MODE"}</span>
          </button>
        </div>
      </div>

      <div className="tagline-bar">
        <div className="tagline-quote">
          “We don't translate languages. We translate what you <strong>REALLY meant in Malayalam</strong>.”
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--neon-cyan)', fontWeight: 'bold' }}>
          സറ്റയർ ചേച്ചിയുടെ കട്ട തഗ്ഗ് മലയാളം വോയ്‌സ് ഓവർ!
        </div>
      </div>
    </header>
  );
}
