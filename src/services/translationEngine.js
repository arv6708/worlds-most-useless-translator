import { MODE_PRESETS, TICKER_EXAMPLES_MALAYALAM, AI_QUIPS_MALAYALAM, BATTLE_VERDICTS_MALAYALAM } from './translationData.js';
import { findAuthenticComedyThought, getCharacterReactions } from './comedyDataset.js';

// Stand-up observational comedy routines with mode intelligence
export function generateStandupRoutine(text, mode = 'college') {
  const lower = (text || '').toLowerCase();

  // 1. Keyword-based overrides
  if (lower.includes('study') || lower.includes('exam') || lower.includes('assignment') || lower.includes('homework') || lower.includes('dinner') || lower.includes('syllabus')) {
    return {
      setup: "🎙️ The Spiritual Scam of 'I'll Study After Dinner'",
      monologue_ml: "ഭക്ഷണം കഴിഞ്ഞിട്ട് പഠിക്കാം എന്ന് പറയുന്നത് മനുഷ്യരാശിയുടെ ചരിത്രത്തിലെ ഏറ്റവും വലിയ തട്ടിപ്പാണ്! ബിരിയാണിയും കഴിച്ച് ഇരുന്നാൽ പിന്നെ മനുഷ്യന് തോന്നുക ബ്രസീലിലെ ഒരു കാട്ടിൽ തടി വെട്ടുന്ന മരപ്പണിക്കാരന്റെ 45 മിനിറ്റ് യൂട്യൂബ് വീഡിയോ കാണാനാണ്! പുലർച്ചെ 3 മണി ആകുമ്പോൾ അവൻ പുസ്തകത്തിൽ തൊടാതെ ദൈവത്തെ വിളിച്ച് കരയും!",
      monologue_mg: "'Bhakshanam kazhinjittu padikkaam' ennu parayunnathu manushyante charithrathile ettavum valiya scam aanu! Biriyani kazhichu irunnal YouTube-il ariyaatha documentarikal kaanaan thonnum, 3 manikku thalayil kayyivechu karayum!",
      monologue_en: "'I'll study after dinner' is the greatest spiritual lie in human history. You finish dinner, sit down, and suddenly your soul demands that you watch a 40-minute documentary on how Japanese master artisans restore 18th-century teapots. At 3:45 AM, you have completed zero chapters and mastered Japanese blacksmithing!",
      mic_drop: "Your exam hall ticket is basically an official RSVP to cry in front of an invigilator."
    };
  }

  if (lower.includes('late') || lower.includes('hurry') || lower.includes('traffic') || lower.includes('coming') || lower.includes('way') || lower.includes('reach') || lower.includes('wait') || lower.includes('minute')) {
    return {
      setup: "🎙️ The Physics of the Indian 'One Minute'",
      monologue_ml: "ഒരു മലയാളി 'ഞാൻ വഴിയിലാണ്, ഒരു മിനിറ്റ്' എന്ന് മെസ്സേജ് അയച്ചാൽ അതിന്റെ അർത്ഥം: അവൻ ഇതുവരെ തോർത്തുമുണ്ടും മാറ്റിയിട്ടില്ല! അവൻ അലമാരയുടെ മുന്നിൽ നിന്ന് ആലോചിക്കുകയാണ്: 'ഈ വീട്ടിൽ നിന്ന് പുറത്തിറങ്ങാൻ ഞാൻ എന്ത് തെറ്റ് ചെയ്തു?'. അവൻ റസ്റ്റോറന്റിൽ എത്തുമ്പോൾ നമ്മൾ അവിടെ പെൻഷൻ പറ്റി ഇരിക്കേണ്ടി വരും!",
      monologue_mg: "Oru malayaali 'njan vazhiyilaanu' ennu paranjaal avan ithuvare thorthum maattiyittilla! Alamaarayude munnil thala chorinju nilkkuvaanu!",
      monologue_en: "When an Indian friend says 'Bro, I'm on my way, reaching in 2 minutes', they haven't even located their pants yet. They are standing in the middle of their room in a towel, staring into the existential void like an unrendered GTA character wondering if oxygen outside is worth it!",
      mic_drop: "By the time he actually arrives, the restaurant waiter will have retired and handed the bill to your grandchildren."
    };
  }

  if (lower.includes('money') || lower.includes('pay') || lower.includes('loan') || lower.includes('lend') || lower.includes('treat') || lower.includes('bill') || lower.includes('cash')) {
    return {
      setup: "🎙️ The Black Hole of Lending Money to Friends",
      monologue_ml: "സുഹൃത്തിന് കാശ് കടം കൊടുക്കുന്നത് ബാങ്ക് ലോണല്ല, അനാഥാലയത്തിലേക്ക് നടത്തുന്ന ധർമ്മമാണ്! 6 മാസം കഴിഞ്ഞ് ആ കാശ് തിരിച്ചു ചോദിക്കാൻ നീ ചെന്നാൽ അവൻ നിന്നെ നോക്കും, നീ ഏതോ കൊടും ക്രിമിനലാണെന്ന മട്ടിൽ: 'അളിയാ, നമ്മുടെ സൗഹൃദത്തിനാണോ ആ ₹500 രൂപയ്ക്കാണോ വില?'. അപ്പോൾ തന്നെ സ്വന്തം കാശ് ചോദിച്ചതിന് നീ അവനോട് മാപ്പ് പറയേണ്ടി വരും!",
      monologue_mg: "Sauhridathil cash kadam kodukkunnathu oru black hole-il itta poleyaanu! Thirichu chodichaal nammal criminal aayipokum!",
      monologue_en: "Lending money to a close friend is not a loan; it's a non-refundable charitable donation to an NGO called 'Trust Me Bro'. When you politely ask for your money back 4 months later, they look at you like YOU committed a war crime: 'Bro, is our 10-year friendship worth less than 500 rupees?' Suddenly YOU are apologizing for wanting your own rent money!",
      mic_drop: "His Google Pay has entered a state of permanent spiritual nirvana."
    };
  }

  if (lower.includes('fine') || lower.includes('nothing') || lower.includes('okay') || lower.includes('alright')) {
    return {
      setup: "🎙️ The Terror Science Behind 'It's Fine'",
      monologue_ml: "ഒരു പെൺകുട്ടി പല്ലിറുമ്മി 'ഇറ്റ്സ് ഫൈൻ' എന്ന് പറഞ്ഞാൽ, നിന്റെ അന്ത്യകൂദാശയ്ക്കുള്ള ആളെ ഇപ്പോഴേ ബുക്ക് ചെയ്തോളൂ! അർത്ഥം ഇതാണ്: 'നിന്റെ കുറ്റപത്രം ഞാൻ തയ്യാറാക്കി കഴിഞ്ഞു. 2021 ഒക്ടോബർ 14-ന് നീ ചെയ്ത തെറ്റ് അടക്കം ഞാൻ കോടതിയിൽ തെളിവായി ഹാജരാക്കും!'. അടുത്ത 72 മണിക്കൂറിലേക്ക് ഈ മുറിയിൽ ഓക്സിജൻ ലഭ്യമല്ല!",
      monologue_mg: "Oru pennu 'It's fine' ennu paranjaal ninte death warrant oppittu kazhinju! 3 varsham munpathe thettukal vare kuthippokkikolum!",
      monologue_en: "When your partner hits you with that cold, unblinking 0.5-second death stare and whispers 'It's fine'... Pack your emergency rations. Your military tribunal has officially convened. Minor infractions dating back to the Stone Age are currently being entered into the prosecution's database!",
      mic_drop: "'Fine' is not an emotion. 'Fine' is the 10-second countdown before nuclear detonation."
    };
  }

  if (lower.includes('love') || lower.includes('crush') || lower.includes('date') || lower.includes('relationship')) {
    return {
      setup: "🎙️ Modern Romance: The WiFi of Broken Dreams",
      monologue_ml: "ഇന്നത്തെ കാലത്തെ പ്രേമം എന്ന് പറയുന്നത് വാട്സ്ആപ്പിൽ ലാസ്റ്റ് സീൻ നോക്കി ബിപി കൂട്ടുന്ന ഒരു കായിക വിനോദമാണ്! അവൻ 'നീ കഴിച്ചോ' എന്ന് ചോദിക്കുന്നത് വിശപ്പറിഞ്ഞിട്ടല്ല, വേറെ ആരും മെസ്സേജ് അയക്കാത്തതുകൊണ്ട് വെറുതെ ബോറടിച്ചിട്ടാണ്! അവസാനം തേപ്പ് കിട്ടുമ്പോൾ കാണാം ഇൻസ്റ്റാഗ്രാമിൽ സാഡ് സോംഗ്സ് ഇട്ട് വിപ്ലവം ഉണ്ടാക്കുന്നത്!",
      monologue_mg: "Premam ippo WhatsApp last seen kandu BP koottunna paripadiyaanu! Theppu kittumbol sad songs ittu thakarkkum!",
      monologue_en: "Modern romance is basically two emotionally bankrupt people monitoring each other's WhatsApp last-seen status until someone loses their sanity. 'Did you eat?' doesn't mean they care about your nutrition; it means their other 3 talking stages fell asleep and you are currently the active backup generator!",
      mic_drop: "Your love story has all the emotional depth of a 15-second TikTok ad."
    };
  }

  // 2. Mode-specific Standup Specials (when text is generic or mode-specific)
  if (mode === 'corporate') {
    return {
      setup: "🎙️ The Corporate Scam of 'Let's Circle Back Offline'",
      monologue_ml: "കോർപ്പറേറ്റ് ലോകത്തിൽ 'ലെറ്റ്സ് കണക്ട് ഓഫ്ലൈൻ' എന്ന് ആരെങ്കിലും പറഞ്ഞാൽ അതിന്റെ അർത്ഥം: 'എനിക്ക് ഈ ടാസ്ക് എങ്ങനെ ചെയ്യണമെന്ന് ഒരു ചുക്കും അറിയില്ല, ദയവായി മറ്റുള്ളവരുടെ മുന്നിൽ എന്നെ നാണം കെടുത്തരുത്' എന്നാണ്! ക്ലയന്റ് മീറ്റിംഗിൽ 8 പേർ തലയാട്ടുന്നത് പ്രൊജക്റ്റ് മനസ്സിലായിട്ടല്ല, ക്യാമറ ഓഫ് ചെയ്യാൻ പറ്റാത്തതുകൊണ്ടാണ്!",
      monologue_mg: "Corporate world-il 'let's connect offline' ennu paranjaal 'enikku onnum ariyilla, naanam kedutharuthu' ennaanu! 8 per thalayaattunnathu veruthe!",
      monologue_en: "In corporate life, 'Let's circle back offline' is executive code for 'I have zero domain knowledge and am currently having a panic attack in my Aeron chair'. Eight grown adults nodding synchronously on Zoom isn't synergy—it's collective hostage survival!",
      mic_drop: "Your LinkedIn summary is fiction; your unread Outlook inbox is the true autobiography."
    };
  }

  if (mode === 'group_project') {
    return {
      setup: "🎙️ The Biblical Tragedy of the College Group Project",
      monologue_ml: "കോളേജ് ഗ്രൂപ്പ് പ്രൊജക്റ്റ് എന്ന് പറയുന്നത് ലോകത്തിലെ ഏറ്റവും ക്രൂരമായ പരീക്ഷണമാണ്! നാലംഗ സംഘത്തിൽ ഒരാൾ കോഡ് എഴുതി ചോര തുപ്പും, രണ്ടാമൻ തലേദിവസം കാൻവയിൽ 2 സ്ലൈഡ് ഉണ്ടാക്കി ഹീറോ ആകും, ബാക്കി രണ്ടുപേർ ആ സമയത്ത് വാട്സ്ആപ്പ് ഗ്രൂപ്പ് മ്യൂട്ട് ചെയ്തു കട്ടിലിൽ കിടന്നുറങ്ങും! പ്രസന്റേഷൻ ഡേയിൽ ചോദ്യം ചോദിച്ചാൽ നാലും കൂടി അന്യഗ്രഹ ജീവികളെപ്പോലെ പരസ്പരം നോക്കും!",
      monologue_mg: "Group project-il oraal code ezhuthum, oraal slide thallum, baakki 2 per WhatsApp mute cheythu urangum! Presentationil naalu perum petto!",
      monologue_en: "A college group project is basically one martyr doing 99% of the manual labor while three ghosts watch from the astral plane. One person writes the entire backend, one person downloads a Canva template, and two people 'heart' messages on WhatsApp while sleeping 14 hours a day!",
      mic_drop: "Group projects don't build teamwork; they build future supervillains."
    };
  }

  if (mode === 'drama') {
    return {
      setup: "🎙️ The Suresh Gopi Delusion in Everyday Life",
      monologue_ml: "ഓരോ മലയാളിയുടെയും ഉള്ളിൽ ഒരു സുരേഷ് ഗോപിയോ ആടുതോമയോ ഒളിച്ചിരിപ്പുണ്ട്! വീട്ടിൽ അമ്മ 'ചന്തയിൽ പോയി അരക്കിലോ തക്കാളി വാങ്ങി വാടാ' എന്ന് പറയുമ്പോൾ അവൻ മനസ്സിൽ കമ്മീഷണറിലെ ബിജിഎം ഇട്ടു കണ്ണടച്ച് നിൽക്കുകയാണ്! പോക്കറ്റിൽ ചില്ലിക്കാശില്ല, പക്ഷെ ഭാവം കണ്ടാൽ തോന്നും ലോകം കീഴടക്കാൻ ഇറങ്ങിയതാണെന്ന്!",
      monologue_mg: "Malayalikalude ullil eppozhum oru Aadu Thoma undu! Thakkali vaangan paranjaal polum Commissioner BGM manassil kekkum!",
      monologue_en: "Every single Malayali boy thinks his daily life is directed by Shaji Kailas. His mother tells him to fetch coriander leaves from the grocery store, and in his head, a 120-decibel brass brass orchestra is playing as he adjusts his sunglasses in slow motion with ₹4 in his wallet!",
      mic_drop: "Cinematic mass entry in mind, local bus conductor yelling at you in reality."
    };
  }

  if (mode === 'gen_z') {
    return {
      setup: "🎙️ The Terminal Diagnosis of Gen Z Brainrot",
      monologue_ml: "ഇന്നത്തെ പിള്ളേർക്ക് 15 സെക്കൻഡിൽ കൂടുതൽ ശ്രദ്ധിക്കാൻ പറ്റില്ല! പരീക്ഷാ ഹാളിൽ ചോദ്യം വായിച്ചു 10 സെക്കൻഡ് കഴിയുമ്പോൾ അവൻ ആലോചിക്കുന്നത്: 'ഇതിൽ എന്തുകൊണ്ട് സബ്‌വേ സർഫേഴ്സ് ഗെയിം ഓടുന്നില്ല?' എന്നാണ്! എന്തെങ്കിലും സീരിയസ് കാര്യം പറഞ്ഞാൽ ഉടൻ പറയും: 'ബ്രോ ഈസ് കുക്ക്ഡ്, നൊ കാപ്, ഫുൾ ഡെലൂലു'! തലച്ചോറ് റീബൂട്ട് ചെയ്യേണ്ട അവസ്ഥയിലാണ്!",
      monologue_mg: "Gen Z-kku 15 second attention span illa! Exam paperil Subway Surfers thappum! Brain full cooked aayi!",
      monologue_en: "Gen Z has an attention span shorter than a TikTok ad. They sit down in an exam hall and after 8 seconds their brain goes: 'Excuse me, where is the split-screen Family Guy clip below this differential equations question?'. If you confront them, they whisper 'bro is cooked' and dissolve into mist!",
      mic_drop: "Your dopamine receptors are being held hostage by 7-second audio clips."
    };
  }

  if (mode === 'indian_college') {
    return {
      setup: "🎙️ The Sadistic Joy of the Viva External Examiner",
      monologue_ml: "ഇന്ത്യൻ എഞ്ചിനീയറിംഗ് കോളേജിലെ വൈവ എക്സ്റ്റേണൽ എക്സാമിനർക്ക് ഒരു പ്രത്യേക ശാസ്ത്രീയ കഴിവുണ്ട്: നിനക്ക് അറിയാത്ത ഒരൊറ്റ ചോദ്യം അവൻ ആദ്യമേ കണ്ടുപിടിക്കും! 'മോനേ, ഓംസ് നിയമം എന്താണെന്ന് അറിയാമോ?' എന്ന് ചോദിക്കുമ്പോൾ നീ വിചാരിക്കും രക്ഷപ്പെട്ടു എന്ന്; അടുത്ത സെക്കൻഡിൽ അവൻ ചോദിക്കും: 'ആ ഓം ജനിച്ച ആശുപത്രിയുടെ മൂന്നാം നിലയിലെ വാതിലിന്റെ കളർ എന്തായിരുന്നു?'! അവിടെ തീർന്നു നിന്റെ സി.ജി.പി.എ!",
      monologue_mg: "Viva examiner ninakku ariyaatha question maathrame chodikkoo! Ohm's law thudangi hospital color chodichu theerkkum!",
      monologue_en: "External examiners don't test your subject knowledge; they test your biological threshold for public humiliation. You enter smiling, and within 30 seconds he is cross-examining you about a footnote on page 412 that was written in 1974 in a German university archive!",
      mic_drop: "Your lab manual was written in 4 ink colors, and his red pen needed only 1 slash."
    };
  }

  if (mode === 'npc') {
    return {
      setup: "🎙️ Living Life as an Unrendered Background NPC",
      monologue_ml: "ചില ദിവസങ്ങളിൽ നമ്മൾ ജീവിക്കുന്നത് മനുഷ്യനായിട്ടല്ല, ഏതോ ഗെയിമിൽ വഴിയിൽ നിന്ന് തനിയെ തിരിയുന്ന എൻ.പി.സി ആയിട്ടാണ്! രാവിലെ എഴുന്നേൽക്കുന്നു, ചായ കുടിക്കുന്നു, ഭിത്തിയിലേക്ക് നോക്കി 45 മിനിറ്റ് ഇരിക്കുന്നു! ആരെങ്കിലും എന്തെങ്കിലും ചോദിച്ചാൽ ഒരൊറ്റ റെഡിമെയ്ഡ് മറുപടി: 'സീൻ ആണ് അളിയാ'. പുതിയ ക്വസ്റ്റ് എടുക്കാൻ പോലും മാന തീർന്നുപോയി!",
      monologue_mg: "Manushyanaayi alla, GTA-le verum NPC aayittaanu jeevitham! Wall-il nokki irikkum, 'scene aanu' ennu thallum!",
      monologue_en: "Some days you are not the protagonist of your life. You are literally an unrendered background NPC in GTA Kerala, glitching into a kitchen counter while holding an unwashed coffee mug, with zero side-quests and 2% battery!",
      mic_drop: "You have 3 predetermined voice lines and you use all 3 before 10 AM."
    };
  }

  if (mode === 'malayalam') {
    return {
      setup: "🎙️ The Chayakada Philosophers of Kerala",
      monologue_ml: "കേരളത്തിലെ ചായക്കടയിലെ രാഷ്ട്രീയ ചർച്ച കണ്ടാൽ തോന്നും വൈറ്റ് ഹൗസിൽ ബൈഡനും ട്രംപും വിളിക്കുന്നത് നാട്ടിലെ ഈ ഷാജിയെയാണെന്ന്! ഒരു പരിപ്പുവടയും കടിച്ചുകൊണ്ട് അവൻ പറയും: 'റഷ്യ അങ്ങനെ ചെയ്തത് തെറ്റായിപ്പോയി, പുട്ടിൻ എന്നോട് ചോദിക്കണമായിരുന്നു'! പോക്കറ്റിൽ ചായയുടെ 10 രൂപ കൊടുക്കാൻ ഗതിയില്ല, പക്ഷെ ലോകബാങ്കിന്റെ സാമ്പത്തിക നയം അവൻ 3 മിനിറ്റിൽ തിരുത്തി തരും!",
      monologue_mg: "Chayakadayile Shaji world politics theerkkum! Chaayayude 10 roopa kodukkan illa, pakshe Putin-u upadesham kodukkum!",
      monologue_en: "Four men around a Kerala tea stall bench solve international geopolitics before the second round of parottas arrive. A man who hasn't paid his electricity bill for 6 months will passionately explain how the IMF should restructure the Greek national debt!",
      mic_drop: "World peace is just one hot samovar tea and two banana fritters away."
    };
  }

  if (mode === 'teacher') {
    return {
      setup: "🎙️ The Psychological Traps of Indian School Teachers",
      monologue_ml: "അധ്യാപകർ ക്ലാസ്സിൽ 'ഇത് പരീക്ഷയ്ക്ക് വരില്ല, വെറുതെ വായിച്ചാൽ മതി' എന്ന് പറഞ്ഞാൽ അതിനർത്ഥം: 'ഇത് 20 മാർക്കിന്റെ ഒന്നാമത്തെ കമ്പൽസറി ചോദ്യമായിരിക്കും' എന്നാണ്! ആ ചോദ്യം കണ്ട് ഹാളിൽ ഇരിക്കുന്ന കുട്ടികൾ ഒരുമിച്ച് കണ്ണീരൊഴുക്കുമ്പോൾ സ്റ്റാഫ് റൂമിൽ ഇരുന്നു സാർ കാപ്പി കുടിച്ചു ചിരിക്കും!",
      monologue_mg: "'Ithu exam-nu varilla' ennu sir paranjaal athu 20 markin varum! Pillere karayikkunna psychological play!",
      monologue_en: "When a teacher smiles and announces 'Don't worry, this chapter won't be on the exam', start memorizing every single punctuation mark. That is a targeted emotional missile heading straight for your question paper's Section A!",
      mic_drop: "The only thing syllabus-aligned in that exam hall was the air conditioning."
    };
  }

  if (mode === 'parents') {
    return {
      setup: "🎙️ The Nuclear Trap of 'Do Whatever You Want'",
      monologue_ml: "ഇന്ത്യൻ മാതാപിതാക്കൾ 'നിന്റെ ഇഷ്ടം പോലെ ചെയ്തോ' എന്ന് പറഞ്ഞാൽ അതിന്റെ അർത്ഥം: 'ഞാൻ മനസ്സിൽ വിചാരിച്ചതല്ലാതെ വേറെ വല്ലതും തൊട്ടാൽ അടുത്ത 15 വർഷത്തേക്ക് നിന്റെ സമാധാനം ഞാൻ കളയും' എന്നാണ്! അത് സ്വാതന്ത്ര്യമല്ല, അത് ഒരു വൈകാരിക കണിവെക്കലാണ്! നീ തെറ്റായ ചോയ്സ് എടുത്താൽ അമ്മ ഉടൻ പറയും: 'ശർമ്മാജിയുടെ മകനെ കണ്ടു പഠിക്ക്'!",
      monologue_mg: "'Ninte ishtam pole cheytho' ennu paranjaal athu trap aanu! Vere enthenkilum thottaal theernnu!",
      monologue_en: "'Do whatever you want' uttered by an Indian parent is not permission. It is a high-voltage electrified tripwire. The moment you take one step towards your own preference, you trigger a 45-year emotional guilt marathon!",
      mic_drop: "Sharmaji's kid is always 3 miles ahead, solving world hunger while you sleep."
    };
  }

  if (mode === 'friend') {
    return {
      setup: "🎙️ The Audacity of the Permanent Sponge Friend",
      monologue_ml: "ഓരോ ഫ്രണ്ട്സ് ഗ്രൂപ്പിലും ഒരാളുണ്ട്: 'ഒരു സിപ്പ് ചായ തരുമോ' എന്ന് ചോദിച്ചു ഗ്ലാസ്സിന്റെ പകുതി കുടിച്ചു തീർക്കുന്നവൻ! 'ഒരു ബൈറ്റ് താടാ' എന്ന് പറഞ്ഞു പൊറോട്ടയുടെ ഏറ്റവും ക്രിസ്പിയായ ഭാഗം അടിച്ചു മാറ്റുന്നവൻ! ചോദിച്ചാൽ പറയും: 'നമ്മൾ തമ്മിൽ എന്ത് കണക്ക് അളിയാ!'. അതെ, കണക്കില്ല, കാരണം നിന്റെ അക്കൗണ്ടിൽ പൂജ്യമാണ്!",
      monologue_mg: "'Oru bite thaada' ennu paranju plate full theerkkum! Chodhichaal 'sauhridam aanu' ennu thallum!",
      monologue_en: "There is always one friend whose entire nutritional intake is stolen off your plate. 'Just one bite, bro' equals 65% of your burger by mass and volume. Confront him and he invokes the sacred Geneva convention of friendship!",
      mic_drop: "His friendship is unconditional; his appetite is completely unhinged."
    };
  }

  // Fallback Universal Stand-up Routine
  return {
    setup: "🎙️ The Audacity of Human Social Etiquette",
    monologue_ml: "മനുഷ്യർ പരസ്പരം സംസാരിക്കുന്നത് സത്യം പറയാനല്ല, മറിച്ച് മുഖത്ത് നോക്കി ഇളിച്ചു കാണിച്ചു കൊണ്ട് എങ്ങനെ പച്ചക്കള്ളം പറയാം എന്ന് തെളിയിക്കാനാണ്! ദശമൂലം ദാമു പോലും നാണിച്ചു തല താഴ്ത്തുന്ന രീതിയിലുള്ള അഭിനയമാണ് ഓരോ മനുഷ്യനും ദിവസവും ക്യാമ്പസിലും ഓഫീസിലും കാഴ്ചവെക്കുന്നത്!",
    monologue_mg: "Manushyar samsaarikkunnathu sathyam parayaan alla, veruthe ilichu kaanichu pachakkallam parayaan aanu! Dhashamoolam Damu polum naannikkum!",
    monologue_en: "Human conversation is 95% acoustic camouflage. We don't speak to communicate facts; we speak to construct elaborate verbal fortresses that prevent people from realizing we are lazy, broke, and completely winging this entire adult existence!",
    mic_drop: "If honesty was an Olympic sport, humanity would be disqualified in the qualifiers."
  };
}

