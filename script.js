
// Los 7 temas que pidió la profesora. Cada uno tiene su propio banco de
// ejercicios (fill / writing / pronunciation) en 3 niveles de dificultad.
const TOPICS = [
  {id:"passive",          label:"Passive Voice",     blurb:"algo le pasa al sujeto: is made, was built..."},
  {id:"first_conditional",label:"First Conditional", blurb:"if + presente, will + verbo base"},
  {id:"going_to",         label:"Going to",          blurb:"planes ya decididos y predicciones con evidencia"},
  {id:"will",             label:"Will",              blurb:"decisiones espontáneas, promesas, predicciones"},
  {id:"would",            label:"Would",             blurb:"cortesía, hipótesis, costumbres del pasado"},
  {id:"modal_verbs",      label:"Modal Verbs",       blurb:"can, must, should, might, have to..."},
  {id:"pronunciation",    label:"Pronunciación",     blurb:"sonidos, conexión y acento británico"}
];
const topicLabel = {};
TOPICS.forEach(t => topicLabel[t.id] = t.label);

const fillBank = {
  passive: {
    beginner: [
      {s:["The windows","___","every week."], a:["are cleaned"], hint:"voz pasiva, presente simple del verbo 'clean'"},
      {s:["This cake","___","by my mother."], a:["was made"], hint:"voz pasiva, pasado simple del verbo 'make'"},
      {s:["The letters","___","every morning."], a:["are delivered"], hint:"voz pasiva, presente simple del verbo 'deliver'"}
    ],
    intermediate: [
      {s:["The report","___","by tomorrow."], a:["must be finished"], hint:"voz pasiva con el modal 'must'"},
      {s:["The package","___","yet."], a:["hasn't been delivered"], hint:"voz pasiva, presente perfecto negativo"},
      {s:["New employees","___","before they start."], a:["are trained"], hint:"voz pasiva, presente simple del verbo 'train'"}
    ],
    advanced: [
      {s:["It is believed","___","the company will expand next year."], a:["that"], hint:"voz pasiva de opinión: 'it is believed that...'"},
      {s:["She had her car","___","last week."], a:["repaired"], hint:"causativo: 'have something done'"},
      {s:["The suspect is said","___","the country."], a:["to have left"], hint:"voz pasiva con infinitivo perfecto"}
    ]
  },
  first_conditional: {
    beginner: [
      {s:["If it rains, I","___","an umbrella."], a:["will take"], hint:"primer condicional: if + presente, will + base"},
      {s:["If you study, you","___","the exam."], a:["will pass"], hint:"primer condicional"},
      {s:["She will call you if she","___","time."], a:["has"], hint:"la cláusula con 'if' va en presente"}
    ],
    intermediate: [
      {s:["If I","___","enough money, I will buy a new phone."], a:["save"], hint:"cláusula con 'if' en presente simple"},
      {s:["Unless you leave now, you","___","late."], a:["will be"], hint:"'unless' equivale a 'if not'"},
      {s:["If she finishes early, she","___","us."], a:["will join"], hint:"primer condicional"}
    ],
    advanced: [
      {s:["Provided that the flight isn't delayed, we","___","by 6pm."], a:["will arrive"], hint:"forma formal: 'provided that'"},
      {s:["Should you need any help, I","___","happy to assist."], a:["will be"], hint:"inversión formal: 'should you...'"},
      {s:["If the negotiations fail, the company","___","serious losses."], a:["will suffer"], hint:"primer condicional en contexto formal"}
    ]
  },
  going_to: {
    beginner: [
      {s:["I","___","visit my grandmother this weekend."], a:["am going to"], hint:"going to: plan ya decidido"},
      {s:["Look at those clouds! It","___","rain."], a:["is going to"], hint:"going to: predicción con evidencia"},
      {s:["They","___","move to a new house next month."], a:["are going to"], hint:"going to: plan futuro"}
    ],
    intermediate: [
      {s:["She","___","start a new job next Monday."], a:["is going to"], hint:"going to: plan decidido con anterioridad"},
      {s:["Based on the schedule, the train","___","late."], a:["is going to be"], hint:"going to: predicción basada en evidencia"},
      {s:["We","___","redecorate the living room this summer."], a:["are going to"], hint:"going to: plan futuro"}
    ],
    advanced: [
      {s:["Given the current trends, unemployment","___","rise sharply."], a:["is going to"], hint:"going to: predicción basada en datos"},
      {s:["The board announced that the company","___","expand overseas."], a:["is going to"], hint:"going to reportado en contexto de negocios"},
      {s:["If nothing changes, the project","___","fail."], a:["is going to"], hint:"going to: predicción con evidencia clara"}
    ]
  },
  will: {
    beginner: [
      {s:["I think it","___","be sunny tomorrow."], a:["will"], hint:"will: predicción sin evidencia concreta"},
      {s:["Don't worry, I","___","help you."], a:["will"], hint:"will: decisión espontánea"},
      {s:["She","___","be 20 years old next year."], a:["will"], hint:"will: hecho futuro"}
    ],
    intermediate: [
      {s:["I'm thirsty. I","___","get some water."], a:["will"], hint:"will: decisión tomada en el momento de hablar"},
      {s:["Experts believe the economy","___","recover next year."], a:["will"], hint:"will: predicción basada en opinión"},
      {s:["I promise I","___","call you as soon as I arrive."], a:["will"], hint:"will: promesa"}
    ],
    advanced: [
      {s:["By 2030, most cars","___","be electric."], a:["will"], hint:"will: predicción a largo plazo"},
      {s:["The results","___","be announced at the end of the ceremony."], a:["will"], hint:"will pasivo: anuncio formal futuro"},
      {s:["I","___","have finished the report by the time you arrive."], a:["will"], hint:"futuro perfecto con will"}
    ]
  },
  would: {
    beginner: [
      {s:["___","you like some tea?"], a:["Would"], hint:"would: ofrecimiento cortés"},
      {s:["I","___","like to order a pizza, please."], a:["would"], hint:"would like: pedido cortés"},
      {s:["When I was a kid, I","___","play outside every day."], a:["would"], hint:"would: costumbre en el pasado"}
    ],
    intermediate: [
      {s:["If I had more free time, I","___","learn to paint."], a:["would"], hint:"segundo condicional con would"},
      {s:["She said she","___","be late."], a:["would"], hint:"would: estilo indirecto de 'will'"},
      {s:["___","you mind opening the window?"], a:["Would"], hint:"would mind: pedido cortés"}
    ],
    advanced: [
      {s:["If I had known about the traffic, I","___","left earlier."], a:["would have"], hint:"tercer condicional con would have"},
      {s:["I would rather you","___","tell anyone about this."], a:["didn't"], hint:"would rather + pasado simple"},
      {s:["He acted as if he","___","everything."], a:["would"], hint:"would en discurso hipotético formal"}
    ]
  },
  modal_verbs: {
    beginner: [
      {s:["You","___","wear a seatbelt in the car."], a:["must"], hint:"obligación con 'must'"},
      {s:["___","I open the window?"], a:["Can"], hint:"pedir permiso con 'can'"},
      {s:["She","___","speak three languages."], a:["can"], hint:"habilidad con 'can'"}
    ],
    intermediate: [
      {s:["You","___","see a doctor if the pain continues."], a:["should"], hint:"consejo con 'should'"},
      {s:["He","___","be at home, his car isn't outside."], a:["might not"], hint:"posibilidad con 'might not'"},
      {s:["Students","___","bring their own laptops; the school provides them."], a:["don't have to"], hint:"ausencia de obligación: 'don't have to'"}
    ],
    advanced: [
      {s:["You","___","have told me earlier; now it's too late."], a:["should have"], hint:"crítica al pasado con 'should have'"},
      {s:["She","___","have missed the email, she checks it constantly."], a:["can't"], hint:"deducción negativa con 'can't have'"},
      {s:["Given the evidence, he","___","have been involved."], a:["must"], hint:"deducción con 'must have'"}
    ]
  }
};

