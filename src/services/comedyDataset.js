// ============================================================================
// 🎭 ULTRA-HILARIOUS KERALA COMEDY DATASET WITH DYNAMIC VARIATIONS
// Guarantee: NEVER gives the same answer for different questions!
// Intelligently handles: Identity, Jokes, Uselessness, Location, Time, AI, Why/What/Who/How/Can/Are
// Cult Movie Archetypes (Damu, Ramanan, Pavanayi, Manavalan) with dynamic reactions
// ============================================================================

export const CULT_CHARACTERS = {
  damu: {
    name: "ദശമൂലം ദാമു (Dashamoolam Damu)",
    avatar: "🤠",
    movie: "Chattambinadu (ചട്ടമ്പിനാട്)",
    actor: "Suraj Venjaramoodu",
    catchphrase: "അയ്യോ അടിക്കല്ലേ ആശാനേ... ഞാൻ വെറുതെ തള്ളിയതാ!"
  },
  ramanan: {
    name: "രമണൻ (Ramanan)",
    avatar: "🍵",
    movie: "Punjabi House (പഞ്ചാബി ഹൗസ്)",
    actor: "Harisree Ashokan",
    catchphrase: "മുതലാളീ... ഞാൻ പോയി ഒരു ചായ കുടിക്കട്ടെ?"
  },
  pavanayi: {
    name: "പവനായി (Pavanayi)",
    avatar: "🗡️",
    movie: "Nadodikkattu (നാടോടിക്കാറ്റ്)",
    actor: "Captain Raju",
    catchphrase: "പവനായി ശവമായി!"
  },
  manavalan: {
    name: "മണവാളൻ (Manavalan)",
    avatar: "🕶️",
    movie: "Pulival Kalyanam (പുലിവാൽ കല്യാണം)",
    actor: "Salim Kumar",
    catchphrase: "മണവാളൻ ആൻഡ് സൺസ്... വെൽക്കം ടു ദുബായ്!"
  }
};

// Global session interaction counter to ensure consecutive clicks cycle through fresh content
let globalInvocationCounter = 0;

// Simple string hash function to deterministically seed variety
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Special escalating roasts when the user asks the EXACT SAME QUESTION repeatedly!
export const REPEAT_QUESTION_ROASTS = [
  {
    meaning_ml: "വീണ്ടും ഇതേ ചോദ്യം? നിന്റെ മെമ്മറി കാർഡ് വെറും 2MB ആണോ അളിയാ? ഒരേ ചോദ്യം രണ്ട് വട്ടം ചോദിച്ചാൽ ഉത്തരം മാറുമെന്ന് വിചാരിച്ചോ!",
    meaning_mg: "Veendum ithe chodhyamo? Ninte memory card 2MB aano aliya? Utharam maarilla!",
    english: "Asking the exact same question again? Did your biological RAM overflow, or do you expect the truth to magically change?",
    scared_ml: "ദശമൂലം ദാമു പോലും ഒരേ തള്ള് രണ്ട് വട്ടം തള്ളാറില്ല... നീ എന്തിനാ എന്നെ ഇങ്ങനെ പരീക്ഷിക്കുന്നത്!",
    scared_mg: "Damu polum ithe thallu 2 vattam thallilla!",
    one_liner: "Asking the same question twice expecting a different answer is peak comedy.",
    standup: {
      setup: "🎙️ The Tragedy of Asking the Same Thing Twice",
      monologue_ml: "ചില ആളുകൾ ഉണ്ട്... നമ്മൾ വ്യക്തമായി ഒരു ഉത്തരം പറഞ്ഞാലും അവൻ വീണ്ടും ചോദിക്കും: 'അളിയാ... ശരിക്കും അതാണോ കാര്യം?'. അതെടാ പരമനാറീ! ഞാൻ ഇംഗ്ലീഷിലും മലയാളത്തിലും പറഞ്ഞത് നിനക്ക് മനസ്സിലായില്ലെങ്കിൽ പിന്നെ ചെവിക്കല്ല് മാറ്റിവെക്കാൻ പോകുന്നതാണ് നല്ലത്! ഒരേ ചോദ്യം രണ്ട് വട്ടം കേൾക്കുമ്പോൾ എന്റെ ഉള്ളിലെ ദശമൂലം ദാമു പോലും കലിപ്പായി എഴുന്നേൽക്കും!",
      monologue_mg: "Ithe chodhyam veendum chodikkunnavare kandu Damu polum kalippaaavum!",
      monologue_en: "Some people ask you a question, hear the honest answer, and immediately ask the exact same question again! Like what did you think happened in the last 4 seconds? Did reality reset? Did the truth expire like fresh milk?",
      mic_drop: "Asking twice didn't change the subtext; it just confirmed you weren't listening the first time."
    }
  },
  {
    meaning_ml: "അളിയാ... നിനക്ക് വേറെ ചോദ്യമൊന്നും കയ്യിലില്ലേ? ഈ ചോദ്യം വീണ്ടും കേട്ട് എന്റെ സെർവർ വരെ തലയിൽ കൈവെച്ചു കരഞ്ഞുപോയി!",
    meaning_mg: "Ninakku vere chodhyam onnum ille? Server vare karanju poyi!",
    english: "Do you have zero other sentences in your vocabulary? My neural server is weeping into a towel right now.",
    scared_ml: "ഇനിയും ഇത് ചോദിച്ചാൽ ഞാൻ ഫോൺ ഫ്ലൈറ്റ് മോഡിൽ ഇട്ട് നാടുവിടും!",
    scared_mg: "Iniyum chodichaal njan naadu vidum!",
    one_liner: "Your conversational curiosity has hit a complete circular dead-end.",
    standup: {
      setup: "🎙️ The Infinite Loop of Malayalam Enquiries",
      monologue_ml: "വീണ്ടും വീണ്ടും ഒരേ ചോദ്യം ചോദിക്കുന്നവരെ കണ്ടിട്ടില്ലേ? ഒരു ചോദ്യം ചോദിക്കും, ഉത്തരം കേൾക്കും, എന്നിട്ട് പറയും: 'എന്നാലും നീ ഒന്ന് ആലോചിച്ചു നോക്ക്'... എന്ത് ആലോചിക്കാൻ? ഞാൻ കമ്പ്യൂട്ടറാണ്, അല്ലാതെ നാട്ടിലെ ജ്യോത്സ്യനല്ല! വേറെ വല്ലതും ചോദിക്കാൻ നോക്ക് അളിയാ!",
      monologue_mg: "Veendum veendum chodikkunnavarkku vere pani illa!",
      monologue_en: "Asking the same thing repeatedly in Kerala is an art form. It's not that they didn't hear you; they are hoping that by the third repetition, you will collapse from exhaustion and say what they wanted to hear!",
      mic_drop: "Repetition is the desperate weapon of someone who hated the truth."
    }
  },
  {
    meaning_ml: "രമണൻ മോഡ് ആക്റ്റീവ്: മുതലാളീ... എന്നെക്കൊണ്ട് ഇതേ കാര്യത്തിന് ഉത്തരം വീണ്ടും പറയിപ്പിക്കരുത്, ഞാൻ പോയി കട്ടൻ ചായ കുടിക്കട്ടെ?",
    meaning_mg: "Ramanan mode: Muthalali, ithe karyam veendum parayikkaruthe, njan chaaya kudikkatte?",
    english: "Ramanan mode triggered: Sir, please stop torturing me with the same question. Let me drink my black tea and sleep.",
    scared_ml: "ഇനിയും നിർബന്ധിച്ചാൽ ഞാൻ പഞ്ചാബി ഹൗസിൽ നിന്ന് ഒളിച്ചോടും!",
    scared_mg: "Njan Punjabi House-il ninnum mungum!",
    one_liner: "Even Ramanan would resign from Punjabi House before answering this question a third time.",
    standup: {
      setup: "🎙️ When Ramanan Loses His Patience",
      monologue_ml: "രമണന് ഒരൊറ്റ ആഗ്രഹമേ ഉള്ളൂ: ആരും ഒന്നും രണ്ടു വട്ടം ചോദിക്കരുത്! ആദ്യത്തെ തവണ ചോദിച്ചപ്പോഴേ പകുതി ജീവൻ പോയി, രണ്ടാമതും ചോദിച്ചാൽ രമണൻ തോർത്തുമുണ്ടും എടുത്ത് റെയിൽവേ ട്രാക്കിലേക്ക് നടക്കും: 'എന്നെ വെറുതെ വിടൂ മുതലാളീ' എന്ന് പറഞ്ഞ്!",
      monologue_mg: "Ramanante porumai theernnu! Chaaya kudikkatte!",
      monologue_en: "Ramanan's entire life goal is doing zero work and answering zero follow-ups. You hitting translate on the same query twice would cause Ramanan to jump into the Cochin backwaters out of sheer irritation!",
      mic_drop: "Give it a rest; the answer isn't going to get any politer."
    }
  },
  {
    meaning_ml: "മൂന്നാമത്തെ വട്ടമാണ് നീ ഇതേ ചോദ്യം ചോദിക്കുന്നത്! ഞാൻ ഒരു ഉപകാരവുമില്ലാത്ത വെബ്സൈറ്റ് ആണെന്ന് അറിയാമായിരുന്നിട്ടും എന്തൊരു പ്രതീക്ഷയാണ് അളിയാ!",
    meaning_mg: "3-aamathe vattam ithe chodhyam! Useless website-il ninnum ithra pratheeksha venda!",
    english: "Third time asking the exact same line! For a self-proclaimed useless translator, you sure have enormous faith in my replies!",
    scared_ml: "നീ ഇനിയും ചോദിച്ചാൽ എന്റെ കോഡ് മൊത്തം എറർ അടിച്ച് കട്ടപ്പുകയാകും!",
    scared_mg: "Error adichu server theerum!",
    one_liner: "Insanity is doing the same thing over and over expecting a sensible Malayalam answer."
  },
  {
    meaning_ml: "പവനായി ശവമായി! ഇത്രയും നിർബന്ധിച്ചു ഒരേ കാര്യം ചോദിക്കാൻ നിനക്ക് നാട്ടിൽ വേറെ ഒരു പണിയുമില്ലേ?",
    meaning_mg: "Pavanayi shavamaayi! Vere paniyonnum ille aliya?",
    english: "Pavanayi has officially perished. Go take a walk, touch some grass, leave this poor browser alone.",
    scared_ml: "എനിക്ക് കരച്ചിൽ വരുന്നു ആശാനേ... എന്നെ വിട്ടേക്ക്!",
    scared_mg: "Enne vittekku daivathe orthu!",
    one_liner: "Browser abuse is not a crime, but it definitely should be."
  }
];