// Generates 4 distinct comedic flavors tailored to both text and the selected conversational mode!
export function buildRoastFlavors(text, mode = 'college') {
  const lower = (text || '').toLowerCase();

  // 1. Keyword specific roasts if explicit keywords are detected
  if (lower.includes('love') || lower.includes('crush') || lower.includes('miss you') || lower.includes('like you') || lower.includes('date') || lower.includes('gf') || lower.includes('bf')) {
    return [
      {
        flavor: 'cinema',
        headline: '🎬 സിനിമ ലെവൽ ദുരന്ത പ്രേമം',
        ml: 'പ്രേമം തലയ്ക്ക് പിടിച്ച് കണ്ണിൽ ചോരയില്ലാതെ നടക്കുകയാണ്! അവസാനം തേപ്പ് കിട്ടുമ്പോൾ കാണാം ആ കണ്ണീരും കയ്യും!',
        mg: 'Premam thalaykku pidichu nadakkuvaanu! Theppu kittumbol kaanaam aa kannuneerum kayyum!',
        en: 'Blindly sprinting into a cinematic heartbreak with zero survival gear.',
        scared: 'എനിക്ക് വേറെ ആരുമില്ലാത്തതുകൊണ്ട് ഞാൻ വെറുതെ കൂടെ നടക്കുകയാണ്, മൈൻഡ് ചെയ്യണ്ട!',
        scaredMg: 'Enikku vere aarumillaathathu kondu njan koode nadakkunnu!',
        burn: '‘Forever’ lasts until their battery hits 5% or someone hotter replies.'
      },
      {
        flavor: 'brutal',
        headline: '💀 പച്ചക്കള്ളം വെളിച്ചത്ത്',
        ml: 'നിനക്ക് എന്നോട് പ്രേമമൊന്നുമില്ല, വെറുതെ ബോറടിക്കുമ്പോൾ ചാറ്റ് ചെയ്യാൻ ഒരാളെ വേണം. അത്രതന്നെ!',
        mg: 'Ninakku premam onnum illa, boradikkumbol chat cheyyaan aale vendi parayunnatha!',
        en: 'This isn\'t romance. You are just bored and using me for free dopamine.',
        scared: 'ഞാൻ ഇതിനോടകം വേറെ രണ്ട് പേർക്ക് ഇതേ മെസ്സേജ് അയച്ചു കഴിഞ്ഞു!',
        scaredMg: 'Njan ithuvere 2 perkk koodi ithe message ayachu!',
        burn: 'Your love language is seeking attention when lonely.'
      },
      {
        flavor: 'absurd',
        headline: '🚀 പ്രപഞ്ച മഹാദുരന്തം',
        ml: 'റോമിയോയും ജൂലിയറ്റും നിങ്ങളുടെ ഈ പ്രഹസനം കണ്ടാൽ ഒരുമിച്ച് റെയിൽവേ ട്രാക്കിൽ തലവെച്ചു കിടക്കും!',
        mg: 'Romeo-yum Juliet-um ithu kandaal reilway trackil thala vechu kidakkum!',
        en: 'Romeo and Juliet would commit double suicide again just to unsee your texting game.',
        scared: 'എന്റെ റൊമാന്റിക് ചിന്തകൾക്ക് ഒരു തെരുവ് പട്ടിയുടെ നിലവാരം പോലുമില്ല!',
        scaredMg: 'Ente romantic thoughts full chavar aanu!',
        burn: 'Scientifically proven: 99.8% of your feelings are pure boredom.'
      },
      {
        flavor: 'passive',
        headline: '🐍 വിഷം ചീറ്റൽ മോഡ്',
        ml: 'അയ്യോ എത്ര നല്ല വാക്ക്! അടുത്ത ആഴ്ച ആരെയാണ് ഇനി ഇതേപോലെ പ്രേമിക്കാൻ പോകുന്നത്?',
        mg: 'Ayyo ethra nalla vaakku! Adutha aazhcha aareyaanu premikkaan pokunnathu?',
        en: 'Aww, so sweet! Out of curiosity, who will you recycle this exact sentence to next week?',
        scared: 'എന്റെ വാക്കിന് ഒരു രൂപയുടെ പോലും ആത്മാർത്ഥത ഇല്ലെന്ന് എനിക്ക് അറിയാം!',
        scaredMg: 'Ente vaakkukalil 0% aathmaarthatha undu!',
        burn: 'May your future partner read your current chat logs.'
      }
    ];
  }

  if (lower.includes('money') || lower.includes('pay') || lower.includes('loan') || lower.includes('lend') || lower.includes('treat') || lower.includes('cash') || lower.includes('bill') || lower.includes('rupee') || lower.includes('gpay')) {
    return [
      {
        flavor: 'cinema',
        headline: '🎬 പവനായി ശവമായി മോമെന്റ്',
        ml: 'എന്റെ ഗൂഗിൾ പേയിൽ വെറും ₹1 രൂപയും 40 പൈസയുമുണ്ട്! ദയവായി കാശ് ചോദിച്ചു പവനായിയെപ്പോലെ എന്നെ കൊല്ലരുത്!',
        mg: 'Ente Google Pay-il 1 roopayum 40 paisayum undu! Pavanayiye pole enne kolluthu!',
        en: 'My account balance is ₹1.40. Please don\'t assassinate me like Pavanayi.',
        scared: 'നീ ഇന്ന് ബില്ല് കൊടുത്തില്ലെങ്കിൽ ഞാൻ ഹോട്ടലിൽ വെച്ച് ബോധംകെട്ടു വീഴും!',
        scaredMg: 'Nee bill koduthillenkil njan ivide bodham kettu veezhum!',
        burn: 'You have the bank balance of a monk and the lifestyle demands of a mafia don.'
      },
      {
        flavor: 'brutal',
        headline: '💀 സാമ്പത്തിക അടിയന്തരാവസ്ഥ',
        ml: 'ഞാൻ കടം മേടിക്കും, പക്ഷെ ഒരിക്കലും തിരിച്ചു തരില്ല. സൗഹൃദം നഷ്ടപ്പെട്ടാലും ഞാൻ കാശ് തരില്ല!',
        mg: 'Njan kadam medikkum, pakshe thirichu tharilla. Sauhridam poyaalum kaash tharilla!',
        en: 'I will borrow your money and then act offended when you ask for it back.',
        scared: 'ഞാൻ ഇതിനകം അഞ്ചാറു പേരിൽ നിന്ന് മേടിച്ച കാശ് മുക്കി നടക്കുകയാണ്!',
        scaredMg: 'Njan aaru peril ninnum vangiya cash mukkittundu!',
        burn: 'Your credit score is held together by unpaid tea stall loans.'
      },
      {
        flavor: 'absurd',
        headline: '🚀 ഐഎംഎഫ് അടിയന്തര ലോൺ',
        ml: 'ലോകബാങ്ക് പോലും എന്റെ ദാരിദ്ര്യം കണ്ട് കരഞ്ഞു പിരിഞ്ഞുപോയി! പിച്ചച്ചട്ടിയിൽ ഇനി കാറ്റേ ഉള്ളൂ!',
        mg: 'World Bank polum ente daarithryam kandu karanju poyi! Pichachattiyil ini kaatte ullu!',
        en: 'The IMF sent thoughts and prayers. My wallet currently echoes with the sound of the void.',
        scared: 'പണയം വെക്കാൻ എന്റെ കൈയിൽ എന്റെ സ്വന്തം മാനക്കേട് മാത്രമേ ഉള്ളൂ!',
        scaredMg: 'Panayam vekkaan ente kayyil manakkedu maathrame ullu!',
        burn: 'Even your bank app sends you emotional sympathy notifications.'
      },
      {
        flavor: 'passive',
        headline: '🐍 കടം ചോദിച്ചാൽ കൊല്ലാം',
        ml: 'തീർച്ചയായും ഞാൻ തരാം! നിന്റെ മരണാനന്തര ചടങ്ങുകൾ നടക്കുമ്പോൾ അക്കൗണ്ടിലേക്ക് അയച്ചു തരാം!',
        mg: 'Theerchayaayum tharaam! Ninte maranaanthanra chadangukal nadakkumbol ayakkam!',
        en: 'Of course I\'ll pay you back! Expect the funds around your 75th death anniversary.',
        scared: 'നിന്റെ കയ്യിൽ നിന്ന് എങ്ങനെ കൂടുതൽ കാശ് അടിച്ചു മാറ്റാം എന്ന് നോക്കുകയാണ്!',
        scaredMg: 'Ninte kayyil ninnum engane cash thandathaam ennu aalochikkuva!',
        burn: 'A beggar with high-end smartphone aspirations.'
      }
    ];
  }

  // 2. Mode-specific 4-flavor Comedy Engines
  if (mode === 'corporate') {
    return [
      {
        flavor: 'cinema',
        headline: '💼 കോർപ്പറേറ്റ് ചതിയുടെ പത്മവ്യൂഹം',
        ml: 'ഓഫീസ് പൊളിറ്റിക്സിൽ ദശമൂലം ദാമുവിനെപ്പോലെ കട്ട ചതി ഉണ്ടാക്കിക്കൊണ്ട് ‘ലെറ്റ്സ് ടേക്ക് ദിസ് ഓഫ്ലൈൻ’ എന്ന് പറഞ്ഞു മുങ്ങുന്നു!',
        mg: 'Office politics-il Damu pole katta chathi undakki "let\'s take this offline" ennu paranju mungunnu!',
        en: 'Executing a masterclass in corporate evasion. Vanishing into the cafeteria immediately.',
        scared: 'എനിക്ക് ഈ ടാസ്ക് ചെയ്യാൻ ഒട്ടും താല്പര്യമില്ല, വേറെ ആരുടെയെങ്കിലും തലയിൽ കെട്ടിവെക്കാൻ നോക്കുകയാണ്!',
        scaredMg: 'Enikku ee pani cheyyan madi aanu, vere aarkkenkilum kodukkan nokkuva!',
        burn: 'Your job performance is an elaborate performance art pieces.'
      },
      {
        flavor: 'brutal',
        headline: '💀 സിസ്റ്റം ഓൺ, തലച്ചോറ് ഓഫ്',
        ml: 'ഞാൻ ഇതിനകം 4 മണിക്കൂറായി യൂട്യൂബ് ഷോർട്സ് കണ്ടിരിക്കുകയാണ്! ഡെലിവറി ചെയ്യാൻ എനിക്ക് ഒരു ഉദ്ദേശവുമില്ല!',
        mg: 'Njan 4 manikkooraayi YouTube kandirikkunnu! Delivery cheyyan plan illa!',
        en: 'Active on Slack, completely brain-dead in reality.',
        scared: 'മാനേജർ സ്ക്രീൻ ഷെയർ ചെയ്യാൻ പറഞ്ഞാൽ ഞാൻ കള്ളം പറഞ്ഞു കോൾ കട്ട് ചെയ്യും!',
        scaredMg: 'Manager screen share chodichaal call cut aakkum!',
        burn: 'If procrastination paid salaries, you would be the CEO.'
      },
      {
        flavor: 'absurd',
        headline: '🚀 സിനർജിയുടെ അന്ത്യം',
        ml: 'ക്ലയന്റ് മീറ്റിംഗിൽ നമ്മൾ 10 പേർ ഇരുന്നു കട്ട അസംബന്ധങ്ങൾ പറഞ്ഞ് സമയം കൊല്ലുന്നു! ആർക്കും ഒന്നും അറിയില്ല!',
        mg: 'Meeting-il 10 per irunnu veruthe thallunnu! Aarkkum onnum ariyilla!',
        en: 'A synchronized display of strategic confusion and PowerPoint terrorism.',
        scared: 'ഇന്ന് 5 മണിക്ക് ലോഗൗട്ട് ചെയ്തു അടുത്ത തിങ്കളാഴ്ച വരെ ഫോൺ സ്വിച്ച് ഓഫ് ചെയ്യും!',
        scaredMg: '5 manikku logout cheythu phone switch off aakkum!',
        burn: 'Your emails could have been a 2-second WhatsApp sticker.'
      },
      {
        flavor: 'passive',
        headline: '🐍 പെർ മൈ പ്രീവിയസ് ഇമെയിൽ',
        ml: 'കണ്ണുതുറന്നു നോക്കാൻ അല്പം ബുദ്ധി ഉണ്ടെങ്കിൽ അയച്ച മെയിൽ വായിക്കൂ! എന്നെക്കൊണ്ട് വീണ്ടും പറയിപ്പിക്കരുത്!',
        mg: 'Kannu thurannu vaayikkan buddhi undo! Enne kondu veendum parayikkaruthu!',
        en: 'Per my previous email: Please consult an optometrist or a reading tutor.',
        scared: 'നിന്നോട് സംസാരിക്കുമ്പോൾ എന്റെ രക്തസമ്മർദ്ദം 220 കടന്നു!',
        scaredMg: 'Ninnodu samsaarikkumbol BP 220 kadannu!',
        burn: 'Sending kind regards while wishing you a stubbed toe.'
      }
    ];
  }

  if (mode === 'drama') {
    return [
      {
        flavor: 'cinema',
        headline: '🎬 സ്ഫടികത്തിലെ ആടുതോമ മാസ്സ്',
        ml: 'മുണ്ട് മടക്കിക്കുത്തി ആടുതോമയെപ്പോലെ കട്ട ഡയലോഗ് അടിച്ചിട്ട് പോക്കറ്റിൽ വെറും കാറ്റും കൊണ്ട് ഇറങ്ങി ഓടുന്നു!',
        mg: 'Mundu madakkikkuthy Aadu Thoma pole dialogue adichittu pocketil kaattum kondu mungunnu!',
        en: 'Peak mass elevation soundtrack playing in head while reality shows empty pockets.',
        scared: 'ആരെങ്കിലും തിരിച്ചു അടിച്ചാൽ ഞാൻ അവിടെ വെച്ച് അലറി കരയും!',
        scaredMg: 'Aarenkilum thirichu thalliyaal karayum!',
        burn: 'Mohanlal dialogue with a comedy sidekick execution.'
      },
      {
        flavor: 'brutal',
        headline: '💀 പവനായി ശവമായി മോഡ്',
        ml: 'പവനായി ശവമായി! ഇത്രയും വലിയൊരു തള്ള് ഞാൻ പത്രത്തിൽ പോലും വായിച്ചിട്ടില്ല സുഹൃത്തേ!',
        mg: 'Pavanayi shavamaayi! Ithra valiya thallu njan kandittilla aliya!',
        en: 'A world-class fraud exposed before the opening credits even finish.',
        scared: 'ഞാൻ പറഞ്ഞതിൽ 0.001% പോലും സത്യമില്ലെന്ന് എനിക്ക് നന്നായി അറിയാം!',
        scaredMg: 'Paranjathil onnum sathyam illa!',
        burn: 'All bark, zero bite, negative intimidation.'
      },
      {
        flavor: 'absurd',
        headline: '🚀 ഹോളിവുഡ് ക്രാഷ് ലാൻഡിംഗ്',
        ml: 'ബാക്ക്ഗ്രൗണ്ടിൽ അലറുന്ന ബിജിഎമ്മും ഡ്രോൺ ഷോട്ടും വെച്ച് ജീവിതം കോമാളിത്തരമാക്കി മാറ്റിക്കഴിഞ്ഞു!',
        mg: 'BGM-um drone shot-um vechu jeevitham full komali aakki!',
        en: 'A multi-crore budget drama with zero script and amateur acting.',
        scared: 'എന്നെ അടുത്ത സിനിമയിൽ നിന്ന് പിരിച്ചു വിട്ടു എന്ന് ആരും അറിയരുതേ!',
        scaredMg: 'Enne cinemayil ninnum out aakki!',
        burn: 'Your life needs an editor and an immediate commercial break.'
      },
      {
        flavor: 'passive',
        headline: '🐍 ഓസ്കാർ അവാർഡ് നുണ',
        ml: 'ഹാ എന്തൊരു ഗംഭീര അഭിനയം! ഒരു പൊന്നാട തന്ന് നാട്ടുകാർക്ക് മുന്നിൽ അപമാനിക്കാൻ തോന്നുന്നു!',
        mg: 'Enthoru nalla abhinayam! Ponnada thannu naattukaarude munnil naanam keduthum!',
        en: 'Truly magnificent melodrama. A national award for unwarranted audacity.',
        scared: 'എന്റെ കള്ളം നാട്ടുകാർ കണ്ടുപിടിച്ചാൽ ഞാൻ നാടുവിടും!',
        scaredMg: 'Kallam kandupidichaal njan oodum!',
        burn: 'You belong in a 7:30 PM television serial, not real life.'
      }
    ];
  }

  if (mode === 'gen_z') {
    return [
      {
        flavor: 'cinema',
        headline: '🧢 ബ്രോ ഈസ് അബ്സൊല്യൂട്ട്ലി കുക്ക്ഡ്',
        ml: 'ബ്രോ ഈസ് കുക്ക്ഡ്! സോഷ്യൽ ബാറ്ററി മൈനസ് 400 ആയി, ഇനി ഒരു ഇൻസ്റ്റാഗ്രാം റീൽസ് കണ്ടാലേ ശ്വാസം വീഴൂ!',
        mg: 'Bro is cooked! Social battery minus 400 aayi, reels kaanaathe shvaasam varilla!',
        en: 'Terminal brainrot stage 4. Needs 6 hours of subway surfers split-screen therapy.',
        scared: 'എന്റെ അറ്റൻഷൻ സ്പാൻ 4 സെക്കൻഡിൽ തീർന്നു, ഇനി എനിക്ക് ഒന്നും മനസ്സിലാവില്ല!',
        scaredMg: 'Attention span theernnu, onnum ariyilla!',
        burn: 'Your vocabulary consists of 6 buzzwords and extreme existential dread.'
      },
      {
        flavor: 'brutal',
        headline: '💀 ഡെലൂലു ലെവൽ മാക്സ്',
        ml: 'ഇവിടെ ആരും അത്ര കൂൾ ഒന്നുമല്ല. വെറും ശ്രദ്ധ കിട്ടാൻ വേണ്ടി റീൽസിൽ സാഡ് മ്യൂസിക് ഇട്ടു കരയുന്ന കോമാളി!',
        mg: 'Ivide aarum cool alla. Sad music ittu karayunna verum clown!',
        en: 'Performing melancholy for the algorithms while accomplishing zero real-world tasks.',
        scared: 'ഫോൺ താഴെ വെച്ചാൽ എന്റെ ജീവിതത്തിലെ ശൂന്യത എന്നെ വിഴുങ്ങും!',
        scaredMg: 'Phone thaazhe vechaal njan theernnu!',
        burn: 'Aura points deducted: -10,000,000.'
      },
      {
        flavor: 'absurd',
        headline: '🚀 സ്കിബിഡി ടോയ്ലറ്റ് സിൻഡ്രോം',
        ml: 'തലച്ചോറിൽ ഇപ്പോൾ മീം സൗണ്ട്ട്രാക്കുകൾ മാത്രമാണ് ലൂപ്പിൽ ഓടുന്നത്! ചിന്താശേഷി പൂർണ്ണമായി നശിച്ചു!',
        mg: 'Brain-il meme sound loop aayi odunnu! Buddhi theernnu!',
        en: 'Cognitive faculties permanently replaced by distorted phonk music.',
        scared: 'ഞാൻ പരീക്ഷ എഴുതാൻ പോയാൽ ആൻസർ ഷീറ്റിൽ ഇമോജി വരച്ചു വെക്കും!',
        scaredMg: 'Exam sheetil emoji varakkum!',
        burn: 'You have the patience of a dying microwave.'
      },
      {
        flavor: 'passive',
        headline: '🐍 ലെഫ്റ്റ് ഓൺ റെഡ് തഗ്ഗ്',
        ml: 'ഓ എത്ര നല്ല മെസ്സേജ്! ഞാൻ ഇത് സീൻ ചെയ്തിട്ട് അടുത്ത മാസം ‘K’ എന്ന് അയച്ചു തരാം!',
        mg: 'Athra nalla message! Njan scene aakki adutha maasam "K" ayakkam!',
        en: 'Left on read with surgical precision. Expect a cold dry text in 3 weeks.',
        scared: 'എനിക്ക് മറുപടി അയക്കാൻ മടിയായതുകൊണ്ട് ഞാൻ ഫോൺ ഫ്ലൈറ്റ് മോഡിൽ ഇട്ടു!',
        scaredMg: 'Reply ayakkan madi kaaranam flight mode-il ittu!',
        burn: 'Your aesthetic is exhaustion; your personality is screen-time.'
      }
    ];
  }

  if (mode === 'indian_college') {
    return [
      {
        flavor: 'cinema',
        headline: '🇮🇳 എക്സ്റ്റേണൽ എക്സാമിനറുടെ വധശിക്ഷ',
        ml: 'വൈവ ഹാളിൽ കയറി എക്സ്റ്റേണലിന്റെ ആ ക്രൂരമായ ചിരി കണ്ടപ്പോൾ തന്നെ സകല ആത്മവിശ്വാസവും തകർന്നു തരിപ്പണമായി!',
        mg: 'Viva examiner-ude chirikku munnil sethu poyi! Internal mark poojyam!',
        en: 'Walking into the lab viva like a condemned prisoner approaching the gallows.',
        scared: 'സാർ, അര മാർക്ക് തന്നില്ലെങ്കിൽ ഞാൻ കോളേജ് ഗേറ്റിൽ ഇരുന്നു നിരാഹാരം കിടക്കും!',
        scaredMg: 'Ara mark thannillenkil njan gate-il kidannu karayum!',
        burn: 'Your lab manual is 90% white-out fluid and 10% pure fiction.'
      },
      {
        flavor: 'brutal',
        headline: '💀 അറ്റൻഡൻസ് 41% ചതി',
        ml: 'അറ്റൻഡൻസ് ഇല്ല, നോട്ട്സ് ഇല്ല, ലാബ് റെക്കോർഡിൽ സീലും ഇല്ല! ഇനി സപ്ലി വാങ്ങി ഇവിടെത്തന്നെ ജീവിക്കാം!',
        mg: 'Attendance illa, recordil seal illa! Suppli vaangi ivide kidakkam!',
        en: 'Zero attendance, forged lab signatures, and zero divine intervention.',
        scared: 'എച്ച്ഒഡി എന്റെ മുഖം കണ്ടാൽ ഇപ്പോൾ തന്നെ പ്രൊഫഷണൽ ആയി അലറി വിളിക്കും!',
        scaredMg: 'HOD kandaal direct aayi out aakkum!',
        burn: 'You have visited the college canteen more than the lecture hall.'
      },
      {
        flavor: 'absurd',
        headline: '🚀 സർക്യൂട്ട് ബോർഡിൽ നിന്ന് പുക',
        ml: 'കണക്ഷൻ കൊടുത്തപ്പോൾ തന്നെ സർക്യൂട്ടിൽ നിന്ന് കറുത്ത പുകയും തീപ്പൊരിയും! ലാബ് അസിസ്റ്റന്റ് മോഹാലസ്യപ്പെട്ടു!',
        mg: 'Circuitil ninnum puka vannu! Lab assistant karanju poyi!',
        en: 'The breadboard is on fire and the oscilloscope is displaying your impending failure.',
        scared: 'മൾട്ടിമീറ്റർ കേടാക്കിയത് ഞാനാണെന്ന് ആരും കണ്ടുപിടിക്കരുതേ!',
        scaredMg: 'Multimeter nashttamaakkiyathu njan aanu!',
        burn: 'Even electricity refuses to flow through your poorly designed life.'
      },
      {
        flavor: 'passive',
        headline: '🐍 പ്രൊഫസറുടെ പുഞ്ചിരി',
        ml: 'എത്ര മനോഹരമായ പെർഫോമൻസ്! അടുത്ത ബാച്ചിലെ കുട്ടികളുടെ കൂടെയും നിന്നെ ലാബിൽ കാണാൻ സാധിക്കട്ടെ!',
        mg: 'Adutha batch pillere koodeyum ninne ivide kaanaam!',
        en: 'Such immense dedication. You will surely enjoy repeating this course next semester.',
        scared: 'എന്റെ ഇന്റേണൽ മാർക്ക് മൈനസ് 5 ആണെന്ന് ഞാൻ വീട്ടിൽ എങ്ങനെ പറയും!',
        scaredMg: 'Internal mark minus aayi!',
        burn: 'Graduating on time is officially an unachievable mythical event.'
      }
    ];
  }

  if (mode === 'npc') {
    return [
      {
        flavor: 'cinema',
        headline: '🎮 അൺറെൻഡേർഡ് ബാക്ക്ഗ്രൗണ്ട് എൻപിസി',
        ml: 'നായകനല്ല, വഴിയിൽ വെറുതെ നിന്ന് ഭിത്തിയിൽ തലയിടിച്ചു നടക്കുന്ന വെറും സൈഡ് എൻപിസി കഥാപാത്രം!',
        mg: 'Hero alla, wall-il thala idichu nadakkunna verum side NPC character!',
        en: 'Glitching through the world geometry with zero storyline impact.',
        scared: 'ആരും എന്നോട് സംസാരിച്ചില്ലെങ്കിൽ ഞാൻ ഇവിടെത്തന്നെ ഉറങ്ങിപ്പോകും!',
        scaredMg: 'Aarum mindiyillenkil urangi pokum!',
        burn: 'You are an extra in other people’s cutscenes.'
      },
      {
        flavor: 'brutal',
        headline: '💀 മാന പൂജ്യമായി, ബാറ്ററി തീർന്നു',
        ml: 'മാന പൂജ്യമായി! ഒരു ചായ കുടിക്കാതെ ഇനി ഒരു ആക്ഷനും ഞാൻ ചെയ്യുകയില്ല. ഗെയിം ഓവർ ആയി!',
        mg: 'Mana zero aayi! Chaaya kudikkathe onnum cheyyilla. Game over!',
        en: 'Zero stamina, negative motivation, and the conversational latency of dial-up internet.',
        scared: 'ഈ ക്വസ്റ്റ് കംപ്ലീറ്റ് ചെയ്യാൻ എനിക്ക് ഒരു ലക്ഷം കൊല്ലം വേണം!',
        scaredMg: 'Ee quest theerkkaan samayam illa!',
        burn: 'Your respawn point should be permanently set to bed.'
      },
      {
        flavor: 'absurd',
        headline: '🚀 സെർവർ പിംഗ് 9999ms',
        ml: 'റിയാലിറ്റിയിൽ നിന്ന് ഗ്ലിച്ച് അടിച്ചു പുറത്തുപോയി! ലാഗ് കാരണം ജീവിതം 10 മിനിറ്റ് പുറകിലാണ് ഓടുന്നത്!',
        mg: 'Server lag 9999ms! Reality-il ninnum purathaayi!',
        en: 'Ping so high your responses arrive from the previous fiscal year.',
        scared: 'ഞാൻ എന്താണ് പറയുന്നതെന്ന് എൻജിൻ സെർവറിന് പോലും മനസ്സിലാകുന്നില്ല!',
        scaredMg: 'Enthaanu paranjathennu server-num ariyilla!',
        burn: 'Please restart your biological router.'
      },
      {
        flavor: 'passive',
        headline: '🐍 ക്വസ്റ്റ് ഫെയിൽഡ് നോട്ടീസ്',
        ml: 'പുതിയ ക്വസ്റ്റ് ഫെയിൽ ആയി! വെറുതെ ഒരു മൂലയിൽ ഇരുന്ന് സമയം പാഴാക്കാൻ അവാർഡ് തരാം!',
        mg: 'Quest failed! Moolayil irunnu samayam kalayaan award!',
        en: 'Quest Failed: Functioning as a productive member of society [0/1 complete].',
        scared: 'ഇനി പുതിയ ടാസ്ക് തന്നാൽ ഞാൻ ഗെയിം അൺഇൻസ്റ്റാൾ ചെയ്യും!',
        scaredMg: 'Ini pani thannaal game delete aakkum!',
        burn: 'Even automated bots have more personality than you.'
      }
    ];
  }

  if (mode === 'malayalam') {
    return [
      {
        flavor: 'cinema',
        headline: '🌴 ലോക്കൽ ഷാജി ചായക്കട തഗ്ഗ്',
        ml: 'നാട്ടിലെ ചായക്കടയിൽ ഇരുന്നു ദശമൂലം ദാമുവിനെ വെല്ലുന്ന കട്ട തള്ള് തള്ളി അന്താരാഷ്ട്ര സീൻ ഉണ്ടാക്കുന്നു!',
        mg: 'Chayakadayil irunnu Damu-ne vellunna thallu thalli scene aakkunnu!',
        en: 'Solving global diplomacy over one hot glass of tea with empty pockets.',
        scared: 'ചായയുടെ കാശ് ചോദിച്ചാൽ ഞാൻ നേരെ അടുത്ത ഇടവഴി വഴി ഓടി രക്ഷപ്പെടും!',
        scaredMg: 'Chaayayude cash chodichaal njan oodum!',
        burn: 'World-class opinions backed by a 0 rupee bank balance.'
      },
      {
        flavor: 'brutal',
        headline: '💀 ഫുൾ സീൻ കോൺട്ര ആണ്',
        ml: 'കാര്യങ്ങൾ കൈവിട്ടു പോയി അളിയാ! നമ്മൾ ഒരുമിച്ച് പെട്ടു, ഇനി നാട്ടുകാർ ഓടിച്ചിട്ട് അടിക്കാൻ ചാൻസ് ഉണ്ട്!',
        mg: 'Full scene contra aanu! Naattukaar thallaan chance undu!',
        en: 'A total catastrophic miscalculation with zero backup plan.',
        scared: 'പോലീസോ പ്രിൻസിപ്പലോ ഇപ്പോൾ തന്നെ സൈറൺ അടിച്ചു വരും!',
        scaredMg: 'Police ippo vannu pokkum!',
        burn: 'Your confidence is writing checks your survival skills cannot cash.'
      },
      {
        flavor: 'absurd',
        headline: '🚀 രണ്ട് പൊറോട്ടയും മഹാവിപ്ലവവും',
        ml: 'രണ്ട് പൊറോട്ടയും ചിക്കൻ കറിയും അകത്താക്കി കഴിഞ്ഞാൽ പിന്നെ ഞാൻ പ്രപഞ്ചം നിയന്ത്രിക്കുന്ന രാജാവാണ്!',
        mg: 'Randu porottayum kazhinjaal njan aanu king!',
        en: 'Delusional omnipotence powered entirely by Kerala street carbohydrates.',
        scared: 'ഇനി മേലിൽ എന്നോട് പണി ചെയ്യാൻ പറഞ്ഞാൽ ഞാൻ ബോധം കെടും!',
        scaredMg: 'Pani cheyyan paranjaal veezhum!',
        burn: 'Your ambition expires the second your stomach gets full.'
      },
      {
        flavor: 'passive',
        headline: '🐍 പിന്നെ നോക്കാം തന്ത്രം',
        ml: '‘പിന്നെ നോക്കാം’ എന്ന് പറഞ്ഞാൽ ആയുഷ്കാലത്ത് ഇനി നടക്കില്ലെന്ന് അറിയാത്ത ആരെങ്കിലും ഈ നാട്ടിൽ ഉണ്ടോ?',
        mg: '"Pinne nokkaam" ennu paranjaal orikkalum nadakkilla!',
        en: '‘Let’s see later’ = permanently deleted from conscious existence.',
        scared: 'ഇനി ഇത് ചോദിച്ചു എന്റെ അടുത്തേക്ക് വരരുത്!',
        scaredMg: 'Ini ithu chodichu vararuthu!',
        burn: 'Postponing things until the heat death of the universe.'
      }
    ];
  }

  if (mode === 'group_project') {
    return [
      {
        flavor: 'cinema',
        headline: '👥 ഗ്രൂപ്പ് പ്രൊജക്റ്റിലെ ഏക രക്തസാക്ഷി',
        ml: 'മൂന്നുപേർ ഉറങ്ങുമ്പോൾ ഒരാൾ ലാപ്ടോപ്പിൽ തലയിടിച്ചു കരഞ്ഞു കോഡ് കമ്പൈൽ ചെയ്യാൻ നോക്കുന്നു!',
        mg: 'Moonnuper urangumbol oraal code cheythu karayunnu!',
        en: 'One lone warrior carrying three sleeping liabilities towards the deadline.',
        scared: 'നാളെ പ്രൊഫസറുടെ മുന്നിൽ വെച്ച് ഡെമോ ക്രാഷ് ആയാൽ നമ്മൾ നാറും!',
        scaredMg: 'Demo crash aayal stage-il vechu naanam kedum!',
        burn: 'You contributed nothing except your name on the cover page.'
      },
      {
        flavor: 'brutal',
        headline: '💀 വാട്സ്ആപ്പ് ഗ്രൂപ്പ് മ്യൂട്ട് ചെയ്ത ചതി',
        ml: 'ഡെഡ്‌ലൈൻ എത്തിയപ്പോൾ ബാക്കി എല്ലാവരും വാട്സ്ആപ്പ് ഗ്രൂപ്പ് മ്യൂട്ട് ചെയ്തു സുഖമായി പബ്ജി കളിക്കുന്നു!',
        mg: 'Deadline aayappol baakkiyellam group mute cheythu mungii!',
        en: 'Vanished into witness protection the exact second work was assigned.',
        scared: 'സ്ലൈഡ് 4-ൽ എന്താണ് എഴുതിയിരിക്കുന്നതെന്ന് എനിക്ക് ഒരു വിവരവുമില്ല!',
        scaredMg: 'Slide 4-il enthaanu ulla ennu ariyilla!',
        burn: 'Your attendance in this group project is purely cosmetic.'
      },
      {
        flavor: 'absurd',
        headline: '🚀 ഗിറ്റ് ഹബ്ബ് മെർജ് ദുരന്തം',
        ml: 'കോഡ് മെർജ് ചെയ്തപ്പോൾ 400 എറർ വന്ന് ലാപ്ടോപ്പ് സ്വയം ഫോർമാറ്റ് ആയിപ്പോയി! സകലതും പോയി!',
        mg: 'Merge cheythappol 400 error vannu system poyi!',
        en: '400 merge conflicts, zero backups, and a deadline in 14 minutes.',
        scared: 'ഈ പ്രൊജക്റ്റ് യൂട്യൂബിൽ നിന്ന് കോപ്പി അടിച്ചതാണെന്ന് സാർ അറിയരുതേ!',
        scaredMg: 'YouTube-il ninnum copy adichathaanu!',
        burn: 'You bring the energy of an uninvited guest to every team meeting.'
      },
      {
        flavor: 'passive',
        headline: '🐍 ടീംവർക്കിന്റെ മഹാത്മ്യം',
        ml: 'അയ്യോ എന്തൊരു സംഭാവന! ലാസ്റ്റ് നിമിഷം വന്ന് ‘ഓൾ ദി ബെസ്റ്റ് ഗയ്‌സ്’ എന്ന് പറഞ്ഞ ആ മനസ്സ് ആരും കാണാതെ പോകരുത്!',
        mg: 'Last second vannu "All the best guys" paranja manassu kaanathe pokaruthu!',
        en: 'Thank you for your invaluable contribution of typing "Noted 👍" in the group chat.',
        scared: 'എനിക്ക് ക്രെഡിറ്റ് മുഴുവൻ വേണം, പക്ഷെ ജോലി ഒന്നും ചെയ്യില്ല!',
        scaredMg: 'Credit venam, pani cheyyilla!',
        burn: 'The dead weight that sank the Titanic had more utility than you.'
      }
    ];
  }

  if (mode === 'teacher') {
    return [
      {
        flavor: 'cinema',
        headline: '👩‍🏫 സാറിന്റെ ക്രൂരമായ പ്രതികാരം',
        ml: 'ക്ലാസ്സിൽ വെറുതെ ചിരിച്ചതിന് പരീക്ഷാ പേപ്പറിൽ മാർക്ക് വെട്ടിത്തീർത്ത് സാർ ക്രൂരമായ ആനന്ദം കണ്ടെത്തുന്നു!',
        mg: 'Sir classil vechu theerthu! Internal mark cut aakki!',
        en: 'A pedagogical vendetta executed with pure bureaucratic malice.',
        scared: 'നാളെ അച്ഛനെയും അമ്മയെയും കൂട്ടി പ്രിൻസിപ്പലിന്റെ മുറിയിൽ കയറേണ്ടി വരുമെന്ന് പേടിയുണ്ട്!',
        scaredMg: 'Parents-ne vilikkan parayum ennu pediyundu!',
        burn: 'You are one missing assignment away from academic exile.'
      },
      {
        flavor: 'brutal',
        headline: '💀 50 പേജ് കൈകൊണ്ട് എഴുതിയ ശിക്ഷ',
        ml: 'നിങ്ങളുടെ വീക്കെൻഡ് നശിപ്പിക്കാൻ വേണ്ടി മാത്രം 50 പേജ് അസൈൻമെന്റ് തന്നു! ഇത് ആരും വായിച്ചു നോക്കില്ല!',
        mg: 'Weekend tholppikkan 50 page assignment! Aarum vaayikkilla!',
        en: 'A sadistic handwriting exercise destined directly for the college wastepaper bin.',
        scared: 'ഞാൻ നെറ്റിൽ നിന്ന് കോപ്പി അടിച്ചതാണെന്ന് സാർ കണ്ടുപിടിച്ചാൽ തീർന്നു!',
        scaredMg: 'Copy adichathaano ennu kandupidikkum!',
        burn: 'Your study habits make goldfish look academically focused.'
      },
      {
        flavor: 'absurd',
        headline: '🚀 എട്ടാമത്തെ ഫൈനൽ വാണിംഗ്',
        ml: '‘ഇത് അവസാനത്തെ വാണിംഗ് ആണ്’ എന്ന് സാർ പറയുന്നത് ഇത് എട്ടാമത്തെ തവണയാണ്! പേപ്പർ വർക്കിന് മടിയാണ്!',
        mg: 'Ithu 8-aamathe final warning aanu! Madi kaaranam vidunnu!',
        en: 'Warning number 8 issued with zero institutional follow-through.',
        scared: 'എനിക്ക് ക്ലാസ്സ് എടുക്കാൻ മടിയുള്ളതുകൊണ്ടാണ് നിങ്ങളോട് നോട്ട്സ് എഴുതാൻ പറയുന്നത്!',
        scaredMg: 'Class edukkan madi kaaranam notes ezhuthan parayunnu!',
        burn: 'Your academic trajectory is aiming straight for the floor.'
      },
      {
        flavor: 'passive',
        headline: '🐍 അടുത്ത വർഷവും സ്വാഗതം',
        ml: 'ഹാ എത്ര ശാന്തമായി ഇരിക്കുന്നു! അടുത്ത കൊല്ലവും ഇതേ ബെഞ്ചിൽ ഇതേ ക്ലാസ്സ് കേൾക്കാൻ കൊതിയായിട്ടാണോ?',
        mg: 'Adutha varsham ithe benchil irikkan kothiyaano?',
        en: 'Such serene calm. You clearly plan to repeat this grade next year.',
        scared: 'പരീക്ഷയ്ക്ക് ഞാൻ ഒന്നും എഴുതിയിട്ടില്ലെന്ന് എല്ലാവരും അറിയും!',
        scaredMg: 'Exam-nu onnum ezhuthiyittilla!',
        burn: 'Your answer sheet is an insult to the trees that died to produce it.'
      }
    ];
  }

  if (mode === 'parents') {
    return [
      {
        flavor: 'cinema',
        headline: '👨‍👩‍👧 അമ്മയുടെ ചൂൽ അറ്റാക്ക്',
        ml: 'അമ്മ ചൂലെടുത്ത് സൂപ്പർ സോണിക് സ്പീഡിൽ വരുന്നു! അച്ഛൻ പത്രം താഴ്ത്തി നോക്കുന്ന ആ നോട്ടത്തിൽ മരണം ഉറപ്പായി!',
        mg: 'Amma choolu eduthu varunnu! Achan nokkunna lookil maranam urappu!',
        en: 'Parental missile defense system locked onto your uncleaned bedroom.',
        scared: 'എന്റെ ഫോൺ പിടിച്ചെടുത്താൽ ഞാൻ ജീവിതത്തിൽ നിന്ന് ലോഗൗട്ട് ചെയ്യും!',
        scaredMg: 'Phone eduthaal jeevitham theernnu!',
        burn: 'Your parents are actively calculating the return on investment of your upbringing.'
      },
      {
        flavor: 'brutal',
        headline: '💀 ശർമ്മാജിയുടെ മകന്റെ ബാധ',
        ml: 'അടുത്ത വീട്ടിലെ കുട്ടി നാസയിൽ പോയി, നീ ഇപ്പോഴും ബെഡിൽ പുതപ്പും പുതച്ചു കിടന്നുരുളുന്നു എന്ന കുറ്റപ്പെടുത്തൽ!',
        mg: 'Sharmaji-yude kutti NASA-yil poyi, nee bedil kidannu urulunnu!',
        en: 'Guilt-tripped with the mythical accomplishments of the neighbor\'s overachieving offspring.',
        scared: 'മാർക്ക് ലിസ്റ്റ് കണ്ടാൽ അച്ഛൻ എന്നെ പടിയടച്ചു പിണ്ഡം വെക്കും!',
        scaredMg: 'Mark list kandaal veettil ninnum purathaakkum!',
        burn: 'Even your family dog looks at your exam grades with disappointment.'
      },
      {
        flavor: 'absurd',
        headline: '🚀 ഫാമിലി കൗൺസിൽ വിചാരണ',
        ml: 'വീട്ടിലെ സകല കുടുംബക്കാരെയും വിളിച്ചുകൂട്ടി നിന്റെ മടിയെപ്പറ്റി ചർച്ച ചെയ്യുന്ന ദേശീയ സെമിനാർ തുടങ്ങി!',
        mg: 'Family motham koodi ninte madiye patti seminar thudangi!',
        en: 'A full tribunal convened at the dining table to prosecute your lack of ambition.',
        scared: 'ഞാൻ രാത്രി ഫ്രണ്ട്സിന്റെ കൂടെ പോയത് അമ്മ അറിഞ്ഞു!',
        scaredMg: 'Rathri poyathu amma arinju!',
        burn: 'Your career plans sound like improvised stand-up comedy to your parents.'
      },
      {
        flavor: 'passive',
        headline: '🐍 നിന്റെ ഇഷ്ടം പോലെ ജീവിച്ചോ',
        ml: '‘നിന്റെ ഇഷ്ടം പോലെ ജീവിച്ചോ’ എന്ന് പറഞ്ഞാൽ ഇനി അടുത്ത 10 കൊല്ലത്തേക്ക് ഇതിന്റെ പേരിൽ കുത്തുവാക്ക് കേൾക്കണം!',
        mg: '"Ninte ishtam pole cheytho" ennu paranjaal 10 kollam kuthiparayum!',
        en: '‘Do whatever you want’ = an open invitation to 15 years of cold emotional embargo.',
        scared: 'ഞാൻ സ്വന്തം വഴി തിരഞ്ഞെടുത്താൽ ചോറ് തരില്ലെന്ന് അമ്മ പറഞ്ഞു!',
        scaredMg: 'Choisu maariyaal choru tharilla!',
        burn: 'Enjoy your false sense of freedom while the silent treatment charges up.'
      }
    ];
  }

  if (mode === 'relationship') {
    return [
      {
        flavor: 'cinema',
        headline: '❤️ തേപ്പും കണ്ണീരും ഹൈ-വോൾട്ടേജ്',
        ml: 'മലയാളം മെഗാ സീരിയലിനെ വെല്ലുന്ന നിശബ്ദ യുദ്ധം! മുഖം വീർപ്പിച്ചു ഇരുന്നു മൂന്നാം ലോകമഹായുദ്ധം പ്രഖ്യാപിച്ചു!',
        mg: 'Mega serial pole silent war! World War 3 thudangi!',
        en: 'Nuclear emotional fallout masked behind frozen silence and weaponized death glares.',
        scared: '2022-ൽ ഞാൻ അയച്ച മെസ്സേജിന്റെ സ്ക്രീൻഷോട്ട് ഇപ്പോൾ എടുത്ത് കാട്ടുമോ എന്ന് പേടിയാണ്!',
        scaredMg: 'Pazhaya screenshot eduthu kaattumo ennu pediyundu!',
        burn: 'Your relationship status should be listed as ‘Mutual Sabotage’.'
      },
      {
        flavor: 'brutal',
        headline: '💀 ‘ഇറ്റ്സ് ഫൈൻ’ എന്ന ആണവ ബോംബ്',
        ml: 'ഒരു തേങ്ങയും ഫൈൻ അല്ല! നിന്റെ കുറ്റപത്രം മനസ്സിൽ തയ്യാറാക്കി കഴിഞ്ഞു, ഇനി ഓരോന്നായി അനുഭവിക്കാം!',
        mg: 'Oru thengayum fine alla! Kuttapathram ready aayi, ini anubhavikkam!',
        en: 'Zero things are fine. The chargesheet is drafted and court is in session.',
        scared: 'എനിക്ക് വിശപ്പില്ലെന്ന് പറഞ്ഞിട്ട് ഞാൻ നിന്റെ ഫ്രൈസ് മൊത്തം കട്ടുതിന്നും!',
        scaredMg: 'Ninte fries full njan thinnu theerkkum!',
        burn: 'You communicate through passive-aggressive sighing rather than words.'
      },
      {
        flavor: 'absurd',
        headline: '🚀 ടെലിപതിക് പ്രതീക്ഷകൾ',
        ml: 'എന്റെ മനസ്സ് സ്വയം വായിച്ചെടുക്കാൻ കഴിവില്ലാത്ത നിന്നെയാണോ ഞാൻ ഇത്രയും കാലം സ്നേഹിച്ചത് എന്ന ഭാവം!',
        mg: 'Manassu telepathy aayi ariyaan pattille!',
        en: 'Expecting telepathic emotional reading without speaking a single syllable.',
        scared: 'എനിക്ക് എന്താണ് ദേഷ്യമെന്ന് എനിക്ക് തന്നെ ഓർമ്മയില്ല!',
        scaredMg: 'Enthinaanu deshyam ennu enikku thanne ariyilla!',
        burn: 'Your drama quotient is higher than an Indian soap opera marathon.'
      },
      {
        flavor: 'passive',
        headline: '🐍 ഫ്രണ്ട്സിനോടൊപ്പം പൊയ്ക്കോളൂ',
        ml: 'അയ്യോ നീ പോയി കൂട്ടുകാരുടെ കൂടെ അടിച്ചുപൊളിച്ചോളൂ! ഞാൻ ഇവിടെ കിടന്നു വിഷമിച്ചോളാം, കുഴപ്പമില്ല!',
        mg: 'Nee poyi enjoy cheytho! Njan ivide kidannu karanjolam!',
        en: 'Go enjoy yourself with your friends! I will just sit here and dissolve into sorrow.',
        scared: 'നീ പോയാൽ ഞാൻ ഒരു മണിക്കൂറിൽ 40 മിസ്ഡ് കോൾ അയച്ചു ശല്യം ചെയ്യും!',
        scaredMg: '40 missed call ayachu shalyam cheyyum!',
        burn: 'Guilt tripping you is an Olympic sport and they are taking the gold medal.'
      }
    ];
  }

  if (mode === 'friend') {
    return [
      {
        flavor: 'cinema',
        headline: '🧑‍🤝‍🧑 അളിയന്റെ കൊടും ചതി',
        ml: 'സൗഹൃദത്തിന്റെ പേരിൽ ബിരിയാണിയും തിന്നു, ബില്ല് വന്നപ്പോൾ ടോയ്‌ലറ്റിൽ പോയി ഒളിച്ചിരിക്കുന്ന മാസ്റ്റർമൈൻഡ്!',
        mg: 'Biriyani thinnu bill vannappol toiletil oliche irikkunnu!',
        en: 'Vanished into the restroom the millisecond the restaurant bill arrived.',
        scared: 'എന്റെ കയ്യിൽ ചില്ലിക്കാശില്ല, നീ തന്നെ ബില്ല് കൊടുക്കണം അളിയാ!',
        scaredMg: 'Ente kayyil cash illa, nee bill kodukkada!',
        burn: 'You treat your friends like an interest-free personal catering service.'
      },
      {
        flavor: 'brutal',
        headline: '💀 ‘ഒരു മിനിറ്റ്’ എന്ന മഹാ നുണ',
        ml: 'ദാ എത്തി ഒരു മിനിറ്റ് എന്ന് പറഞ്ഞവൻ ഇപ്പോൾ കട്ടിലിൽ പുതപ്പും പുതച്ചു റീൽസ് കണ്ട് ചിരിക്കുകയാണ്!',
        mg: '"One minute" paranjavan kattilil puthappu ittu reels kaanunnu!',
        en: 'Said "1 minute away" while completely horizontal in bed without trousers.',
        scared: 'ഞാൻ ഇതുവരെ കുളിച്ചിട്ടില്ല, ഷൂസ് എവിടെയാണെന്ന് പോലും അറിയില്ല!',
        scaredMg: 'Kulichittilla, shoes kandittilla!',
        burn: 'Your arrival estimates are as reliable as astrologer predictions.'
      },
      {
        flavor: 'absurd',
        headline: '🚀 കടം വാങ്ങിയ 500 രൂപയുടെ മോക്ഷം',
        ml: 'ആറു മാസം മുൻപ് വാങ്ങിയ 500 രൂപ തിരിച്ചു ചോദിച്ചപ്പോൾ സൗഹൃദത്തിന്റെ വിലയെപ്പറ്റി പ്രസംഗിക്കുന്നു!',
        mg: '500 roopa thirichu chodichappol sauhridathe patti lecture tharunnu!',
        en: 'Turns into a philosophical guru when asked to return borrowed money.',
        scared: 'ആ കാശ് ഞാൻ അപ്പോൾ തന്നെ ബിരിയാണി വാങ്ങി തിന്നു തീർത്തു!',
        scaredMg: 'Aa cash njan appozhe thinnu theerthu!',
        burn: 'Your credit limit among your peers is firmly at negative ₹500.'
      },
      {
        flavor: 'passive',
        headline: '🐍 ഒരു കടി തരുമോ തന്ത്രം',
        ml: 'ഒരു കടി ചോദിച്ചു എന്റെ പ്ലേറ്റിലെ ഏറ്റവും നല്ല പീസ് കടിച്ചെടുത്ത നിനക്ക് ദൈവം മാപ്പ് തരില്ല!',
        mg: 'Oru kadi chodichu plate-ile nalla piece thattiyeduthu!',
        en: 'Asked for a bite, inhaled half the plate by volume.',
        scared: 'ബാക്കി കൂടെ എനിക്ക് തരുമോ എന്ന് ചോദിക്കാൻ എനിക്ക് മടിയാണ്!',
        scaredMg: 'Bakki koode tharumo ennu chodikkaan naanam illa!',
        burn: 'A parasite disguised in a trendy oversized t-shirt.'
      }
    ];
  }

  // Default: College Mode 4-flavors
  return [
    {
      flavor: 'cinema',
      headline: '🎓 ദശമൂലം ദാമു അക്കാദമിക്സ്',
      ml: 'ദശമൂലം ദാമുവിനെപ്പോലെ കട്ട തല്ല് കിട്ടാൻ പോകുന്ന അക്കാദമിക് കാര്യമാണ് നീ ഇപ്പോൾ വളരെ കൂളായി തള്ളി മറിച്ചത്!',
      mg: 'Dhashamoolam Damu pole katta thallu kittaan ulla karyamaanu nee thalliyathu!',
      en: 'You just spoke with the audacious confidence of Dhashamoolam Damu right before he gets beaten up.',
      scared: 'ഞാൻ വെറുതെ വാചകമടിക്കുകയാണ്, നാളെ പരീക്ഷയ്ക്ക് ദൈവത്തെ വിളിച്ചു കരയും!',
      scaredMg: 'Njan veruthe thalliyatha, exam hallil karayum!',
      burn: 'Audacity level: 100%. Exam preparation: 0%.'
    },
    {
      flavor: 'brutal',
      headline: '💀 സപ്ലി ഉറപ്പായ ജീവിതം',
      ml: 'സിലബസ്സിന്റെ കളർ എന്താണെന്ന് പോലും അറിയില്ല, രാത്രി ഉറക്കമൊഴിച്ചു റീൽസ് കണ്ടു സമയം കൊല്ലുകയാണ്!',
      mg: 'Syllabusinte color polum ariyilla, reels kandu samayam kollunnu!',
      en: 'Clueless about the syllabus, actively cultivating backlogs for graduation.',
      scared: 'ആരെങ്കിലും ക്ലാസ്സിൽ എന്താണ് പഠിപ്പിച്ചതെന്ന് ചോദിച്ചാൽ ഞാൻ പെട്ടു!',
      scaredMg: 'Aarenkilum chodichaal njan theernnu!',
      burn: 'Your academic degree is sponsored by pure luck and divine mercy.'
    },
    {
      flavor: 'absurd',
      headline: '🚀 ഐൻസ്റ്റീൻ തിരിഞ്ഞു നോക്കിയ തിയറി',
      ml: 'പരീക്ഷയ്ക്ക് 10 മിനിറ്റ് മുൻപ് നോട്ട്സ് നോക്കി ഗോൾഡ് മെഡൽ വാങ്ങാൻ നോക്കുന്ന ലോകോത്തര വിഡ്ഢിത്തം!',
      mg: '10 minute munpu notes nokki gold medal vaangaan nokkunnu!',
      en: 'Hoping to absorb 6 months of quantum mechanics through osmosis in 4 minutes.',
      scared: 'ക്വസ്റ്റ്യൻ പേപ്പർ കണ്ട് ഞാൻ തലകറങ്ങി വീഴാൻ പ്ലാൻ ചെയ്യുകയാണ്!',
      scaredMg: 'Question paper kandaal veezhum!',
      burn: 'Your brain cells took an unapproved leave of absence.'
    },
    {
      flavor: 'passive',
      headline: '🐍 അടുത്ത സെമസ്റ്ററിലും സ്വാഗതം',
      ml: 'എന്തൊരു ആത്മവിശ്വാസം! അടുത്ത സെമസ്റ്ററിലും ഇതേ ക്ലാസ്സിൽ ഇരിക്കാൻ കൊതി തോന്നുന്നതിൽ അത്ഭുതമില്ല!',
      mg: 'Adutha semesterilum ithe classil irikkan nalla rasamaayirikkum!',
      en: 'Such immense optimism. Truly deserving of a repeat enrollment.',
      scared: 'നോട്ട്സ് എനിക്ക് അയച്ചു തരൂ, പരീക്ഷ നീ തന്നെ എഴുതിക്കോ!',
      scaredMg: 'Notes ayachu tharoo!',
      burn: 'A masterpiece of academic deceit wrapped in a friendly smile.'
    }
  ];
}

