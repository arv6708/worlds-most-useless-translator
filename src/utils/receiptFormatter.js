// Receipt formatting and printing helpers with Malayalam support

export function formatReceiptText(data, modeName) {
  const date = new Date().toLocaleString();
  const id = 'USLS-' + Math.floor(100000 + Math.random() * 900000);

  return `
========================================
    WORLD'S MOST USELESS TRANSLATOR™
   "We Translate What You REALLY Meant"
   [ ENGLISH ➔ MALAYALAM EDITION ]
========================================
TERM: #KL-BOT-9000   TXN: ${id}
TIME: ${date}
MODE: ${modeName.toUpperCase()}
----------------------------------------
ORIGINAL ENGLISH STATEMENT:
${data.literal_translation || '""'}

MALAYALAM MEANING (മലയാളം):
${data.malayalam_script || data.actual_meaning || '""'}

MANGLISH PHONETIC:
"${data.malayalam_manglish || ''}"

WHAT YOU WERE SCARED TO SAY (ഭയം):
${data.scared_malayalam || data.hidden_intention || '""'}
----------------------------------------
NEURAL STATISTICAL AUDIT:
HONESTY DETECTED:        ${data.honesty_score || 4}%
PROCRASTINATION INDEX:   ${data.procrastination_score || 94}%
DRAMA GENERATED:         ${data.drama_score || 88}%
FRIENDSHIP DAMAGE:       ${data.friendship_damage || 35}%
DELUSION CONFIDENCE:     100% UNWARRANTED
----------------------------------------
KERALA BOT VERDICT:
${data.quip || "സീൻ ആണ് മച്ചാനെ... സൗഹൃദം ഇപ്പോൾ ICU-വിൽ ആണ്!"}
----------------------------------------
      ||| | ||||| || |||||| |||||
            ${id}
----------------------------------------
     THANK YOU FOR WASTING LANGUAGE™
        NO REFUNDS FOR DAMAGED EGOS
========================================
`.trim();
}
