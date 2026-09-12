import React from 'react';
import { TICKER_EXAMPLES_MALAYALAM } from '../services/translationData';

export default function TickerBanner() {
  // Double the list for seamless looping marquee
  const items = [...TICKER_EXAMPLES_MALAYALAM, ...TICKER_EXAMPLES_MALAYALAM];

  return (
    <div className="ticker-container">
      <span className="ticker-label">🌴 ENGLISH ➔ MALAYALAM LIVE STREAM</span>
      <div className="ticker-track-wrapper">
        <div className="ticker-track">
          {items.map((item, idx) => (
            <div className="ticker-item" key={idx}>
              <span className="orig">“{item.original}”</span>
              <span className="arrow">➔</span>
              <span className="trans" style={{ color: 'var(--neon-lime)' }}>“{item.mlScript}”</span>
              <span style={{ color: 'var(--neon-amber)', fontStyle: 'italic', fontSize: '0.8rem' }}>({item.manglish})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