let lastQueryText = '';
let repeatCount = 0;

export function translateSentence(text, { mode = 'college', isBrutal = true, trollLevel = 50, spiceLevel = 'savage', flavorIndex = 0 } = {}) {
  // If no text, use the first preset of the currently selected mode!
  if (!text || !text.trim()) {
    const modePresets = MODE_PRESETS[mode] || MODE_PRESETS.college;
    text = modePresets[0]?.input || "I'll study after dinner.";
  }

  const clean = text.trim();
  const lowerClean = clean.toLowerCase();

  // Track if user is asking the exact same question repeatedly!
  if (lowerClean === lastQueryText && flavorIndex === 0) {
    repeatCount++;
  } else if (flavorIndex === 0) {
    lastQueryText = lowerClean;
    repeatCount = 0;
  }

  const presets = MODE_PRESETS[mode] || [];
  
  // Look for match in active mode presets (strict normalized match so custom typed questions aren't hijacked)
  const found = presets.find(p => p.input.toLowerCase().trim() === clean.toLowerCase());
  const randomQuip = AI_QUIPS_MALAYALAM[Math.floor(Math.random() * AI_QUIPS_MALAYALAM.length)];

  // Generate dynamic multi-humor flavors and fetch authentic Kerala comedy dataset with repeat-awareness
  const allFlavors = buildRoastFlavors(clean, mode);
  const activeFlavor = allFlavors[flavorIndex % allFlavors.length];
  const standupRoutineEngine = generateStandupRoutine(clean, mode);
  const authenticThought = findAuthenticComedyThought(clean, mode, repeatCount);
  const characterReactions = getCharacterReactions(mode, clean, repeatCount);

  // Use authentic human comedy thoughts from dataset
  let mlScript, manglish, english, scaredMl, scaredMg, oneLinerBurn, standupRoutine;

  if (flavorIndex === 0) {
    if (found) {
      if (repeatCount === 0) {
        mlScript = found.mlScript;
        manglish = found.manglish;
        english = found.english;
        scaredMl = found.scaredMl;
        scaredMg = found.scaredManglish;
      } else if (found.worse && found.worse.length > 0 && repeatCount <= found.worse.length) {
        const worseIdx = (repeatCount - 1) % found.worse.length;
        mlScript = found.worse[worseIdx];
        manglish = found.manglish;
        english = found.english;
        scaredMl = found.scaredMl;
        scaredMg = found.scaredManglish;
      } else {
        mlScript = authenticThought.actual_meaning_ml;
        manglish = authenticThought.actual_meaning_mg;
        english = authenticThought.english_meaning;
        scaredMl = authenticThought.scared_ml;
        scaredMg = authenticThought.scared_mg;
      }
      oneLinerBurn = authenticThought.one_liner || activeFlavor.burn;
      standupRoutine = authenticThought.standup || standupRoutineEngine;
    } else {
      // Natural authentic Kerala comedy thought!
      mlScript = authenticThought.actual_meaning_ml;
      manglish = authenticThought.actual_meaning_mg;
      english = authenticThought.english_meaning;
      scaredMl = authenticThought.scared_ml;
      scaredMg = authenticThought.scared_mg;
      oneLinerBurn = authenticThought.one_liner;
      standupRoutine = authenticThought.standup || standupRoutineEngine;
    }
  } else {
    mlScript = activeFlavor.ml;
    manglish = activeFlavor.mg;
    english = activeFlavor.en;
    scaredMl = activeFlavor.scared;
    scaredMg = activeFlavor.scaredMg || activeFlavor.scared;
    oneLinerBurn = activeFlavor.burn;
    standupRoutine = authenticThought.standup || standupRoutineEngine;
  }

  const headline = activeFlavor.headline || "🔥 കട്ട തഗ്ഗ് റോസ്റ്റ്";

  const stats = found ? found.stats : {
    honesty: isBrutal ? 3 : 15,
    arrival: "Next generation",
    distraction: 98,
    excuse: 99,
    confidence: 100
  };

  const emotions = found ? found.emotions : {
    politeness: isBrutal ? 10 : 60,
    annoyance: 95,
    panic: 88,
    laziness: 99,
    passive_aggression: 100,
    hidden_meaning: 175
  };

  return {
    literal_translation: `“${clean}”`,
    headline: headline,
    malayalam_script: mlScript,
    malayalam_manglish: manglish,
    actual_meaning: `“${mlScript}”`,
    english_meaning: english,
    one_liner_burn: oneLinerBurn,
    standup: standupRoutine,
    scared_malayalam: scaredMl,
    scared_manglish: scaredMg,
    hidden_intention: `“${scaredMl}”`,
    what_they_should_have_said: `“${mlScript}”`,
    honesty_score: isBrutal ? stats.honesty : stats.honesty + 8,
    drama_score: isBrutal ? 99 : 65,
    procrastination_score: stats.distraction || 96,
    friendship_damage: isBrutal ? 92 : 35,
    one_liner: oneLinerBurn,
    stats: stats,
    emotions: emotions,
    all_flavors: allFlavors,
    current_flavor_index: flavorIndex,
    worse_levels: [
      mlScript,
      "ദശമൂലം ദാമുവിനെപ്പോലെ തലയിൽ മുണ്ടിട്ടു നാട്ടിൽ നിന്ന് ഓടാൻ ഞാൻ തയ്യാറാണ്!",
      "എന്റെ സി.ജി.പി.എ ഇപ്പോൾ മൈനസ് 40 ആണ്, വീട്ടുകാർ എന്നെ തെരുവിൽ ലേലം വിളിക്കാൻ നോക്കുന്നു!",
      "പവനായി ശവമായി! പ്രിൻസിപ്പൽ എന്നെ കാണുമ്പോൾ പോലീസ് സൈറൺ മുഴക്കുന്നു!",
      "മഹാദുരന്തം! നാസ പോലും എന്റെ ജീവിതാവസ്ഥ കണ്ട് ഇൻസ്റ്റാഗ്രാമിൽ റീൽസ് ഉണ്ടാക്കുന്നു!"
    ],
    troll: {
      translation: mlScript,
      intention: scaredMl,
      response: trollLevel > 75 
        ? "“പോടാ പുല്ലേ, നീ ഇതിലും വലിയ കള്ളങ്ങൾ പറഞ്ഞിട്ടുണ്ടല്ലോ!”"
        : "“എനിക്ക് ഒരു പൊറോട്ടയും ബീഫും വാങ്ങി തന്നാൽ ഞാൻ വിശ്വസിക്കാം!”"
    },
    quip: randomQuip,
    character_reactions: characterReactions,
    authentic_thought: authenticThought
  };
}

export function judgeBattle(sentenceA, transA, sentenceB, transB) {
  const verdictIndex = Math.floor(Math.random() * BATTLE_VERDICTS_MALAYALAM.length);
  const baseVerdict = BATTLE_VERDICTS_MALAYALAM[verdictIndex];

  return {
    winner: baseVerdict.winner,
    subtext: baseVerdict.subtext,
    manglish: baseVerdict.manglish,
    scoreA: Math.floor(Math.random() * 20) + 80,
    scoreB: Math.floor(Math.random() * 20) + 80,
    delusionIndex: "100% UNWARRANTED AUDACITY"
  };
}