const writingBank = {
  passive: {
    beginner: [
      {word:"was built", hint:"Describí un edificio o lugar famoso usando voz pasiva en pasado."},
      {word:"is spoken", hint:"Contá qué idioma se habla en un país, usando voz pasiva."}
    ],
    intermediate: [
      {word:"should be recycled", hint:"Opiná sobre qué materiales deberían reciclarse, usando voz pasiva."},
      {word:"has been cancelled", hint:"Contá que un evento fue cancelado, usando voz pasiva en presente perfecto."}
    ],
    advanced: [
      {word:"is said to be", hint:"Escribí un rumor o creencia general usando voz pasiva con 'is said to be'."},
      {word:"had it delivered", hint:"Contá que mandaste hacer algo (causativo) usando voz pasiva."}
    ]
  },
  first_conditional: {
    beginner: [
      {word:"if...will", hint:"Escribí un plan futuro con condición, usando if + will."},
      {word:"unless", hint:"Escribí una condición usando 'unless' (a menos que)."}
    ],
    intermediate: [
      {word:"as long as", hint:"Escribí una condición para un plan usando 'as long as'."},
      {word:"in case", hint:"Escribí una oración de precaución usando 'in case'."}
    ],
    advanced: [
      {word:"provided that", hint:"Escribí una condición formal usando 'provided that'."},
      {word:"should you", hint:"Escribí una condición formal invirtiendo el orden con 'should you...'."}
    ]
  },
  going_to: {
    beginner: [
      {word:"going to", hint:"Contá un plan que ya tenés decidido para el próximo fin de semana."},
      {word:"not going to", hint:"Contá algo que decidiste NO hacer, usando 'going to'."}
    ],
    intermediate: [
      {word:"going to", hint:"Describí un plan concreto que tenés para este año."},
      {word:"about to", hint:"Contá algo que está a punto de pasar, usando 'about to'."}
    ],
    advanced: [
      {word:"is going to", hint:"Escribí una predicción formal sobre una tendencia económica o social."},
      {word:"were going to", hint:"Contá un plan pasado que finalmente no se cumplió, usando 'were going to'."}
    ]
  },
  will: {
    beginner: [
      {word:"will", hint:"Hacé una predicción sobre el clima de mañana."},
      {word:"won't", hint:"Escribí algo que no vas a hacer, usando 'won't'."}
    ],
    intermediate: [
      {word:"will probably", hint:"Escribí una predicción sobre tu futuro usando 'will probably'."},
      {word:"I promise", hint:"Escribí una promesa usando 'will'."}
    ],
    advanced: [
      {word:"will have", hint:"Escribí sobre algo que vas a haber terminado para una fecha futura (futuro perfecto)."},
      {word:"will be announced", hint:"Escribí un anuncio formal usando voz pasiva futura con 'will'."}
    ]
  },
  would: {
    beginner: [
      {word:"would like", hint:"Escribí un pedido cortés usando 'would like'."},
      {word:"would always", hint:"Contá algo que hacías siempre de chico/a, usando 'would'."}
    ],
    intermediate: [
      {word:"if...would", hint:"Escribí una situación hipotética con el segundo condicional (if + would)."},
      {word:"would mind", hint:"Escribí un pedido cortés usando 'would mind'."}
    ],
    advanced: [
      {word:"would have", hint:"Escribí una situación hipotética del pasado con el tercer condicional."},
      {word:"would rather", hint:"Escribí una preferencia formal usando 'would rather'."}
    ]
  },
  modal_verbs: {
    beginner: [
      {word:"must", hint:"Escribí una regla obligatoria usando 'must'."},
      {word:"can", hint:"Contá algo que sabés hacer, usando 'can'."}
    ],
    intermediate: [
      {word:"should", hint:"Dale un consejo a alguien usando 'should'."},
      {word:"might", hint:"Escribí una posibilidad sobre tus planes usando 'might'."}
    ],
    advanced: [
      {word:"should have", hint:"Escribí un arrepentimiento sobre algo del pasado usando 'should have'."},
      {word:"must have", hint:"Escribí una deducción lógica sobre algo que pasó, usando 'must have'."}
    ]
  }
};

