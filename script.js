// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    generateWordInputs();
});

// Generate 24 word input fields
function generateWordInputs() {
    const wordGrid = document.querySelector('.word-grid');
    wordGrid.innerHTML = '';
    
    for (let i = 1; i <= 24; i++) {
        const wordInput = document.createElement('div');
        wordInput.className = 'word-input';
        wordInput.innerHTML = `
            <label>${i}:</label>
            <input type="text" id="word${i}" placeholder="Word ${i}" data-index="${i}">
        `;
        wordGrid.appendChild(wordInput);
    }
}

// Show import section
function showImportSection() {
    document.getElementById('importSection').classList.remove('hidden');
    document.getElementById('walletInfo').classList.add('hidden');
}

// Create new wallet function
function createNewWallet() {
    const statusMessage = document.getElementById('statusMessage');
    const walletInfo = document.getElementById('walletInfo');
    
    // Simulate wallet creation
    statusMessage.innerHTML = `
        <h4>✅ New Wallet Created Successfully!</h4>
        <p><strong>Important Security Notice:</strong></p>
        <ul>
            <li>Store your recovery phrase in a secure location</li>
            <li>Never share your recovery phrase with anyone</li>
            <li>This is a demo interface for educational purposes</li>
        </ul>
        <p style="margin-top: 15px; color: #dc3545;">
            <strong>Warning:</strong> This is a demonstration interface. No actual wallet is being created.
        </p>
    `;
    
    walletInfo.classList.remove('hidden');
    walletInfo.classList.add('fade-in');
}

// Import wallet function
function importWallet() {
    const words = [];
    let isValid = true;
    
    // Collect words from inputs
    for (let i = 1; i <= 24; i++) {
        const word = document.getElementById(`word${i}`).value.trim();
        if (word) {
            words.push(word);
        } else {
            isValid = false;
            document.getElementById(`word${i}`).style.borderColor = 'red';
        }
    }
    
    const statusMessage = document.getElementById('statusMessage');
    const walletInfo = document.getElementById('walletInfo');
    
    if (!isValid || words.length !== 24) {
        statusMessage.innerHTML = `
            <h4 style="color: #dc3545;">❌ Invalid Recovery Phrase</h4>
            <p>Please enter all 24 recovery words correctly.</p>
        `;
        walletInfo.classList.remove('hidden');
        walletInfo.classList.add('fade-in');
        return;
    }
    
    // Simulate wallet import
    statusMessage.innerHTML = `
        <h4 style="color: #28a745;">✅ Wallet Imported Successfully!</h4>
        <p><strong>Security Reminder:</strong></p>
        <ul>
            <li>Always verify you're on the official wallet website</li>
            <li>Never enter recovery phrases on suspicious sites</li>
            <li>Use hardware wallets for maximum security</li>
        </ul>
        <p style="margin-top: 15px; color: #dc3545;">
            <strong>Demo Notice:</strong> This interface is for educational purposes only. No actual import occurred.
        </p>
    `;
    
    walletInfo.classList.remove('hidden');
    walletInfo.classList.add('fade-in');
    
    // Clear inputs after "import"
    setTimeout(() => {
        for (let i = 1; i <= 24; i++) {
            document.getElementById(`word${i}`).value = '';
            document.getElementById(`word${i}`).style.borderColor = '';
        }
    }, 2000);
}

// Additional security features
function validateWordInput(input) {
    // Basic validation for demo purposes
    const value = input.value.trim();
    if (value && !/^[a-z]+$/.test(value)) {
        input.style.borderColor = 'red';
    } else {
        input.style.borderColor = '';
    }
}

// Add input validation
document.addEventListener('input', function(e) {
    if (e.target.type === 'text' && e.target.id.startsWith('word')) {
        validateWordInput(e.target);
    }
});

// Security warning
console.log(`
⚠️  SECURITY WARNING ⚠️
This is a demo wallet interface for educational purposes only.
Never enter real recovery phrases on unknown websites.
Always verify you're using official wallet applications.
`);
