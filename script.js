// Replace with your deployed proxy server URL
const PROXY_URL = 'https://railway.app/new/template?template=https://github.com/cog-proxy/simple-node-proxy'; // Update this with your actual proxy URL

class CryptoPriceTracker {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('searchBtn').addEventListener('click', () => this.searchCoin());
        document.getElementById('analyzeBtn').addEventListener('click', () => this.analyzeMarket());
        document.getElementById('refreshAnalysis').addEventListener('click', () => this.analyzeMarket());
        document.getElementById('searchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.searchCoin();
        });
    }

    async searchCoin() {
        const coinId = document.getElementById('searchInput').value.trim().toLowerCase();
        
        if (!coinId) {
            this.showError('Please enter a cryptocurrency name');
            return;
        }

        this.showLoading();
        this.hideError();
        this.hideResults();

        try {
            const response = await fetch(`${PROXY_URL}/api/price?coin=${encodeURIComponent(coinId)}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch price data');
            }

            const data = await response.json();
            
            if (!data[coinId]) {
                throw new Error('Cryptocurrency not found');
            }

            this.displayPrice(coinId, data[coinId]);
        } catch (error) {
            this.showError(error.message);
        } finally {
            this.hideLoading();
        }
    }

    async analyzeMarket() {
        this.showLoading();
        this.hideError();
        this.hideSinglePrice();

        try {
            const response = await fetch(`${PROXY_URL}/api/market-data?per_page=50&page=1`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch market data');
            }

            const coins = await response.json();
            this.displayMarketAnalysis(coins);
        } catch (error) {
            this.showError(error.message);
        } finally {
            this.hideLoading();
        }
    }

    displayPrice(coinId, priceData) {
        const priceResult = document.getElementById('priceResult');
        const coinName = document.getElementById('coinName');
        const coinSymbol = document.getElementById('coinSymbol');
        const currentPrice = document.getElementById('currentPrice');
        const priceChange = document.getElementById('priceChange');
        const coinImage = document.getElementById('coinImage');

        // Set coin data
        coinName.textContent = this.formatCoinName(coinId);
        coinSymbol.textContent = coinId.toUpperCase();
        currentPrice.textContent = this.formatPrice(priceData.usd);
        
        // Set price change with color coding
        const change = priceData.usd_24h_change;
        priceChange.textContent = this.formatChange(change);
        priceChange.className = `change ${change >= 0 ? 'positive' : 'negative'}`;

        // Set coin image (using a placeholder - in real app, you'd fetch coin image URL)
        coinImage.src = `https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1547033579`;
        coinImage.alt = coinId;

        this.hideMarketAnalysis();
        priceResult.classList.remove('hidden');
    }

    displayMarketAnalysis(coins) {
        const marketAnalysis = document.getElementById('marketAnalysis');
        const coinsGrid = document.getElementById('coinsGrid');

        // Clear previous results
        coinsGrid.innerHTML = '';

        // Sort coins by market cap and display top performers
        const sortedCoins = coins.sort((a, b) => b.market_cap - a.market_cap);

        sortedCoins.forEach((coin, index) => {
            const coinCard = this.createCoinCard(coin, index + 1);
            coinsGrid.appendChild(coinCard);
        });

        this.hideSinglePrice();
        marketAnalysis.classList.remove('hidden');
    }

    createCoinCard(coin, rank) {
        const card = document.createElement('div');
        card.className = 'coin-card';
        
        card.innerHTML = `
            <div class="coin-card-header">
                <span class="coin-rank">#${rank}</span>
                <img src="${coin.image}" alt="${coin.name}" class="coin-card-image">
                <div class="coin-card-info">
                    <h4>${coin.name}</h4>
                    <span class="coin-card-symbol">${coin.symbol.toUpperCase()}</span>
                </div>
            </div>
            <div class="coin-card-price">$${this.formatPrice(coin.current_price)}</div>
            <div class="coin-card-change ${coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}">
                24h: ${this.formatChange(coin.price_change_percentage_24h)}
            </div>
            <div class="coin-card-market-cap">
                Market Cap: $${this.formatMarketCap(coin.market_cap)}
            </div>
        `;

        card.addEventListener('click', () => {
            document.getElementById('searchInput').value = coin.id;
            this.searchCoin();
        });

        return card;
    }

    formatCoinName(coinId) {
        return coinId.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    formatPrice(price) {
        if (price < 0.01) {
            return '$' + price.toFixed(6);
        } else if (price < 1) {
            return '$' + price.toFixed(4);
        } else {
            return '$' + price.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }
    }

    formatChange(change) {
        if (change === null || change === undefined) return 'N/A';
        return `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
    }

    formatMarketCap(marketCap) {
        if (marketCap >= 1e12) {
            return (marketCap / 1e12).toFixed(2) + 'T';
        } else if (marketCap >= 1e9) {
            return (marketCap / 1e9).toFixed(2) + 'B';
        } else if (marketCap >= 1e6) {
            return (marketCap / 1e6).toFixed(2) + 'M';
        } else {
            return marketCap.toLocaleString();
        }
    }

    showLoading() {
        document.getElementById('loading').classList.remove('hidden');
    }

    hideLoading() {
        document.getElementById('loading').classList.add('hidden');
    }

    showError(message) {
        const errorElement = document.getElementById('error');
        const errorMessage = document.getElementById('errorMessage');
        
        errorMessage.textContent = message;
        errorElement.classList.remove('hidden');
    }

    hideError() {
        document.getElementById('error').classList.add('hidden');
    }

    hideResults() {
        this.hideSinglePrice();
        this.hideMarketAnalysis();
    }

    hideSinglePrice() {
        document.getElementById('priceResult').classList.add('hidden');
    }

    hideMarketAnalysis() {
        document.getElementById('marketAnalysis').classList.add('hidden');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CryptoPriceTracker();
});
