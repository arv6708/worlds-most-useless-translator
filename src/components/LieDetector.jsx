import React from 'react';
import { Search, ShieldAlert } from 'lucide-react';

export default function LieDetector({ stats }) {
  if (!stats) return null;

  return (
    <div className="analytics-card">
      <div className="analytics-title">
        <Search size={20} color="var(--neon-cyan)" />
        <span>🕵️ HIDDEN INTENT ANALYSIS (LIE DETECTOR)</span>
      </div>

      <div className="lie-stats-list">
        <div>
          <div className="stat-item">
            <span className="stat-label">Neural Honesty Index:</span>
            <span className="stat-value" style={{ color: stats.honesty < 15 ? 'var(--brutal-red)' : 'var(--neon-lime)' }}>
              {stats.honesty}%
            </span>
          </div>
          <div className="stat-bar-wrapper">
            <div className="stat-bar-fill" style={{ width: `${stats.honesty}%`, background: 'var(--brutal-red)' }}></div>
          </div>
        </div>

        <div>
          <div className="stat-item">
            <span className="stat-label">Actual Estimated Delay/Arrival:</span>
            <span className="stat-value" style={{ color: 'var(--neon-amber)' }}>{stats.arrival}</span>
          </div>
        </div>

        <div>
          <div className="stat-item">
            <span className="stat-label">Chance of Getting Distracted:</span>
            <span className="stat-value">{stats.distraction}%</span>
          </div>
          <div className="stat-bar-wrapper">
            <div className="stat-bar-fill" style={{ width: `${stats.distraction}%` }}></div>
          </div>
        </div>

        <div>
          <div className="stat-item">
            <span className="stat-label">Chance of Saying "Traffic" / Excuse:</span>
            <span className="stat-value">{stats.excuse}%</span>
          </div>
          <div className="stat-bar-wrapper">
            <div className="stat-bar-fill" style={{ width: `${stats.excuse}%` }}></div>
          </div>
        </div>

        <div className="stat-item" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.6rem' }}>
          <span className="stat-label">AI Delusion Confidence:</span>
          <span className="stat-value" style={{ color: 'var(--neon-cyan)' }}>100% UNWARRANTED</span>
        </div>
      </div>
    </div>
  );
}
