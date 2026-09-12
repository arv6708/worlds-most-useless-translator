import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { sound } from '../services/audioService';
import { speech } from '../services/speechService';
import { translateSentence, judgeBattle } from '../services/translationEngine';
import { Swords, Trophy, Clock, Play, RotateCcw } from 'lucide-react';

export default function TranslatorBattle({ isBrutal }) {
  const [stage, setStage] = useState('ready'); // ready, turnA, turnB, judging, finished
  const [textA, setTextA] = useState('');
  const [transA, setTransA] = useState(null);
  const [textB, setTextB] = useState('');
  const [transB, setTransB] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [verdict, setVerdict] = useState(null);

  // Countdown timer for Person B's turn
  useEffect(() => {
    let timer = null;
    if (stage === 'turnB' && timeLeft > 0) {
      timer = setTimeout(() => {
        sound.playCountdownBeep(timeLeft <= 3);
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (stage === 'turnB' && timeLeft === 0) {
      // Auto-submit Person B timeout response
      handleSubmitB(textB || "Whatever.");
    }
    return () => clearTimeout(timer);
  }, [stage, timeLeft]);

  const handleStartBattle = () => {
    sound.playBattleGong();
    setStage('turnA');
    setTextA('');
    setTransA(null);
    setTextB('');
    setTransB(null);
    setVerdict(null);
  };

  const handleSubmitA = (inputVal) => {
    const val = inputVal || textA || "I'm fine.";
    sound.playClick();
    const res = translateSentence(val, { mode: 'relationship', isBrutal });
    setTransA(res);
    sound.playRevealSting();

    // Switch to Person B turn with 10s timer
    setStage('turnB');
    setTimeLeft(10);
  };

  const handleSubmitB = (inputVal) => {
    const val = inputVal || textB || "I don't care.";
    sound.playClick();
    const res = translateSentence(val, { mode: 'relationship', isBrutal });
    setTransB(res);
    sound.playRevealSting();

    setStage('judging');

    setTimeout(() => {
      const v = judgeBattle(textA, transA, val, res);
      setVerdict(v);
      setStage('finished');
      sound.playBattleGong();

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  return (
    <div className="battle-container">
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: 'var(--neon-amber)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: '800' }}>
        <Swords size={20} />
        <span>HEAD-TO-HEAD DUEL</span>
      </div>

      <h2 className="battle-banner">
        ⚔️ THE TRANSLATOR BATTLE
      </h2>
      <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 1.5rem', fontSize: '0.95rem' }}>
        Person A speaks. Person B gets 10 seconds to counter. AI determines whose statement had the greater hidden meaning.
      </p>

      {stage === 'ready' && (
        <button 
          className="chaos-worse-btn" 
          style={{ background: 'linear-gradient(135deg, var(--neon-amber), #ff5500)', margin: '1rem auto' }}
          onClick={handleStartBattle}
        >
          <Play size={22} />
          START BATTLE SHOWDOWN
        </button>
      )}

      {/* Stage: Turn A */}
      {stage === 'turnA' && (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ color: 'var(--neon-cyan)', fontFamily: 'var(--font-accent)', fontWeight: '800', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
            👤 PERSON A: MAKE YOUR OPENING STATEMENT
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              className="text-input-field"
              placeholder="e.g. 'I am fine.'"
              value={textA}
              onChange={(e) => setTextA(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmitA(textA)}
            />
            <button className="translate-action-btn" onClick={() => handleSubmitA(textA)}>
              FIRE
            </button>
          </div>
          <div className="presets-row" style={{ justifyContent: 'center' }}>
            {["I'm fine.", "Do whatever you want.", "I didn't even notice.", "We need to talk."].map((p, i) => (
              <button key={i} className="preset-pill" onClick={() => { setTextA(p); handleSubmitA(p); }}>
                “{p}”
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Stage: Turn B (10-second countdown) */}
      {stage === 'turnB' && (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.8rem', borderRadius: '12px', marginBottom: '1rem', border: '1px solid rgba(0,240,255,0.3)' }}>
            <div style={{ color: 'var(--neon-cyan)', fontSize: '0.85rem' }}>PERSON A SAID:</div>
            <div style={{ fontWeight: 'bold' }}>{transA?.actual_meaning}</div>
          </div>

          <div style={{ color: 'var(--neon-pink)', fontFamily: 'var(--font-accent)', fontWeight: '800', fontSize: '1.2rem' }}>
            👤 PERSON B: YOU HAVE 10 SECONDS TO COUNTER!
          </div>

          <div className="battle-timer">
            {timeLeft}s
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              className="text-input-field"
              placeholder="Quick! Counter statement..."
              value={textB}
              onChange={(e) => setTextB(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmitB(textB)}
              autoFocus
            />
            <button 
              className="translate-action-btn" 
              style={{ background: 'linear-gradient(135deg, var(--neon-pink), #b5179e)', color: '#fff' }}
              onClick={() => handleSubmitB(textB)}
            >
              COUNTER
            </button>
          </div>
          <div className="presets-row" style={{ justifyContent: 'center' }}>
            {["Whatever.", "I was about to say the same thing.", "I'm not the one who started it.", "Cool."].map((p, i) => (
              <button key={i} className="preset-pill" onClick={() => { setTextB(p); handleSubmitB(p); }}>
                “{p}”
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Stage: Finished Verdict */}
      {stage === 'finished' && verdict && (
        <div className="battle-verdict-card">
          <div style={{ fontSize: '0.85rem', color: 'var(--neon-amber)', fontWeight: 'bold', letterSpacing: '0.1em' }}>
            OFFICIAL AI NEURAL JUDGE VERDICT
          </div>

          <div className="verdict-winner">
            🏆 WINNER: {verdict.winner}
          </div>

          <div className="verdict-subtext">
            “{verdict.subtext}”
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '1.25rem 0', fontFamily: 'var(--font-mono)' }}>
            <div>
              <div style={{ color: 'var(--neon-cyan)' }}>PERSON A DELUSION:</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{verdict.scoreA}%</div>
            </div>
            <div>
              <div style={{ color: 'var(--neon-pink)' }}>PERSON B DELUSION:</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{verdict.scoreB}%</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', margin: '1rem auto' }}>
            <button 
              className="speak-card-btn" 
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', borderColor: 'var(--neon-lime)', color: 'var(--neon-lime)' }}
              onClick={() => speech.speak(`Winner: ${verdict.winner}. ${verdict.subtext}`)}
            >
              🔊 PLAY VERDICT VOICE
            </button>
            <button className="receipt-btn" onClick={handleStartBattle} style={{ margin: 0, padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
              <RotateCcw size={16} />
              PLAY ANOTHER ROUND
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
