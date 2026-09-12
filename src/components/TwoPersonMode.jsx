import React, { useState } from 'react';
import { Mic, Send, Volume2 } from 'lucide-react';
import { sound } from '../services/audioService';
import { speech } from '../services/speechService';
import { translateSentence } from '../services/translationEngine';

const MODE_PRESETS_TWO_PERSON = {
  corporate: {
    A: ["Can you send the report today?", "Let's take this offline.", "Did you review the document?", "Are you joining the standup?"],
    B: ["I have a bandwidth issue.", "Per my previous email.", "Working on it right now.", "My WiFi is disconnected."]
  },
  group_project: {
    A: ["We should divide the work equally.", "Who is making the slides?", "Guys, deadline is tomorrow.", "Can anyone check the code?"],
    B: ["I'll handle the presentation.", "My laptop is updating.", "I'm travelling right now.", "Looks good to me."]
  },
  drama: {
    A: ["I'll be back in five minutes.", "Trust me, I have a plan.", "This is between you and me.", "I'm going to the canteen."],
    B: ["You don't know who I am.", "Pavanayi is waiting for you.", "Everything is part of the script.", "The hero has entered."]
  },
  gen_z: {
    A: ["Are you coming today?", "Why are you leaving me on read?", "Did you study for exam?", "Look at this reel!"],
    B: ["I'm so tired.", "It's not that serious.", "No thoughts, head empty.", "Bro is cooked."]
  },
  indian_college: {
    A: ["Sir, please give me one more mark.", "Is attendance optional today?", "Will the lab finish early?", "What did external ask?"],
    B: ["Syllabus is completely out of portion.", "I have 41% attendance.", "The circuit is smoking.", "Just one more viva question."]
  },
  npc: {
    A: ["Can you send me the quest notes?", "Where are you walking to?", "Do you have any gold?", "What is your main mission?"],
    B: ["I am disconnecting from party.", "Mana level depleted.", "Fast travel to home bed.", "Dialogue option locked."]
  },
  malayalam: {
    A: ["Alia, scene aano?", "Eppo thudangum?", "Chumma oru karyam parayaan vannatha.", "Pinne nokkaamo?"],
    B: ["Full scene contra aanu.", "2 porotta kazhinjittu parayaam.", "Ente kayyil 10 roopa illa.", "Enne oru karyathilum koottenda."]
  },
  relationship: {
    A: ["Are you angry with me?", "What do you want to eat?", "Do you love me?", "Why are you quiet?"],
    B: ["Nothing.", "It's fine.", "I'm not hungry.", "Go, have fun with your friends."]
  },
  parents: {
    A: ["Who is this friend?", "Come here for a minute.", "Why is phone bill so high?", "Where were you yesterday?"],
    B: ["I'm not angry.", "Do whatever you want.", "I was studying with friend.", "Just a college project group."]
  },
  teacher: {
    A: ["Why are you late to class?", "Where is your assignment?", "Who is making noise at the back?", "Can you answer question 3?"],
    B: ["This is very easy.", "This will not come for exam.", "Only one small assignment.", "Giving you one final warning."]
  },
  friend: {
    A: ["Bro, where are you?", "Bro, can you lend me ₹500?", "You can have one bite.", "Did you reach home?"],
    B: ["One minute.", "I have money.", "I'm already on my way.", "Battery is at 1%."]
  },
  college: {
    A: ["Did you finish the assignment?", "Bro, send me the notes.", "Sir, network issue.", "I forgot the assignment."],
    B: ["I'll study after dinner.", "I'll do it tonight.", "I haven't opened the book.", "Suppli is guaranteed."]
  }
};

