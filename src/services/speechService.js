// Web Speech API wrapper for Speech-to-Text and Comedic Female Voice Text-to-Speech
import { sound } from './audioService';

class SpeechService {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.ttsEnabled = true;
    this.persona = 'sassy_chechi'; // 'sassy_chechi', 'ammayi_drama', 'cartoon_chipmunk'

    // Check for speech recognition support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';
    }
  }

  isSupported() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  }

  setPersona(personaName) {
    this.persona = personaName;
  }

  getPersona() {
    return this.persona;
  }

  startListening(onTranscript, onError, onEnd) {
    if (!this.recognition) {
      if (onError) onError('Speech recognition not supported in this browser.');
      return false;
    }

    if (this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
    }

    this.recognition.onresult = (event) => {
      let current = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        current += event.results[i][0].transcript;
      }
      if (onTranscript) onTranscript(current, event.results[0]?.isFinal);
    };

    this.recognition.onerror = (event) => {
      this.isListening = false;
      if (onError) onError(event.error);
    };

    this.recognition.onend = () => {
      this.isListening = false;
      if (onEnd) onEnd();
    };

    try {
      this.recognition.start();
      this.isListening = true;
      return true;
    } catch (e) {
      this.isListening = false;
      if (onError) onError(e.message);
      return false;
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
      this.isListening = false;
    }
  }

  // Find the best expressive female voice
  getFemaleVoice() {
    if (!window.speechSynthesis) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    // 1. High priority: Indian English / Hindi / Malayalam female voices (perfect accent for Manglish roasts!)
    const indianFemale = voices.find(v => 
      (v.lang.includes('IN') || v.lang.includes('hi') || v.lang.includes('ml')) &&
      (v.name.includes('Veena') || v.name.includes('Heera') || v.name.includes('Neerja') || 
       v.name.includes('Google हिन्दी') || v.name.toLowerCase().includes('female') || v.name.includes('Zira'))
    );
    if (indianFemale) return indianFemale;

    // 2. Energetic English female voices (Zira, Samantha, Victoria, Karen, etc.)
    const preferredFemale = voices.find(v => 
      v.name.includes('Zira') ||
      v.name.includes('Samantha') ||
      v.name.includes('Google UK English Female') ||
      v.name.includes('Google US English Female') ||
      v.name.includes('Victoria') ||
      v.name.includes('Karen') ||
      v.name.includes('Fiona')
    );
    if (preferredFemale) return preferredFemale;

    // 3. Any voice with "female" in its name
    const anyFemale = voices.find(v => /female|woman|girl/i.test(v.name));
    if (anyFemale) return anyFemale;

    // 4. Fallback to first English or first available voice
    return voices.find(v => v.lang.startsWith('en')) || voices[0];
  }

  speak(text, options = {}) {
    if (!this.ttsEnabled || !window.speechSynthesis) return;

    // Cancel ongoing speech
    window.speechSynthesis.cancel();

    // Sarcastic cheeky giggle sound before roasting!
    sound.playCheekyGiggle();

    const cleanText = text.replace(/[*_~`]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);

    // Pick female voice
    const femaleVoice = this.getFemaleVoice();
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    // Persona-based comedic pitch and speed
    let targetPitch = 1.35;
    let targetRate = 1.08;

    if (this.persona === 'ammayi_drama') {
      targetPitch = 1.55;
      targetRate = 0.96;
    } else if (this.persona === 'cartoon_chipmunk') {
      targetPitch = 1.85;
      targetRate = 1.22;
    } else {
      // Default: 'sassy_chechi' (sarcastic Kerala college girl)
      targetPitch = 1.38;
      targetRate = 1.1;
    }

    utterance.pitch = options.pitch !== undefined ? options.pitch : targetPitch;
    utterance.rate = options.rate !== undefined ? options.rate : targetRate;

    window.speechSynthesis.speak(utterance);
  }

  stopSpeaking() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  toggleTTS() {
    this.ttsEnabled = !this.ttsEnabled;
    if (!this.ttsEnabled) this.stopSpeaking();
    return this.ttsEnabled;
  }
}

export const speech = new SpeechService();