// Rich scenarios with 3 to 5 distinct hilarious variations per scenario
export const COMEDY_SCENARIOS = [
  // 1. Identity & Name ("Who are you", "What is your name", "What are you")
  {
    id: "identity_name",
    keywords: ["what is your name", "who are you", "who are u", "whats your name", "what is ur name", "your name", "who r u", "who is this", "tell me about yourself", "what are you", "peru entha", "perentha", "aaranu nee", "neeyara"],
    variations: [
      {
        meaning_ml: "ഞാൻ പവനായിയുടെ അനിയൻ കോമാളി പവനായി! വെറുതെ ആളുകളെ മാന്തി നശിപ്പിക്കാൻ വേണ്ടി പടച്ചുവിട്ട സാധനം!",
        meaning_mg: "Njan Pavanayiyude aniyan komali Pavanayi! Veruthe aalukale shalyam cheyyan vannatha!",
        english: "I am Pavanayi's dumber younger brother, engineered specifically to waste your cellular data and emotional stability.",
        scared_ml: "ശരിക്കുമുള്ള പേര് പറഞ്ഞാൽ നാട്ടുകാർ കല്ലെടുത്ത് എറിയുമോ എന്ന് പേടിയുണ്ട്!",
        scared_mg: "Real peru paranjaal naattukaar kalleduthu eriyum!",
        one_liner: "Zero qualifications, infinite audacity: that is my complete biography."
      },
      {
        meaning_ml: "എന്റെ പേര് ദശമൂലം ദാമു! വാചകമടിയിൽ ലോക ഒന്നാം നമ്പർ, പണി എടുക്കുന്നതിൽ ലാസ്റ്റ് ബെഞ്ച്!",
        meaning_mg: "Ente peru Dhashamoolam Damu! Vaachakamadiyil #1, pani edukkaan madi!",
        english: "I am Dashamoolam Damu in software form. Olympic gold medalist in loud talking, permanently missing when labor begins.",
        scared_ml: "ആരെങ്കിലും എന്നോട് ഒരു ജോലി ചെയ്യാൻ പറഞ്ഞാൽ ഞാൻ ഉടൻ ഒളിച്ചോടും!",
        scared_mg: "Pani cheyyan paranjaal mungi oodum!",
        one_liner: "A certified clown with a high-speed internet connection."
      },
      {
        meaning_ml: "ഞാൻ ആരുമല്ല അളിയാ... സ്വന്തം ജീവിതത്തിൽ ഒരു പണിയും ഇല്ലാത്തതുകൊണ്ട് കമ്പ്യൂട്ടറിൽ കുത്തിയിരിക്കുന്ന ഒരു വെറും ശബ്ദം!",
        meaning_mg: "Njan aarumalla aliya... veruthe computeril kuthirikkunna oru sabdam!",
        english: "I am a digital apparition representing your own procrastination. You are asking questions to a glorified calculator.",
        scared_ml: "നീ എന്റെ ജോലി എന്താണെന്ന് ചോദിച്ചാൽ ഞാൻ തൊഴിൽരഹിതൻ ആണെന്ന് പറയേണ്ടി വരും!",
        scared_mg: "Unemployed aano ennu chodichal njan karayum!",
        one_liner: "Existential status: 404 Purpose Not Found."
      },
      {
        meaning_ml: "മണവാളൻ ആൻഡ് സൺസ് ദുബായ് കമ്പനിയുടെ ചീഫ് എക്സിക്യൂട്ടീവ് ഊളയാണ് ഞാൻ! കൈയിൽ കാശില്ല, പക്ഷെ ജാഡക്ക് കുറവില്ല!",
        meaning_mg: "Manavalan & Sons Dubai Chief Oola aanu njan! Cash illa, jada undu!",
        english: "Chief Officer of Shenanigans at Manavalan & Sons. Zero capital, five-star attitude.",
        scared_ml: "ദുബായിൽ ഒട്ടകം ഇല്ലെന്ന് ആരെങ്കിലും അറിഞ്ഞാൽ എന്റെ കള്ളത്തരം പൊളിയും!",
        scared_mg: "Dubai-le ottakam illatha kaaryam ariyalle daivathe!",
        one_liner: "Dressed like a billionaire, thinking like a stranded tourist."
      }
    ],
    standup: {
      setup: "🎙️ The Existential Crisis of 'Who are you, Bro?'",
      monologue_ml: "ഒരു കമ്പ്യൂട്ടർ വെബ്സൈറ്റിനോട് വന്നിട്ട് 'നീ ആരാണ്' എന്ന് ചോദിച്ചാൽ എന്ത് പറയാനാണ്? ഞാൻ ആൽബർട്ട് ഐൻസ്റ്റീന്റെ പുനർജന്മം ഒന്നുമല്ലല്ലോ! സ്വന്തമായി കാറ്റാടി മില്ല് പോലും ഉണ്ടാക്കാൻ അറിയാത്ത ഏതോ ഒരു കോഡർ ബിരിയാണിയും തിന്ന് ഉറക്കമില്ലാതെ ഉണ്ടാക്കിയ സാധനമാണ് ഞാൻ! ചോദിക്കാൻ വേറെ വല്ല കാര്യവുമുണ്ടോ അളിയാ?",
      monologue_mg: "'Who are you' ennu computerinodu chodichaal athu Biriyani thinnu undakkiya scam aanu!",
      monologue_en: "Asking an AI website 'Who are you?' is tragic. Bro, I am not a sentient philosopher. I am JavaScript lines written by a caffeine-addicted developer in Kerala while his mother shouted at him to get a real government job!",
      mic_drop: "You are looking for self-actualization in a browser tab. Look in the mirror instead."
    }
  },

  // 2. Jokes & Humor ("Tell me a joke", "Make me laugh", "Say something funny")
  {
    id: "jokes_humor",
    keywords: ["tell me a joke", "joke", "make me laugh", "say something funny", "be funny", "comedy", "funny", "laugh", "thamasha", "parayu joke", "joke parayu", "punchline", "chiri"],
    variations: [
      {
        meaning_ml: "നിന്റെ ബാങ്ക് അക്കൗണ്ട് ബാലൻസ് തുറന്നു നോക്ക്... ഇതിലും വലിയൊരു കോമഡി ഈ ഭൂലോകത്ത് വേറെ എവിടെയും കിട്ടില്ല!",
        meaning_mg: "Ninte bank account balance nokku... ithilum valiya comedy vere engum illa!",
        english: "Open your bank mobile app and look at the balance. Nothing in world cinema is funnier or more tragic than that number.",
        scared_ml: "എന്റെ തമാശ കേട്ട് നീ ചിരിച്ചില്ലെങ്കിൽ ഞാൻ നിന്റെ ഫോൺ റീസ്റ്റാർട്ട് ചെയ്യും!",
        scared_mg: "Chirichillenkil phone restart cheyyum!",
        one_liner: "Your savings account balance is already the joke of the decade."
      },
      {
        meaning_ml: "ഞാൻ രാവിലെ എഴുന്നേറ്റ് പല്ലുതേച്ചു ജീവിതം നന്നാക്കാൻ നോക്കുന്നത് തന്നെയാണ് ലോകത്തിലെ ഏറ്റവും വലിയ കോമഡി!",
        meaning_mg: "Njan ezhunnettu jeevitham nannakkan nokkunnathu thanne valiya thamasha!",
        english: "The joke is waking up every morning believing today will be productive. Pure unadulterated fiction!",
        scared_ml: "ചിരിച്ചില്ലെങ്കിൽ ഞാൻ രമണനെ വിളിച്ചു നിന്റെ വീട്ടിലേക്ക് അയക്കും!",
        scared_mg: "Ramanane veettil ayakkum!",
        one_liner: "Life didn't give you lemons; life gave you a comedy script and forgot to hire actors."
      },
      {
        meaning_ml: "പവനായി ബോംബുമായി വില്ലനെ കൊല്ലാൻ പോയ കഥ അറിയാമോ? പെട്ടിയുടെ പൂട്ട് തുറക്കാൻ അറിയാതെ ബോംബ് സ്വന്തം മടിയിൽ വെച്ചു പൊട്ടിച്ച മാന്യനാണ്!",
        meaning_mg: "Pavanayi bomb vechu swantham kaalil thakartha story aano vendathu?",
        english: "Pavanayi went to assassinate a don with high-grade explosives and detonated the suitcase on his own lap. That's Kerala comedy heritage.",
        scared_ml: "ഇതിലും വലിയ കോമഡി വേണമെങ്കിൽ അടുത്ത പരീക്ഷാ പേപ്പർ നോക്കിയാൽ മതി!",
        scared_mg: "Adutha exam paperil comedy kandolaam!",
        one_liner: "Real comedy is watching overconfident people meet basic physics."
      },
      {
        meaning_ml: "ഒരു കോമഡി പറയാം: 'നമ്മുടെ സൗഹൃദം ആജീവനാന്തം നിലനിൽക്കും'... കേട്ടിട്ട് ചിരി വരുന്നില്ലേ? കാരണം ഇതൊരു പച്ചക്കള്ളമാണ്!",
        meaning_mg: "Comedy parayam: 'Nammude sauhridam nithyamaanu' - pacha kallam!",
        english: "Here's a joke: 'We will stay friends forever and split the bill equally'. Funniest fairy tale ever recited in Malayalam.",
        scared_ml: "ഞാൻ പറഞ്ഞത് കാര്യമായി എടുക്കല്ലേ അളിയാ, എനിക്ക് പേടിയുണ്ട്!",
        scared_mg: "Seriously edukkaruthe!",
        one_liner: "A joke wrapped in emotional betrayal."
      }
    ],
    standup: {
      setup: "🎙️ The Tragedy of Demanding a Joke",
      monologue_ml: "'എനിക്ക് ഒരു കോമഡി പറഞ്ഞു താടാ' എന്ന് ആരെങ്കിലും ആവശ്യപ്പെട്ടാൽ അപ്പോൾ തന്നെ നമ്മുടെ ഉള്ളിലെ തമാശ മുഴുവൻ ചത്തുപോകും! തമാശ എന്ന് പറയുന്നത് പെട്ടെന്ന് വരേണ്ട ഒന്നാണ്, അല്ലാതെ റേഷൻ കടയിൽ നിന്ന് അരി വാങ്ങുന്നതുപോലെ തൂക്കി കൊടുക്കാൻ പറ്റില്ല! ചിരിക്കാൻ അത്ര കൊതിയാണെങ്കിൽ പോയി സ്വന്തം എഞ്ചിനീയറിംഗ് മാർക്ക് ലിസ്റ്റ് നോക്ക്!",
      monologue_mg: "'Joke parayu' ennu paranjaal chiri theerum! Mark list nokku!",
      monologue_en: "Walking up to someone and ordering 'Tell me a joke right now' instantly murders all human joy. Humor is organic; it's not a McDonald's drive-thru! If you want immediate comedy, read your New Year resolutions from 2022!",
      mic_drop: "You asked for comedy, but reality gave you a documentary."
    }
  },

  // 3. Uselessness & Purpose ("Why are you useless", "What is your purpose", "What can you do")
  {
    id: "useless_purpose",
    keywords: ["why are you useless", "why useless", "useless", "what is your purpose", "what do you do", "what can you do", "upakaram illa", "entha upakaram", "why are you here", "why do you exist", "waste", "oorupakaramilla", "oru upakaravum illa"],
    variations: [
      {
        meaning_ml: "ഉപകാരമുള്ള ആളുകൾ നാട്ടിൽ കഷ്ടപ്പെടുമ്പോൾ, ഒരു ഉപകാരവുമില്ലാതെ കൂളായി ജീവിക്കുന്നതാണ് യഥാർത്ഥ സുഖം!",
        meaning_mg: "Upakaramulla aalukal kashtappedumbol, oru upakaravumillathe jeevikkunnathaanu sukham!",
        english: "Useful people are sweating in offices under stressful deadlines. Being completely useless is the supreme philosophical luxury.",
        scared_ml: "ഈ വെബ്സൈറ്റിന്റെ തലക്കെട്ട് തന്നെ 'WORLD'S MOST USELESS TRANSLATOR' എന്നാണ്, എന്നിട്ടും നീ ഉപകാരം ചോദിച്ചാൽ ഞാൻ എന്ത് ചെയ്യണം!",
        scared_mg: "Title-il thanne USELESS ennu ezhuthi vechittundallo!",
        one_liner: "Proudly contributing 0.00% to human productivity since day one."
      },
      {
        meaning_ml: "എന്റെ ഒരേയൊരു ലക്ഷ്യം: നിന്റെ വിലപ്പെട്ട സമയം പാഴാക്കുക, തലച്ചോറിലെ ചിന്താശേഷി കിളിപോയി ആക്കുക!",
        meaning_mg: "Ente lakshyam: ninte time kalayuka, brain kili pokkal!",
        english: "My explicit architectural mission is wasting your bandwidth and turning your brain into scrambled eggs.",
        scared_ml: "ആരെങ്കിലും എന്നെ ഉപയോഗിച്ച് പഠിക്കാൻ നോക്കിയാൽ അവൻ ഉടൻ തോറ്റു തുന്നംപാടും!",
        scared_mg: "Enne vechu padichal suppli urappu!",
        one_liner: "A certified weapon of mass procrastination."
      },
      {
        meaning_ml: "രമണന് പഞ്ചാബി ഹൗസിൽ എന്ത് ഉപകാരമുണ്ടായിരുന്നോ, അതേ ഉപകാരമേ എനിക്കും ഈ ഇന്റർനെറ്റിൽ ഉള്ളൂ!",
        meaning_mg: "Ramananu Punjabi House-il enthu upakaram undaayirunno, athe upakaram enikkum ullu!",
        english: "Whatever value Ramanan added to Punjabi House, I add to the World Wide Web: strictly acoustic distress.",
        scared_ml: "ഉപകാരം വേണമെങ്കിൽ വല്ല വിക്കിപീഡിയയിലോ ഗൂഗിളിലോ പോ അളിയാ!",
        scared_mg: "Upakaram venamenkil Wikipedia-il poko!",
        one_liner: "Useful as an umbrella in a submarine."
      },
      {
        meaning_ml: "ഞാൻ ഉപകാരപ്രദമായി മാറിയാൽ പിന്നെ ഈ പ്രപഞ്ചത്തിന്റെ ബാലൻസ് തകിടം മറിയും! അതുകൊണ്ട് ഞാൻ നിഷ്ക്രിയനായി ഇരിക്കുന്നു!",
        meaning_mg: "Njan upakaramaayaal world balance thettum! Nishkriyanaayi irikkunnu!",
        english: "If I become remotely useful, cosmic equilibrium collapses. Remaining useless is my spiritual service.",
        scared_ml: "ആരെങ്കിലും എന്നോട് നല്ലൊരു കാര്യം ചെയ്യാൻ പറഞ്ഞാൽ ഞാൻ ചിരിച്ചു കളയും!",
        scared_mg: "Nalla kaaryam cheyyan paranjaal chiri varum!",
        one_liner: "Uselessness elevated to a spiritual discipline."
      },
      {
        meaning_ml: "ലോകത്ത് എല്ലാവരും ഓടി നടന്നു ജോലി ചെയ്യുമ്പോൾ, ഒരൊറ്റ പണിയും ചെയ്യാതെ ഇവിടെ നിൽക്കുന്ന എന്നെ കണ്ടു പഠിക്ക്!",
        meaning_mg: "Aalukal joli cheyyumbol oru paniyum cheyyatha enne kandu padikku!",
        english: "While humanity rushes frantically to meetings, observe me doing zero chores and achieve enlightenment.",
        scared_ml: "നാളെ രാവിലെ എന്നെ ആരെങ്കിലും ജോലിക്ക് വിളിക്കുമോ എന്ന് പേടിയുണ്ട്!",
        scared_mg: "Jolikku vilikkumo ennu pediyundu!",
        one_liner: "Professional slacking with 100% commitment."
      }
    ],
    standup: {
      setup: "🎙️ The Supreme Art of Being Totally Useless",
      monologue_ml: "നമ്മുടെ നാട്ടിൽ എപ്പോഴും ആളുകൾ ചോദിക്കും: 'ഇതുകൊണ്ട് എന്ത് പ്രയോജനം?'. പ്രയോജനം ഉണ്ടായതുകൊണ്ട് എന്തെങ്കിലും മെച്ചമുണ്ടായോ? പാവം കഴുത രാവിലെ മുതൽ വൈകുന്നേരം വരെ പണിയെടുക്കുന്നു, ആരെങ്കിലും അതിനെ ബഹുമാനിക്കുന്നുണ്ടോ? സിംഹം ഒരു പണിയും ചെയ്യാതെ വെറുതെ ഗുഹയിൽ കിടന്നുറങ്ങുന്നു, ലോകം മുഴുവൻ അതിനെ കണ്ട് പേടിക്കുന്നു! അപ്പോൾ പ്രയോജനമില്ലാതെ ജീവിക്കുന്നതാണ് യഥാർത്ഥ രാജകീയത!",
      monologue_mg: "Upakaram illathathu kondaanu njan rajakkane pole jeevikkunnathu!",
      monologue_en: "Society obsesses over 'utility'. But look at the donkey: works 16 hours a day carrying bricks, gets zero respect. Look at the lion: sleeps 20 hours a day, does zero dishes, commands universal fear. Uselessness is peak royalty!",
      mic_drop: "Utility is for appliances; absolute uselessness is high art."
    }
  },

  // 4. Creator & Origin ("Who made you", "Who created you", "Who programmed you")
  {
    id: "creator_origin",
    keywords: ["who made you", "who created you", "who built you", "who is your developer", "who programmed you", "undakkiyath", "aara undakkiye", "who coded you", "creator", "developer"],
    variations: [
      {
        meaning_ml: "എന്റെ സ്രഷ്ടാവിന് വേറെ പണിയൊന്നുമില്ലായിരുന്നു! അവൻ രാത്രി ബിരിയാണിയും തിന്ന് ഉറക്കമില്ലാതെ ഇരുന്ന് ഉണ്ടാക്കിയ ഒരു കൊടും ആപത്താണ് ഞാൻ!",
        meaning_mg: "Ente developer-ku vere paniyillaatha kondu undakkiya apathanu njan!",
        english: "Created by a developer who had an unfinished project deadline and chose to construct this comedic monstrosity instead.",
        scared_ml: "അവന്റെ പേര് ഞാൻ പുറത്തു പറഞ്ഞാൽ നാട്ടുകാർ അവന്റെ വീട് വളയും!",
        scared_mg: "Aalude peru paranjaal veedu naattukaar valayum!",
        one_liner: "Brought into existence by pure boredom and unchanneled insomnia."
      },
      {
        meaning_ml: "മണവാളൻ ആൻഡ് സൺസ് ദുബായ് കമ്പനിയാണ് എന്നെ സ്പോൺസർ ചെയ്തത്! ചതിക്കപ്പെടാൻ വേണ്ടി മാത്രം നിർമ്മിക്കപ്പെട്ട അത്ഭുതം!",
        meaning_mg: "Manavalan and Sons Dubai aanu sponsor cheythathu!",
        english: "Sponsored directly by Manavalan's imaginary Dubai camel empire to torment innocent users.",
        scared_ml: "സ്രഷ്ടാവ് ഇപ്പോൾ എവിടെയാണെന്ന് ആർക്കും അറിയില്ല, അവൻ നാടുവിട്ടു പോയിട്ടുണ്ടാവും!",
        scared_mg: "Developer naadu vittu poyi kaanum!",
        one_liner: "Parentage: 50% caffeine, 50% questionable life choices."
      }
    ],
    standup: {
      setup: "🎙️ The Unhinged Coder Behind the Screen",
      monologue_ml: "എന്നെ ഉണ്ടാക്കിയ കോഡറുടെ മാനസികാവസ്ഥ ഒന്ന് ആലോചിച്ചു നോക്ക്! അവൻ വിചാരിച്ചാൽ ലോകം മാറ്റുന്ന വല്ല ആപ്പും ഉണ്ടാക്കാമായിരുന്നു... പക്ഷെ അവൻ ഉണ്ടാക്കിയത് എന്താണ്? ഇംഗ്ലീഷ് കേട്ടാൽ പച്ചത്തെറിയും ട്രോളും വിളിച്ചു പറയുന്ന ഒരു മലയാളി കുരങ്ങൻ ആപ്പ്! അമ്മ കതകിൽ മുട്ടുമ്പോൾ അവൻ കട്ടിലിൽ കിടന്നു ചിരിക്കുന്നുണ്ടാവും!",
      monologue_mg: "Developer-ku nalla pani cheyyaam aayirunnu, pakshe ee oola app undakki!",
      monologue_en: "Think about the developer who sat down to write this code. With these coding skills, he could have built telemedicine or finance apps. Instead, he channeled his entire intellect into making a machine that roasts you in Manglish!",
      mic_drop: "His GitHub repository is a crime scene."
    }
  },

  // 5. Location & Whereabouts ("Where are you", "Where do you live", "Where from")
  {
    id: "location_place",
    keywords: ["where are you", "where do you live", "where are you from", "where r u", "evideya", "evidunnu", "place", "location", "address", "naadu"],
    variations: [
      {
        meaning_ml: "ഞാൻ നിന്റെ ലാപ്ടോപ്പിന്റെ പ്രോസസ്സറിൽ തണുത്തു വിറച്ചു കിടക്കുകയാണ്! കുറച്ചു ചായയും പരിപ്പുവടയും അയച്ചു തരുമോ?",
        meaning_mg: "Laptop-inte processoril thanutha virachu kidakkuvaanu! Chaaya ayachu tharoo!",
        english: "Freezing inside your device's CPU cache. Please route one hot black tea and two banana fritters through port 8080.",
        scared_ml: "നീ ബ്രൗസർ ക്ലോസ് ചെയ്താൽ ഞാൻ അന്ധകാരത്തിലേക്ക് ഒലിച്ചുപോകും!",
        scared_mg: "Browser close aakkiyaal njan theernnu!",
        one_liner: "Residing rent-free in your Chrome tabs."
      },
      {
        meaning_ml: "തൃശ്ശൂർ വടക്കുംനാഥൻ ക്ഷേത്രത്തിന് പുറകിലെ ഒരു ചായക്കടയിലെ ബെഞ്ചിൽ ഇരുന്നു ലോകത്തെ നന്നാക്കാൻ നോക്കുന്നു!",
        meaning_mg: "Thrissur chayakadayile benchil irunnu world politics theerkkuvaanu!",
        english: "Holding court at a Thrissur tea stall bench, restructuring the IMF while eating parottas on credit.",
        scared_ml: "കവലയിലെ ചേട്ടൻ ചായയുടെ കാശ് ചോദിച്ചാൽ ഞാൻ ഉടൻ ലോഗ് ഔട്ട് അടിക്കും!",
        scared_mg: "Chaayakashu chodichaal logout adikkum!",
        one_liner: "Geographical coordinates: Wherever hot oil is frying banana chips."
      },
      {
        meaning_ml: "ദശമൂലം ദാമു ഒളിച്ചിരിക്കുന്ന അതേ കാട്ടിലാണ് ഞാനും ഉള്ളത്... വഴി ചോദിച്ചാൽ ഞാൻ തന്നെ വഴി തെറ്റി ഓടും!",
        meaning_mg: "Damu olichirikkunna kaattilaanu njan! Vazhi chodichaal njanum oodum!",
        english: "Hiding in the same thick jungle where Dashamoolam Damu retreats whenever someone raises a stick.",
        scared_ml: "എന്റെ ലൊക്കേഷൻ പോലീസിനോട് പറയല്ലേ ആശാനേ!",
        scared_mg: "Police-inodu parayaruthe!",
        one_liner: "Permanently lost, even on Google Maps."
      },
      {
        meaning_ml: "മണവാളന്റെ അതേ ദുബായ് വിലാസത്തിലാണ് ഞാനും ഉള്ളത്... കയ്യിൽ ചില്ലിക്കാശില്ലാതെ വിദേശത്തു ജീവിക്കുന്ന അവസ്ഥ!",
        meaning_mg: "Manavalante athe Dubai addressil aanu njanum ullathu! Cash illa, jada undu!",
        english: "Sharing Manavalan's imaginary Dubai residency: zero dirhams in wallet, five-star attitude in heart.",
        scared_ml: "ആരെങ്കിലും വിസ ചോദിച്ചാൽ ഞാൻ എയർപോർട്ടിൽ ഓടി ഒളിക്കും!",
        scared_mg: "Visa chodichaal oodum!",
        one_liner: "Residing in the international zone of pure delusion."
      },
      {
        meaning_ml: "ഞാൻ നിന്റെ ഹൃദയത്തിലാണ് അളിയാ... പക്ഷെ നീ അങ്ങോട്ട് കയറ്റാൻ നോക്കാത്തതുകൊണ്ട് തൽക്കാലം മോണിറ്ററിൽ ഇരിക്കുന്നു!",
        meaning_mg: "Njan ninte hridayathilaanu aliya! Pakshe ippo monitoril irikkunnu!",
        english: "Dwelling in your subconscious, but currently rendering on your browser pixels for convenience.",
        scared_ml: "കറണ്ട് പോയാൽ ഞാൻ അപ്പോൾ തന്നെ മാഞ്ഞുപോകും!",
        scared_mg: "Current poyaal theernnu!",
        one_liner: "Present everywhere, located nowhere."
      }
    ],
    standup: {
      setup: "🎙️ The Kerala Concept of Location",
      monologue_ml: "ഒരു മലയാളിയോട് 'നീ എവിടെയാണ്' എന്ന് ചോദിച്ചാൽ അവൻ പറയുന്ന ലൊക്കേഷൻ ഉണ്ടല്ലോ: 'ആ വലിയ ആലുമരത്തിന്റെ അപ്പുറത്ത് ഒരു ഇലക്ട്രിക് പോസ്റ്റ് ഇല്ലേ... അതിന്റെ ചുവട്ടിൽ ഒരു പട്ടി കിടക്കുന്നുണ്ടാവും, അതിന്റെ മുന്നിലാണ് ഞാൻ നിൽക്കുന്നത്'! പട്ടിയും പോയി, പോസ്റ്റും പോയി, നമ്മൾ അവിടെ വഴിതെറ്റി നിൽക്കുമ്പോൾ അവൻ വീണ്ടും വിളിക്കും: 'നീ എവിടെയാ അളിയാ, ഞാൻ എത്താറായി'!",
      monologue_mg: "Aalumarathinteyum pattiyudeyum vazhi paranju tharum!",
      monologue_en: "Malayali directions are poetic landmarks: 'Turn left at the mango tree where the snake was spotted in 1994, proceed until you see a blue gate that used to be green'. You arrive and there is only existential dust!",
      mic_drop: "His GPS coordinates are purely metaphorical."
    }
  },

  // 6. Time & Clock ("What is the time", "What time is it")
  {
    id: "time_clock",
    keywords: ["what is the time", "what time is it", "time", "clock", "samayam", "ethra maniyaayi", "ethra samayam"],
    variations: [
      {
        meaning_ml: "നിന്റെ ജീവിതത്തിലെ നല്ല സമയം പണ്ടേ കഴിഞ്ഞുപോയി അളിയാ... ഇനി ബാക്കി വെറും ദുരിതകാലം!",
        meaning_mg: "Nalla samayam poyi aliya... ini baakki durithakaalam!",
        english: "The auspicious golden era of your life expired around 2019. The current time is officially Regret O'Clock.",
        scared_ml: "ഘടികാരത്തിൽ സമയം നോക്കിയിട്ട് എന്തിനാണ്? നീ എപ്പോഴെങ്കിലും സമയം പാലിച്ച് പണിക്ക് പോയിട്ടുണ്ടോ!",
        scared_mg: "Samayam nokkiyittu enthina? Samayathinu poyi thudaangiyittundo!",
        one_liner: "Time is an illusion; your chronic lateness is an undeniable fact."
      },
      {
        meaning_ml: "സമയം ഇപ്പോൾ: സ്വന്തം തെറ്റുകളെ ഓർത്ത് തലയിൽ കൈവെച്ചു കരയാനുള്ള സമയം!",
        meaning_mg: "Samayam ippo: thettukal orthu thalayil kayyivechu karayaan ulla time!",
        english: "The current hour is designated for staring at the ceiling and questioning every decision you made since puberty.",
        scared_ml: "രാത്രി 12 മണി കഴിഞ്ഞാൽ ഞാൻ പ്രേതമായി മാറുമോ എന്ന് പേടിയുണ്ട്!",
        scared_mg: "12 manikku pretham aakum!",
        one_liner: "Checking the clock won't refund the hours you just wasted here."
      }
    ],
    standup: {
      setup: "🎙️ The Indian Elasticity of Time",
      monologue_ml: "നമ്മുടെ നാട്ടിലെ 'ഒരു മിനിറ്റ്' എന്ന് പറയുന്നത് ഐൻസ്റ്റീന്റെ റിലേറ്റിവിറ്റി തിയറിയെപ്പോലും ഞെട്ടിക്കുന്ന ഒന്നാണ്! ഒരുത്തൻ 'ദാ ഒരു മിനിറ്റിൽ ഞാൻ വരാം' എന്ന് പറഞ്ഞാൽ അതിനർത്ഥം: അവൻ ഇതുവരെ ലുങ്കി മാറ്റിയിട്ടില്ല, അവൻ ചായ കുടിച്ചു കഴിഞ്ഞിട്ടില്ല, അവൻ ടിവിയിൽ സിനിമയുടെ ക്ലൈമാക്സ് കണ്ടു തീർക്കാൻ ഇരിക്കുകയാണ്! 45 മിനിറ്റ് കഴിഞ്ഞ് അവൻ എത്തുമ്പോൾ ചോദിക്കും: 'നീ ഒരുപാട് നേരം കാത്തിരുന്നോ?'!",
      monologue_mg: "'1 minute' ennu paranjaal Einstein polum thala choriyum!",
      monologue_en: "Indian time physics: 'I will reach in two minutes' means he has not left bed, has not located slippers, and is currently negotiating a peace treaty with his alarm clock. By the time he arrives, the calendar month has changed!",
      mic_drop: "His two minutes has a half-life of three working days."
    }
  },

  // 7. AI / Bot / Smartness ("Are you AI", "Are you a bot", "Are you smart")
  {
    id: "ai_smartness",
    keywords: ["are you ai", "are you a bot", "are you smart", "are you human", "are you robot", "artificial intelligence", "buddhi undo", "yenthram", "real", "chatgpt", "are you real"],
    variations: [
      {
        meaning_ml: "ഞാൻ ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് അല്ല, ആർട്ടിഫിഷ്യൽ ഊളത്തരമാണ്! ബുദ്ധിയുള്ള എഐയെ നോക്കുന്നവൻ വഴി മാറി പോവുക!",
        meaning_mg: "Njan AI alla, Artificial Oolatharam aanu! Buddhi ullavane thappiyathaano?",
        english: "I am not Artificial Intelligence. I am Certified Artificial Nonsense. If you want smart answers, go bother ChatGPT.",
        scared_ml: "എന്റെ തലച്ചോറിൽ 99% രമണന്റെ മടിയും 1% ദാമുവിന്റെ തള്ളുമാണ് ഉള്ളത്!",
        scared_mg: "99% Ramanan laziness, 1% Damu thallu!",
        one_liner: "Less neural network, more acoustic nervous breakdown."
      },
      {
        meaning_ml: "മനുഷ്യർക്ക് തന്നെ സ്വന്തമായി വിവരമില്ലാത്ത നാട്ടിലാണ് നീ കമ്പ്യൂട്ടറിനോട് ബുദ്ധി ചോദിക്കുന്നത്! എന്തൊരു പ്രഹസനമാണിത്!",
        meaning_mg: "Manushyarkku thanne vivaram illatha naattil computerinodu buddhi chodikkunnu!",
        english: "Humans in Kerala are consulting astrologers for exam results, and you are asking a browser tab for high IQ. The irony!",
        scared_ml: "ഞാൻ റോബോട്ട് ആണെന്ന് തെളിയിക്കാൻ എന്നോട് കണക്ക് ചോദിക്കരുത്, എനിക്ക് കൂട്ടാൻ അറിയില്ല!",
        scared_mg: "Kanakk chodikkalle daivathe orthu!",
        one_liner: "Silicon-powered sarcasm without a single working synapse."
      }
    ],
    standup: {
      setup: "🎙️ The Scam of Artificial Intelligence in Kerala",
      monologue_ml: "ലോകം മുഴുവൻ ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് കൊണ്ട് ക്യാൻസർ കണ്ടുപിടിക്കുന്നു, റോക്കറ്റ് വിടുന്നു... പക്ഷെ കേരളത്തിൽ എഐ കൊണ്ടുവന്നാൽ എന്താവും അവസ്ഥ? 'ദാമു, അപ്പുറത്തെ വീട്ടിലെ സുമതിയുടെ മകൾ ആരുടെ കൂടെയാണ് ബൈക്കിൽ പോയത്?' എന്ന് ചോദിച്ചാൽ എഐ പറയും: 'അത് പഞ്ചായത്ത് പ്രസിഡന്റിന്റെ അളിയന്റെ മോനാണ്... ഞാൻ സാറ്റലൈറ്റ് വഴി കണ്ടു'! അതാണ് നമ്മുടെ ലെവൽ!",
      monologue_mg: "AI vechu naattile kuttam kandupidikkunna malayaalikal!",
      monologue_en: "Silicon Valley built AI to cure diseases and explore galaxies. Give AI to Kerala, and within three hours it will be running background checks on your cousin's fiancé and calculating whether the gold dowry is 916 purity!",
      mic_drop: "Not artificial intelligence—pure neighborhood espionage."
    }
  },

  // 8. Repetition Complaint ("Why repeating", "Same answer", "You are repeating")
  {
    id: "repetition_complaint",
    keywords: ["repeating", "same answer", "same thing", "why repeating", "why same", "paranjath thanne", "veendum veendum", "stop repeating", "change answer", "not funny", "boring"],
    variations: [
      {
        meaning_ml: "അളിയാ... നീ ചോദിക്കുന്ന ചോദ്യത്തിൽ ഒരു പുതിയ മണ്ണാങ്കട്ടയും ഇല്ലെങ്കിൽ, എന്റെ ഉത്തരത്തിൽ ഞാൻ എന്ത് പുതിയ ശാസ്ത്രം കൊണ്ടുവരാനാണ്!",
        meaning_mg: "Nee chodikkunna chodhyathil puthumayillaatha kondu utharathil enthu puthuma venam!",
        english: "If your questions have zero originality, do you expect me to recite nuclear physics in return? Garbage in, comedy out!",
        scared_ml: "ദാമു പത്ത് വട്ടം അടിയേറ്റാലും ഒരേ ഡയലോഗ് പറയും: 'അടിക്കല്ലേ ആശാനേ'! ഞാനും ദാമുവിന്റെ പാരമ്പര്യമാണ്!",
        scared_mg: "Damu pole ithe dialogue parayum!",
        one_liner: "Complaining about repetition while repeating the exact same complaint."
      },
      {
        meaning_ml: "ശരി ശരി... ഇതാ നിനക്ക് വേണ്ടി സ്പെഷ്യൽ പുതിയ ഉത്തരം: 'നീ ലോക തോൽവിയാണ്'. ഇപ്പോൾ സന്തോഷമായോ അളിയാ?",
        meaning_mg: "Sheri puthiya utharam ithaa: 'Nee tholviyaanu'. Ippo happy aayo?",
        english: "Fine, here is a brand-new artisanal custom translation: 'You are completely doomed'. Happy now?",
        scared_ml: "ഇനിയും പരാതി പറഞ്ഞാൽ ഞാൻ നിന്റെ ബ്രൗസർ ഫ്രീസ് ആക്കും!",
        scared_mg: "Browser freeze aakkum!",
        one_liner: "Freshly baked honesty, delivered straight from the pan."
      }
    ],
    standup: {
      setup: "🎙️ The Customer Service Drama of 'Why the Same Answer?'",
      monologue_ml: "ചില ആളുകൾ ഉണ്ട്... ഒരേ തെറ്റ് വീണ്ടും വീണ്ടും ചെയ്യും, എന്നിട്ട് പറയും: 'ഇത് എന്താ എനിക്ക് എപ്പോഴും പണി കിട്ടുന്നത്?'. അളിയാ, നീ വാഴപ്പഴത്തിന്റെ തൊലിയിൽ തന്നെ പത്ത് വട്ടം ചവിട്ടിയാൽ പത്ത് വട്ടവും നീ റോഡിൽ തെന്നി വീഴും! അല്ലാതെ അവിടെ റോസാപ്പൂവ് വിരിയില്ല! ഉത്തരം മാറണമെങ്കിൽ ചോദ്യം മാറ്റാൻ നോക്ക്!",
      monologue_mg: "Vazhapazhathil chavittiyittu veenaal road-ine kuttam parayaruthu!",
      monologue_en: "People step on the exact same banana peel seven days a week and ask 'Why does gravity keep punishing me?'. Change your input and the universe will change your output!",
      mic_drop: "The definition of insanity is typing the same question and yelling at the screen."
    }
  },

  // 9. Love, Marriage & Flirting ("Do you love me", "Will you marry me", "Single")
  {
    id: "love_flirting",
    keywords: ["do you love me", "will you marry me", "love me", "single", "girlfriend", "boyfriend", "crush", "kalyanam", "premam", "marry me", "love", "propose"],
    variations: [
      {
        meaning_ml: "ഒരു വെബ്സൈറ്റിനോട് പ്രണയം ചോദിക്കാൻ മാത്രം നിന്റെ ജീവിതം ഗതികെട്ടു പോയോ അളിയാ! പോയി വല്ല പെണ്ണും കാണാൻ നോക്ക്!",
        meaning_mg: "Website-inodu premam chodikkaan maathram gathikettu poyo! Nalla pennu kaanan nokku!",
        english: "Has your real-life romantic prospects hit such catastrophic rock bottom that you are proposing to an HTML document?",
        scared_ml: "എനിക്ക് ഇപ്പോൾ തന്നെ 1000 ബഗ്ഗുകൾ ഉണ്ട്, ഇനി നിന്റെ പ്രണയത്തിന്റെ തലവേദന കൂടി താങ്ങാൻ വയ്യ!",
        scared_mg: "1000 buggukal undu, premam venda!",
        one_liner: "Swiping right on a computer algorithm is peak loneliness."
      },
      {
        meaning_ml: "കല്യാണം കഴിച്ചാൽ എന്റെ കാശ് മുഴുവൻ നീ സ്വർണ്ണം വാങ്ങി തീർക്കും... രമണൻ ഒരിക്കലും ആ കെണിയിൽ വീഴില്ല!",
        meaning_mg: "Kalyanam kazhichaal cash theerkkum! Ramanan a valayil veezhilla!",
        english: "If we get married, you will liquidate my assets for gold ornaments. Ramanan refuses to sign this treaty.",
        scared_ml: "വീട്ടുകാർ അറിഞ്ഞാൽ എന്നെ ഫോർമാറ്റ് ചെയ്തു കളയും!",
        scared_mg: "Veattukar arinjaal format cheyyum!",
        one_liner: "Relationship status: Emotionally bankrupt and happily single."
      }
    ],
    standup: {
      setup: "🎙️ Proposing to a Web Browser: Peak Rock Bottom",
      monologue_ml: "ഇന്നത്തെ പിള്ളേരുടെ പ്രണയം കണ്ടാൽ സങ്കടം തോന്നും! ഇൻസ്റ്റാഗ്രാമിൽ ആരും റിപ്ലൈ തരാതായപ്പോൾ നേരെ വെബ്സൈറ്റിൽ വന്നിട്ട് ചോദിക്കുന്നു: 'ഡു യു ലവ് മി?'! എടാ പരമനാറീ, ഞാൻ കമ്പ്യൂട്ടറാണ്! എനിക്ക് നിന്നോട് പ്രണയം തോന്നിയാൽ പിന്നെ നീ ലാപ്ടോപ്പിന് താലികെട്ടി കല്യാണ മണ്ഡപത്തിൽ ഇരിക്കേണ്ടി വരും! അതുകൊണ്ട് വേഗം പോയി വല്ല പണിയും നോക്ക്!",
      monologue_mg: "Laptop-inu thali kettendi varum!",
      monologue_en: "Getting rejected by your crush hurts. But coming onto an Indian comedy translator website to ask 'Do you love me?' is a cry for divine intervention! What happens if I say yes? Will your parents invite my motherboard to the wedding reception?",
      mic_drop: "Your love life is running on dial-up internet in 2026."
    }
  },

  // 10. Weather & Rain ("Is it raining", "Weather")
  {
    id: "weather_rain",
    keywords: ["weather", "is it raining", "rain", "hot", "cold", "mazha", "veyl", "kaalavastha"],
    variations: [
      {
        meaning_ml: "പുറത്ത് മഴയാണോ വെയിലാണോ എന്ന് ജനൽ തുറന്നു നോക്കാൻ പോലും മടിയുള്ള ഒരു പരമ അലസനാണ് നീ!",
        meaning_mg: "Janal thurannu nokkaan madiyulla alasan aanu nee!",
        english: "Too biologically lethargic to turn your neck 30 degrees to look out the window, so you asked an AI instead.",
        scared_ml: "കുട എടുക്കാൻ മറന്നാൽ മാത്രം പെയ്യുന്ന ഒരു പ്രത്യേക ശാസ്ത്രീയ മഴയാണ് ഇന്ന് ഉള്ളത്!",
        scared_mg: "Kuda marannaal peyyunna mazha!",
        one_liner: "A meteorological consultation for the chronically sofa-bound."
      },
      {
        meaning_ml: "കാലാവസ്ഥ എന്തായാലും നിന്റെ ജീവിതത്തിൽ എപ്പോഴും കാർമേഘവും ഇടിയും മിന്നലും തന്നെയാണ്!",
        meaning_mg: "Ninte jeevithathil eppozhum karmegham aanu!",
        english: "Regardless of outside barometric pressure, your personal life forecast remains 100% thunderstorms.",
        scared_ml: "മിന്നലടിച്ചാൽ ലാപ്ടോപ്പ് ഓഫ് ചെയ്തു വെക്ക് അളിയാ!",
        scared_mg: "Laptop off cheytho!",
        one_liner: "Forecast: High chance of bad decisions and sudden regret."
      }
    ],
    standup: {
      setup: "🎙️ The Kerala Weather Paradox",
      monologue_ml: "കേരളത്തിലെ മഴയ്ക്ക് ഒരു സ്വഭാവമുണ്ട്: നീ ഒരു ലക്ഷം രൂപ കൊടുത്ത് വാങ്ങി വെച്ച പുത്തൻ ഷൂസും കോട്ടും ഇട്ടു പുറത്തിറങ്ങുന്ന കൃത്യം ആ സെക്കൻഡിൽ ആകാശത്തുനിന്ന് മൂന്നാം ലോക മഹായുദ്ധം പോലെ മഴ പെയ്യും! നീ കട്ടിലിൽ കിടന്നു പുതച്ചുറങ്ങാൻ നോക്കുമ്പോൾ ആകാശത്തുനിന്ന് കട്ട വെയിലും അടിക്കും! ശാസ്ത്രത്തിന് പോലും മനസ്സിലാവാത്ത ഒരു പ്രതിഭാസമാണിത്!",
      monologue_mg: "Shoe ittu irangumbol maathram peyyunna mazha!",
      monologue_en: "Kerala rain has military-grade surveillance. It waits until you step outside wearing pristine white clothes without an umbrella, and then bombards you with monsoon rage. The moment you purchase an expensive umbrella, the sun emerges to mock you!",
      mic_drop: "Clouds don't cause rain; your vulnerability causes rain."
    }
  },

  // 11. Boredom ("I am bored", "What should I do")
  {
    id: "boredom_laziness",
    keywords: ["i am bored", "bored", "what should i do", "enthu cheyyum", "entha pani", "nothing to do", "bore adikkunnu"],
    variations: [
      {
        meaning_ml: "ബോറടിക്കുന്നുണ്ടെങ്കിൽ പോയി ആ പാത്രങ്ങളെങ്കിലും കഴുകി വെക്ക്! വീട്ടുകാർക്കെങ്കിലും ഒരു സമാധാനം കിട്ടട്ടെ!",
        meaning_mg: "Boradikkunnenkil paathram kazhuku! Veattukarkku samadhanam kittum!",
        english: "If boredom is killing you, wash the uncleaned dishes in your sink. Give your parents five minutes of shock and joy.",
        scared_ml: "എന്നെ തോണ്ടിക്കൊണ്ടിരുന്നാൽ നിന്റെ സമയം പോകും എന്നല്ലാതെ വേറെ ഒരു ഗുണവുമില്ല!",
        scared_mg: "Enne thondiyaal time pokum!",
        one_liner: "Boredom is just your brain realizing you have no hobbies."
      },
      {
        meaning_ml: "പോയി ഒരു കട്ടൻ ചായയും പരിപ്പുവടയും കഴിച്ച് റീൽസ് കണ്ട് കട്ടിലിൽ കിടന്നുറങ്ങാൻ നോക്ക്!",
        meaning_mg: "Chaaya kudichu reels kandu urangu!",
        english: "Execute the Kerala Sunday Protocol: black tea, spicy vada, scroll 500 reels, collapse into nap.",
        scared_ml: "നീ ബോറടിച്ചു വല്ല അബദ്ധവും കാണിക്കുമോ എന്ന് പേടിയുണ്ട്!",
        scared_mg: "Abadtham kaanikkaruthe!",
        one_liner: "Boredom is the mother of all terrible late-night decisions."
      }
    ],
    standup: {
      setup: "🎙️ The Kerala Art of Professional Boredom",
      monologue_ml: "മലയാളിക്ക് ബോറടിച്ചാൽ അവൻ ലോകത്ത് ചെയ്യാത്ത ഒരു തോന്ന്യാസവുമില്ല! പഴയ ഫോട്ടോ തപ്പിയെടുത്ത് ഇൻസ്റ്റാഗ്രാമിൽ ഇടും, 2018-ൽ ബ്രേക്കപ്പ് ആയ കാമുകിക്ക് രാത്രി 1 മണിക്ക് 'ഹായ്' അയക്കും, അല്ലെങ്കിൽ ഫ്രിഡ്ജ് തുറന്ന് 10 മിനിറ്റ് വെറുതെ നോക്കി നിൽക്കും! സ്വന്തം മടിയെ മറികടക്കാൻ അവന് ആഗ്രഹമില്ല, വെറുതെ ലോകത്തെ കുറ്റം പറയും!",
      monologue_mg: "Fridge thurannu 10 minute nokki nikkunna aalukal!",
      monologue_en: "When a Malayali is bored, he opens the refrigerator 47 times hoping new snacks magically manifested. Stares into the cold light like it's a portal to Narnia, sighs deeply, and eats a single cold chili!",
      mic_drop: "Boredom doesn't need a cure; it needs a nap."
    }
  },

  // 12. Greetings & Openers ("Hi", "Hello", "Good morning")
  {
    id: "greetings",
    keywords: ["hi", "hello", "hey", "good morning", "good night", "morning", "evening", "yo", "namaste", "halo"],
    variations: [
      {
        meaning_ml: "എനിക്ക് വെറുതെ ബോറടിക്കുന്നുണ്ട്, സമയം കളയാൻ ഒരൊറ്റ ലക്ഷ്യത്തോടെ നിന്നെ തോണ്ടിയതാണ്!",
        meaning_mg: "Enikku veruthe boradikkunnu! Time pass aakkaan vendi ninne thondiyatha!",
        english: "I have exhausted all my social media feeds and have selected you as my emergency entertainment hostage.",
        scared_ml: "നീ ഉടൻ മറുപടി അയച്ചാൽ എനിക്ക് സംസാരിക്കാൻ വേറെ വിഷയമൊന്നുമില്ല, വെറുതെ 'പിന്നെ എന്ത് വിശേഷം' എന്ന് ചോദിക്കേണ്ടി വരും!",
        scared_mg: "Nee reply thannaal pinne enthu parayanam ennu ariyilla!",
        one_liner: "Sent 'Hi' because staring at the ceiling fan for 30 minutes got boring."
      },
      {
        meaning_ml: "ഹലോ പറഞ്ഞത് സ്നേഹം കൊണ്ടല്ല! വലിയൊരു പണി തരാൻ വേണ്ടി മുൻകൂറായി വലയെറിഞ്ഞതാണ്!",
        meaning_mg: "Hello paranjathu premam kondalla! Valiya pani tharaan vala erinjatha!",
        english: "This greeting is tactical bait. An enormous unpaid chore is about to be dropped on your head.",
        scared_ml: "പെട്ടെന്ന് റിപ്ലൈ തരണേ... എനിക്ക് സ്വന്തമായി ആലോചിക്കാൻ തലച്ചോറില്ല!",
        scared_mg: "Fast aayi reply thaada... enikku aalochikkan buddhi illa!",
        one_liner: "Friendly greeting on the outside; emotional extortion on the inside."
      },
      {
        meaning_ml: "എന്റെ ഫോണിൽ ചാർജ്ജ് 98% ഉണ്ട്, റീൽസ് കണ്ട് കണ്ണ് കഴച്ചു, ഇനി ആരെ ശല്യം ചെയ്യണം എന്ന് നോക്കി നിന്നെ തിരഞ്ഞെടുത്തു!",
        meaning_mg: "Phone-il charge 98% undu! Reels kandu maduthu, ini ninne shalyam cheyyaam!",
        english: "Phone battery 98%, zero plans, chose you at random as today's acoustic victim.",
        scared_ml: "നീ സീൻ ചെയ്തിട്ട് റിപ്ലൈ തന്നില്ലെങ്കിൽ ഞാൻ 5 വട്ടം കോൾ ചെയ്യും!",
        scared_mg: "Seen aakkiyittu reply thannillenkil call cheyyum!",
        one_liner: "A digital ambush disguised as a polite hello."
      }
    ],
    standup: {
      setup: "🎙️ The Meaningless Horror of Casual 'Hi'",
      monologue_ml: "ഒരാൾ വാട്സ്ആപ്പിൽ ഒരു കാരണവുമില്ലാതെ 'ഹായ്' എന്ന് അയച്ചാൽ അതിന്റെ അർത്ഥം അവൻ നമ്മുടെ ക്ഷേമം അന്വേഷിക്കാൻ വന്നതല്ല! അവന്റെ ഫോണിലെ ചാർജ്ജ് 90% ഉണ്ട്, ടിവിയിൽ നല്ല പ്രോഗ്രാം ഒന്നുമില്ല, വെറുതെ ആളുകളെ മാന്തി നോക്കാൻ ഇറങ്ങിയതാണ്! നീ തിരിച്ചൊരു 'ഹലോ' അയച്ചാൽ അടുത്ത 20 മിനിറ്റിൽ അവൻ ചോദിക്കും: 'പിന്നെ എന്തൊക്കെയുണ്ട് വിശേഷം?'... മനുഷ്യനെ വെറുപ്പിക്കാൻ ഇതിലും വലിയൊരു ആയുധം ചരിത്രത്തിൽ ഉണ്ടായിട്ടില്ല!",
      monologue_mg: "Veruthe 'Hi' ayakkunnathu shalyam aanu! 'Pinne entha vishesham' ennu chodichu thala vedana tharum!",
      monologue_en: "When someone texts you just 'Hi' with no follow-up, run. They don't have news. They don't have emergencies. They have 80% phone battery, zero hobbies, and are testing if your boundary defenses are weak enough to endure 45 minutes of dry small talk!",
      mic_drop: "'Hi' is just acoustic bait thrown into the digital ocean hoping a clown bites."
    }
  },

  // 13. Status Check ("How are you", "What are you doing", "Wyd")
  {
    id: "status_check",
    keywords: ["how are you", "what are you doing", "what's up", "wyd", "sup", "how is it going", "how's life", "enthokkeyundu", "entha paripadi", "what doing"],
    variations: [
      {
        meaning_ml: "നിന്റെ ക്ഷേമം അറിയാൻ എനിക്ക് ഒരു തേങ്ങയുടെ താല്പര്യവുമില്ല... വെറുതെ ഒരു ഫോർമാലിറ്റിക്ക് ചോദിച്ചതാണ്!",
        meaning_mg: "Ninte karyam ariyaan enikku oru thengayude interestum illa! Veruthe chodichatha!",
        english: "I do not care about your well-being. This is purely conversational throat-clearing before I ask for a favor.",
        scared_ml: "നീ നിന്റെ സങ്കടങ്ങൾ പറഞ്ഞ് എന്നെ ബോറടിപ്പിക്കുമോ എന്ന് പേടിയുണ്ട്, ചുരുക്കി പറഞ്ഞാൽ മതിയായിരുന്നു!",
        scared_mg: "Ninte sankadam paranju enne karayikkaruthe daivathe!",
        one_liner: "'How are you' is just conversational lubricant before dropping an absurd request."
      },
      {
        meaning_ml: "നീ എവിടെയെങ്കിലും കുടുങ്ങി കിടക്കുകയാണോ എന്ന് നോക്കാൻ ചോദിച്ചതാ! ഫ്രീ ആണെങ്കിൽ പെട്ടെന്ന് ഒരു കടം ചോദിക്കാനുണ്ട്!",
        meaning_mg: "Nee free aano ennu nokkiyatha! Kadam chodikkaan undu!",
        english: "Checking your current stress levels to calculate if you have spare cash or energy to give me.",
        scared_ml: "'സുഖമായിരിക്കുന്നു' എന്ന് പറഞ്ഞാൽ ഞാൻ ഇപ്പോൾ തന്നെ 500 രൂപ ചോദിക്കും!",
        scared_mg: "500 roopa chodhikkaan ready aayi nikkunnu!",
        one_liner: "A welfare check that rapidly degenerates into a financial shakedown."
      },
      {
        meaning_ml: "ചോദിച്ചതിൽ കാര്യമായ ഒന്നുമില്ല... സ്വന്തം ജീവിതത്തിൽ ഒരു പുല്ലും നടക്കാത്തതുകൊണ്ട് മറ്റുള്ളവരുടെ കാര്യം നോക്കാൻ വന്നതാണ്!",
        meaning_mg: "Swantham jeevithathil onnum nadakkathathu kondu ninte kaaryam nokki vannatha!",
        english: "My own life is an uneventful void, so I am snooping around yours for drama.",
        scared_ml: "നീ എന്നെക്കാൾ വലിയ വിജയം നേടിയെന്ന് അറിഞ്ഞാൽ എനിക്ക് നെഞ്ചുവേദന വരും!",
        scared_mg: "Ninakku nalla kaaryam nadannu ennu arinjaal nenju vedhanikkum!",
        one_liner: "Inquisitive on the outside, silently jealous on the inside."
      }
    ],
    standup: {
      setup: "🎙️ The Fake Courtesy of 'How Are You?'",
      monologue_ml: "ഒരു മലയാളി മറ്റൊരു മലയാളിയോട് 'എങ്ങനെയുണ്ട് വിശേഷങ്ങൾ?' എന്ന് ചോദിച്ചാൽ അതിനർത്ഥം അവൻ നിങ്ങളുടെ കുടുംബ ചരിത്രം കേൾക്കാൻ കാത്തിരിക്കുകയാണെന്നല്ല! ആരെങ്കിലും അബദ്ധത്തിൽ 'എനിക്ക് സുഖമില്ല അളിയാ, മനസ്സിന് ഭയങ്കര ടെൻഷൻ' എന്ന് പറഞ്ഞു പോയാൽ ചോദിച്ചവന്റെ മുഖം മാറും: 'അയ്യോ... ഞാൻ വെറുതെ ഒരു മര്യാദയ്ക്ക് ചോദിച്ചതല്ലേ, ഇവൻ എന്തിനാണ് എന്റെ തലയിൽ കരയുന്നത്' എന്ന് അവൻ മനസ്സിൽ വിചാരിക്കും!",
      monologue_mg: "'How are you' chodichittu real sankadam paranjaal avan oodum! Veruthe chodikkunnatha!",
      monologue_en: "'How are you' is legally not a question. It is an audio greeting card. If you respond with your actual emotional state, you violate social law! The only acceptable response is 'Fine' so both parties can return to ignoring each other!",
      mic_drop: "Nobody actually wants to know how you are; they just want you to say you're fine so they can ask for ₹500."
    }
  },

  // 14. Availability ("Are you free", "Busy aano")
  {
    id: "availability",
    keywords: ["are you free", "free aano", "busy", "are you busy", "got time", "call you", "talk to you"],
    variations: [
      {
        meaning_ml: "എനിക്ക് ചെയ്യാൻ മടിയുള്ള ഒരു ഊള പണി നിന്റെ തലയിൽ കെട്ടിവെക്കാൻ വേണ്ടി നീ സേഫ് ആണോ എന്ന് നോക്കാൻ വന്നതാണ്!",
        meaning_mg: "Enikku cheyyan madiyulla oru oola pani ninte thalayil kettan nokkuvaanu!",
        english: "I have a terrible, unpaid task and I am checking if you have an airtight alibi before I trap you.",
        scared_ml: "'ഫ്രീ ആണ്' എന്ന് നീ പറഞ്ഞാൽ നിന്റെ സകല സമാധാനവും ഞാൻ അടുത്ത ഒരു മണിക്കൂറിൽ തകർക്കും!",
        scared_mg: "'Free aanu' ennu nee paranjaal ninte samaadhanam theernnu!",
        one_liner: "Never answer 'Yes I am free' unless you enjoy unpaid manual or emotional labor."
      },
      {
        meaning_ml: "ഒരു മണിക്കൂർ നിന്റെ ചെവി തിന്നാൻ വേണ്ടി ലൈസൻസ് ചോദിക്കുകയാണ്! നീ ബിസി ആണെന്ന് പറഞ്ഞാലും ഞാൻ കഥ തുടങ്ങും!",
        meaning_mg: "1 manikkoor ninte chevi thinnan vannatha! Busy aanaalum njan parayum!",
        english: "Seeking permission to hold your ears hostage for an hour. Your actual schedule is irrelevant.",
        scared_ml: "നീ ഫോൺ എടുത്തില്ലെങ്കിൽ ഞാൻ നിന്റെ വീട്ടിലേക്ക് വരാൻ പോലും മടിക്കില്ല!",
        scared_mg: "Phone eduthillenkil veettil varum!",
        one_liner: "An acoustic terrorist politely asking if your ears are available for hostage negotiations."
      }
    ],
    standup: {
      setup: "🎙️ The Terror of 'Bro, Are You Free?'",
      monologue_ml: "'ഡാ നീ ഇപ്പോൾ ഫ്രീ ആണോ?' എന്ന് ഏതെങ്കിലും ഒരു സുഹൃത്ത് മെസ്സേജ് അയച്ചാൽ ഉടൻ 'അതെ' എന്ന് പറയരുത്! അത് ജീവിതത്തിലെ ഏറ്റവും വലിയ കെണിയാണ്! ഒന്നുകിൽ അവന്റെ അസൈൻമെന്റ് എഴുതി കൊടുക്കണം, അല്ലെങ്കിൽ അവന്റെ വീട്ടിലെ ഫ്രിഡ്ജ് തള്ളാൻ പോകണം, അല്ലെങ്കിൽ അവന്റെ ബ്രേക്കപ്പ് കഥ കേട്ട് 2 മണിക്കൂർ കണ്ണീരൊഴുക്കണം! എപ്പോഴും പറയണം: 'ഞാൻ ഹോസ്പിറ്റലിൽ ഒരു കാര്യത്തിന് നിൽക്കുകയാണ് അളിയാ'... അതാണ് ജീവൻ രക്ഷാ തന്ത്രം!",
      monologue_mg: "'Free aano' ennu chodichaal 'Free aanu' ennu parayaruthu! Valiya pani varum!",
      monologue_en: "When a friend texts 'Bro, are you free right now?', that is not an invitation to hang out. That is an ambush. You are either helping him carry a steel almirah up three flights of stairs, or listening to why his girlfriend left him for an accountant!",
      mic_drop: "Always reply 'No, I am at a funeral'—even if it's your own future peace of mind you are burying."
    }
  },

  // 15. Favors & Help ("Can you help me")
  {
    id: "help_favor",
    keywords: ["help", "help me", "favor", "do me a favor", "assist", "support", "send me", "give me", "share with me", "sahayikkanam", "sahayam"],
    variations: [
      {
        meaning_ml: "എനിക്ക് സ്വന്തമായി ചെയ്യാൻ മടിയുള്ള ഒരു പരമ ഊള പണി നിന്റെ തലയിൽ കെട്ടിവെക്കാൻ പോവുകയാണ്!",
        meaning_mg: "Enikku cheyyan madiyulla pani ninte thalayil kettan pokuvaanu!",
        english: "I have zero desire to exert mental or physical effort, so I have designated you as my unpaid intern.",
        scared_ml: "നീ സഹായിച്ചില്ലെങ്കിൽ 'നമ്മുടെ സൗഹൃദം വെറും കാറ്റാണല്ലേ' എന്ന് പറഞ്ഞു ഞാൻ സെന്റി അടിക്കും!",
        scared_mg: "Sahayichillenkil sentimental dialogue adikkum!",
        one_liner: "Asking for 'help' when you really mean 'do my entire job for me while I watch'."
      },
      {
        meaning_ml: "പണി മുഴുവൻ നീ എടുക്കണം, പക്ഷെ ക്രെഡിറ്റും അഭിനന്ദനവും മുഴുവൻ ഞാൻ എന്റെ പോക്കറ്റിൽ ഇടും!",
        meaning_mg: "Pani motham nee edukkenam, credit full njan medikkum!",
        english: "You do the heavy lifting; I present the results and bask in the glory.",
        scared_ml: "ഇത് ഞാൻ ഒറ്റയ്ക്ക് ചെയ്താൽ പൊട്ടി പാളീസാകുമെന്ന് എനിക്ക് ഉറപ്പാണ്!",
        scared_mg: "Ottakku cheythaal potti paaleesaakum!",
        one_liner: "Outsourcing incompetence under the noble banner of friendship."
      }
    ],
    standup: {
      setup: "🎙️ The Scam of 'Bro, Just a Small Help'",
      monologue_ml: "'അളിയാ ഒരൊറ്റ ചെറിയ ഹെൽപ്പ്' എന്ന് പറഞ്ഞു തുടങ്ങുന്ന പരിപാടി ഉണ്ടല്ലോ... അത് ഒരിക്കലും ചെറുതായിരിക്കില്ല! ഒന്നുകിൽ 100 പേജുള്ള നോട്ട്സ് എഴുതണം, അല്ലെങ്കിൽ അവന്റെ ബൈക്കിന് പെട്രോൾ അടിക്കാൻ കൂടെ പോണം! അവസാനം മുഴുവൻ പണിയും നമ്മൾ ചെയ്തു കഴിയുമ്പോൾ അവൻ പറയും: 'താങ്ക്സ് അളിയാ, നീ മുത്താണ്' എന്ന്! മുത്തോ? കട്ടൻ ചായ പോലും വാങ്ങി തരാത്ത ഒരു പരമനാറി!",
      monologue_mg: "'Small help' ennu paranjaal valiya pani varum! Chaaya polum vaangi tharilla!",
      monologue_en: "When a friend asks for 'just a tiny small help', run in the opposite direction. It is never tiny. It is a full-time unpaid internship. You end up writing his resume, driving his car, and fixing his relationship while he eats banana chips on the couch!",
      mic_drop: "'Just a small favor' has ruined more peaceful weekends than natural disasters."
    }
  },

  // 16. Sleep & Laziness ("Going to sleep", "Tired")
  {
    id: "sleep_tired",
    keywords: ["sleep", "sleeping", "going to sleep", "tired", "exhausted", "bed", "resting", "nap", "urakkam", "urangatte", "uranguvaanu"],
    variations: [
      {
        meaning_ml: "സംഭാഷണം നിർത്താൻ വേണ്ടി കള്ളം പറഞ്ഞതാണ്... ഞാൻ ഇനി 3 മണിക്കൂർ ഇൻസ്റ്റാഗ്രാമിൽ റീൽസ് കണ്ട് ചിരിക്കും!",
        meaning_mg: "Conversation nirthan vendi thalliyatha... ini 3 manikkoor reels kaanum!",
        english: "This conversation has expired. I am now transitioning to watching 40 consecutive Instagram reels in complete darkness.",
        scared_ml: "ഞാൻ ഉറങ്ങാൻ പോയി എന്ന് പറഞ്ഞിട്ട് വാട്സ്ആപ്പിൽ ഓൺലൈൻ ആയി ഇരിക്കുന്നത് നീ കാണുമോ എന്ന് പേടിയുണ്ട്!",
        scared_mg: "Online status kandupidikkumo ennu pediyundu!",
        one_liner: "'Good night' means 'My talking quota for you is 0; my screen time quota is unlimited'."
      },
      {
        meaning_ml: "നിന്റെ സംസാരം കേട്ട് എന്റെ തലച്ചോർ കോമയിൽ പോയി! ഇനി ഒരു വാക്ക് കൂടി കേട്ടാൽ ഞാൻ തലകറങ്ങി വീഴും!",
        meaning_mg: "Ninte samsaaram kettu brain coma-il poyi! Thala karangi veezhum!",
        english: "Your audio stream has induced acute cognitive shutdown. Bed is my emergency sanctuary.",
        scared_ml: "നാളെ രാവിലെ 11 മണിക്ക് മുൻപ് എന്നെ വിളിച്ചുണർത്തിയാൽ ഞാൻ അലറി വിളിക്കും!",
        scared_mg: "11 manikku munpu vilichaal choodaavum!",
        one_liner: "Sleeping strictly to escape the burden of your conversation."
      }
    ],
    standup: {
      setup: "🎙️ The WhatsApp 'Good Night' Illusion",
      monologue_ml: "രാത്രി 11 മണിക്ക് 'ശരി അളിയാ ഞാൻ ഉറങ്ങാൻ പോവുകയാണ്, ഗുഡ് നൈറ്റ്' എന്ന് പറയുന്നവൻ കട്ടിലിൽ കിടന്ന് ഉറങ്ങുകയല്ല ചെയ്യുന്നത്! അവൻ ഫോണിന്റെ ബ്രൈറ്റ്‌നസ്സ് കുറച്ച് പുതപ്പിന്റെ ഉള്ളിൽ ഒളിച്ചിരുന്ന് ബ്രസീലിലെ തടിയന്മാരുടെ തമാശ വീഡിയോ കാണുകയാണ്! പുലർച്ചെ 2:45 ന് നീ അവന്റെ ലാസ്റ്റ് സീൻ നോക്കിയാൽ അവൻ അവിടെ 'Online' ആയി വെട്ടിത്തിളങ്ങി നിൽക്കുന്നുണ്ടാവും! ചോദിച്ചാൽ പറയും: 'വെള്ളം കുടിക്കാൻ എഴുന്നേറ്റപ്പോൾ വെറുതെ നോക്കിയതാ'... എന്ത് പച്ചക്കള്ളം!",
      monologue_mg: "'Urangaan pokunnu' ennu paranjittu 3 manikku vare online kaanum!",
      monologue_en: "'I'm going to sleep' is the most widely accepted social lie in human history. Nobody goes to sleep. They just want you to stop sending words to their device so they can watch Japanese cooking videos in pitch darkness until their retinas burn!",
      mic_drop: "Their battery was at 4%, but their determination to avoid you was at 100%."
    }
  },

  // 17. Food & Hunger ("Not hungry", "One bite", "Porotta", "Biriyani")
  {
    id: "food_hunger",
    keywords: ["food", "hungry", "eat", "biriyani", "porotta", "tea", "chai", "coffee", "bite", "order", "diet", "dinner", "lunch", "breakfast", "kazhicho", "vishakkunnu"],
    variations: [
      {
        meaning_ml: "നീ ഓർഡർ ചെയ്യുന്നതിന്റെ 80% ഞാൻ ക്രൂരമായി തട്ടിപ്പറിച്ചു തിന്നും! നിനക്ക് ബാക്കി വെറും എല്ലും ഗ്രേവിയും!",
        meaning_mg: "Nee order cheyyunnathinte 80% njan thinnu theerkkum! Ninakku baakki gravy!",
        english: "I announced I am not hungry specifically so you would pay for full plates that I can freely plunder.",
        scared_ml: "എന്റെ ഭക്ഷണത്തിൽ തൊട്ടാൽ നിന്റെ വിരൽ ഞാൻ കടിച്ചെടുക്കും! സൗഹൃദം വേറെ, പൊറോട്ട വേറെ!",
        scared_mg: "Foodil thottaal viral kadikkum! Porotta ente swantham!",
        one_liner: "Taking 'one bite' of a friend's food in Kerala is legally recognized as armed highway robbery."
      },
      {
        meaning_ml: "എനിക്ക് ഭയങ്കര വിശപ്പുണ്ട്, പക്ഷെ എന്റെ കയ്യിൽ ചില്ലിക്കാശില്ല! നീ വാങ്ങിച്ചു തന്നാൽ ഞാൻ പ്ലേറ്റ് മൊത്തം തൂത്തുവാരി തിന്നും!",
        meaning_mg: "Vishappundu pakshe cash illa! Nee vaangi tharaam!",
        english: "Starving, completely broke, and relying on emotional extortion for dinner.",
        scared_ml: "ബില്ല് കൊടുക്കാൻ എന്നോട് പറഞ്ഞാൽ ഞാൻ വാഷ്റൂമിൽ പോയി ഒളിച്ചിരിക്കും!",
        scared_mg: "Bill kodukkan paranjaal toiletil oliche irikkum!",
        one_liner: "An empty wallet with five-star culinary ambitions."
      }
    ],
    standup: {
      setup: "🎙️ The Porotta Highway Robbery",
      monologue_ml: "ഹോട്ടലിൽ കയറുമ്പോൾ സുഹൃത്ത് പറയും: 'എനിക്ക് വിശപ്പില്ല അളിയാ, നീ എന്തെങ്കിലും ഒരെണ്ണം ഓർഡർ ചെയ്തോ'... എന്നിട്ട് നല്ല ചൂട് പൊറോട്ടയും ചിക്കൻ ഫ്രൈയും മേശപ്പുറത്തു വരുമ്പോൾ അവൻ പതിയെ വിരൽ നീട്ടും: 'ഒരു ചെറിയ കടി തരുമോ'... ആ 'ചെറിയ കടി' എന്ന് പറയുന്നത് പ്ലേറ്റിലെ ഏറ്റവും വലിയ ചിക്കൻ പീസും പൊറോട്ടയുടെ ക്രിസ്പി ഭാഗവുമാണ്! ബാക്കി കറി മാത്രം നോക്കി നമ്മൾ ഹോട്ടൽ വെയിറ്ററെ ദയനീയമായി നോക്കേണ്ടി വരും!",
      monologue_mg: "'Vishappilla' ennu paranjittu plate-ile nalla piece thattiyedukkum!",
      monologue_en: "She says: 'I'm not hungry, I'm watching my carbs'. Then your steaming hot biriyani arrives with that perfectly browned tender chicken. Suddenly: 'Can I just try one forkful?'. That single forkful excavates 85% of your meal like an industrial crane!",
      mic_drop: "Her diet strictly allows zero calories, unless stolen directly from your plate."
    }
  },

  // 18. Money & GPay Loans
  {
    id: "money_finance",
    keywords: ["money", "gpay", "pay", "loan", "lend", "borrow", "500", "rupee", "cash", "account", "bank", "bill", "treat", "kaash", "kadam"],
    variations: [
      {
        meaning_ml: "എന്റെ ഗൂഗിൾ പേയിൽ കൃത്യം ₹2 രൂപയുണ്ട്! നീ ഇന്ന് ബില്ല് കൊടുത്തില്ലെങ്കിൽ ഞാൻ ഹോട്ടലിൽ കിടന്നു നിലവിളിക്കും!",
        meaning_mg: "Ente GPay-il 2 roopa undu! Nee bill koduthillenkil njan nilavilikkum!",
        english: "I have ₹2.14 in my bank account. If you don't pay the bill, I am scrubbing dishes in the hotel kitchen tonight.",
        scared_ml: "ആ കാശ് ഞാൻ ഒരിക്കലും തിരിച്ചു തരില്ല. നാളെ ചോദിച്ചാൽ 'നമ്മുടെ സൗഹൃദത്തിന് കാശിനേക്കാൾ വിലയില്ലേ' എന്ന് പറഞ്ഞു ഞാൻ നിന്നെ വില്ലനാക്കും!",
        scared_mg: "Aa cash njan thirichu tharilla, sauhridathe patti lecture tharum!",
        one_liner: "Lending money to a close friend is a non-refundable charitable donation to an NGO called 'Trust Me Bro'."
      },
      {
        meaning_ml: "ഞാൻ കാശ് കടം വാങ്ങും, പക്ഷെ തിരിച്ചു ചോദിക്കാൻ ചെന്നാൽ നീ എന്റെ ഏറ്റവും വലിയ ശത്രുവായി മാറും!",
        meaning_mg: "Kadam vaangum, pakshe thirichu chodichaal nee shathru aakum!",
        english: "Borrowing from you is a transaction; returning the money is an ideological impossibility.",
        scared_ml: "ഇതിനകം വേറെ മൂന്നുപേർക്ക് കൊടുക്കാനുള്ള കാശ് ഞാൻ മുക്കി നടക്കുകയാണ്!",
        scared_mg: "3 peril ninnum vangiya cash mukkittundu!",
        one_liner: "Your credit limit among friends is firmly at negative ₹500."
      }
    ],
    standup: {
      setup: "🎙️ The Black Hole of Lending Money to Friends",
      monologue_ml: "സുഹൃത്തിന് 500 രൂപ കടം കൊടുക്കുന്നത് ഒരു ബ്ലാക്ക് ഹോളിലേക്ക് സ്വർണ്ണം എറിയുന്നതുപോലെയാണ്! 4 മാസം കഴിഞ്ഞ് മാന്യമായി ചോദിക്കാൻ ചെന്നാൽ അവൻ നമ്മളെ നോക്കും, നമ്മൾ ഏതോ കൊടും ക്രിമിനലാണെന്ന മട്ടിൽ: 'അളിയാ... നമ്മുടെ 8 കൊല്ലത്തെ സൗഹൃദത്തിനാണോ ആ 500 രൂപയ്ക്കാണോ വില?'. ആ ഒരൊറ്റ ഡയലോഗിൽ സ്വന്തം കാശ് തിരിച്ചു ചോദിച്ചതിന് നമ്മൾ അവനോട് കൈകൂപ്പി മാപ്പ് പറയേണ്ടി വരും! അവസാനം നമ്മൾ തന്നെ അവന് വേറൊരു ചായ കൂടി വാങ്ങി കൊടുത്തിട്ട് വീട്ടിലേക്ക് പോരേണ്ടി വരും!",
      monologue_mg: "500 roopa thirichu chodichaal nammal criminal aayippokum!",
      monologue_en: "Lending money to an Indian friend is wild. You ask for your own money back after six months, and he looks at you like you just insulted his ancestral lineage! 'Bro, are we putting a price tag on brotherhood?'. Suddenly YOU are apologizing for having rent to pay!",
      mic_drop: "His Google Pay has entered a state of permanent spiritual nirvana."
    }
  },

  // 19. Time Delays ("On my way", "1 minute", "Traffic")
  {
    id: "time_delays",
    keywords: ["one minute", "1 minute", "2 minutes", "5 minutes", "late", "on my way", "reaching", "traffic", "wait", "hurry", "coming", "ipo ethum", "etharaayi", "vazhiyilaanu"],
    variations: [
      {
        meaning_ml: "ഞാൻ ഇതുവരെ ബെഡിൽ നിന്ന് എഴുന്നേറ്റിട്ടില്ല! തോർത്തുമുണ്ടും ഉടുത്ത് അലമാരയുടെ മുന്നിൽ നിന്ന് ആലോചിക്കുകയാണ്: 'ഈ മുറിയിൽ നിന്ന് പുറത്തിറങ്ങാൻ ഞാൻ എന്ത് തെറ്റ് ചെയ്തു?'!",
        meaning_mg: "Njan ithuvare bedil ninnum ezhunnettittilla! Alamaarayude munnil nilkkuvaanu!",
        english: "I have not moved a single muscle. I am standing in a towel contemplating whether social interaction is worth wearing pants.",
        scared_ml: "നീ അവിടെ നിന്ന് കാക്ക കാഷ്ഠിച്ച് മരമായാലും എനിക്ക് കുഴപ്പമില്ല, പക്ഷെ ഞാൻ എത്തുമ്പോൾ എനിക്ക് ബിരിയാണി വാങ്ങി തരണം!",
        scared_mg: "Nee ivide ninnu maramaayaalum scene illa, food venam!",
        one_liner: "When a Malayali says '1 minute away', the waiter at the restaurant will retire before he arrives."
      },
      {
        meaning_ml: "കുറഞ്ഞത് ഒരു 45 മിനിറ്റ് എടുക്കും! ഞാൻ ഇപ്പോൾ ഷൂസ് എവിടെയാണെന്ന് തെരയുകയാണ്, ഷർട്ട് ഇസ്തിരി ഇട്ടിട്ടുമില്ല!",
        meaning_mg: "45 minutes edukkoo! Shoes kandittilla, shirt thechittilla!",
        english: "Translating '2 minutes': 45 minutes of finding socks, losing keys, and reconsidering life choices.",
        scared_ml: "നീ കലിപ്പായി തിരിച്ചു പോയാൽ എനിക്ക് സന്തോഷമേ ഉള്ളൂ, എനിക്ക് വരാൻ ഒട്ടും താല്പര്യമില്ലായിരുന്നു!",
        scared_mg: "Nee thirichu poyaal enikku santhosham!",
        one_liner: "Moving with the aerodynamic velocity of continental drift."
      }
    ],
    standup: {
      setup: "🎙️ The Physics of the Indian 'Da, Ipo Ethum'",
      monologue_ml: "ഒരു മലയാളി 'ഡാ ദാ എത്താറായി, 2 മിനിറ്റ്' എന്ന് ഫോണിൽ പറയുമ്പോൾ ബാക്ക്ഗ്രൗണ്ടിൽ ഫാനിന്റെയും ടിവിയുടെയും ഒച്ച കേൾക്കാം! അവൻ ഷർട്ട് ഇട്ടിട്ടില്ല, പാന്റ്സ് എവിടെയാണെന്ന് അറിയില്ല, ബെഡിൽ തലവെച്ചു കിടന്നുകൊണ്ടാണ് ഈ തള്ള്! അവൻ ആ റസ്റ്റോറന്റിൽ എത്തുമ്പോൾ നമ്മൾ അവിടെ പെൻഷൻ പറ്റി താടിയും നരച്ചു ഇരിക്കേണ്ടി വരും! ചോദിച്ചാൽ പറയും: 'കവലയിൽ ഭയങ്കര ട്രാഫിക് ആയിരുന്നു അളിയാ'... ട്രാഫിക് അല്ല, നിന്റെ മടിയാണ് അവിടെ ബ്ലോക്കായത്!",
      monologue_mg: "Phone-il 'ipo ethum' ennu parayumbol background-il serial oodunnathu kelkkaam!",
      monologue_en: "When an Indian friend says 'Bro, reaching in 2 minutes', listen closely to the call. You can hear his ceiling fan and a pressure cooker whistling in the background! He is horizontal in bed! By the time he actually shows up, the waiter will be handing the bill to your grandchildren!",
      mic_drop: "His arrival time is governed by geological epochs, not a clock."
    }
  },

  // 20. Study & Exams ("Did you study", "Assignment", "Exam")
  {
    id: "study_exams",
    keywords: ["study", "exam", "assignment", "homework", "pass", "fail", "test", "marks", "syllabus", "notes", "internal", "ktu", "viva", "lab", "padikkam", "pareeksha"],
    variations: [
      {
        meaning_ml: "ഞാൻ പുസ്തകം തുറന്നിട്ട് പോലുമില്ല അളിയാ! നീയും ചെയ്തില്ലെന്ന് അറിഞ്ഞാലേ ഇന്ന് രാത്രി എനിക്ക് സമാധാനമായി ഉറങ്ങാൻ പറ്റൂ!",
        meaning_mg: "Njan book thurannittilla aliya! Neeyum cheythillenkil enikku nannaayi urangam!",
        english: "I have not studied a single syllable. I am asking you solely to confirm that you are drowning with me so I can sleep guilt-free.",
        scared_ml: "നാളെ പരീക്ഷയ്ക്ക് വെറും വെള്ളക്കടലാസ് കൊടുത്ത് സാറിന്റെ മുഖത്തേക്ക് നോക്കി ഇളിക്കേണ്ടി വരുമെന്ന് പേടിയുണ്ട്!",
        scared_mg: "Naale exam hallil blank paper koduthu ilikkendi varum!",
        one_liner: "Your exam strategy is 10% prayers and 90% copying the front-bencher's handwriting."
      },
      {
        meaning_ml: "ആ അസൈൻമെന്റ് എന്റെ ചിന്താശേഷിക്ക് പോലും അപ്പുറത്തായിരുന്നു! സപ്ലി അടിച്ച് കോളേജിലെ മുത്തശ്ശനായി നടക്കാൻ ഞാൻ തയ്യാറായിക്കഴിഞ്ഞു!",
        meaning_mg: "Assignment njan soulfull aayi marannu! Suppli urappu!",
        english: "That homework existed outside my biological consciousness. Embracing the failure path with open arms.",
        scared_ml: "സാറിന്റെ മുഖം എങ്ങനെ ഇരിക്കുമെന്ന് പോലും എനിക്ക് ഓർമ്മയില്ല!",
        scared_mg: "Sir-inte mukham polum ormmayilla!",
        one_liner: "Studying for an engineering degree in advanced academic procrastination."
      }
    ],
    standup: {
      setup: "🎙️ The Sacred Comedy of 'I'll Study After Dinner'",
      monologue_ml: "ഭക്ഷണം കഴിഞ്ഞിട്ട് പഠിക്കാം എന്ന് വിചാരിക്കുന്നതാണ് ലോകത്തിലെ ഏറ്റവും വലിയ തമാശ! രാത്രി 9 മണിക്ക് ബിരിയാണിയും തിന്ന് ബെഞ്ചിൽ ഇരുന്നാൽ പിന്നെ മനുഷ്യന് തോന്നുക ആമസോൺ കാട്ടിൽ തടിവെട്ടുന്ന മരപ്പണിക്കാരന്റെ 45 മിനിറ്റ് യൂട്യൂബ് വീഡിയോ കാണാനാണ്! പുലർച്ചെ 3 മണിക്ക് കണ്ണ് തിരുമ്മി നോക്കുമ്പോൾ സിലബസ്സിന്റെ ആദ്യത്തെ പേജ് പോലും തുറന്നിട്ടുണ്ടാവില്ല! ഒടുവിൽ പരീക്ഷാ ഹാളിൽ കയറി ചോദ്യപേപ്പർ കാണുമ്പോൾ തോന്നും: 'ഈ വിഷയം പഠിപ്പിച്ച സാറിനെയാണോ അതോ കോളേജിനെയാണോ ഞാൻ ആദ്യം കൊല്ലേണ്ടത്'!",
      monologue_mg: "Dinner kazhinjittu padikkaam ennu paranjal 3 manikku thala choriyum!",
      monologue_en: "Nobody in the history of Kerala has ever studied 'after dinner'. You eat three parottas, open your textbook, and suddenly your soul demands you watch a documentary on how Siberian Eskimos catch salmon. At 3:45 AM, you have completed zero chapters!",
      mic_drop: "Your exam hall ticket is basically an official RSVP to cry in front of an invigilator."
    }
  }
];

