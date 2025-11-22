// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE'; // Replace with your bot token
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

// Word Database - Complete vocabulary list (6000+ words)
const wordDatabase = [
    // Your complete word list from the previous message would go here
    // For demonstration, I'll include a sample. In practice, you'd paste all 6000+ words
    'ability', 'able', 'about', 'above', 'accept', 'account', 'across', 'act', 'action', 'activity',
    'add', 'address', 'administration', 'admit', 'adult', 'affect', 'after', 'again', 'against', 'age',
    'agency', 'agent', 'ago', 'agree', 'agreement', 'ahead', 'air', 'allow', 'almost', 'alone',
    'along', 'already', 'also', 'although', 'always', 'american', 'among', 'amount', 'analysis', 'and',
    'animal', 'another', 'answer', 'any', 'anyone', 'anything', 'appear', 'apply', 'approach', 'area',
    'argue', 'arm', 'around', 'arrive', 'art', 'article', 'artist', 'as', 'ask', 'assume',
    'at', 'attack', 'attention', 'attorney', 'audience', 'author', 'authority', 'available', 'avoid', 'away',
    'baby', 'back', 'bad', 'bag', 'ball', 'bank', 'bar', 'base', 'be', 'beat',
    'beautiful', 'because', 'become', 'bed', 'before', 'begin', 'behavior', 'behind', 'believe', 'benefit',
    'best', 'better', 'between', 'beyond', 'big', 'bill', 'billion', 'bit', 'black', 'blood',
    'blue', 'board', 'body', 'book', 'born', 'both', 'box', 'boy', 'break', 'bring',
    'brother', 'budget', 'build', 'building', 'business', 'but', 'buy', 'by', 'call', 'camera',
    'campaign', 'can', 'cancer', 'candidate', 'capital', 'car', 'card', 'care', 'career', 'carry',
    // ... Continue with all 6000+ words from your list
    // For the actual implementation, you would paste the complete list here
];

// Add the compound words from your list
const compoundWords = [
    'airmaker', 'airwalker', 'airrunner', 'airkeeper', 'airfinder', 'airhunter', 'airseeker', 'airrider', 'airweaver', 'airshaper',
    'suncatcher', 'sunwalker', 'sunrunner', 'sunkeeper', 'sunfinder', 'sunhunter', 'sunseeker', 'sunrider', 'sunweaver', 'sunshaper',
    'starmaker', 'starwalker', 'starrunner', 'starkeeper', 'starfinder', 'starhunter', 'starseeker', 'starrider', 'starweaver', 'starshaper',
    // ... Continue with all compound words from your list
];

// Combine all words
const allWords = [...new Set([...wordDatabase, ...compoundWords])];

// Application State
let currentPage = 1;
const wordsPerPage = 100;
let filteredWords = [...allWords];
let learnedWords = JSON.parse(localStorage.getItem('learnedWords')) || [];
let telegramChatId = localStorage.getItem('telegramChatId') || '';

// DOM Elements
const wordsList = document.getElementById('wordsList');
const wordSearch = document.getElementById('wordSearch');
const searchBtn = document.getElementById('searchBtn');
const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');
const pageInfo = document.getElementById('pageInfo');
const filterButtons = document.querySelectorAll('.filter-btn');
const startLearning = document.getElementById('startLearning');
const totalWords = document.getElementById('totalWords');
const learnedWordsCount = document.getElementById('learnedWords');
const masteredCount = document.getElementById('masteredCount');
const learningCount = document.getElementById('learningCount');
const dailyProgress = document.getElementById('dailyProgress');
const telegramChatIdInput = document.getElementById('telegramChatId');
const connectTelegram = document.getElementById('connectTelegram');
const testMessage = document.getElementById('testMessage');
const sendDailyWords = document.getElementById('sendDailyWords');
const telegramStatus = document.getElementById('telegramStatus');
const wordModal = document.getElementById('wordModal');
const modalWordTitle = document.getElementById('modalWordTitle');
const modalWordContent = document.getElementById('modalWordContent');
const markLearned = document.getElementById('markLearned');
const closeModal = document.querySelector('.close');

// Initialize Application
function init() {
    totalWords.textContent = allWords.length;
    updateLearnedCount();
    renderWords();
    setupEventListeners();
    loadUserProgress();
    
    // Set Telegram chat ID if available
    if (telegramChatId) {
        telegramChatIdInput.value = telegramChatId;
    }
}

