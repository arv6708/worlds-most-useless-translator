import React, { useState } from 'react';
import { Flame, Send, Volume2, Smile, ShieldAlert } from 'lucide-react';
import { sound } from '../services/audioService';
import { speech } from '../services/speechService';
import { translateSentence } from '../services/translationEngine';

export default function FriendTrollMode({ isBrutal }) {
  const [targetStatement, setTargetStatement] = useState("Bro, can you lend me ₹100?");
  const [trollLevel, setTrollLevel] = useState(75);
  const [trollResult, setTrollResult] = useState({
    translation: "“I have already spent my money on something completely unnecessary.”",
    intention: "“I hope you forget I ever borrowed it within 48 hours.”",
    response: "“Sure. I accept repayment strictly in high-calorie snacks.”"
  });

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setTrollLevel(val);
    if (val % 25 === 0) {
      sound.playTrollLevelUp();
    }
  };

  const handleTroll = (textToUse) => {
    const text = textToUse || targetStatement;
    if (!text.trim()) return;

    sound.playClick();
    const res = translateSentence(text, { mode: 'friend', isBrutal, trollLevel });
    sound.playRevealSting();

    setTrollResult({
      translation: res.actual_meaning,
      intention: res.hidden_intention,
      response: res.troll?.response || "“I heard you. I chose to ignore you.”"
    });
  };

  const trollPresets = [
    "Bro, can you lend me ₹100?",
    "You can have one bite.",
    "Bro, where are you?",
    "Trust me on this one."
  ];

  return (
    <div className="troll-container">
      <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon-pink)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: '800' }}>
          <Flame size={18} />
          <span>TROLL CONVERTER ENGINE</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-accent)', fontSize: '1.8rem', fontWeight: '800', marginTop: '0.3rem' }}>
          😂 FRIEND TROLL & COMEBACK GENERATOR
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Enter whatever suspicious sentence your friend just uttered. We will generate their hidden trap and your optimal comeback.
        </p>
      </div>

      {/* Troll Level Slider */}
      <div className="troll-slider-wrapper">
        <div className="troll-slider-header">
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--neon-amber)' }}>
            <Flame size={18} />
            <span>🔥 TROLL SEVERITY LEVEL:</span>
          </span>
          <span style={{ fontSize: '1.2rem', color: trollLevel > 70 ? 'var(--brutal-red)' : 'var(--neon-cyan)' }}>
            {trollLevel} / 100 {trollLevel > 75 ? '(SAVAGE)' : trollLevel > 40 ? '(SPICY)' : '(MILD)'}
          </span>
        </div>
        <input 
          type="range" 
          min="1" 
          max="100" 
          value={trollLevel} 
          onChange={handleSliderChange}
          className="troll-slider"
        />
      </div>

      {/* Input */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
        <input 
          type="text" 
          className="text-input-field"
          placeholder="What did your friend say? (e.g. 'Can you lend me ₹100?')"
          value={targetStatement}
          onChange={(e) => setTargetStatement(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleTroll()}
        />
        <button 
          className="translate-action-btn"
          style={{ background: 'linear-gradient(135deg, var(--neon-pink), #b5179e)', color: '#fff' }}
          onClick={() => handleTroll()}
        >
          <Flame size={18} />
          <span>DECODE & ROAST</span>
        </button>
      </div>

      <div className="presets-row" style={{ marginBottom: '1.5rem' }}>
        <span className="presets-label">⚡ Quick Traps:</span>
        {trollPresets.map((p, i) => (
          <button key={i} className="preset-pill" onClick={() => { setTargetStatement(p); handleTroll(p); }}>
            “{p}”
          </button>
        ))}
      </div>

      {/* 3 Result Cards */}
      <div className="cards-reveal-grid">
        {/* Friend's Translation */}
        <div className="reveal-card card-said">
          <div>
            <div className="card-step-badge badge-said">
              <span>🎭</span>
              <span>YOUR FRIEND'S TRANSLATION</span>
            </div>
            <div className="card-content-text">
              {trollResult.translation}
            </div>
          </div>
          <div className="card-footer-meta">
            <span>Decoded Surface Truth</span>
            <button className="speak-card-btn" onClick={() => speech.speak(trollResult.translation)}>
              <Volume2 size={13} />
              <span>PLAY</span>
            </button>
          </div>
        </div>

        {/* Friend's Secret Intention */}
        <div className="reveal-card card-scared">
          <div>
            <div className="card-step-badge badge-scared">
              <span>🕵️</span>
              <span>SECRET INTENTION</span>
            </div>
            <div className="card-content-text">
              {trollResult.intention}
            </div>
          </div>
          <div className="card-footer-meta">
            <span style={{ color: 'var(--neon-pink)' }}>Hidden Agenda Uncovered</span>
            <button className="speak-card-btn" onClick={() => speech.speak(trollResult.intention)}>
              <Volume2 size={13} />
              <span>PLAY</span>
            </button>
          </div>
        </div>

        {/* Recommended Comeback */}
        <div className="reveal-card card-meant">
          <div>
            <div className="card-step-badge badge-meant">
              <span>🎯</span>
              <span>RECOMMENDED COMEBACK</span>
            </div>
            <div className="card-content-text" style={{ color: 'var(--neon-lime)' }}>
              {trollResult.response}
            </div>
          </div>
          <div className="card-footer-meta">
            <span style={{ color: 'var(--neon-lime)', fontWeight: 'bold' }}>AI Defense Shield</span>
            <button 
              className="speak-card-btn" 
              style={{ borderColor: 'var(--neon-lime)', color: 'var(--neon-lime)' }}
              onClick={() => speech.speak(trollResult.response)}
            >
              <Volume2 size={13} />
              <span>DEPLOY ROAST</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
