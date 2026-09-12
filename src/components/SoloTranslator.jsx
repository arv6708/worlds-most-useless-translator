import React, { useState, useEffect } from 'react';
import { Mic, Send, Sparkles, RefreshCw, Flame } from 'lucide-react';
import { sound } from '../services/audioService';
import { speech } from '../services/speechService';
import { translateSentence } from '../services/translationEngine';
import { MODE_PRESETS } from '../services/translationData';
import TranslationCards from './TranslationCards';

function getPlaceholderForMode(mode) {
  switch (mode) {
    case 'corporate':
      return "Say or type corporate jargon (e.g. 'Let\'s circle back', 'Bandwidth issue', 'Per my previous email')...";
    case 'drama':
      return "Say or type dramatic dialogues (e.g. 'Trust me I have a plan', 'I\'ll be back in 5 minutes', 'I am going to canteen')...";
    case 'gen_z':
      return "Say or type Gen Z lines (e.g. 'I\'m so tired', 'It\'s not that serious', 'No thoughts head empty')...";
    case 'indian_college':
      return "Say or type viva/lab lines (e.g. 'Give me one more mark', 'Attendance is optional', 'Lab will finish early')...";
    case 'npc':
      return "Say or type gaming/NPC lines (e.g. 'Disconnecting from party', 'Mana level depleted', 'Send me quest notes')...";
    case 'malayalam':
      return "Say or type Kerala slang (e.g. 'Scene aanu', 'Ippo thudangaam', 'Pinne nokkaam')...";
    case 'group_project':
      return "Say or type group project lines (e.g. 'Divide work equally', 'I\'ll handle presentation', 'Deadline is tomorrow')...";
    case 'teacher':
      return "Say or type teacher lines (e.g. 'This is very easy', 'One small assignment', 'Final warning')...";
    case 'parents':
      return "Say or type parent lines (e.g. 'Do whatever you want', 'Who is this friend', 'Come here for a minute')...";
    case 'relationship':
      return "Say or type relationship lines (e.g. 'Nothing', 'It\'s fine', 'I\'m not hungry', 'Have fun with friends')...";
    case 'friend':
      return "Say or type friend excuses (e.g. 'Where are you', 'One minute', 'I have money', 'Have one bite')...";
    default:
      return "Say or type in English (e.g. 'I\'ll study after dinner', 'Bro send me the notes', 'Network issue')...";
  }
}