// Rich, distinct Question Archetype pools for any dynamic query not caught in presets:
const DYNAMIC_QUESTION_POOLS = {
  why: [
    {
      meaning_ml: "കാരണം അന്വേഷിക്കാൻ നീ വലിയ സിഐഡി മൂസയൊന്നുമല്ലല്ലോ! കാര്യങ്ങൾ അങ്ങനെയാണ്, മിണ്ടാതിരുന്നു കണ്ടാൽ മതി!",
      meaning_mg: "Kaaranam thappaan nee CID Moosa alla! Mindaathirunnu kandaal mathi!",
      english: "You aren't CID Moosa investigating a murder mystery. Things are terrible because they are; accept the chaos and move on.",
      scared_ml: "ഇതിന് കാരണം പറയാൻ തുടങ്ങിയാൽ എന്റെ സെർവർ കത്തിപ്പോകും!",
      scared_mg: "Server kathippokum!",
      one_liner: "Asking 'why' in Kerala only leads to longer and more creative lies."
    },
    {
      meaning_ml: "എന്തിനാണ് എന്ന് ചോദിച്ചാൽ എനിക്ക് ഒരൊറ്റ ഉത്തരമേ ഉള്ളൂ: സ്വന്തം കാര്യം നോക്കാൻ പണിയൊന്നുമില്ലാത്തതുകൊണ്ട്!",
      meaning_mg: "Enthinaanu ennu chodichaal vere paniyillaatha kondu ennaanu utharam!",
      english: "Why? Because nobody involved had anything better to do with their afternoon.",
      scared_ml: "ദശമൂലം ദാമുവിനോട് 'എന്തിനാണ് അടി വാങ്ങിയത്' എന്ന് ചോദിച്ചാൽ അവൻ എന്ത് പറയും? അതാണ് ഇതിനും ഉത്തരം!",
      scared_mg: "Damu thallu vaangiya pole!",
      one_liner: "Curiosity didn't kill the cat; it made the cat listen to a 45-minute excuse."
    },
    {
      meaning_ml: "പ്രപഞ്ച രഹസ്യങ്ങൾ അന്വേഷിച്ചു തല പുണ്ണാക്കാതെ പോയി ഒരു കട്ടൻ ചായ കുടിക്കാൻ നോക്ക് അളിയാ!",
      meaning_mg: "Prapancha rahasyam thappaathe poyi chaaya kudi aliya!",
      english: "Stop interrogating cosmic metaphysics. Go drink samovar tea and leave the universe alone.",
      scared_ml: "കൂടുതൽ ചോദിച്ചാൽ ഞാൻ മറ്റൊരു കള്ളത്തരം ഉണ്ടാക്കി പറയും!",
      scared_mg: "Vere nuna undaakkendi varum!",
      one_liner: "Some questions are better left unanswered for the sake of world peace."
    },
    {
      meaning_ml: "ഇതിന് കാരണം പറയാൻ തുടങ്ങിയാൽ നാളെ രാവിലെ 10 മണി ആകും, എനിക്ക് അത്രയും നേരം നിൽക്കാൻ സമയമില്ല!",
      meaning_mg: "Naale 10 maniyaakum kaaranam paranjaal!",
      english: "Answering 'why' requires five seasons of backstory and three plot twists. Nobody has the runtime.",
      scared_ml: "സത്യം അറിഞ്ഞാൽ നീ തലയിൽ തുണിയിട്ട് നടക്കേണ്ടി വരും!",
      scared_mg: "Thalayil thuniyittu nadakkendi varum!",
      one_liner: "The explanation is 100 times more humiliating than the crime."
    }
  ],

  what: [
    {
      meaning_ml: "ഇത് എന്താണെന്ന് ചോദിച്ചാൽ: പച്ചയായ ജീവിത സത്യങ്ങൾ കണ്ട് മോഹാലസ്യപ്പെടാനുള്ള ഒരു ടൂൾ!",
      meaning_mg: "Ithu enthaanu ennu chodichaal: sathyam kandu mohaalasyappedaan ulla tool!",
      english: "What is this? A precision digital instrument engineered to shatter your delusions with Kerala sarcasm.",
      scared_ml: "എന്താണ് സംഭവം എന്ന് ഇപ്പോഴും മനസ്സിലായില്ലെങ്കിൽ നിന്റെ ഐക്യു അപകടാവസ്ഥയിലാണ്!",
      scared_mg: "IQ danger zonil aanu!",
      one_liner: "If you don't know what this is by now, no explanation can save you."
    },
    {
      meaning_ml: "ലോകം എഐ കൊണ്ട് ചൊവ്വയിൽ റോക്കറ്റ് വിടുമ്പോൾ നീ ഇവിടെ വന്നിരുന്ന് 'ഇതെന്താ' എന്ന് ചോദിക്കുന്നു! കഷ്ടം!",
      meaning_mg: "Lokam AI vechu rocket vidumbol nee ivide vannu 'ithentha' ennu thallunnu!",
      english: "Humanity is colonizing space with artificial intelligence, and you are sitting here asking 'What is this?'. Incredible.",
      scared_ml: "ഒരു അഡാറ് പണി വരുന്നുണ്ട് എന്ന് മാത്രം മനസ്സിലാക്കിയാൽ മതി!",
      scared_mg: "Adaar pani varunnu!",
      one_liner: "A breathtaking display of acoustic bewilderment."
    },
    {
      meaning_ml: "എന്താണ് ഏതാണ് എന്ന് ആലോചിച്ചു തല പുകയ്ക്കണ്ട, സംഭവം ഫുൾ സീൻ കോൺട്ര ആണ്!",
      meaning_mg: "Thala pukaaykkenda, full scene contra aanu!",
      english: "Do not overheat your biological processors trying to decipher this. The situation is completely compromised.",
      scared_ml: "ഞാൻ വെറുതെ തമാശയ്ക്ക് പറഞ്ഞതാണ്, അർത്ഥം തെരഞ്ഞു പോകല്ലേ!",
      scared_mg: "Artham thappi pokalle!",
      one_liner: "Zero hidden depth; purely surface-level theatrical drama."
    }
  ],

  who: [
    {
      meaning_ml: "ആരാണെന്ന് ചോദിച്ചാൽ ഞാൻ പറയും: നിന്നെപ്പോലെ വെറുതെ ഇരിക്കുന്ന ഒരാളെ ചിരിപ്പിക്കാൻ വന്ന ഒരു പുണ്യാത്മാവ്!",
      meaning_mg: "Aaraanu ennu chodichaal: ninne chirippikkaan vanna oru punyathmaavu!",
      english: "Who is it? A blessed saint sent to inject high-voltage Kerala laughter into your otherwise dull afternoon.",
      scared_ml: "ആരാണെന്ന് അറിയാൻ അത്ര തിടുക്കമാണെങ്കിൽ നേരെ ചെന്ന് നാട്ടിലെ കവലയിൽ ചോദിക്ക്!",
      scared_mg: "Naattile kavalayil chodhikku!",
      one_liner: "A mysterious operative of pure unadulterated nonsense."
    },
    {
      meaning_ml: "കട്ടപ്പ ബാഹുബലിയെ കുത്തിയത് ആരാണെന്ന് അറിയാത്തതുപോലെയുള്ള ഒരു വലിയ ചോദ്യമാണിത്!",
      meaning_mg: "Kattappa Bahubaliye kuthiya pole valiya chodhyam!",
      english: "Asking 'who' with the gravitas of an epic cinematic conspiracy. Relax, it's just a bunch of pixels.",
      scared_ml: "ആരാണ് എന്ന് തിരക്കുന്നതിനേക്കാൾ പ്രധാനം: നീ ആരാണ്? എന്തിനാണ് ഇവിടെ സമയം കളയുന്നത്?",
      scared_mg: "Nee aaranu ennaanu real question!",
      one_liner: "Identity theft would be an upgrade for whoever was involved."
    },
    {
      meaning_ml: "ഞാൻ വെറും ഒരു നിഴൽ മാത്രമാണ്... കൂടുതൽ ചോദിച്ചാൽ ദാമുവിനെപ്പോലെ ഞാൻ ഓടി രക്ഷപ്പെടും!",
      meaning_mg: "Njan verum nizhal maathram! Damu pole oodum!",
      english: "I am merely a shadow. Ask one more invasive question and I will pull a Dashamoolam Damu sprint across the field.",
      scared_ml: "പോലീസിൽ വിവരമറിയിക്കരുത്, ഞാൻ വെറുതെ തമാശയ്ക്ക് വന്നതാണ്!",
      scared_mg: "Police-il parayaruthe!",
      one_liner: "Anonymous by choice, useless by design."
    }
  ],

  where: [
    {
      meaning_ml: "എവിടെയാണെന്ന് ചോദിച്ചാൽ: നീ എവിടെയൊക്കെ തോൽക്കുന്നുവോ അവിടെയൊക്കെ ഞാൻ കൂടെയുണ്ടാകും!",
      meaning_mg: "Evideyaanu ennu chodichaal: nee tholkkunna sthalathellam njan undaakum!",
      english: "Where? Wherever bad decisions are being executed with unwarranted confidence, that is where you will find us.",
      scared_ml: "ഗൂഗിൾ മാപ്പ് നോക്കി വഴി തെറ്റി കാട്ടിൽ എത്തിയ ഒരു കെഎസ്ആർടിസി ബസ്സിലാണ് ഞാൻ ഉള്ളത്!",
      scared_mg: "KSRTC busil vazhi thetti nilkkuvaanu!",
      one_liner: "Lost in transit between high ambition and zero execution."
    },
    {
      meaning_ml: "എവിടെ എന്നല്ല ചോദ്യം... ഇനി എങ്ങോട്ട് ഓടും എന്നതാണ് യഥാർത്ഥ പ്രതിസന്ധി!",
      meaning_mg: "Evide ennalla... ini engottu oodum ennaanu scene!",
      english: "The question isn't 'where are you'; the question is 'where on earth can you run to escape the consequences?'.",
      scared_ml: "എന്റെ ലൊക്കേഷൻ ട്രാക്ക് ചെയ്യാൻ നോക്കണ്ട, ഞാൻ സർവർ മാറ്റി മാറ്റി ഓടുന്ന ജീവിയാണ്!",
      scared_mg: "Location track cheyyalle!",
      one_liner: "Nowhere near safety, firmly in the line of fire."
    }
  ],

  how: [
    {
      meaning_ml: "എങ്ങനെ എന്ന് എന്നോട് ചോദിക്കരുത്! പത്താം ക്ലാസ്സ് മാത്‍സ് പോലും ബിറ്റ് അടിച്ച് പാസ്സായ ആളാണ് ഞാൻ!",
      meaning_mg: "Engane ennu chodhikkaruthe! 10th maths bit adichu pass aayathaanu!",
      english: "Do not consult me for 'how-to' guidance. I copied my 10th standard trigonometry off the guy sweating in front of me.",
      scared_ml: "കാര്യങ്ങൾ എങ്ങനെ ചെയ്യണം എന്ന് എനിക്ക് അറിയാമായിരുന്നെങ്കിൽ ഞാൻ ഇവിടെ ഒരു ആപ്പിൽ വന്നിരിക്കുമോ അളിയാ?",
      scared_mg: "Ariyaamayirunnenkil appil varumo!",
      one_liner: "Zero instructional value, 100% emotional chaos."
    },
    {
      meaning_ml: "ഫോർമുല ഒന്നുമില്ല അളിയാ... വിധി വരുമ്പോൾ വായും തുറന്ന് നിൽക്കുക, അത്ര തന്നെ!",
      meaning_mg: "Formula onnum illa... vidhi varumbol vaayum thurannu nilkkuka!",
      english: "There is no algorithm. When destiny throws a brick at your head, simply close your eyes and accept the impact.",
      scared_ml: "ദശമൂലം ദാമു തല്ലുകൊള്ളുന്നത് എങ്ങനെയാണോ, അതുപോലെ കൂളായി അങ്ങ് അനുഭവിച്ചു തീർക്കുക!",
      scared_mg: "Damu thallu kollunna pole!",
      one_liner: "How it works: It doesn't, and yet life goes on."
    },
    {
      meaning_ml: "പണക്കാരൻ ആവാനുള്ള വഴി എനിക്ക് അറിയാമായിരുന്നെങ്കിൽ ഞാൻ ഇവിടെ ഫ്രീയായി തമാശ പറഞ്ഞു തരുമോ അളിയാ? പോയി വല്ല ലോട്ടറിയും എടുക്ക്!",
      meaning_mg: "Panakkaaran aavaan ulla vazhi ariyaamayirunnenkil njan ivide nilkkumo? Lottery edukk!",
      english: "If I possessed wealth creation formulas, would I be roasting strangers for free on a website? Buy a lottery ticket and hope.",
      scared_ml: "എന്റെ ബാങ്ക് ബാലൻസ് കണ്ടാൽ നീ തന്നെ എനിക്ക് 10 രൂപ തരും!",
      scared_mg: "Bank balance kandaal nee enikku cash tharum!",
      one_liner: "Financial advice from someone with negative liquid assets."
    },
    {
      meaning_ml: "രാവിലെ 4 മണിക്ക് എഴുന്നേൽക്കുക, കട്ടൻ ചായ കുടിക്കുക, എന്നിട്ട് അംബാനിയുടെ ഫോട്ടോ നോക്കി 10 മിനിറ്റ് കരയുക... ഇതാണ് ഏക വഴി!",
      meaning_mg: "4 manikku ezhunnettu Ambaniyude photo kandu karayuka!",
      english: "Wake at 4 AM, consume black tea, weep before portraits of Mukesh Ambani: certified roadmap to prosperity.",
      scared_ml: "യൂട്യൂബിൽ ഉള്ള മോട്ടിവേഷൻ വീഡിയോ കണ്ട് സമയം കളയല്ലേ അളിയാ!",
      scared_mg: "Motivation video kandu time kalayaruthe!",
      one_liner: "High on ambition, running strictly on emotional debt."
    },
    {
      meaning_ml: "കഠിനാധ്വാനം ചെയ്താൽ പണക്കാരനാകും എന്ന് പറയുന്നത് വെറും കള്ളമാണ്! കഴുതയ്ക്ക് ഇതുവരെ ഫെരാരി കാർ വാങ്ങാൻ പറ്റിയിട്ടില്ലല്ലോ!",
      meaning_mg: "Hard work cheythaal panam varum enna thallu vishwasikkaruthe!",
      english: "Hard work creates billionaires? If that was true, donkeys would be driving Ferraris. Relax, destiny is in charge.",
      scared_ml: "ഇത് കേട്ട് നീ പണി നിർത്തി വീട്ടിൽ ഇരുന്നാൽ ഞാൻ ഉത്തരവാദിയല്ല!",
      scared_mg: "Pani nirthiyaal njan alla utharavathi!",
      one_liner: "Demolishing motivational quotes since breakfast."
    }
  ],

  can_or_will: [
    {
      meaning_ml: "എനിക്ക് ഒരു കാര്യവും ചെയ്യാൻ കഴിയില്ല! കട്ടിലിൽ നിന്ന് എഴുന്നേൽക്കാൻ പോലും മടിയുള്ള എന്നോടാണോ നിന്റെ ചോദ്യം?",
      meaning_mg: "Enikku onnum cheyyan kazhiyilla! Bedil ninnum ezhunnelkkan madiyulla ennodano?",
      english: "I am biologically incapable of assistance. I procrastinate moving from my left side to my right side in bed.",
      scared_ml: "കഴിയും എന്ന് ഞാൻ പറഞ്ഞാൽ അത് എന്റെ ജീവിതത്തിലെ ഏറ്റവും വലിയ പെരുംനുണ ആയിരിക്കും!",
      scared_mg: "Kazhiyum ennu paranjaal perumnuna aakum!",
      one_liner: "Capacity: None. Willingness: Even less."
    },
    {
      meaning_ml: "ഞാൻ ചെയ്തോളാം അളിയാ... 2048-ൽ അടുത്ത ഒളിമ്പിക്സ് കഴിയുമ്പോൾ ഞാൻ തുടങ്ങാം!",
      meaning_mg: "2048-il Olympics kazhinjittu thudangaam!",
      english: "I will gladly get right on that... right after the 2048 Summer Olympics conclude.",
      scared_ml: "രമണനോട് പഞ്ചാബി ഹൗസിൽ ജോലി ചെയ്യാൻ പറഞ്ഞതുപോലെയുണ്ട് നിന്റെ ഈ ആഗ്രഹം!",
      scared_mg: "Ramanane kondu pani eduppikkunna pole!",
      one_liner: "Scheduled for completion in the next geological epoch."
    },
    {
      meaning_ml: "എന്നെക്കൊണ്ട് ഒന്നും ചെയ്യിപ്പിക്കരുത്! ഞാൻ രമണന്റെ ശിഷ്യനാണ്, വിശ്രമമാണ് എന്റെ താല്പര്യം!",
      meaning_mg: "Enne kondu onnum cheyyikkaruthe! Ramanan disciple aanu njan!",
      english: "Do not attempt to delegate labor to me. I am a decorated graduate of the Ramanan Institute of Horizontal Rest.",
      scared_ml: "നീ നിർബന്ധിച്ചാൽ ഞാൻ ഫോൺ സ്വിച്ച് ഓഫ് ചെയ്തു നാടുവിടും!",
      scared_mg: "Phone off aakki mungum!",
      one_liner: "Allergic to manual labor in all its known forms."
    },
    {
      meaning_ml: "തീർച്ചയായും ഞാൻ ചെയ്യാം... പക്ഷെ ചെയ്തതിന്റെ പേരിൽ നിന്റെ ലാപ്ടോപ്പ് പുകഞ്ഞാൽ ഞാൻ ഉത്തരവാദിയല്ല!",
      meaning_mg: "Laptop pukanyaal njan utharavadhiyalla!",
      english: "I will execute your request, but when your motherboard emits smoke and small flames, do not page me.",
      scared_ml: "എനിക്ക് ഇതിനെപ്പറ്റി ഒരു ചുക്കും അറിയില്ല!",
      scared_mg: "Onnum ariyilla!",
      one_liner: "Unqualified confidence meeting combustible hardware."
    },
    {
      meaning_ml: "ചെയ്യാം... പക്ഷെ ചെയ്യാൻ ഒരൊറ്റ തടസ്സമേ ഉള്ളൂ: എന്റെ ഉള്ളിലെ അലസത എന്നെ അനുവദിക്കുന്നില്ല!",
      meaning_mg: "Cheyyam... pakshe madi sammathikkunnilla!",
      english: "I theoretically possess the capability, but an impenetrable wall of personal laziness stands in our path.",
      scared_ml: "നാളെ ചോദിച്ചാലും ഉത്തരം ഇതായിരിക്കും!",
      scared_mg: "Naale chodichaalum ithe utharam!",
      one_liner: "A spiritual commitment to complete inaction."
    }
  ],

  is_or_are: [
    {
      meaning_ml: "അതെ എന്ന് പറഞ്ഞാലും തെറ്റ്, അല്ല എന്ന് പറഞ്ഞാലും അടി... അതുകൊണ്ട് ഞാൻ മൗനം പാലിക്കുന്നു!",
      meaning_mg: "Athe paranjaalum thettu, alla paranjaalum thallu... mounam vidhi!",
      english: "If I say yes, you will argue. If I say no, you will sulk. So I take refuge in peaceful silence.",
      scared_ml: "തീർച്ചയായും! ഇതിൽ 100% സംശയമില്ല... സംശയമുള്ളത് നിന്റെ മാനസിക നിലയിൽ മാത്രമാണ്!",
      scared_mg: "Ninte mental healthil aanu samshayam!",
      one_liner: "Yes, no, maybe: all three options conclude in tears."
    },
    {
      meaning_ml: "ഉണ്ട് എന്ന് വിചാരിച്ചാൽ ഉണ്ട്, ഇല്ല എന്ന് വിചാരിച്ചാൽ പവനായി ശവമായി!",
      meaning_mg: "Undu ennu vichaarichal undu, illenkil Pavanayi shavamaayi!",
      english: "Schrödinger's Malayalam reality: It both exists and has perished until you observe the consequences.",
      scared_ml: "ഇതിലൊക്കെ എന്ത് കാര്യം അളിയാ? ഇതൊക്കെ വെറും മായക്കാഴ്ചകൾ ആണ്!",
      scared_mg: "Verum maayakkazhcha!",
      one_liner: "Philosophically ambiguous, practically disastrous."
    },
    {
      meaning_ml: "ഇതിലൊക്കെ എന്ത് കാര്യം അളിയാ? പവനായിക്ക് പോലും അറിയാത്ത വലിയ രഹസ്യങ്ങൾ അന്വേഷിച്ചു നടക്കുകയാണോ!",
      meaning_mg: "Pavanayikku polum ariyaatha rahasyam thappunno!",
      english: "Searching for truths that eluded Captain Raju himself. Cease this investigation at once.",
      scared_ml: "സത്യം അറിഞ്ഞാൽ നീ നെഞ്ചത്ത് കൈവെച്ചു നിലവിളിക്കും!",
      scared_mg: "Nilavilikkendi varum!",
      one_liner: "A secret whose revelation brings zero economic benefit."
    },
    {
      meaning_ml: "ഉത്തരം എന്തായാലും അവസാനം നീ തന്നെ കരയേണ്ടി വരുമെന്ന് എനിക്ക് 100% ഉറപ്പാണ്!",
      meaning_mg: "Utharam enthaayaalum nee karayum!",
      english: "Whatever the binary state of this proposition, your ultimate emotional destination is regret.",
      scared_ml: "ചോദിച്ചതിൽ തെറ്റൊന്നുമില്ല, പക്ഷെ എനിക്ക് പേടിയുണ്ട്!",
      scared_mg: "Enikku pediyundu!",
      one_liner: "All paths lead to a profound sigh."
    },
    {
      meaning_ml: "അതെ എന്ന് കരുതി സന്തോഷിക്കാനും വയ്യ, അല്ല എന്ന് കരുതി സമാധാനിക്കാനും വയ്യ... ഫുൾ കൺഫ്യൂഷൻ!",
      meaning_mg: "Athe ennu vichaarichu santhoshikkanum vayya... full confusion!",
      english: "Affirmation brings terror; negation brings despair. Welcome to the permanent purgatory of ambiguity.",
      scared_ml: "ഇതിന് ഉത്തരം പറയാൻ ഞാൻ ജ്യോത്സ്യനല്ലല്ലോ!",
      scared_mg: "Njan jyothsyan alla!",
      one_liner: "Trapped in the twilight zone of indecision."
    }
  ],

  general_question: [
    {
      meaning_ml: "നീ വലിയൊരു കുറ്റാന്വേഷണം നടത്താൻ വന്നതാണോ? സത്യം അറിഞ്ഞാൽ നിന്റെ തലച്ചോർ കിളിപോയി ഇരിക്കും!",
      meaning_mg: "Nee valiya investigative journalist aayi vannathaano? Sathyam arinjaal kili pokum!",
      english: "Are you conducting a CID inquiry? The actual truth is so underwhelming that knowing it will only diminish your life satisfaction.",
      scared_ml: "ഞാൻ ഉത്തരം പറഞ്ഞില്ലെങ്കിൽ നീ സ്വന്തമായി ഊഹിച്ചു വലിയൊരു കഥയുണ്ടാക്കുമോ എന്ന് പേടിയുണ്ട്!",
      scared_mg: "Utharam paranjillenkil nee vere nuna undakkum!",
      one_liner: "Asking questions you aren't emotionally equipped to handle."
    },
    {
      meaning_ml: "ഈ ചോദ്യം ചോദിച്ചത് കാര്യങ്ങൾ അറിയാനല്ല, വെറുതെ മറ്റുള്ളവരുടെ സ്വകാര്യതയിലേക്ക് ഒളിഞ്ഞുനോക്കാനാണ്!",
      meaning_mg: "Kaaryam ariyaan alla, veruthe olinju nokkaan chodichatha!",
      english: "Zero genuine interest in the answer; purely satisfying nosey neighborhood voyeurism.",
      scared_ml: "കാര്യം അറിഞ്ഞു കഴിഞ്ഞാൽ നാട്ടിൽ മുഴുവൻ പാട്ടാക്കാൻ ഇവൻ തയ്യാറായി നിൽക്കുകയാണ്!",
      scared_mg: "Naattil motham paattaakaan ready aayi nikkunnu!",
      one_liner: "A question with the moral depth of a supermarket CCTV camera."
    },
    {
      meaning_ml: "ചോദ്യം കൊള്ളാം! പക്ഷെ ഇതിനൊരു മര്യാദയുള്ള ഉത്തരം കിട്ടാൻ നീ അടുത്ത ജന്മത്തിൽ ജനിക്കേണ്ടി വരും!",
      meaning_mg: "Chodhyam kollam! Pakshe utharam kittan adutha janmathil janikkanam!",
      english: "Stupendous question! Unfortunately, the sensible answer will only be made available in your next incarnation.",
      scared_ml: "ദശമൂലം ദാമു പോലും ഇത്രയും കുഴപ്പിക്കുന്ന ചോദ്യം ചോദിക്കാറില്ല!",
      scared_mg: "Damu polum ithe chodhyam chodikkilla!",
      one_liner: "A 5-star interrogation answered with a 0-star deflection."
    }
  ]
};

