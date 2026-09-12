import React, { useState, useEffect } from 'react';
import { sound } from '../services/audioService';
import { speech } from '../services/speechService';
import { Flame, AlertOctagon, X, Zap } from 'lucide-react';

export default function ChaosModal({ originalTranslation, onClose }) {
  const [level, setLevel] = useState(1);
  const worseList = originalTranslation?.worse_levels || [
    "I'm late.",
    "My location is now an unsolved archaeological mystery.",
    "Please inform the authorities that I may arrive by next semester.",
    "The laws of relativity have been amended to accommodate my tardiness."
  ];

  useEffect(() => {
    sound.playChaosAlarm();
    document.body.classList.add('shake-active');

    return () => {
      document.body.classList.remove('shake-active');
    };
  }, []);

  const handleNextWorse = () => {
    sound.playChaosAlarm();
    const nextLvl = (level % worseList.length) + 1;
    setLevel(nextLvl);
  };

  const currentText = worseList[level - 1] || worseList[worseList.length - 1];

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ animation: 'sirenFlash 0.8s infinite' }}>
      <div 
        className="analytics-card" 
        onClick={(e) => e.stopPropagation()}
        style={{ 
          maxWidth: '650px', 
          width: '100%', 
          border: '2px solid var(--brutal-red)', 
          background: 'rgba(18, 10, 15, 0.95)',
          boxShadow: '0 0 50px rgba(255, 0, 80, 0.6)',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <button 
          onClick={onClose}
          style={{ 
            position: 'absolute', 
            top: '1rem', 
            right: '1rem', 
            background: 'transparent', 
            border: 'none', 
            color: '#fff', 
            cursor: 'pointer' 
          }}
        >
          <X size={24} />
        </button>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: 'var(--brutal-red)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.1em' }}>
          <AlertOctagon size={18} />
          <span>TRANSLATION INTENSITY INCREASING... [TIER {level}/{worseList.length}]</span>
        </div>

        <h2 style={{ fontFamily: 'var(--font-accent)', fontSize: '2rem', fontWeight: '900', margin: '0.75rem 0', color: '#fff', textTransform: 'uppercase' }}>
          🚨 CHAOS AMPLIFIER ACTIVATED
        </h2>

        <div style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,42,42,0.3)', borderRadius: '14px', padding: '1.5rem', margin: '1.25rem 0' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
            ORIGINAL: {originalTranslation.literal_translation}
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--neon-amber)', lineHeight: '1.4' }}>
            {currentText}
          </div>
          <div style={{ marginTop: '0.8rem' }}>
            <button 
              className="speak-card-btn"
              style={{ margin: '0 auto', borderColor: 'var(--neon-amber)', color: 'var(--neon-amber)', padding: '0.35rem 0.8rem' }}
              onClick={() => speech.speak(currentText)}
            >
              🔊 CLICK TO READ ALOUD
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            className="chaos-worse-btn" 
            onClick={handleNextWorse}
            style={{ fontSize: '1.1rem', padding: '0.9rem 1.8rem' }}
          >
            <Flame size={20} />
            MAKE IT EVEN WORSE! (TIER {level + 1})
          </button>

          <button 
            className="receipt-btn" 
            onClick={onClose}
            style={{ fontSize: '1rem', padding: '0.9rem 1.5rem' }}
          >
            ABORT CHAOS (I APOLOGIZE)
          </button>
        </div>
      </div>
    </div>
  );
}