export default function SoloTranslator({ 
  selectedMode, 
  isBrutal, 
  onTriggerChaos, 
  onOpenReceipt,
  translationData,
  setTranslationData 
}) {
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [spiceLevel, setSpiceLevel] = useState('damu'); // 'mild', 'spicy', 'damu'
  const [flavorIndex, setFlavorIndex] = useState(0);

  const presets = MODE_PRESETS[selectedMode] || MODE_PRESETS.college;

  // Whenever conversational context mode is selected / switched, immediately update the input text and translation!
  useEffect(() => {
    const currentPresets = MODE_PRESETS[selectedMode] || MODE_PRESETS.college;
    if (currentPresets && currentPresets.length > 0) {
      const sample = currentPresets[0];
      setInputText(sample.input);
      setFlavorIndex(0);

      // Instantly generate and display the new mode's translation
      const result = translateSentence(sample.input, { 
        mode: selectedMode, 
        isBrutal, 
        spiceLevel,
        flavorIndex: 0
      });
      setTranslationData(result);
    }
  }, [selectedMode, isBrutal]);

  const handleTranslate = (textToUse, customFlavorIdx = null) => {
    const query = (textToUse !== undefined && textToUse !== null) ? textToUse : inputText;
    if (!query.trim()) return;

    const fIndex = customFlavorIdx !== null ? customFlavorIdx : flavorIndex;

    sound.playClick();
    setIsProcessing(true);

    setTimeout(() => {
      const result = translateSentence(query, { 
        mode: selectedMode, 
        isBrutal, 
        spiceLevel,
        flavorIndex: fIndex
      });
      setTranslationData(result);
      setIsProcessing(false);
      sound.playRevealSting();
    }, 280);
  };

  const handleRollRoast = () => {
    const nextIdx = (flavorIndex + 1) % 4;
    setFlavorIndex(nextIdx);
    const textQuery = inputText || (translationData?.literal_translation?.replace(/[“”"]/g, ''));
    handleTranslate(textQuery, nextIdx);
  };

  const handleMicClick = () => {
    if (isListening) {
      speech.stopListening();
      setIsListening(false);
      sound.playClick();
    } else {
      sound.playClick();
      const started = speech.startListening(
        (transcript, isFinal) => {
          setInputText(transcript);
          if (isFinal) {
            setIsListening(false);
            handleTranslate(transcript);
          }
        },
        (err) => {
          console.warn('Speech error:', err);
          setIsListening(false);
        },
        () => {
          setIsListening(false);
        }
      );
      if (started) setIsListening(true);
    }
  };

  const handlePresetClick = (preset) => {
    sound.playClick();
    setInputText(preset.input);
    setFlavorIndex(0);
    handleTranslate(preset.input, 0);
  };

  const handleSpiceSelect = (level) => {
    sound.playTrollLevelUp();
    setSpiceLevel(level);
    if (inputText || translationData) {
      handleTranslate();
    }
  };

  return (
    <div>
      {/* Input Section */}
      <div className={`interactive-input-box ${isListening ? 'listening' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--neon-lime)', fontWeight: 'bold' }}>
            🇬🇧 INPUT IN ENGLISH ➔ 🌴 DECODE INTO SAVAGE MALAYALAM
          </div>

          {/* Roast Spice Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(0,0,0,0.5)', padding: '0.2rem 0.5rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>ROAST SPICE:</span>
            <button 
              className={`preset-pill ${spiceLevel === 'mild' ? 'active' : ''}`}
              style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem', background: spiceLevel === 'mild' ? 'rgba(0,240,255,0.2)' : 'transparent', color: spiceLevel === 'mild' ? '#fff' : 'var(--text-muted)' }}
              onClick={() => handleSpiceSelect('mild')}
            >
              🌶️ Mild
            </button>
            <button 
              className={`preset-pill ${spiceLevel === 'spicy' ? 'active' : ''}`}
              style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem', background: spiceLevel === 'spicy' ? 'rgba(255,183,3,0.25)' : 'transparent', color: spiceLevel === 'spicy' ? 'var(--neon-amber)' : 'var(--text-muted)' }}
              onClick={() => handleSpiceSelect('spicy')}
            >
              🔥 Spicy
            </button>
            <button 
              className={`preset-pill ${spiceLevel === 'damu' ? 'active' : ''}`}
              style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem', background: spiceLevel === 'damu' ? 'rgba(255,0,80,0.3)' : 'transparent', color: spiceLevel === 'damu' ? 'var(--brutal-red)' : 'var(--text-muted)', fontWeight: 'bold' }}
              onClick={() => handleSpiceSelect('damu')}
            >
              💀 Damu Savage
            </button>
          </div>
        </div>

        <div className="input-main-row">
          <button 
            className={`speech-mic-btn ${isListening ? 'active-listening' : ''}`}
            onClick={handleMicClick}
            title={isListening ? "Listening... Click to stop" : "Click to Speak in English"}
          >
            <Mic size={28} />
            <span>{isListening ? "LISTENING" : "SPEAK"}</span>
          </button>

          <input 
            type="text" 
            className="text-input-field"
            placeholder={isListening ? "Listening to English speech..." : getPlaceholderForMode(selectedMode)}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleTranslate()}
          />

          <button 
            className="translate-action-btn"
            onClick={() => handleTranslate()}
            disabled={isProcessing}
            style={{ background: 'linear-gradient(135deg, var(--neon-lime) 0%, #00d2ff 100%)', color: '#000' }}
          >
            {isProcessing ? <RefreshCw size={18} className="spin-icon" /> : <Sparkles size={18} />}
            <span>TRANSLATE TO MALAYALAM</span>
          </button>
        </div>

        {/* Animated Waveform indicator when listening */}
        {isListening && (
          <div className="waveform-container">
            {[40, 70, 90, 60, 100, 45, 80, 50, 95, 65, 30].map((h, i) => (
              <div 
                key={i} 
                className="waveform-bar" 
                style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}
              />
            ))}
          </div>
        )}

        {/* Quick Presets Pills */}
        <div className="presets-row">
          <span className="presets-label">⚡ Try {selectedMode.toUpperCase()} examples:</span>
          {presets.slice(0, 4).map((p, idx) => (
            <button 
              key={idx} 
              className="preset-pill"
              onClick={() => handlePresetClick(p)}
            >
              “{p.input}”
            </button>
          ))}
        </div>
      </div>

      {/* 3-Card Translation Output */}
      {translationData && (
        <TranslationCards 
          data={translationData}
          onTriggerChaos={onTriggerChaos}
          onOpenReceipt={onOpenReceipt}
          onRollRoast={handleRollRoast}
          modeName={selectedMode}
        />
      )}
    </div>
  );
}