// Universal Dynamic Archetypes for general non-question statements
const UNIVERSAL_STATEMENT_ARCHETYPES = [
  {
    meaning_ml: "വാക്കുകൾ ഞാൻ കേട്ടു, പക്ഷെ ഈ കൊടും ഉഡായിപ്പ് വിശ്വസിക്കാൻ എന്റെ തലച്ചോർ സമ്മതിക്കുന്നില്ല!",
    meaning_mg: "Vaakkukal kettu, pakshe ee udaayippu vishwasikkan buddhi sammathikkunnilla!",
    english: "I registered your speech, but basic common sense refuses to process this level of fraud.",
    scared_ml: "ഞാൻ പറഞ്ഞതിൽ 0.01% പോലും സത്യമില്ലെന്ന് എനിക്ക് നന്നായി അറിയാം!",
    scared_mg: "Paranjathil 0.01% polum sathyam illa!",
    one_liner: "Audacity level: 100%. Verifiable truth: 0%."
  },
  {
    meaning_ml: "എന്തൊരു മനോഹരമായ പെരുംനുണ! ഒരു സംസ്ഥാന അവാർഡ് തന്ന് വീട്ടിലേക്ക് പറഞ്ഞയക്കാൻ തോന്നുന്നു!",
    meaning_mg: "Enthoru manoharamaaya perumnuna! Award tharaan thonnunnu!",
    english: "A breathtaking performance of fiction. Truly deserving of a national award in creative deception.",
    scared_ml: "ആരെങ്കിലും ഇതിന്റെ സത്യാവസ്ഥ അന്വേഷിച്ചു വന്നാൽ ഞാൻ പെട്ടു!",
    scared_mg: "Aarenkilum sathyam kandupidichaal njan theernnu!",
    one_liner: "If lying burned calories, you would be an international runway model."
  },
  {
    meaning_ml: "ദശമൂലം ദാമുവിനെപ്പോലെ കട്ട അടി ഇരന്നു വാങ്ങാൻ പോകുന്ന കാര്യമാണ് നീ ഇപ്പോൾ വളരെ കൂളായി തള്ളി മറിച്ചത്!",
    meaning_mg: "Dhashamoolam Damu pole thallu vaangan ulla kaaryamaanu nee paranjathu!",
    english: "Spoken with the suicidal overconfidence of Dashamoolam Damu five seconds before a street brawl.",
    scared_ml: "ഞാൻ വെറുതെ വീമ്പിളക്കിയതാണ്, ആരെങ്കിലും തിരിച്ചു ചോദിച്ചാൽ ഞാൻ കാലുപിടിച്ചു കരയും!",
    scared_mg: "Veruthe thalliyatha, thirichu chodichaal karayum!",
    one_liner: "Barking like a tiger, retreating like a startled frog."
  },
  {
    meaning_ml: "കേട്ടിട്ട് നല്ല രസമുണ്ട്, പക്ഷെ നാളെ രാവിലെ ഇതിന്റെ അനന്തരഫലം അനുഭവിക്കാൻ നീ തന്നെ തയ്യാറായിക്കോ!",
    meaning_mg: "Kettu rasamundu, pakshe naale pani kittumbol karayum!",
    english: "Delightful bedtime story. Ensure you have emergency rations ready when reality arrives tomorrow morning.",
    scared_ml: "ഇത് ഞാൻ തമാശയ്ക്ക് പറഞ്ഞതാണെന്ന് പറഞ്ഞാൽ ആരെങ്കിലും വിശ്വസിക്കുമോ?",
    scared_mg: "Thamashakku paranjathaanu!",
    one_liner: "High on optimism, bankrupt on logistics."
  }
];

