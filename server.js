const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Replace with your CoinGecko Pro API key
const COINGECKO_API_KEY = process.env.CG_PRO_API_KEY || "https://api.coingecko.com/api/v3/simple/price";
const COINGECKO_BASE_URL = 'https://pro-api.coingecko.com/api/v3';

// Price endpoint
app.get('/api/price', async (req, res) => {
  try {
    const { coin = 'bitcoin', vs_currency = 'usd' } = req.query;
    
    const response = await fetch(
      `${COINGECKO_BASE_URL}/simple/price?ids=${coin}&vs_currencies=${vs_currency}&include_24hr_change=true&x_cg_pro_api_key=${COINGECKO_API_KEY}`,
      {
        headers: {
          'x-cg-pro-api-key': COINGECKO_API_KEY,
        }
      }
    );

    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch price data' });
  }
});

// Multiple coins endpoint for analysis
app.get('/api/market-data', async (req, res) => {
  try {
    const { vs_currency = 'usd', per_page = 50, page = 1 } = req.query;
    
    const response = await fetch(
      `${COINGECKO_BASE_URL}/coins/markets?vs_currency=${vs_currency}&per_page=${per_page}&page=${page}&x_cg_pro_api_key=${COINGECKO_API_KEY}`,
      {
        headers: {
          'x-cg-pro-api-key': COINGECKO_API_KEY,
        }
      }
    );

    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch market data' });
  }
});

// Search coins
app.get('/api/search', async (req, res) => {
  try {
    const { query } = req.query;
    
    const response = await fetch(
      `${COINGECKO_BASE_URL}/search?query=${query}&x_cg_pro_api_key=${COINGECKO_API_KEY}`,
      {
        headers: {
          'x-cg-pro-api-key': COINGECKO_API_KEY,
        }
      }
    );

    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to search coins' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