const pronunciationBank = {
  passive: {
    beginner: ["The house was built in 1990.", "English is spoken all around the world."],
    intermediate: ["The meeting has been postponed until Friday.", "All the tickets have already been sold."],
    advanced: ["It is believed that the ancient ruins were built by an unknown civilisation.", "She had her house painted last summer."]
  },
  first_conditional: {
    beginner: ["If it rains tomorrow, we will stay at home.", "If you don't hurry, you'll miss the bus."],
    intermediate: ["As long as you finish your homework, you can go out.", "I'll bring an umbrella in case it rains."],
    advanced: ["Provided that the weather improves, the match will go ahead.", "Should you have any questions, please don't hesitate to ask."]
  },
  going_to: {
    beginner: ["I'm going to visit my grandmother this weekend.", "Look at those clouds, it's going to rain."],
    intermediate: ["She's going to start a new job next Monday.", "Based on those clouds, it's definitely going to rain."],
    advanced: ["Given current trends, unemployment is going to rise sharply.", "We were going to travel abroad, but we changed our plans."]
  },
  will: {
    beginner: ["I think it will be sunny tomorrow.", "Don't worry, I'll help you with that."],
    intermediate: ["Experts believe the economy will recover next year.", "I promise I will call you as soon as I arrive."],
    advanced: ["By 2030, most cars will be electric.", "I will have finished the report by the time you arrive."]
  },
  would: {
    beginner: ["Would you like some tea?", "I would like to order a pizza, please."],
    intermediate: ["If I had more free time, I would learn to paint.", "Would you mind opening the window, please?"],
    advanced: ["If I had known about the traffic, I would have left earlier.", "I would rather you didn't tell anyone about this."]
  },
  modal_verbs: {
    beginner: ["You must wear a seatbelt in the car.", "She can speak three languages."],
    intermediate: ["You should see a doctor if the pain continues.", "Students don't have to bring their own laptops."],
    advanced: ["You should have told me earlier; now it's too late.", "Given the evidence, he must have been involved."]
  },
  pronunciation: {
    beginner: [
      "Think of three things that are truly thrilling.",
      "The weather in Britain is often wet and windy.",
      "I watched a film and washed the dishes.",
      "Can you pass the salt, please?"
    ],
    intermediate: [
      "I'd like an apple and an orange, please.",
      "What are you going to do this weekend?",
      "He should have called us earlier.",
      "There's a lot of traffic on the motorway today."
    ],
    advanced: [
      "The economist analysed the photograph carefully.",
      "I object to the object left on the table.",
      "Could you possibly repeat that, please?",
      "She's a really thorough and thoughtful researcher."
    ]
  }
};

const topicTypes = {
  passive: ["fill","writing","pronunciation"],
  first_conditional: ["fill","writing","pronunciation"],
  going_to: ["fill","writing","pronunciation"],
  will: ["fill","writing","pronunciation"],
  would: ["fill","writing","pronunciation"],
  modal_verbs: ["fill","writing","pronunciation"],
  pronunciation: ["pronunciation"]
};
const typeWeight = {fill:4, writing:3, pronunciation:3};
const GOAL_ROUNDS = 10;
const levels = ["beginner","intermediate","advanced"];
const levelLabel = {beginner:"Beginner", intermediate:"Intermediate", advanced:"Advanced"};

const topicIcons = {
  passive: '<path d="M12 3 L19 6.5 V11 C19 16 15.5 19.5 12 21 C8.5 19.5 5 16 5 11 V6.5 Z" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12 l2 2 l4 -4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  first_conditional: '<circle cx="6" cy="5" r="2" stroke-width="1.6"/><circle cx="18" cy="19" r="2" stroke-width="1.6"/><path d="M6 7 v5 a4 4 0 0 0 4 4 h4 a4 4 0 0 1 4 4" stroke-width="1.6" stroke-linecap="round"/>',
  going_to: '<circle cx="12" cy="12" r="8" stroke-width="1.6"/><path d="M12 12 L16.2 7.8 L14 12 L16.2 16.2 Z" stroke-width="1.3" stroke-linejoin="round"/>',
  will: '<circle cx="12" cy="11" r="7" stroke-width="1.6"/><path d="M9 9.5 q3 -3 6 0" stroke-width="1.3" stroke-linecap="round"/><path d="M6.5 20 h11" stroke-width="1.6" stroke-linecap="round"/>',
  would: '<path d="M4 5.5 h16 v10 h-8.5 l-4 4 v-4 H4 Z" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 10.5 h8 M8 13.2 h5" stroke-width="1.3" stroke-linecap="round"/>',
  modal_verbs: '<circle cx="8.5" cy="8.5" r="4" stroke-width="1.6"/><path d="M11.5 11.5 L20 20 M15.5 16 l2.6 -2.6 M12.7 13.2 l2.6 -2.6" stroke-width="1.6" stroke-linecap="round"/>',
  pronunciation: '<path d="M4 12.5 v-1 M7.5 15 v-6 M11 18 v-12 M14.5 15 v-6 M18 12.5 v-1" stroke-width="1.8" stroke-linecap="round"/>'
};

function shuffleArr(arr){ return arr.sort(()=>Math.random()-0.5); }
function buildRoundPattern(topic){
  const types = topicTypes[topic] || topicTypes.passive;
  let bag = [];
  if(types.length === 1){
    bag = new Array(GOAL_ROUNDS).fill(types[0]);
  } else {
    const totalWeight = types.reduce((sum,t)=> sum + typeWeight[t], 0);
    types.forEach(t=>{
      const count = Math.round((typeWeight[t] / totalWeight) * GOAL_ROUNDS);
      for(let i=0;i<count;i++) bag.push(t);
    });
    while(bag.length < GOAL_ROUNDS) bag.push(types[bag.length % types.length]);
    while(bag.length > GOAL_ROUNDS) bag.pop();
    bag = shuffleArr(bag);
    for(let i=2;i<bag.length;i++){
      if(bag[i] === bag[i-1] && bag[i] === bag[i-2]){
        const swapWith = bag.findIndex((t,idx)=> idx>i && t !== bag[i]);
        if(swapWith !== -1){ [bag[i], bag[swapWith]] = [bag[swapWith], bag[i]]; }
      }
    }
  }
  return bag;
}
let currentTopic = "passive";
let currentRoundPattern = buildRoundPattern("passive");

let pools = {};
function refillPool(type, topic, lv){
  const bank = type === "fill" ? fillBank : (type === "writing" ? writingBank : pronunciationBank);
  const len = bank[topic][lv].length;
  pools[type+"_"+topic+"_"+lv] = [...Array(len).keys()].sort(()=>Math.random()-0.5);
}
function refillAllPools(){
  TOPICS.forEach(t => topicTypes[t.id].forEach(type => levels.forEach(l => refillPool(type, t.id, l))));
}
refillAllPools();
function drawItem(type, topic, lv){
  const key = type+"_"+topic+"_"+lv;
  if(!pools[key] || pools[key].length === 0) refillPool(type, topic, lv);
  const idx = pools[key].pop();
  const bank = type === "fill" ? fillBank : (type === "writing" ? writingBank : pronunciationBank);
  return bank[topic][lv][idx];
}