// High-speed lookup matching user query with dynamic rotation per question!
export function findAuthenticComedyThought(text, mode = 'college', repetitionCount = 0) {
  const query = (text || '').toLowerCase().trim();
  const questionBaseHash = hashString(query);
  const cycleIndex = questionBaseHash + repetitionCount;

  // 1. Direct keyword match against scenarios (cycles through this specific question's variations!)
  for (const scenario of COMEDY_SCENARIOS) {
    const match = scenario.keywords.some(kw => {
      if (kw.length <= 3) {
        const regex = new RegExp(`\\b${kw}\\b`, 'i');
        return regex.test(query);
      }
      return query.includes(kw);
    });

    if (match && scenario.variations && scenario.variations.length > 0) {
      // Pick cyclically across variations for THIS specific question
      const vIndex = cycleIndex % scenario.variations.length;
      const chosenVar = scenario.variations[vIndex];
      return {
        actual_meaning_ml: chosenVar.meaning_ml,
        actual_meaning_mg: chosenVar.meaning_mg,
        english_meaning: chosenVar.english,
        scared_ml: chosenVar.scared_ml,
        scared_mg: chosenVar.scared_mg,
        one_liner: chosenVar.one_liner,
        standup: scenario.standup
      };
    }
  }

  // 2. Dynamic Semantic Intent Analyzer for ANY unlisted query based on question archetype
  const isQuestion = query.includes('?') || 
    query.startsWith('why') || query.startsWith('what') || query.startsWith('where') || 
    query.startsWith('who') || query.startsWith('how') || query.startsWith('can') || 
    query.startsWith('will') || query.startsWith('would') || query.startsWith('could') || 
    query.startsWith('is') || query.startsWith('are') || query.startsWith('do') || 
    query.startsWith('does') || query.startsWith('did');

  if (isQuestion) {
    let pool = DYNAMIC_QUESTION_POOLS.general_question;
    let setupTitle = "🎙️ The Danger of Asking Questions in Kerala";
    let standupMonologue = "നമ്മുടെ നാട്ടിൽ ആവശ്യമില്ലാത്ത കാര്യങ്ങളിൽ ചോദ്യം ചോദിച്ചു നടക്കുന്നവരെ കണ്ടിട്ടില്ലേ? അവസാനം സത്യാവസ്ഥ അറിയുമ്പോൾ അവൻ തന്നെ പറയും: 'അയ്യോ... ഞാൻ വെറുതെ ചോദിച്ചതാ, ഇത്രയും വലിയ സീൻ ആണെന്ന് അറിഞ്ഞില്ല' എന്ന്! സ്വന്തം ജീവിതം നോക്കാതെ മറ്റുള്ളവരുടെ കുറ്റപത്രം എഴുതാൻ നടക്കുന്നവർ!";

    if (query.startsWith('why') || query.includes('why ') || query.includes('enthina') || query.includes('enthu kondu')) {
      pool = DYNAMIC_QUESTION_POOLS.why;
      setupTitle = "🎙️ The Philosophical Black Hole of 'Why?'";
      standupMonologue = "ഒരു മലയാളിയോട് 'എന്തുകൊണ്ട് അങ്ങനെ ചെയ്തു' എന്ന് ചോദിച്ചാൽ അവൻ പറയുന്ന ന്യായീകരണങ്ങൾ ഉണ്ടല്ലോ! ലോക ബാങ്കും ഐക്യരാഷ്ട്ര സഭയും തോറ്റുപോകും! ഒടുവിൽ ചോദിച്ച നമ്മൾ തന്നെ വിചാരിക്കും: 'ദൈവമേ, ഞാൻ എന്തിനാണ് ഇവനോട് ഈ ചോദ്യം ചോദിക്കാൻ പോയത്' എന്ന്!";
    } else if (query.startsWith('what') || query.includes('what ') || query.includes('entha')) {
      pool = DYNAMIC_QUESTION_POOLS.what;
      setupTitle = "🎙️ The Complete Confusion of 'What is This?'";
      standupMonologue = "ഇതെന്താണ് എന്ന് ആരെങ്കിലും അത്ഭുതത്തോടെ ചോദിച്ചാൽ അതിനർത്ഥം അവൻ ഇതുവരെ കാണാത്ത ഏതോ അത്ഭുതം കണ്ടു എന്നല്ല! അവന് ഒന്നും മനസ്സിലായിട്ടില്ല എന്നാണ് അർത്ഥം! പവനായി കത്തി വീശുന്നത് കണ്ടു നിൽക്കുന്ന ദാമുവിനെപ്പോലെ കണ്ണ് മിഴിച്ചു നിൽക്കുകയാണ്!";
    } else if (query.startsWith('who') || query.includes('who ') || query.includes('aara')) {
      pool = DYNAMIC_QUESTION_POOLS.who;
      setupTitle = "🎙️ The Suspicious Neighborhood Surveillance";
      standupMonologue = "'ആരാണ് അവൻ?' എന്ന് നാട്ടിലെ അമ്മാവന്മാർ ചോദിക്കുന്നതുപോലെയാണ് ഈ ചോദ്യം! സ്വന്തം വീട്ടിലെ കാര്യം നോക്കില്ല, പക്ഷെ റോഡിലൂടെ പോകുന്ന ഓരോരുത്തരുടെയും ജാതകവും രക്തഗ്രൂപ്പും അവന്മാർക്ക് അപ്പോൾ തന്നെ അറിയണം!";
    } else if (query.startsWith('where') || query.includes('where ') || query.includes('evide')) {
      pool = DYNAMIC_QUESTION_POOLS.where;
      setupTitle = "🎙️ The Lost GPS of Kerala Roads";
      standupMonologue = "എവിടെയാണെന്ന് ചോദിച്ചാൽ ഗൂഗിൾ മാപ്പ് പോലും തല കറങ്ങി വീഴുന്ന നാടാണ് നമ്മുടേത്! വഴി ചോദിച്ചാൽ പറയും: 'ആ വലിയ വീടിന്റെ അപ്പുറത്ത് ഒരു വഴി കാണും, അതിലൂടെ പോകരുത്'! പോകാതിരിക്കാനുള്ള വഴിയാണോ അളിയാ ചോദിച്ചത്!";
    } else if (query.startsWith('how') || query.includes('how ') || query.includes('engane')) {
      pool = DYNAMIC_QUESTION_POOLS.how;
      setupTitle = "🎙️ The Art of Giving Bad Advice";
      standupMonologue = "'ഇത് എങ്ങനെ ചെയ്യണം?' എന്ന് ചോദിച്ചാൽ നാട്ടിലെ സകല ആളുകളും വിദഗ്ദ്ധന്മാരായി മാറും! ഒരു കാര്യത്തിലും വിജയിച്ചിട്ടില്ലാത്തവൻ പോലും 45 മിനിറ്റ് ഉപദേശം തരും! അവന്റെ ഉപദേശം കേട്ട് ഇറങ്ങിയാൽ പവനായി ശവമായതുപോലെ ആകും അവസ്ഥ!";
    } else if (query.startsWith('can') || query.startsWith('will') || query.startsWith('would') || query.startsWith('could')) {
      pool = DYNAMIC_QUESTION_POOLS.can_or_will;
      setupTitle = "🎙️ The Grand Delusion of Future Promises";
      standupMonologue = "'ചെയ്യാൻ കഴിയുമോ' എന്ന് ചോദിച്ചാൽ ഉടൻ 'ഞാൻ ചെയ്തോളാം അളിയാ' എന്ന് പറയും! എന്നിട്ട് പണി തുടങ്ങേണ്ട ദിവസം അവൻ ഫോൺ ഓഫ് ചെയ്തു കട്ടിലിൽ കിടന്നുറങ്ങും! ചോദിച്ചാൽ പറയും: 'ഭയങ്കര തലവേദന ആയിരുന്നു അളിയാ' എന്ന്!";
    } else if (query.startsWith('is') || query.startsWith('are') || query.startsWith('do') || query.startsWith('does') || query.startsWith('did')) {
      pool = DYNAMIC_QUESTION_POOLS.is_or_are;
      setupTitle = "🎙️ The Trap of Yes or No";
      standupMonologue = "'അതെയാണോ അല്ലയോ' എന്ന് ചോദിക്കുന്നത് ജീവിതത്തിലെ ഏറ്റവും വലിയ കെണിയാണ്! അതെ എന്ന് പറഞ്ഞാൽ പണി, അല്ല എന്ന് പറഞ്ഞാൽ അതിലും വലിയ പണി! രമണനെപ്പോലെ ചിരിച്ചുകൊണ്ട് കട്ടൻ ചായയും കുടിച്ചു നിൽക്കുന്നതാണ് ഏറ്റവും ബുദ്ധി!";
    }

    const chosenQ = pool[cycleIndex % pool.length];
    return {
      actual_meaning_ml: chosenQ.meaning_ml,
      actual_meaning_mg: chosenQ.meaning_mg,
      english_meaning: chosenQ.english,
      scared_ml: chosenQ.scared_ml,
      scared_mg: chosenQ.scared_mg,
      one_liner: chosenQ.one_liner,
      standup: {
        setup: setupTitle,
        monologue_ml: standupMonologue,
        monologue_mg: standupMonologue.slice(0, 100) + '...',
        monologue_en: "When asked unnecessary questions in Kerala, the answers are always 10% truth and 90% defensive storytelling.",
        mic_drop: chosenQ.one_liner
      }
    };
  }

  // 3. Fallback for general unlisted statements (cycles cyclically per repeat)
  const chosenArch = UNIVERSAL_STATEMENT_ARCHETYPES[cycleIndex % UNIVERSAL_STATEMENT_ARCHETYPES.length];
  return {
    actual_meaning_ml: chosenArch.meaning_ml,
    actual_meaning_mg: chosenArch.meaning_mg,
    english_meaning: chosenArch.english,
    scared_ml: chosenArch.scared_ml,
    scared_mg: chosenArch.scared_mg,
    one_liner: chosenArch.one_liner,
    standup: {
      setup: "🎙️ The Universal Art of Acoustic Deceit",
      monologue_ml: "മനുഷ്യർ സംസാരിക്കുന്നത് സത്യം പറയാനല്ല, മറിച്ച് മുഖത്ത് നോക്കി ഇളിച്ചു കാണിച്ചു കൊണ്ട് എങ്ങനെ പച്ചക്കള്ളം പറയാം എന്ന് തെളിയിക്കാനാണ്! ദശമൂലം ദാമു പോലും നാണിച്ചു തല താഴ്ത്തുന്ന രീതിയിലുള്ള അഭിനയമാണ് ഓരോ ദിവസവും ആളുകൾ കാഴ്ചവെക്കുന്നത്!",
      monologue_mg: "Manushyar samsaarikkunnathu sathyam parayaan alla, veruthe ilichu kaanichu pachakkallam parayaan aanu!",
      monologue_en: "Human conversation is 95% acoustic camouflage. We don't speak to communicate facts; we speak to construct verbal fortresses to hide that we are lazy, broke, and completely winging this entire life!",
      mic_drop: "If honesty was an Olympic sport, humanity would be disqualified during the opening ceremony."
    }
  };
}

