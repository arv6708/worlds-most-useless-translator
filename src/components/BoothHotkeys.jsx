import React, { useEffect } from 'react';

export default function BoothHotkeys({ onTriggerChaos, onOpenReceipt, onToggleBattle, isBoothMode }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger hotkeys if user is actively typing inside an input field
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        return;
      }

      if (e.key === 'w' || e.key === 'W') {
        onTriggerChaos();
      } else if (e.key === 'r' || e.key === 'R') {
        onOpenReceipt();
      } else if (e.key === 'b' || e.key === 'B') {
        onToggleBattle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onTriggerChaos, onOpenReceipt, onToggleBattle]);

  if (!isBoothMode) return null;

  return (
    <div className="booth-hotkeys-bar">
      <span>STAGE SHORTCUTS:</span>
      <span><span className="hotkey-tag">W</span> Make It Worse</span>
      <span><span className="hotkey-tag">R</span> Print Receipt</span>
      <span><span className="hotkey-tag">B</span> Duel Battle</span>
    </div>
  );
}