let stats = {correct:0, incorrect:0, streak:0, bestStreak:0, times:[], answered:0};
const skillNames = ["reading","listening","writing","speaking"];
const skillLabel = {reading:"Lectura", listening:"Escucha", writing:"Escritura", speaking:"Habla"};
function freshSkillStats(){
  return {reading:{correct:0,total:0}, listening:{correct:0,total:0}, writing:{correct:0,total:0}, speaking:{correct:0,total:0}};
}
let skillStats = freshSkillStats();
let currentLevel = "beginner";
let selectedStartLevel = null;
let selectedTopic = null;
let sessionCount = 1;
let completedTopics = new Set();
let currentItem = null;
let currentType = null;
let currentSkills = [];
let startTime = 0;
let awaitingNext = false;
let britishVoice = null;

function skillAccuracy(skill){ const s = skillStats[skill]; return s.total ? (s.correct / s.total) : 0.5; }
function renderSkillBars(containerId){
  const container = document.getElementById(containerId);
  if(!container) return;
  const weakest = weakestSkill();
  container.innerHTML = skillNames.map(sk=>{
    const s = skillStats[sk];
    const pct = s.total ? Math.round((s.correct/s.total)*100) : 0;
    const isWeak = s.total > 0 && sk === weakest;
    return '<div class="skill-row' + (isWeak ? " weak" : "") + '">' +
      '<span class="skill-name">' + skillLabel[sk] + '</span>' +
      '<span class="skill-track"><span class="skill-fill" style="width:' + pct + '%"></span></span>' +
      '<span class="skill-pct">' + pct + '%</span></div>';
  }).join("");
}
function weakestSkill(){
  let worst=null, worstAcc=2;
  skillNames.forEach(sk=>{ const s=skillStats[sk]; if(s.total===0) return; const acc=s.correct/s.total; if(acc<worstAcc){worstAcc=acc;worst=sk;} });
  return worst;
}
function strongestSkill(){
  let best=null, bestAcc=-1;
  skillNames.forEach(sk=>{ const s=skillStats[sk]; if(s.total===0) return; const acc=s.correct/s.total; if(acc>bestAcc){bestAcc=acc;best=sk;} });
  return best;
}

// ================================
// RED NEURONAL ADAPTATIVA (Synaptic.js, Node.js)
// ================================
const { Architect, Trainer } = synaptic;
const network = new Architect.Perceptron(5, 8, 1);
const inputLayer = network.layers.input;
const hiddenLayer = network.layers.hidden[0];
const outputLayer = network.layers.output;
const trainer = new Trainer(network);
function seedNetwork(){
  const trainingSet = [
    {input:[1,1,1,1,1], output:[1]}, {input:[0,0,0,0,0], output:[0]},
    {input:[0.5,0.5,0.5,0.5,0.5], output:[0.5]}, {input:[1,1,0.3,0.3,0.8], output:[0.6]},
    {input:[0.3,0.3,1,1,0.4], output:[0.55]}, {input:[0.8,0.2,0.8,0.2,0.9], output:[0.65]},
    {input:[0.2,0.8,0.2,0.8,0.3], output:[0.35]}
  ];
  trainer.train(trainingSet, { rate: 0.3, iterations: 400, error: 0.005, shuffle: true });
}
seedNetwork();
function difficultyToLevel(d){ if(d<0.4) return "beginner"; if(d<0.7) return "intermediate"; return "advanced"; }