export default function TwoPersonMode({ selectedMode = 'college', isBrutal }) {
  const [history, setHistory] = useState([
    {
      speaker: 'Person A',
      said: '“Are you coming to the party?”',
      mlScript: 'ഞാൻ അവിടെ ഒറ്റയ്ക്ക് കോമാളിയെപ്പോലെ നിൽക്കാൻ വയ്യ, നീ കൂടെ വാടാ!',
      manglish: 'Njan ivide ottakku komaliye pole nilkkaan vayya, nee kooda vaada!',
      scared: 'നീ വന്നില്ലെങ്കിൽ ഇന്നത്തെ വൈകുന്നേരത്തെ കുറ്റം മുഴുവൻ ഞാൻ നിന്റെ തലയിൽ ഇടും!'
    },
    {
      speaker: 'Person B',
      said: '“I\'ll try to make it.”',
      mlScript: 'ഞാൻ ബെഡിൽ പുതപ്പും പുതച്ചു കിടന്നുറങ്ങാൻ പോവുകയാണ്.',
      manglish: 'Njan bedil puthappum puthachu kidannu urangaan povukayaanu.',
      scared: 'ഞാൻ ഈ മുറിയിൽ നിന്ന് പുറത്തിറങ്ങാൻ 0% സാധ്യത പോലുമില്ല!'
    }
  ]);

  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');
  const [isListeningA, setIsListeningA] = useState(false);
  const [isListeningB, setIsListeningB] = useState(false);

  const activeModePreset = MODE_PRESETS_TWO_PERSON[selectedMode] || MODE_PRESETS_TWO_PERSON.college;
  const presetsA = activeModePreset.A;
  const presetsB = activeModePreset.B;

  const handleSpeakerSubmit = (speaker, text) => {
    if (!text.trim()) return;
    sound.playClick();

    const res = translateSentence(text, { mode: selectedMode || 'friend', isBrutal });
    sound.playRevealSting();

    const newEntry = {
      speaker: speaker,
      said: res.literal_translation,
      mlScript: res.malayalam_script || res.actual_meaning,
      manglish: res.malayalam_manglish || '',
      scared: res.scared_malayalam || res.hidden_intention
    };

    setHistory(prev => [newEntry, ...prev]);

    if (speaker === 'Person A') setInputA('');
    if (speaker === 'Person B') setInputB('');
  };

  const handleMic = (person) => {
    if (person === 'A') {
      if (isListeningA) {
        speech.stopListening();
        setIsListeningA(false);
      } else {
        const ok = speech.startListening(
          (t, final) => {
            setInputA(t);
            if (final) {
              setIsListeningA(false);
              handleSpeakerSubmit('Person A', t);
            }
          },
          () => setIsListeningA(false),
          () => setIsListeningA(false)
        );
        if (ok) setIsListeningA(true);
      }
    } else {
      if (isListeningB) {
        speech.stopListening();
        setIsListeningB(false);
      } else {
        const ok = speech.startListening(
          (t, final) => {
            setInputB(t);
            if (final) {
              setIsListeningB(false);
              handleSpeakerSubmit('Person B', t);
            }
          },
          () => setIsListeningB(false),
          () => setIsListeningB(false)
        );
        if (ok) setIsListeningB(true);
      }
    }
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <h2 style={{ fontFamily: 'var(--font-accent)', fontSize: '1.6rem', fontWeight: '800' }}>
          👥 TWO-PERSON CONFRONTATION MODE (ENGLISH ➔ MALAYALAM)
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Context Active: <strong style={{ color: 'var(--neon-cyan)' }}>{(selectedMode || 'college').toUpperCase()} MODE</strong>. Both statements decoded into raw Malayalam subtext.
        </p>
      </div>

      {/* Two Stations Grid */}
      <div className="two-person-grid">
        {/* Person A Station */}
        <div className="person-station station-a">
          <div className="station-header">
            <div className="station-avatar-title">
              <span className="station-avatar">👤</span>
              <div>
                <div className="station-name" style={{ color: 'var(--neon-cyan)' }}>PERSON A (English)</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Initiating Statement</div>
              </div>
            </div>
            <button 
              className={`speech-mic-btn ${isListeningA ? 'active-listening' : ''}`}
              style={{ width: 50, height: 50, borderColor: 'var(--neon-cyan)' }}
              onClick={() => handleMic('A')}
            >
              <Mic size={20} />
            </button>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              className="text-input-field" 
              style={{ fontSize: '0.95rem', padding: '0.7rem' }}
              placeholder="Person A speaks in English..."
              value={inputA}
              onChange={(e) => setInputA(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSpeakerSubmit('Person A', inputA)}
            />
            <button 
              className="translate-action-btn"
              style={{ padding: '0.7rem 1.2rem', fontSize: '0.9rem' }}
              onClick={() => handleSpeakerSubmit('Person A', inputA)}
            >
              <Send size={16} />
            </button>
          </div>

          <div className="presets-row">
            <span className="presets-label">Quick:</span>
            {presetsA.map((p, idx) => (
              <button key={idx} className="preset-pill" onClick={() => handleSpeakerSubmit('Person A', p)}>
                “{p}”
              </button>
            ))}
          </div>
        </div>

        {/* Person B Station */}
        <div className="person-station station-b">
          <div className="station-header">
            <div className="station-avatar-title">
              <span className="station-avatar">👤</span>
              <div>
                <div className="station-name" style={{ color: 'var(--neon-pink)' }}>PERSON B (English)</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Counter Defense</div>
              </div>
            </div>
            <button 
              className={`speech-mic-btn ${isListeningB ? 'active-listening' : ''}`}
              style={{ width: 50, height: 50, borderColor: 'var(--neon-pink)' }}
              onClick={() => handleMic('B')}
            >
              <Mic size={20} />
            </button>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              className="text-input-field" 
              style={{ fontSize: '0.95rem', padding: '0.7rem' }}
              placeholder="Person B responds in English..."
              value={inputB}
              onChange={(e) => setInputB(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSpeakerSubmit('Person B', inputB)}
            />
            <button 
              className="translate-action-btn"
              style={{ padding: '0.7rem 1.2rem', fontSize: '0.9rem', background: 'linear-gradient(135deg, var(--neon-pink), #b5179e)', color: '#fff' }}
              onClick={() => handleSpeakerSubmit('Person B', inputB)}
            >
              <Send size={16} />
            </button>
          </div>

          <div className="presets-row">
            <span className="presets-label">Quick:</span>
            {presetsB.map((p, idx) => (
              <button key={idx} className="preset-pill" onClick={() => handleSpeakerSubmit('Person B', p)}>
                “{p}”
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Real-time Subtext Conversation Log */}
      <div style={{ marginTop: '1.5rem' }}>
        <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>🌴</span>
          <span>LIVE AUDITED CONVERSATION IN MALAYALAM</span>
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {history.map((item, idx) => (
            <div 
              key={idx}
              className="reveal-card"
              style={{ 
                borderLeft: item.speaker === 'Person A' ? '5px solid var(--neon-cyan)' : '5px solid var(--neon-pink)',
                animationDelay: `${idx * 0.1}s`
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontWeight: '800', 
                  fontSize: '0.85rem',
                  color: item.speaker === 'Person A' ? 'var(--neon-cyan)' : 'var(--neon-pink)'
                }}>
                  {item.speaker} SAID: {item.said}
                </span>
                <button className="speak-card-btn" onClick={() => speech.speak(item.manglish || item.mlScript)}>
                  <Volume2 size={13} />
                  <span>PLAY</span>
                </button>
              </div>

              <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#fff', marginBottom: '0.4rem', lineHeight: '1.4' }}>
                മലയാളം: {item.mlScript}
              </div>

              {item.manglish && (
                <div style={{ fontSize: '0.9rem', color: 'var(--neon-lime)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  🗣️ Manglish: “{item.manglish}”
                </div>
              )}

              <div style={{ fontSize: '0.9rem', color: 'var(--neon-amber)', fontStyle: 'italic' }}>
                ഭയം (Too Scared To Say): {item.scared}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
