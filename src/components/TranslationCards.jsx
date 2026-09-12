import React, { useState } from 'react';
import { Volume2, Flame, Printer, Dices, Zap, Sparkles } from 'lucide-react';
import { sound } from '../services/audioService';
import { speech } from '../services/speechService';
import LieDetector from './LieDetector';
import EmotionMeter from './EmotionMeter';

export default function TranslationCards({ data, onTriggerChaos, onOpenReceipt, onRollRoast, modeName }) {
  const [selectedCharId, setSelectedCharId] = useState('damu');

  if (!data) return null;

  const handleSpeak = (text) => {
    sound.playClick();
    speech.speak(text);
  };

  const handleRoll = () => {
    sound.playClick();
    if (onRollRoast) onRollRoast();
  };

  const characters = data.character_reactions || [];
  const activeChar = characters.find(c => c.id === selectedCharId) || characters[0];

  return (
    <div className="translation-results-section">
      <div className="cards-reveal-grid">
        {/* Card 1: What They Said (English) */}
        <div className="reveal-card card-said" style={{ animationDelay: '0.05s' }}>
          <div>
            <div className="card-step-badge badge-said">
              <span>👤</span>
              <span>1. WHAT THEY SAID (ENGLISH)</span>
            </div>
            <div className="card-content-text" style={{ color: 'var(--text-muted)' }}>
              {data.literal_translation}
            </div>
          </div>
          <div className="card-footer-meta">
            <span>Verbatim English Speech</span>
            <button className="speak-card-btn" onClick={() => handleSpeak(data.literal_translation)}>
              <Volume2 size={13} />
              <span>PLAY</span>
            </button>
          </div>
        </div>

        {/* Card 2: What They Actually Meant (Malayalam & Manglish) */}
        <div className="reveal-card card-meant" style={{ animationDelay: '0.2s' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.4rem' }}>
              <div className="card-step-badge badge-meant" style={{ margin: 0 }}>
                <span>🌴</span>
                <span>2. WHAT THEY ACTUALLY MEANT</span>
              </div>
              {data.headline && (
                <span style={{ fontSize: '0.75rem', background: 'rgba(0,240,255,0.2)', border: '1px solid var(--neon-cyan)', color: 'var(--neon-cyan)', padding: '0.15rem 0.5rem', borderRadius: '999px', fontWeight: 'bold' }}>
                  {data.headline}
                </span>
              )}
            </div>
            
            {/* Malayalam Script */}
            <div className="card-content-text" style={{ color: '#fff', textShadow: '0 0 14px rgba(0,240,255,0.4)', fontSize: '1.45rem', lineHeight: '1.45' }}>
              {data.malayalam_script || data.actual_meaning}
            </div>

            {/* Manglish Phonetic Transliteration */}
            {data.malayalam_manglish && (
              <div style={{ background: 'rgba(0, 240, 255, 0.12)', border: '1px solid rgba(0, 240, 255, 0.3)', borderRadius: '8px', padding: '0.5rem 0.75rem', margin: '0.6rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--neon-cyan)' }}>
                <strong>🗣️ Manglish:</strong> “{data.malayalam_manglish}”
              </div>
            )}

            {/* Brutal English Explanation */}
            {data.english_meaning && (
              <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginTop: '0.4rem' }}>
                💡 <strong>Brutal English Subtext:</strong> {data.english_meaning}
              </div>
            )}

            {/* The Roast of the Century 1-liner */}
            {data.one_liner_burn && (
              <div style={{ background: 'rgba(255, 183, 3, 0.12)', border: '1px dashed var(--neon-amber)', borderRadius: '8px', padding: '0.45rem 0.7rem', marginTop: '0.6rem', fontSize: '0.82rem', color: 'var(--neon-amber)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Zap size={14} />
                <span><strong>SAVAGE BURN:</strong> {data.one_liner_burn}</span>
              </div>
            )}
          </div>

          <div className="card-footer-meta" style={{ marginTop: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <button 
              className="speak-card-btn" 
              style={{ background: 'rgba(181, 23, 158, 0.2)', borderColor: 'var(--neon-pink)', color: 'var(--neon-pink)', padding: '0.35rem 0.8rem', fontWeight: 'bold' }} 
              onClick={handleRoll}
              title="Click to roll another comedy flavor (Cinema, Brutal, Absurd, Passive)"
            >
              <Dices size={14} />
              <span>🎲 ROLL ANOTHER ROAST!</span>
            </button>

            <button 
              className="speak-card-btn" 
              style={{ borderColor: 'var(--neon-cyan)', color: 'var(--neon-cyan)', padding: '0.35rem 0.8rem', fontWeight: 'bold' }} 
              onClick={() => handleSpeak(data.malayalam_manglish || data.actual_meaning)}
              title="Click to hear the sarcastic female voice read this translation"
            >
              <Volume2 size={14} />
              <span>🔊 CLICK TO READ VOICE</span>
            </button>
          </div>
        </div>

        {/* Card 3: What They Were Too Scared To Say */}
        <div className="reveal-card card-scared" style={{ animationDelay: '0.35s' }}>
          <div>
            <div className="card-step-badge badge-scared">
              <span>🤫</span>
              <span>3. WHAT THEY WERE TOO SCARED TO SAY</span>
            </div>

            {/* Malayalam Script */}
            <div className="card-content-text" style={{ color: '#ffb703', fontSize: '1.35rem', lineHeight: '1.45' }}>
              {data.scared_malayalam || data.hidden_intention}
            </div>

            {/* Manglish */}
            {data.scared_manglish && (
              <div style={{ background: 'rgba(255, 0, 127, 0.12)', border: '1px solid rgba(255, 0, 127, 0.3)', borderRadius: '8px', padding: '0.5rem 0.75rem', margin: '0.6rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--neon-pink)' }}>
                <strong>🗣️ Manglish:</strong> “{data.scared_manglish}”
              </div>
            )}
          </div>

          <div className="card-footer-meta">
            <span style={{ color: 'var(--neon-pink)' }}>Subconscious Fear Exposed</span>
            <button className="speak-card-btn" onClick={() => handleSpeak(data.scared_manglish || data.hidden_intention)}>
              <Volume2 size={13} />
              <span>PLAY</span>
            </button>
          </div>
        </div>
      </div>

      {/* 🎭 CULT COMEDY CHARACTER THOUGHTS SECTION */}
      {activeChar && (
        <div 
          className="reveal-card"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 28, 45, 0.95), rgba(10, 15, 25, 0.95))',
            border: '2px solid var(--neon-cyan)',
            boxShadow: '0 0 25px rgba(0, 240, 255, 0.2)',
            margin: '0.8rem 0 1rem',
            padding: '1.25rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '0.92rem' }}>
              <span style={{ fontSize: '1.3rem' }}>🎭</span>
              <span>KERALA CULT COMEDY CHARACTER REACTION (സിനിമ കോമഡി ചിന്തകൾ)</span>
            </div>

            <button 
              className="speak-card-btn"
              style={{ borderColor: 'var(--neon-cyan)', color: 'var(--neon-cyan)', padding: '0.35rem 0.8rem', fontWeight: 'bold' }}
              onClick={() => handleSpeak(activeChar.thought.thought_mg || activeChar.thought.thought_ml)}
              title="Click to hear this character's hilarious reaction"
            >
              <Volume2 size={14} />
              <span>🔊 READ CHARACTER REACTION</span>
            </button>
          </div>

          {/* Character Selector Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            {characters.map((c) => (
              <button
                key={c.id}
                className={`preset-pill ${selectedCharId === c.id ? 'active' : ''}`}
                style={{
                  background: selectedCharId === c.id ? 'rgba(0, 240, 255, 0.25)' : 'rgba(255,255,255,0.05)',
                  border: selectedCharId === c.id ? '1px solid var(--neon-cyan)' : '1px solid rgba(255,255,255,0.1)',
                  color: selectedCharId === c.id ? '#fff' : 'var(--text-muted)',
                  fontSize: '0.85rem',
                  padding: '0.4rem 0.8rem',
                  fontWeight: selectedCharId === c.id ? 'bold' : 'normal'
                }}
                onClick={() => {
                  sound.playClick();
                  setSelectedCharId(c.id);
                }}
              >
                <span>{c.avatar}</span>
                <span>{c.char}</span>
              </button>
            ))}
          </div>

          {/* Active Character Bio & Thought */}
          <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '10px', padding: '1rem', border: '1px solid rgba(0,240,255,0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '1.6rem' }}>{activeChar.avatar}</span>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 'bold', color: 'var(--neon-cyan)' }}>
                  {activeChar.char}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  {activeChar.movie}
                </div>
              </div>
            </div>

            {/* Character Honest Thought */}
            <div style={{ fontSize: '1.25rem', color: '#fff', lineHeight: '1.5', margin: '0.6rem 0', fontWeight: '600' }}>
              “{activeChar.thought.thought_ml}”
            </div>

            {/* Manglish */}
            {activeChar.thought.thought_mg && (
              <div style={{ fontSize: '0.85rem', color: 'var(--neon-lime)', fontFamily: 'var(--font-mono)', marginBottom: '0.6rem' }}>
                🗣️ Manglish: “{activeChar.thought.thought_mg}”
              </div>
            )}

            {/* Character Punchline */}
            <div style={{ background: 'rgba(255, 183, 3, 0.15)', borderLeft: '3px solid var(--neon-amber)', padding: '0.5rem 0.8rem', borderRadius: '4px', fontSize: '0.88rem', color: 'var(--neon-amber)', fontWeight: 'bold' }}>
              🥊 Punchline: {activeChar.thought.punchline}
            </div>
          </div>
        </div>
      )}

      {/* Stand-up Comedy Bit Section */}
      {data.standup && (
        <div 
          className="reveal-card" 
          style={{ 
            background: 'linear-gradient(135deg, rgba(30, 20, 50, 0.95), rgba(18, 10, 25, 0.95))', 
            border: '2px solid var(--neon-pink)',
            boxShadow: '0 0 25px rgba(255, 0, 127, 0.25)',
            margin: '0.5rem 0 1rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon-pink)', fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '0.9rem' }}>
              <span style={{ fontSize: '1.4rem' }}>🎙️</span>
              <span>STAND-UP COMEDIAN'S OBSERVATIONAL BREAKDOWN (സ്റ്റാൻഡ്-അപ്പ്)</span>
            </div>
            <button 
              className="speak-card-btn" 
              style={{ borderColor: 'var(--neon-pink)', color: 'var(--neon-pink)', padding: '0.35rem 0.8rem', fontWeight: 'bold' }}
              onClick={() => handleSpeak(data.standup.monologue_mg || data.standup.monologue_en)}
              title="Click to hear the stand-up comedy performance"
            >
              <Volume2 size={14} />
              <span>🔊 READ STAND-UP BIT</span>
            </button>
          </div>

          <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--neon-amber)', marginBottom: '0.6rem' }}>
            {data.standup.setup}
          </div>

          {/* Malayalam / Manglish Standup Routine */}
          <div style={{ fontSize: '1.15rem', color: '#fff', lineHeight: '1.6', marginBottom: '0.8rem' }}>
            “{data.standup.monologue_ml}”
          </div>

          {/* English Observational Standup Routine */}
          <div style={{ background: 'rgba(0,0,0,0.4)', borderLeft: '3px solid var(--neon-cyan)', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '0.8rem' }}>
            <strong>English Routine:</strong> “{data.standup.monologue_en}”
          </div>

          {/* Mic Drop Punchline */}
          <div style={{ background: 'rgba(255, 0, 127, 0.15)', border: '1px dashed var(--neon-pink)', borderRadius: '8px', padding: '0.6rem 1rem', fontSize: '0.9rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🎤 <strong>MIC DROP:</strong> {data.standup.mic_drop}</span>
          </div>
        </div>
      )}

      {/* AI Personality Quip */}
      {data.quip && (
        <div className="ai-quip-bubble">
          <span className="quip-avatar">🤖</span>
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--neon-pink)', fontWeight: 'bold' }}>
              MALAYALAM BOT COMMENTARY
            </div>
            <div style={{ fontWeight: '600', fontSize: '1rem', color: '#fff' }}>
              “{data.quip}”
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons: MAKE IT WORSE & PRINT RECEIPT */}
      <div className="action-buttons-bar">
        <button className="chaos-worse-btn" onClick={onTriggerChaos}>
          <Flame size={24} />
          <span>🎲 MAKE IT WORSE (സീൻ ആക്ക്!)</span>
        </button>

        <button className="receipt-btn" onClick={onOpenReceipt}>
          <Printer size={20} />
          <span>📜 PRINT RECEIPT SOUVENIR</span>
        </button>
      </div>

      {/* Analytics Section: Lie Detector + Emotion Meter */}
      <div className="analytics-section">
        <LieDetector stats={data.stats} />
        <EmotionMeter emotions={data.emotions} />
      </div>
    </div>
  );
}
