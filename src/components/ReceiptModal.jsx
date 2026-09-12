import React, { useState } from 'react';
import { formatReceiptText } from '../utils/receiptFormatter';
import { sound } from '../services/audioService';
import { Printer, Copy, Check } from 'lucide-react';

export default function ReceiptModal({ data, modeName, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!data) return null;

  const date = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const dateFull = new Date().toLocaleDateString();
  const txnId = 'KL-' + Math.floor(100000 + Math.random() * 900000);

  const handlePrint = () => {
    sound.playReceiptPrint();
    setTimeout(() => {
      window.print();
    }, 400);
  };

  const handleCopy = () => {
    const text = formatReceiptText(data, modeName || 'GENERAL');
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      sound.playClick();
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="receipt-paper" onClick={(e) => e.stopPropagation()}>
        <div className="receipt-header-title">
          WORLD'S MOST USELESS TRANSLATOR™
        </div>
        <div className="receipt-tagline">
          “We Translate What You REALLY Meant in Malayalam”
        </div>

        <div className="receipt-divider"></div>

        <div className="receipt-line">TERMINAL: KL-BOT-9000</div>
        <div className="receipt-line">TXN REF: {txnId}</div>
        <div className="receipt-line">DATE: {dateFull} {date}</div>
        <div className="receipt-line">LANG PAIR: EN ➔ ML (മലയാളം)</div>
        <div className="receipt-line">MODE: {modeName?.toUpperCase() || 'COLLEGE'}</div>

        <div className="receipt-divider"></div>

        <div className="receipt-line" style={{ fontWeight: 'bold' }}>ORIGINAL ENGLISH STATEMENT:</div>
        <div className="receipt-line" style={{ margin: '0.2rem 0 0.5rem', fontStyle: 'italic' }}>
          {data.literal_translation}
        </div>

        <div className="receipt-line" style={{ fontWeight: 'bold' }}>MALAYALAM MEANING (മലയാളം):</div>
        <div className="receipt-line" style={{ margin: '0.2rem 0 0.3rem', fontWeight: 'bold', fontSize: '0.85rem' }}>
          {data.malayalam_script || data.actual_meaning}
        </div>

        {data.malayalam_manglish && (
          <div className="receipt-line" style={{ color: '#444', fontStyle: 'italic', marginBottom: '0.5rem' }}>
            Manglish: “{data.malayalam_manglish}”
          </div>
        )}

        <div className="receipt-line" style={{ fontWeight: 'bold' }}>SCARED TO SAY (ഭയം):</div>
        <div className="receipt-line" style={{ margin: '0.2rem 0 0.5rem' }}>
          {data.scared_malayalam || data.hidden_intention}
        </div>

        <div className="receipt-divider"></div>

        <div className="receipt-line" style={{ fontWeight: 'bold' }}>NEURAL STATISTICAL AUDIT:</div>
        <div className="receipt-line">HONESTY DETECTED: {data.honesty_score || 4}%</div>
        <div className="receipt-line">PROCRASTINATION:  {data.procrastination_score || 94}%</div>
        <div className="receipt-line">DRAMA INDEX:      {data.drama_score || 88}%</div>
        <div className="receipt-line">FRIENDSHIP DAMAGE: {data.friendship_damage || 35}%</div>
        <div className="receipt-line">CONFIDENCE:       100% BLIND GUESS</div>

        <div className="receipt-divider"></div>

        <div className="receipt-line" style={{ fontStyle: 'italic', textAlign: 'center' }}>
          “{data.quip || 'സീൻ ആണ് മച്ചാനെ... സൗഹൃദം ഇപ്പോൾ ICU-വിൽ ആണ്!'}”
        </div>

        <div className="receipt-barcode">
          ||||| | || |||| ||| ||||
        </div>
        <div style={{ textAlign: 'center', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
          {txnId}
        </div>

        <div className="receipt-divider"></div>

        <div style={{ textAlign: 'center', fontSize: '0.72rem', fontWeight: 'bold' }}>
          THANK YOU FOR WASTING LANGUAGE™<br />
          NO REFUNDS FOR DAMAGED EGOS
        </div>

        <div className="receipt-actions">
          <button className="receipt-action-btn" onClick={handlePrint}>
            <Printer size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} />
            PRINT PHYSICAL
          </button>
          <button className="receipt-action-btn" onClick={handleCopy}>
            {copied ? <Check size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} /> : <Copy size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} />}
            {copied ? 'COPIED!' : 'COPY TEXT'}
          </button>
          <button className="receipt-action-btn btn-close" onClick={onClose}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