// ================================
// VOZ EN INGLES BRITANICO (solo para las oraciones de los ejercicios)
// ================================
function loadVoices(){
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  britishVoice = voices.find(v => v.lang === "en-GB")
    || voices.find(v => v.lang && v.lang.toLowerCase().startsWith("en-gb"))
    || voices.find(v => /uk english|british/i.test(v.name))
    || voices.find(v => /english \(united kingdom\)/i.test(v.name))
    || voices.find(v => /\b(daniel|hazel|arthur|oliver|george|kate)\b/i.test(v.name) && /uk|gb|britain/i.test(v.name + " " + (v.lang||"")))
    || null;
}
if(window.speechSynthesis){ loadVoices(); window.speechSynthesis.onvoiceschanged = loadVoices; }
function speak(text){
  if(!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-GB"; u.rate = 0.92;
  if(britishVoice) u.voice = britishVoice;
  window.speechSynthesis.speak(u);
}

// ================================
// MUSICA DE FONDO SINTETIZADA (Web Audio API, sin archivos externos)
// ================================
let audioCtx = null, musicGain = null, musicOn = false, musicTimer = null;
const scaleNotes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]; // pentatónica en C
function initAudio(){
  if(audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  musicGain = audioCtx.createGain();
  musicGain.gain.value = 0.05;
  musicGain.connect(audioCtx.destination);
}
function playNote(freq, time, dur){
  const osc = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  osc.type = "sine";
  osc.frequency.value = freq;
  g.gain.setValueAtTime(0, time);
  g.gain.linearRampToValueAtTime(0.5, time + 0.04);
  g.gain.exponentialRampToValueAtTime(0.001, time + dur);
  osc.connect(g); g.connect(musicGain);
  osc.start(time); osc.stop(time + dur + 0.05);
}
function scheduleMusicLoop(){
  if(!musicOn) return;
  const now = audioCtx.currentTime;
  for(let i=0;i<8;i++){
    const note = scaleNotes[Math.floor(Math.random()*scaleNotes.length)];
    playNote(note, now + i*0.9, 1.1);
    if(Math.random() > 0.6) playNote(note*2, now + i*0.9 + 0.45, 0.5);
  }
  musicTimer = setTimeout(scheduleMusicLoop, 8*900);
}
function toggleMusic(){
  initAudio();
  if(audioCtx.state === "suspended") audioCtx.resume();
  musicOn = !musicOn;
  document.getElementById("muteBtn").classList.toggle("muted", !musicOn);
  if(musicOn) scheduleMusicLoop();
  else clearTimeout(musicTimer);
}
document.getElementById("muteBtn").addEventListener("click", toggleMusic);

// ================================
// FONDO DINAMICO: rayitos flotando + destellos
// ================================
function buildBackground(){
  const box = document.getElementById("bgSparks");
  const colors = ["#7DE0FF","#F2C14E","#6EE7B7","#ff8fb1"];
  let html = "";
  for(let i=0;i<34;i++){
    const size = 2 + Math.random()*3;
    const left = Math.random()*100;
    const top = 20 + Math.random()*80;
    const dur = 6 + Math.random()*10;
    const delay = Math.random()*10;
    const color = colors[i % colors.length];
    html += '<span class="spark" style="left:'+left+'%; top:'+top+'%; width:'+size+'px; height:'+size+'px; background:'+color+'; animation-duration:'+dur+'s; animation-delay:-'+delay+'s;"></span>';
  }
  for(let i=0;i<5;i++){
    const left = 8 + Math.random()*84;
    const top = 8 + Math.random()*70;
    const dur = 4 + Math.random()*5;
    const delay = Math.random()*6;
    const color = colors[(i+1) % colors.length];
    html += '<span class="bolt" style="left:'+left+'%; top:'+top+'%; width:2px; height:34px; background:linear-gradient(transparent, '+color+', transparent); animation-duration:'+dur+'s; animation-delay:-'+delay+'s;"></span>';
  }
  box.innerHTML = html;
}
buildBackground();

// ================================
// AVATAR: el "cerebro adaptativo" ahora ES el avatar, que crece con la
// dificultad que va calculando la red en vivo (más aciertos -> más grande).
// ================================
function setRobotMood(mood){
  document.querySelectorAll(".mood-eyes").forEach(el=> el.style.display = "none");
  document.querySelectorAll(".mood-mouth").forEach(el=> el.style.display = "none");
  const eyes = document.querySelector(".eyes-"+mood);
  const mouth = document.querySelector(".mouth-"+mood);
  if(eyes) eyes.style.display = "";
  if(mouth) mouth.style.display = "";
}
function setAvatarGrowth(score){
  const scale = (0.8 + score*0.75).toFixed(2);
  document.getElementById("avatarStage").style.setProperty("--grow", scale);
  document.getElementById("growLabel").textContent = "nivel del avatar: " + Math.round(score*100) + "%";
  const color = score < 0.4 ? "#7DE0FF" : (score < 0.7 ? "#F2C14E" : "#F2836B");
  document.getElementById("glowStop1").setAttribute("stop-color", color);
  document.getElementById("glowStop2").setAttribute("stop-color", color);
  document.getElementById("chestBrain").setAttribute("stroke", color);
  document.getElementById("chestGlow").setAttribute("r", 18 + score*14);
}

function celebrateStreak(){
  const clone = document.getElementById("avatarStage").cloneNode(true);
  clone.removeAttribute("id");
  clone.classList.add("flying-clone");
  clone.querySelectorAll("[id]").forEach(elx=> elx.removeAttribute("id"));
  const label = clone.querySelector(".grow-label");
  if(label) label.remove();
  document.body.appendChild(clone);
  requestAnimationFrame(()=> clone.classList.add("go"));
  const colors = ["#7DE0FF","#F2C14E","#6EE7B7","#ff8fb1"];
  for(let i=0;i<16;i++){
    const conf = document.createElement("span");
    conf.className = "confetti-burst";
    conf.style.left = (16 + Math.random()*40) + "px";
    conf.style.bottom = (16 + Math.random()*40) + "px";
    conf.style.background = colors[i % colors.length];
    conf.style.setProperty("--cx", (Math.random()*240 - 120) + "px");
    conf.style.setProperty("--cy", (-Math.random()*200 - 40) + "px");
    conf.style.setProperty("--cr", (Math.random()*360) + "deg");
    document.body.appendChild(conf);
    setTimeout(()=> conf.remove(), 1100);
  }
  setTimeout(()=> clone.remove(), 2000);
}

function setActivePills(types){
  currentSkills = types;
  ["reading","listening","writing","speaking"].forEach(t=>{
    document.getElementById("pill-"+t).classList.toggle("active", types.includes(t));
  });
}
function bumpStat(id, text){
  const elx = document.getElementById(id);
  elx.textContent = text;
  elx.classList.remove("bump"); void elx.offsetWidth; elx.classList.add("bump");
}

const topicDot = {
  passive:"var(--cyan)", first_conditional:"var(--mint)", going_to:"var(--gold)",
  will:"var(--coral)", would:"var(--violet)", modal_verbs:"var(--amber)", pronunciation:"var(--rose)"
};

function updateProgress(){
  document.getElementById("qCount").textContent = "Ronda " + (stats.answered+1) + " / " + GOAL_ROUNDS;
  document.getElementById("progressFill").style.width = ((stats.answered/GOAL_ROUNDS)*100) + "%";
  document.getElementById("drawerTopic").textContent = "Tema: " + topicLabel[currentTopic];
  document.getElementById("drawerSession").textContent = "Sesión " + sessionCount + " · Nivel " + levelLabel[currentLevel];
}

function fullSentence(item){ return item.s[0] + " " + item.a[0] + " " + item.s[2]; }
function normalize(str){ return str.toLowerCase().replace(/[.,!?']/g,"").trim(); }
function similarityScore(target, transcript){
  const targetWords = normalize(target).split(/\s+/).filter(Boolean);
  const heardWords = normalize(transcript).split(/\s+/).filter(Boolean);
  let matched = 0; const heardCopy = [...heardWords];
  targetWords.forEach(w=>{ const idx = heardCopy.indexOf(w); if(idx!==-1){ matched++; heardCopy.splice(idx,1); } });
  return targetWords.length ? matched/targetWords.length : 0;
}

// ================================
// RENDER DE LA RONDA
// ================================
function renderActivity(){
  currentType = currentRoundPattern[stats.answered % currentRoundPattern.length];
  const area = document.getElementById("activityArea");
  document.getElementById("feedback").textContent = "";
  document.getElementById("feedback").className = "feedback";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("transcriptBox").style.display = "none";
  awaitingNext = false;
  updateProgress();
  setRobotMood("thinking");

  if(currentType === "fill"){
    currentItem = drawItem("fill", currentTopic, currentLevel);
    setActivePills(["reading","listening","writing"]);
    area.innerHTML =
      '<span class="activity-tag">Completar la oración</span>' +
      '<div class="sentence-box">' + currentItem.s[0] + ' <span class="blank">____</span> ' + currentItem.s[2] + '</div>' +
      '<div class="es-hint">pista: ' + currentItem.hint + '</div>' +
      '<button class="listen-btn" id="listenBtn" type="button">Escuchar la oración completa (British)</button>' +
      '<div class="answer-row"><input type="text" id="answerInput" placeholder="Escribí la palabra que falta..." autocomplete="off"><button class="submit" id="submitBtn">Enviar</button></div>';
    document.getElementById("listenBtn").addEventListener("click", ()=> speak(fullSentence(currentItem)));
    document.getElementById("submitBtn").addEventListener("click", submitFill);
    document.getElementById("answerInput").addEventListener("keydown", e=>{ if(e.key==="Enter"){ awaitingNext ? nextRound() : submitFill(); } });
    document.getElementById("answerInput").focus();
  }

  if(currentType === "writing"){
    currentItem = drawItem("writing", currentTopic, currentLevel);
    setActivePills(["reading","writing"]);
    area.innerHTML =
      '<span class="activity-tag">Escritura</span>' +
      '<div class="sentence-box">Escribí una oración en inglés usando: <span class="blank">' + currentItem.word + '</span></div>' +
      '<div class="es-hint">pista: ' + currentItem.hint + '</div>' +
      '<textarea id="answerInput" placeholder="Write your sentence here..."></textarea>' +
      '<button class="submit" id="submitBtn">Enviar</button>';
    document.getElementById("submitBtn").addEventListener("click", submitWriting);
    document.getElementById("answerInput").focus();
  }

  if(currentType === "pronunciation"){
    currentItem = drawItem("pronunciation", currentTopic, currentLevel);
    setActivePills(["reading","listening","speaking"]);
    const supportsSTT = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    area.innerHTML =
      '<span class="activity-tag">Pronunciación</span>' +
      '<div class="sentence-box">' + currentItem + '</div>' +
      '<div class="es-hint">Escuchá el modelo en acento británico y después grabá tu propia pronunciación.</div>' +
      '<button class="listen-btn" id="listenBtn" type="button">Escuchar modelo (British)</button>' +
      (supportsSTT
        ? '<button class="listen-btn" id="recordBtn" type="button">Grabar mi pronunciación</button>'
        : '<div class="es-hint">Tu navegador no soporta reconocimiento de voz. Practicá en voz alta y confirmá manualmente.</div><button class="submit" id="submitBtn">Ya lo dije en voz alta</button>');
    document.getElementById("listenBtn").addEventListener("click", ()=> speak(currentItem));
    if(supportsSTT){ document.getElementById("recordBtn").addEventListener("click", startRecognition); }
    else { document.getElementById("submitBtn").addEventListener("click", ()=> gradeRound(true, "autoevaluación")); }
  }

  startTime = Date.now();
}

function submitFill(){
  const input = document.getElementById("answerInput");
  const raw = input.value.trim().toLowerCase();
  if(!raw){
    const fb = document.getElementById("feedback");
    fb.textContent = "Escribí una respuesta antes de enviar."; fb.className = "feedback incorrect";
    return;
  }
  const isCorrect = currentItem.a.some(ans => ans.toLowerCase() === raw);
  input.disabled = true; document.getElementById("submitBtn").disabled = true;
  gradeRound(isCorrect, isCorrect ? ("¡Correcto! " + fullSentence(currentItem)) : ("Casi. Respuesta esperada: \"" + currentItem.a[0] + "\". " + fullSentence(currentItem)));
}
function submitWriting(){
  const input = document.getElementById("answerInput");
  const raw = input.value.trim();
  if(!raw){
    const fb = document.getElementById("feedback");
    fb.textContent = "Escribí una oración antes de enviar."; fb.className = "feedback incorrect";
    return;
  }
  const wordCount = raw.split(/\s+/).filter(Boolean).length;
  const containsWord = raw.toLowerCase().includes(currentItem.word.toLowerCase());
  const isCorrect = containsWord && wordCount >= 4;
  input.disabled = true; document.getElementById("submitBtn").disabled = true;
  let msg;
  if(isCorrect) msg = "¡Muy bien! Usaste \"" + currentItem.word + "\" en una oración completa.";
  else if(!containsWord) msg = "Tu oración no incluye la palabra \"" + currentItem.word + "\". Intentá de nuevo la próxima.";
  else msg = "Tu oración es muy corta, intentá escribir una idea más completa la próxima vez.";
  gradeRound(isCorrect, msg);
}
function startRecognition(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SR();
  recognition.lang = "en-GB"; recognition.interimResults = false; recognition.maxAlternatives = 1;
  const btn = document.getElementById("recordBtn");
  btn.classList.add("recording"); btn.textContent = "Escuchando...";
  recognition.start();
  recognition.onresult = (event)=>{
    const transcript = event.results[0][0].transcript;
    const score = similarityScore(currentItem, transcript);
    const isCorrect = score >= 0.7;
    const box = document.getElementById("transcriptBox");
    box.style.display = "block";
    box.textContent = "Escuchamos: \"" + transcript + "\". Coincidencia: " + Math.round(score*100) + "%";
    btn.disabled = true; btn.classList.remove("recording");
    gradeRound(isCorrect, isCorrect ? "¡Buena pronunciación!" : "Todavía no coincide del todo, seguí practicando esta oración.");
  };
  recognition.onerror = ()=>{
    btn.classList.remove("recording"); btn.textContent = "Grabar mi pronunciación";
    const fb = document.getElementById("feedback");
    fb.textContent = "No pudimos escucharte bien. Revisá el permiso del micrófono e intentá de nuevo."; fb.className = "feedback incorrect";
  };
}

function gradeRound(isCorrect, message){
  const responseTime = Date.now() - startTime;
  stats.answered++; stats.times.push(responseTime);
  if(stats.times.length > 8) stats.times.shift();
  if(isCorrect){ stats.correct++; stats.streak++; stats.bestStreak = Math.max(stats.bestStreak, stats.streak); }
  else { stats.incorrect++; stats.streak = 0; }

  currentSkills.forEach(sk=>{ skillStats[sk].total++; if(isCorrect) skillStats[sk].correct++; });

  const fb = document.getElementById("feedback");
  fb.textContent = message; fb.className = "feedback " + (isCorrect ? "correct" : "incorrect");

  const sentenceBox = document.querySelector(".sentence-box");
  if(sentenceBox){
    sentenceBox.classList.remove("flash-correct","flash-incorrect");
    void sentenceBox.offsetWidth;
    sentenceBox.classList.add(isCorrect ? "flash-correct" : "flash-incorrect");
  }
  setRobotMood(isCorrect ? "happy" : "sad");

  const accuracy = stats.correct / stats.answered;
  const avgTime = stats.times.reduce((a,b)=>a+b,0) / stats.times.length;
  const speedScore = Math.max(0, Math.min(1, 1 - (avgTime / 15000)));
  const netInputs = [skillAccuracy("reading"), skillAccuracy("listening"), skillAccuracy("writing"), skillAccuracy("speaking"), speedScore];

  let difficultyScore = network.activate(netInputs)[0];
  const target = isCorrect ? Math.min(1, difficultyScore + 0.12) : Math.max(0, difficultyScore - 0.18);
  network.propagate(0.25, [target]);
  difficultyScore = network.activate(netInputs)[0];
  currentLevel = difficultyToLevel(difficultyScore);

  bumpStat("statAcc", Math.round(accuracy*100) + "%");
  bumpStat("statStreak", stats.streak);
  bumpStat("statTime", (avgTime/1000).toFixed(1) + "s");
  bumpStat("statDiff", difficultyScore.toFixed(2));
  drawNetwork(difficultyScore);
  setAvatarGrowth(difficultyScore);
  renderSkillBars("skillBars");
  updateProgress();

  if(isCorrect && stats.streak > 0 && stats.streak % 3 === 0){
    celebrateStreak();
  }

  if(stats.answered >= GOAL_ROUNDS){ setTimeout(showEndScreen, 900); return; }
  document.getElementById("nextBtn").style.display = "inline-block";
  awaitingNext = true;
}
function nextRound(){ renderActivity(); }
document.getElementById("nextBtn").addEventListener("click", nextRound);

document.getElementById("skipRoundBtn").addEventListener("click", ()=>{
  if(awaitingNext) return;
  gradeRound(false, "Ronda salteada. Vamos con la siguiente.");
});
document.getElementById("skipLevelBtn").addEventListener("click", ()=>{
  if(stats.answered === 0) return;
  if(confirm("¿Terminar este bloque ahora y ver tu diagnóstico con el progreso actual?")) showEndScreen();
});

// ================================
// PROGRAMA PERSONALIZADO
// ================================
function buildPersonalizedProgram(){
  const weak = weakestSkill(); const strong = strongestSkill();
  const accuracy = stats.answered ? stats.correct/stats.answered : 0;
  let topic = currentTopic; let advancing = false; let reviewLap = false;
  if(accuracy >= 0.7){
    completedTopics.add(currentTopic);
    const idx = TOPICS.findIndex(t => t.id === currentTopic);
    let next = null;
    for(let i=1;i<=TOPICS.length;i++){
      const candidate = TOPICS[(idx+i) % TOPICS.length];
      if(!completedTopics.has(candidate.id)){ next = candidate.id; break; }
    }
    if(next){ topic = next; advancing = true; } else { reviewLap = true; }
  }
  return { level: currentLevel, topic: topic, weak: weak, strong: strong, advancing: advancing, reviewLap: reviewLap, accuracy: accuracy };
}

function showEndScreen(){
  goToScreen("end");
  const accuracy = stats.answered ? Math.round((stats.correct/stats.answered)*100) : 0;
  document.getElementById("endAcc").textContent = accuracy + "%";
  document.getElementById("endStreak").textContent = stats.bestStreak;
  document.getElementById("endLevel").textContent = levelLabel[currentLevel];
  renderSkillBars("endSkillBars");
  const weak = weakestSkill(); const strong = strongestSkill();
  let msg;
  if(accuracy >= 80) msg = "Excelente trabajo con " + topicLabel[currentTopic] + ", la IA te llevó hasta un nivel " + levelLabel[currentLevel] + " y lo sostuviste muy bien.";
  else if(accuracy >= 50) msg = "Buen progreso con " + topicLabel[currentTopic] + ". Todavía hay margen para afianzar la estructura antes de pasar al siguiente tema.";
  else msg = "Completaste el bloque de " + topicLabel[currentTopic] + ". Te recomendamos repetir este tema para afianzar lo practicado.";
  if(weak && strong && weak !== strong){
    msg += " Según lo que fue registrando la red durante la partida, tu punto más fuerte fue " + skillLabel[strong] + " y el área para reforzar es " + skillLabel[weak] + ".";
  }
  document.getElementById("endMessage").textContent = msg;

  const program = buildPersonalizedProgram();
  let programText = "Para tu próximo bloque de 10 rondas, la red neuronal sugiere ";
  if(program.advancing){
    programText += "pasar al tema <b>" + topicLabel[program.topic] + "</b> en nivel <b>" + levelLabel[program.level] + "</b>, porque veniste sólido con " + topicLabel[currentTopic] + ".";
  } else if(program.reviewLap){
    programText += "repasar <b>" + topicLabel[program.topic] + "</b> en nivel <b>" + levelLabel[program.level] + "</b>. Ya recorriste los 7 temas, así que este bloque es un repaso general.";
  } else {
    programText += "seguir reforzando <b>" + topicLabel[program.topic] + "</b> en nivel <b>" + levelLabel[program.level] + "</b> antes de pasar al siguiente tema.";
  }
  if(program.weak && program.strong && program.weak !== program.strong){
    programText += " Puntualmente, prestá atención a " + skillLabel[program.weak] + ".";
  }
  document.getElementById("programText").innerHTML = programText;
  document.getElementById("continueProgramBtn").onclick = ()=> continueProgram(program.level, program.topic);
}

// ================================
// NAVEGACION ENTRE PANTALLAS
// ================================
let currentScreenName = "welcome";
function goToScreen(name){
  const prev = document.querySelector(".screen.active");
  if(prev) prev.classList.remove("active");
  currentScreenName = name;
  document.body.dataset.screen = name;
  const next = document.querySelector('.screen[data-screen="'+name+'"]');
  requestAnimationFrame(()=> next.classList.add("active"));
}

document.getElementById("toTopicBtn").addEventListener("click", ()=>{ toggleMusic(); goToScreen("topic"); });
document.getElementById("backBtn").addEventListener("click", ()=>{
  if(currentScreenName === "topic"){ goToScreen("welcome"); }
  else if(currentScreenName === "level"){ goToScreen("topic"); }
  else if(currentScreenName === "game"){
    if(stats.answered === 0 || confirm("¿Seguro que querés abandonar este bloque? Vas a perder el progreso de esta partida.")){ goToScreen("topic"); }
  }
  else if(currentScreenName === "end"){ goToScreen("topic"); }
});
document.getElementById("chooseTopicAgainBtn").addEventListener("click", ()=> goToScreen("topic"));
document.getElementById("mainMenuBtn").addEventListener("click", ()=>{
  goToScreen("welcome");
  selectedTopic = null; selectedStartLevel = null; sessionCount = 1; completedTopics = new Set();
  document.querySelectorAll(".topic-card").forEach(el=>el.classList.remove("selected"));
  document.querySelectorAll(".level-card").forEach(el=>el.classList.remove("selected"));
  document.getElementById("toLevelBtn").disabled = true;
  document.getElementById("startBtn").disabled = true;
});

function renderTopicChoice(){
  const box = document.getElementById("topicChoice");
  box.innerHTML = TOPICS.map(t=>
    '<div class="topic-card" data-topic="' + t.id + '" style="--dot:' + topicDot[t.id] + '">' +
      '<div class="t-icon"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round">' + topicIcons[t.id] + '</svg></div>' +
      '<span class="t-name">' + t.label + '</span><span class="t-blurb">' + t.blurb + '</span></div>'
  ).join("");
  document.querySelectorAll(".topic-card").forEach(elx=>{
    elx.addEventListener("click", ()=>{
      document.querySelectorAll(".topic-card").forEach(o=>o.classList.remove("selected"));
      elx.classList.add("selected");
      selectedTopic = elx.dataset.topic;
      document.getElementById("toLevelBtn").disabled = false;
    });
  });
}
renderTopicChoice();
document.getElementById("topicBackBtn").addEventListener("click", ()=> goToScreen("welcome"));
document.getElementById("toLevelBtn").addEventListener("click", ()=>{ if(selectedTopic) goToScreen("level"); });

function renderLevelChoice(){
  const box = document.getElementById("levelChoice");
  const info = {beginner:{sub:"estructuras básicas del tema"}, intermediate:{sub:"uso más natural y variado"}, advanced:{sub:"registro formal, matices"}};
  box.innerHTML = levels.map(l =>
    '<div class="level-card" data-level="' + l + '"><div class="bars"><i></i><i></i><i></i></div>' +
    '<span class="l-name">' + levelLabel[l] + '</span><span class="l-sub">' + info[l].sub + '</span></div>'
  ).join("");
  document.querySelectorAll(".level-card").forEach(elx=>{
    elx.addEventListener("click", ()=>{
      document.querySelectorAll(".level-card").forEach(o=>o.classList.remove("selected"));
      elx.classList.add("selected");
      selectedStartLevel = elx.dataset.level;
      document.getElementById("startBtn").disabled = false;
    });
  });
}
renderLevelChoice();
document.getElementById("levelBackBtn").addEventListener("click", ()=> goToScreen("topic"));

function beginGameBlock(level, topic){
  currentLevel = level; currentTopic = topic;
  stats = {correct:0, incorrect:0, streak:0, bestStreak:0, times:[], answered:0};
  skillStats = freshSkillStats();
  currentRoundPattern = buildRoundPattern(topic);
  document.getElementById("statAcc").textContent = "0%";
  document.getElementById("statStreak").textContent = "0";
  document.getElementById("statTime").textContent = "–";
  document.getElementById("statDiff").textContent = "0.50";
  drawNetwork(0.5);
  setAvatarGrowth(0.5);
  renderSkillBars("skillBars");
  goToScreen("game");
  renderActivity();
}
function startFreshGame(level, topic){
  sessionCount = 1; completedTopics = new Set();
  refillAllPools(); seedNetwork();
  beginGameBlock(level, topic);
}
function continueProgram(level, topic){ sessionCount++; beginGameBlock(level, topic); }
document.getElementById("startBtn").addEventListener("click", ()=>{
  if(!selectedStartLevel || !selectedTopic) return;
  startFreshGame(selectedStartLevel, selectedTopic);
});

// ================================
// PANEL DE ESTADISTICAS (oculto por defecto, se abre a pedido)
// ================================
const statsDrawer = document.getElementById("statsDrawer");
const statsOverlay = document.getElementById("statsOverlay");
function openStats(){ statsDrawer.classList.add("open"); statsOverlay.classList.add("open"); }
function closeStats(){ statsDrawer.classList.remove("open"); statsOverlay.classList.remove("open"); }
document.getElementById("statsToggleBtn").addEventListener("click", openStats);
document.getElementById("statsCloseBtn").addEventListener("click", closeStats);
statsOverlay.addEventListener("click", closeStats);

// ================================
// DIAGRAMA DE LA RED NEURONAL (dentro del panel de estadísticas)
// ================================
const NS = "http://www.w3.org/2000/svg";
function svgEl(tag, attrs){ const e = document.createElementNS(NS, tag); for(const k in attrs) e.setAttribute(k, attrs[k]); return e; }
const inputPos = [8, 38, 68, 98, 128].map(y => ({x:32, y}));
const hiddenPos = [4,22,40,58,76,94,112,130].map(y => ({x:150, y}));
const outputPos = [{x:230, y:67}];
function drawNetwork(diff){
  const svg = document.getElementById("netSvg");
  if(!svg) return;
  svg.innerHTML = "";
  const inNeurons = inputLayer.neurons ? inputLayer.neurons() : inputLayer.list;
  const hidNeurons = hiddenLayer.neurons ? hiddenLayer.neurons() : hiddenLayer.list;
  const outNeurons = outputLayer.neurons ? outputLayer.neurons() : outputLayer.list;
  inNeurons.forEach((n, i)=>{
    hidNeurons.forEach((h, j)=>{
      let w = 0;
      for(const key in n.connections.projected){ if(n.connections.projected[key].neuron === h){ w = n.connections.projected[key].weight; } }
      svg.appendChild(svgEl("line", {x1:inputPos[i].x, y1:inputPos[i].y, x2:hiddenPos[j].x, y2:hiddenPos[j].y, stroke: w>=0?"#7DE0FF":"#F2836B", "stroke-opacity": Math.min(0.85, Math.abs(w)*0.6+0.08), "stroke-width":1}));
    });
  });
  hidNeurons.forEach((h, j)=>{
    let w = 0;
    for(const key in h.connections.projected){ w = h.connections.projected[key].weight; }
    svg.appendChild(svgEl("line", {x1:hiddenPos[j].x, y1:hiddenPos[j].y, x2:outputPos[0].x, y2:outputPos[0].y, stroke: w>=0?"#7DE0FF":"#F2836B", "stroke-opacity": Math.min(0.85, Math.abs(w)*0.6+0.08), "stroke-width":1.2}));
  });
  inputPos.forEach((p)=> svg.appendChild(svgEl("circle", {cx:p.x, cy:p.y, r:6, fill:"#203a33", stroke:"#6EE7B7", "stroke-width":1.2})));
  hiddenPos.forEach((p)=> svg.appendChild(svgEl("circle", {cx:p.x, cy:p.y, r:4.5, fill:"#203a33", stroke:"#7DE0FF", "stroke-width":1})));
  const outFill = diff > 0.6 ? "#F2C14E" : "#7DE0FF";
  svg.appendChild(svgEl("circle", {cx:outputPos[0].x, cy:outputPos[0].y, r:8, fill:"#203a33", stroke:outFill, "stroke-width":1.8, class:"out-node"}));
}
drawNetwork(0.5);

// ================================
// INICIO
// ================================
renderSkillBars("skillBars");
goToScreen("welcome");