// Event Listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', handleSearch);
    wordSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    prevPage.addEventListener('click', () => changePage(-1));
    nextPage.addEventListener('click', () => changePage(1));
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => handleFilter(btn.dataset.filter));
    });
    
    startLearning.addEventListener('click', () => {
        document.getElementById('words').scrollIntoView({ behavior: 'smooth' });
    });
    
    connectTelegram.addEventListener('click', connectTelegramBot);
    testMessage.addEventListener('click', sendTestMessage);
    sendDailyWords.addEventListener('click', sendDailyWordsToTelegram);
    
    closeModal.addEventListener('click', () => wordModal.style.display = 'none');
    markLearned.addEventListener('click', toggleWordLearned);
    
    window.addEventListener('click', (e) => {
        if (e.target === wordModal) {
            wordModal.style.display = 'none';
        }
    });
}

// Word Management
function renderWords() {
    const startIndex = (currentPage - 1) * wordsPerPage;
    const endIndex = startIndex + wordsPerPage;
    const pageWords = filteredWords.slice(startIndex, endIndex);
    
    wordsList.innerHTML = '';
    
    pageWords.forEach(word => {
        const wordCard = document.createElement('div');
        wordCard.className = `word-card ${learnedWords.includes(word) ? 'learned' : ''}`;
        wordCard.textContent = word;
        wordCard.addEventListener('click', () => showWordDetails(word));
        wordsList.appendChild(wordCard);
    });
    
    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(filteredWords.length / wordsPerPage);
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    prevPage.disabled = currentPage === 1;
    nextPage.disabled = currentPage === totalPages;
}

function changePage(direction) {
    const totalPages = Math.ceil(filteredWords.length / wordsPerPage);
    currentPage += direction;
    
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;
    
    renderWords();
    window.scrollTo({ top: wordsList.offsetTop - 100, behavior: 'smooth' });
}

function handleSearch() {
    const query = wordSearch.value.toLowerCase().trim();
    
    if (query === '') {
        filteredWords = [...allWords];
    } else {
        filteredWords = allWords.filter(word => 
            word.toLowerCase().includes(query)
        );
    }
    
    currentPage = 1;
    renderWords();
}

function handleFilter(filter) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    switch (filter) {
        case 'common':
            filteredWords = allWords.filter(word => word.length <= 6);
            break;
        case 'advanced':
            filteredWords = allWords.filter(word => word.length > 6);
            break;
        default:
            filteredWords = [...allWords];
    }
    
    currentPage = 1;
    renderWords();
}

function showWordDetails(word) {
    modalWordTitle.textContent = word;
    
    // Generate word details (in a real app, you'd have definitions, examples, etc.)
    const wordDetails = `
        <div class="word-details">
            <p><strong>Word:</strong> ${word}</p>
            <p><strong>Length:</strong> ${word.length} letters</p>
            <p><strong>Type:</strong> ${getWordType(word)}</p>
            <p><strong>Status:</strong> ${learnedWords.includes(word) ? 'Learned' : 'Not Learned'}</p>
            <div class="word-example">
                <p><strong>Example Sentence:</strong></p>
                <p>"This is an example sentence using the word <em>${word}</em>."</p>
            </div>
        </div>
    `;
    
    modalWordContent.innerHTML = wordDetails;
    wordModal.style.display = 'block';
    
    // Update mark learned button
    markLearned.textContent = learnedWords.includes(word) ? 'Mark as Unlearned' : 'Mark as Learned';
    markLearned.dataset.word = word;
}

function toggleWordLearned() {
    const word = markLearned.dataset.word;
    const index = learnedWords.indexOf(word);
    
    if (index > -1) {
        learnedWords.splice(index, 1);
        markLearned.textContent = 'Mark as Learned';
    } else {
        learnedWords.push(word);
        markLearned.textContent = 'Mark as Unlearned';
    }
    
    localStorage.setItem('learnedWords', JSON.stringify(learnedWords));
    updateLearnedCount();
    renderWords();
    
    // Show success message
    showNotification(`Word "${word}" ${index > -1 ? 'removed from' : 'added to'} learned words`, 'success');
}

function getWordType(word) {
    // Simple word type detection (in a real app, use a dictionary API)
    if (word.endsWith('ly')) return 'Adverb';
    if (word.endsWith('ing')) return 'Verb';
    if (word.endsWith('ed')) return 'Verb';
    if (word.endsWith('s')) return 'Noun/Verb';
    if (word.length <= 3) return 'Common Word';
    return 'Noun';
}

