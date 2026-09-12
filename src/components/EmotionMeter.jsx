import React from 'react';
import { Activity } from 'lucide-react';

export default function EmotionMeter({ emotions }) {
  if (!emotions) return null;

  const items = [
    { label: "Politeness", value: emotions.politeness, color: "var(--neon-cyan)" },
    { label: "Annoyance", value: emotions.annoyance, color: "var(--neon-amber)" },
    { label: "Panic", value: emotions.panic, color: "var(--brutal-red)" },
    { label: "Laziness", value: emotions.laziness, color: "var(--neon-purple)" },
    { label: "Passive Aggression", value: emotions.passive_aggression, color: "var(--neon-pink)" },
    { label: "Hidden Meaning", value: emotions.hidden_meaning, color: "var(--neon-lime)" }
  ];

  return (
    <div className="analytics-card">
      <div className="analytics-title">
        <Activity size={20} color="var(--neon-pink)" />
        <span>📊 EMOTIONAL SUBTEXT READINGS</span>
      </div>

      <div className="lie-stats-list">
        {items.map((it, idx) => (
          <div key={idx}>
            <div className="stat-item">
              <span className="stat-label">{it.label}</span>
              <span className="stat-value" style={{ color: it.color }}>{it.value}%</span>
            </div>
            <div className="stat-bar-wrapper">
              <div 
                className="stat-bar-fill" 
                style={{ 
                  width: `${Math.min(100, it.value)}%`, 
                  background: it.color 
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '0.8rem', fontSize: '0.72rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>
        * Not a scientific instrument. 100% entertainment nonsense certified.
      </div>
    </div>
  );
}