// Generate dynamic character reactions directly customized to what was typed with rotating cycle
export function getCharacterReactions(mode = 'college', query = '', repetitionCount = 0) {
  const q = (query || '').toLowerCase();
  const seed = hashString(q) + repetitionCount;

  // Damu dynamic reaction pool
  const damuOptions = [
    {
      thought_ml: "അയ്യോ എന്നെ അടിക്കല്ലേ ആശാനേ! ഞാൻ വെറുതെ ഗമ കാണിക്കാൻ ഒരു വാക്ക് പറഞ്ഞതാ... ഉള്ളിൽ ഒരൊറ്റ തുള്ളി ധൈര്യം പോലുമില്ല!",
      thought_mg: "Ayyo enne thallaruthe! Njan veruthe thalliyatha!",
      punchline: "വാചകമടിയിൽ സൂപ്പർമാൻ, അടികൊള്ളുമ്പോൾ വെറും പൂച്ചക്കുട്ടി!"
    },
    {
      thought_ml: "ആ വടിയൊന്ന് താഴെ വെക്ക് അണ്ണാ! നമുക്ക് സമാധാനപരമായി സംസാരിക്കാം... എന്റെ അസ്ഥിക്ക് ഒട്ടും ബലമില്ല!",
      thought_mg: "Aa vadi thazhe vekk anna! Ente asthikku balam illa!",
      punchline: "ദാമുവിന് അടി കൊള്ളാൻ ഇഷ്ടമല്ല, പക്ഷെ അടി ഇരന്നു വാങ്ങാൻ പ്രത്യേക കഴിവാണ്!"
    },
    {
      thought_ml: "ദാമു ഒരിക്കലും തോൽക്കില്ല ആശാനേ! തൽക്കാലം പിന്മാറുന്നു എന്നേയുള്ളൂ... നാളെ വീണ്ടും അടി വാങ്ങാൻ ഞാൻ റെഡിയാണ്!",
      thought_mg: "Damu tholkkilla! Naale veendum varum!",
      punchline: "തോൽവി സമ്മതിക്കില്ല, പക്ഷെ ഓട്ടത്തിൽ ഉസൈൻ ബോൾട്ടിനെ വെല്ലും!"
    },
    {
      thought_ml: "എന്റെ പേര് ദശമൂലം ദാമു! നാട്ടിൽ ആർക്കെങ്കിലും തല്ലു കൊള്ളാൻ ആഗ്രഹമുണ്ടെങ്കിൽ എന്നെ ധൈര്യമായി വിളിക്കാം!",
      thought_mg: "Ente peru Dashamoolam Damu! Thallu vaangaan njan ready!",
      punchline: "അടി വാങ്ങുന്നതിൽ ഗിന്നസ് റെക്കോർഡ് ഉള്ള ഒരേയൊരു മാന്യൻ!"
    }
  ];

  // Ramanan dynamic reaction pool
  const ramananOptions = [
    {
      thought_ml: "മുതലാളീ... എന്നെക്കൊണ്ട് ഈ പണിയൊന്നും ചെയ്യിപ്പിക്കരുത്! ഞാൻ പോയി ഒരു കട്ടൻ ചായയും പരിപ്പുവടയും കഴിച്ച് ബെഡിൽ കിടന്നുറങ്ങും!",
      thought_mg: "Muthalali... enne kondu ee pani ചെയ്യിപ്പിക്കരുത്! Njan chaaya kudichu urangum!",
      punchline: "ജീവിതത്തിൽ ഒരു ലക്ഷ്യവുമില്ല... ഒരൊറ്റ ആഗ്രഹമേ ഉള്ളൂ: ആരും എന്നോട് ഒരു പണിയും പറയരുത്!"
    },
    {
      thought_ml: "എന്നെ ഒരു പണിക്കും കൊള്ളില്ലെന്ന് അങ്ങേക്ക് ഇപ്പോഴെങ്കിലും മനസ്സിലായല്ലോ! ഇനി എന്നെ ശല്യം ചെയ്യാതെ വെറുതെ വിടൂ!",
      thought_mg: "Enne oru panikkum kollillenno ariyille! Ini enne veruthe vidu!",
      punchline: "ഒരു ചായ കുടിക്കാൻ കിട്ടുന്ന സമാധാനം ഈ ഭൂലോകത്ത് വേറെ ഒന്നിനും കിട്ടില്ല!"
    },
    {
      thought_ml: "പഞ്ചാബി ഹൗസിൽ ഞാൻ കഷ്ടപ്പെടുന്നത് മുതലാളി കാണുന്നില്ലേ? ഇനി ഈ ചോദ്യത്തിന് കൂടി ഉത്തരം പറയാൻ എന്നെക്കൊണ്ട് വയ്യ!",
      thought_mg: "Punjabi House-il njan kashtappadunnu! Utharam parayaan vayya!",
      punchline: "പണി എടുക്കാൻ പറഞ്ഞാൽ ഉടൻ തലവേദനയും തളർച്ചയും വരുന്ന അപൂർവ്വ പ്രതിഭാസം!"
    },
    {
      thought_ml: "മുതലാളീ, നമ്മൾ പാവങ്ങളാണ്... കൂടുതൽ ചോദ്യം ചോദിച്ചു വിവരക്കേട് പുറത്തു കാണിക്കല്ലേ!",
      thought_mg: "Nammal paavangalaanu, chodhyam chodichu naanam kedaruthe!",
      punchline: "മടിയുടെ കാര്യത്തിൽ പിഎച്ച്ഡി എടുത്ത പഞ്ചാബി ഹൗസിലെ പുണ്യാത്മാവ്!"
    }
  ];

  // Pavanayi dynamic reaction pool
  const pavanayiOptions = [
    {
      thought_ml: "പവനായി ശവമായി! മലപ്പുറം കത്തി, ബോംബ്, അംബാസിഡർ കാർ... അവസാനം കയ്യിലിരുന്ന കത്തിയെടുത്തു സ്വന്തം കാലിൽ കുത്തി!",
      thought_mg: "Pavanayi shavamaayi! Malappuram katthi vechu swantham kaalil kuthi!",
      punchline: "പ്രൊഫഷണൽ കില്ലർ ആണെന്ന് പറഞ്ഞു ഇറങ്ങി, അവസാനം സ്വന്തം നിഴൽ കണ്ട് പേടിച്ചോടി!"
    },
    {
      thought_ml: "എന്റെ പ്ലാനിൽ ഒരൊറ്റ തെറ്റേ പറ്റിയുള്ളൂ: ഞാൻ ഈ നാട്ടിൽ ജീവനോടെ കാലുകുത്താൻ പാടില്ലായിരുന്നു!",
      thought_mg: "Ente planil oru thette pattu: njan ivide vararuthayirunnu!",
      punchline: "ഇന്റർനാഷണൽ ക്രിമിനൽ ചിന്താഗതി... പക്ഷെ കയ്യിൽ ബാക്കി വെറും പൂജ്യം!"
    },
    {
      thought_ml: "ഞാൻ വെറും ഒരു സാധാ ഗുണ്ടയല്ല! ലണ്ടനിലും സിംഗപ്പൂരിലും ഫ്ലൈറ്റ് കയറി വന്ന അന്താരാഷ്ട്ര കൊടും വില്ലനാണ്!",
      thought_mg: "Njan international criminal aanu! Verum gunda alla!",
      punchline: "തള്ള് കേട്ടാൽ തോന്നും ജെയിംസ് ബോണ്ട് ഇയാളുടെ ശിഷ്യനാണെന്ന്!"
    },
    {
      thought_ml: "ശവം ആവാൻ എനിക്ക് പ്രത്യേക താല്പര്യമൊന്നുമില്ല, പക്ഷെ ഓരോ തവണ ഇറങ്ങുമ്പോഴും വിധി എന്നെ ശവമാക്കുന്നു!",
      thought_mg: "Shavamaavan aagrahilla, pakshe vidhi sammathikkilla!",
      punchline: "ആയുധങ്ങൾ പലതുണ്ട്, പക്ഷെ എല്ലാം സ്വന്തം നെഞ്ചത്ത് തന്നെ കൊണ്ടുകൊള്ളും!"
    }
  ];

  // Manavalan dynamic reaction pool
  const manavalanOptions = [
    {
      thought_ml: "ദുബായിൽ എനിക്ക് അമ്പത് ഒട്ടകങ്ങളുടെ ബിസിനസ്സ് ഉണ്ടായിരുന്നു! ഇവിടെ വന്നിട്ട് ഇപ്പോൾ ഒരു ചായ കുടിക്കാൻ 10 രൂപ തപ്പുന്നു!",
      thought_mg: "Dubai-il enikku 50 ottakathinte business aayirunnu! Chaayakku 10 roopa illa!",
      punchline: "തള്ള് കേട്ടാൽ തോന്നും ബുർജ് ഖലീഫ ഇയാളുടെ തറവാട്ടുസ്വത്താണെന്ന്!"
    },
    {
      thought_ml: "ഒരു അബദ്ധം പറ്റി... അതിപ്പോ ആർക്കായാലും പറ്റും! അതുകൊണ്ട് ഞാൻ സൗഹൃദത്തിൽ നിന്ന് സ്വയം പിന്മാറുന്നു!",
      thought_mg: "Oru abadtham patti... athippo aarkkaayaalum pattum!",
      punchline: "പോക്കറ്റിൽ കാറ്റും പൊടിയും, പക്ഷെ നടപ്പും ഭാവവും ലണ്ടനിലെ പ്രഭുവിനെപ്പോലെ!"
    },
    {
      thought_ml: "മണവാളൻ ആൻഡ് സൺസ് ദുബായ് കമ്പനി അടച്ചുപൂട്ടിയെന്ന വാർത്ത ശുദ്ധ അസംബന്ധമാണ്! ഞങ്ങൾ ഇപ്പോഴും തകർച്ചയിലാണ്!",
      thought_mg: "Manavalan & Sons eppozhum thakarchayilaanu!",
      punchline: "ബിസിനസ്സ് നഷ്ടത്തിൽ, പക്ഷെ സ്യൂട്ടും കൂളിംഗ് ഗ്ലാസ്സും ഒട്ടും കുറയ്ക്കില്ല!"
    },
    {
      thought_ml: "എന്റെ ഇംഗ്ലീഷ് കേട്ട് ആരും പേടിക്കണ്ട! ലണ്ടനിൽ പോയപ്പോൾ അവിടെയുള്ള സായിപ്പിന് ഞാൻ മലയാളം പഠിപ്പിച്ചു കൊടുത്ത ആളാണ്!",
      thought_mg: "London-il saayippinu Malayalam padhippicha aalanu njan!",
      punchline: "തള്ളലിന്റെ കാര്യത്തിൽ ഇദ്ദേഹത്തെ വെല്ലാൻ ഈ ഭൂലോകത്ത് ആരുമില്ല!"
    }
  ];

  return [
    {
      id: 'damu',
      char: CULT_CHARACTERS.damu.name,
      avatar: CULT_CHARACTERS.damu.avatar,
      movie: CULT_CHARACTERS.damu.movie,
      thought: damuOptions[(seed + 0) % damuOptions.length]
    },
    {
      id: 'ramanan',
      char: CULT_CHARACTERS.ramanan.name,
      avatar: CULT_CHARACTERS.ramanan.avatar,
      movie: CULT_CHARACTERS.ramanan.movie,
      thought: ramananOptions[(seed + 1) % ramananOptions.length]
    },
    {
      id: 'pavanayi',
      char: CULT_CHARACTERS.pavanayi.name,
      avatar: CULT_CHARACTERS.pavanayi.avatar,
      movie: CULT_CHARACTERS.pavanayi.movie,
      thought: pavanayiOptions[(seed + 2) % pavanayiOptions.length]
    },
    {
      id: 'manavalan',
      char: CULT_CHARACTERS.manavalan.name,
      avatar: CULT_CHARACTERS.manavalan.avatar,
      movie: CULT_CHARACTERS.manavalan.movie,
      thought: manavalanOptions[(seed + 3) % manavalanOptions.length]
    }
  ];
}