// Progress Tracking
function updateLearnedCount() {
    learnedWordsCount.textContent = learnedWords.length;
    masteredCount.textContent = learnedWords.length;
    learningCount.textContent = allWords.length - learnedWords.length;
    
    const progress = Math.round((learnedWords.length / allWords.length) * 100);
    dailyProgress.textContent = `${progress}%`;
}

function loadUserProgress() {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('lastVisit');
    
    if (lastVisit !== today) {
        localStorage.setItem('lastVisit', today);
        // Reset daily progress or implement daily goals
    }
}

// Telegram Integration
async function connectTelegramBot() {
    const chatId = telegramChatIdInput.value.trim();
    
    if (!chatId) {
        showTelegramStatus('Please enter a valid Telegram Chat ID', 'error');
        return;
    }
    
    try {
        // Test the chat ID by sending a simple message
        const response = await sendTelegramMessage(chatId, '🎉 Congratulations! Your Telegram is successfully connected to WordMaster!');
        
        if (response.ok) {
            telegramChatId = chatId;
            localStorage.setItem('telegramChatId', chatId);
            showTelegramStatus('✅ Telegram connected successfully!', 'success');
        } else {
            showTelegramStatus('❌ Failed to connect. Please check your Chat ID.', 'error');
        }
    } catch (error) {
        console.error('Telegram connection error:', error);
        showTelegramStatus('❌ Connection error. Please try again.', 'error');
    }
}

async function sendTestMessage() {
    if (!telegramChatId) {
        showTelegramStatus('Please connect Telegram first', 'error');
        return;
    }
    
    try {
        const response = await sendTelegramMessage(
            telegramChatId, 
            '🧪 This is a test message from WordMaster!\n\nIf you received this, your Telegram integration is working perfectly!'
        );
        
        if (response.ok) {
            showTelegramStatus('✅ Test message sent successfully!', 'success');
        } else {
            showTelegramStatus('❌ Failed to send test message', 'error');
        }
    } catch (error) {
        console.error('Test message error:', error);
        showTelegramStatus('❌ Error sending test message', 'error');
    }
}

async function sendDailyWordsToTelegram() {
    if (!telegramChatId) {
        showTelegramStatus('Please connect Telegram first', 'error');
        return;
    }
    
    try {
        // Get 10 random unlearned words
        const unlearnedWords = allWords.filter(word => !learnedWords.includes(word));
        const dailyWords = getRandomWords(unlearnedWords, 10);
        
        let message = '📚 *Your Daily Words from WordMaster* 📚\n\n';
        dailyWords.forEach((word, index) => {
            message += `${index + 1}. *${word}* - ${getWordType(word)}\n`;
            message += `   Example: "This sentence uses the word _${word}_."\n\n`;
        });
        
        message += '💡 *Tip*: Try to use each word in a sentence today!';
        
        const response = await sendTelegramMessage(telegramChatId, message);
        
        if (response.ok) {
            showTelegramStatus('✅ Daily words sent successfully!', 'success');
        } else {
            showTelegramStatus('❌ Failed to send daily words', 'error');
        }
    } catch (error) {
        console.error('Daily words error:', error);
        showTelegramStatus('❌ Error sending daily words', 'error');
    }
}

async function sendTelegramMessage(chatId, text) {
    // Note: This will only work if you have a backend to handle the bot token securely
    // For frontend-only implementation, you might need to use Telegram Widget or other methods
    
    const response = await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: 'Markdown'
        })
    });
    
    return response;
}

// Utility Functions
function getRandomWords(words, count) {
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function showTelegramStatus(message, type) {
    telegramStatus.textContent = message;
    telegramStatus.className = `status-message ${type}`;
    
    setTimeout(() => {
        telegramStatus.textContent = '';
        telegramStatus.className = 'status-message';
    }, 5000);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: bold;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    
    if (type === 'success') {
        notification.style.background = '#27ae60';
    } else {
        notification.style.background = '#e74c3c';
    }
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .notification {
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
`;
document.head.appendChild(style);

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Export functions for global access (useful for debugging)
window.wordApp = {
    allWords,
    learnedWords,
    telegramChatId,
    getRandomWords,
    sendTestMessage,
    sendDailyWordsToTelegram
};

console.log('🚀 WordMaster initialized with', allWords.length, 'words');
console.log('💡 Learned words:', learnedWords.length);
console.log('📱 Telegram Chat ID:', telegramChatId || 'Not set');
