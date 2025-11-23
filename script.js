// ----------------- CONFIG -----------------
const USE_PRO_API = true; // true হলে pro-api base URL, false হলে free api base URL
const PRO_BASE = "https://pro-api.coingecko.com/api/v3";
const FREE_BASE = "https://api.coingecko.com/api/v3";

// এখানে তোমার Pro API KEY বসাও (যদি ব্যবহার করো)
const PRO_API_KEY = "https://pro-api.coingecko.com/api/v3/simple/price";
// ------------------------------------------

const baseURL = USE_PRO_API ? PRO_BASE : FREE_BASE;

const coinInput = document.getElementById("coinInput");
const checkBtn = document.getElementById("checkBtn");
const output = document.getElementById("output");
const loader = document.getElementById("loader");
const messages = document.getElementById("messages");

const coinNameEl = document.getElementById("coinName");
const priceEl = document.getElementById("price");
const changeEl = document.getElementById("change");
const marketCapEl = document.getElementById("marketCap");
const volumeEl = document.getElementById("volume");
const canvas = document.getElementById("sparkline");
const ctx = canvas.getContext("2d");

checkBtn.addEventListener("click", () => {
    const coin = (coinInput.value || "").trim().toLowerCase();
    if (!coin) {
        showMessage("⚠ দয়া করে কয়েন আইডি লিখুন (উদা. bitcoin)");
        return;
    }
    fetchCoinData(coin);
});

// helper to show messages
function showMessage(txt, isError = false) {
    messages.innerText = txt;
    messages.style.color = isError ? "var(--danger)" : "var(--muted)";
}

// show/hide loader
function setLoading(on) {
    loader.classList.toggle("hidden", !on);
    checkBtn.disabled = on;
    if (on) {
        showMessage("");
    }
}

async function fetchCoinData(coinId) {
    setLoading(true);
    output.classList.add("hidden");
    try {
        // 1) Get price + change + market data via /coins/markets (gives more details)
        // Endpoint: /coins/markets?vs_currency=usd&ids={coinId}
        const marketUrl = `${baseURL}/coins/markets?vs_currency=usd&ids=${encodeURIComponent(coinId)}&price_change_percentage=24h`;
        const opts = {
            method: "GET",
            headers: {}
        };
        if (USE_PRO_API && PRO_API_KEY && PRO_API_KEY !== "YOUR_API_KEY_HERE") {
            opts.headers["x-cg-pro-api-key"] = PRO_API_KEY;
        }
        // If using free API, pro header is not required.

        const resp1 = await fetchWithTimeout(marketUrl, opts, 12000);
        if (!resp1.ok) {
            throw new Error(`Market data error: ${resp1.status} ${resp1.statusText}`);
        }
        const arr = await resp1.json();
        if (!arr || arr.length === 0) {
            throw new Error("কোনো ডেটা পাওয়া যায়নি — ভুল কয়েন আইডি হতে পারে");
        }
        const coin = arr[0];

        // fill UI
        coinNameEl.innerText = `${coin.name} (${coin.symbol.toUpperCase()})`;
        priceEl.innerText = formatUSD(coin.current_price);
        changeEl.innerHTML = formatChange(coin.price_change_percentage_24h);
        marketCapEl.innerText = coin.market_cap ? formatCompact(coin.market_cap) : "—";
        volumeEl.innerText = coin.total_volume ? formatCompact(coin.total_volume) : "—";

        // 2) fetch market_chart for sparkline (last 1 day)
        const chartUrl = `${baseURL}/coins/${encodeURIComponent(coin.id)}/market_chart?vs_currency=usd&days=1&interval=hourly`;
        const resp2 = await fetchWithTimeout(chartUrl, opts, 12000);
        if (!resp2.ok) {
            // still show price but warn
            showMessage("⚠ চার্টের ডেটা পাওয়া যায়নি (CORS/Rate limit) — কিন্তু প্রাইস দেখানো হলো", true);
            drawEmptyChart();
            output.classList.remove("hidden");
            setLoading(false);
            return;
        }
        const chartData = await resp2.json();
        // chartData.prices => [ [timestamp, price], ... ]
        drawSparkline(chartData.prices || []);

        output.classList.remove("hidden");
        showMessage("ব موفق: ডেটা আপডেট হয়েছে");
    } catch (err) {
        console.error(err);
        showMessage("ত্রুটি: " + (err.message || err), true);
        drawEmptyChart();
        output.classList.remove("hidden");
    } finally {
        setLoading(false);
    }
}

// small fetch wrapper with timeout
function fetchWithTimeout(url, opts = {}, timeout = 10000) {
    // ensure headers exist
    opts.headers = opts.headers || {};
    // if using pro API and key present, header already set
    // (Note: putting key in query string is less secure)
    return Promise.race([
        fetch(url, opts),
        new Promise((_, rej) => setTimeout(() => rej(new Error("Request timeout")), timeout))
    ]);
}

// formatting helpers
function formatUSD(v) {
    if (v === null || v === undefined) return "—";
    // show 2 decimals if >1 else 6 decimals
    if (v >= 1) return "$" + Number(v).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2});
    return "$" + Number(v).toLocaleString(undefined, {minimumFractionDigits:6, maximumFractionDigits:8});
}
function formatChange(pct) {
    if (pct === null || pct === undefined) return "—";
    const fixed = Number(pct).toFixed(2) + "%";
    const positive = pct >= 0;
    const color = positive ? "var(--success)" : "var(--danger)";
    return `<span style="color:${color}; font-weight:700">${positive ? "▲ " : "▼ "}${fixed}</span>`;
}
function formatCompact(n) {
    if (n === null || n === undefined) return "—";
    // compact with suffixes
    const abs = Math.abs(n);
    if (abs >= 1e12) return (n / 1e12).toFixed(2) + "T";
    if (abs >= 1e9) return (n / 1e9).toFixed(2) + "B";
    if (abs >= 1e6) return (n / 1e6).toFixed(2) + "M";
    if (abs >= 1e3) return (n / 1e3).toFixed(2) + "K";
    return n.toString();
}

// draw sparkline on canvas
function drawSparkline(points) {
    // clear canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);

    if (!points || points.length === 0) {
        drawEmptyChart();
        return;
    }

    // points: [ [ts, price], ... ]
    const prices = points.map(p => p[1]);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const w = canvas.width;
    const h = canvas.height;
    const pad = 6;

    // background
    ctx.fillStyle = "rgba(255,255,255,0.03)";
    ctx.fillRect(0,0,w,h);

    // line
    ctx.beginPath();
    for (let i=0;i<prices.length;i++) {
        const x = pad + (i/(prices.length-1))*(w - pad*2);
        const y = pad + (1 - (prices[i]-min)/(max-min || 1))*(h - pad*2);
        if (i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    // stroke gradient
    const grad = ctx.createLinearGradient(0,0,w,0);
    grad.addColorStop(0, "rgba(255,179,71,0.9)");
    grad.addColorStop(1, "rgba(255,115,0,0.9)");
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2;
    ctx.stroke();

    // fill under curve
    ctx.lineTo(w-pad, h-pad);
    ctx.lineTo(pad, h-pad);
    ctx.closePath();
    const grad2 = ctx.createLinearGradient(0,0,0,h);
    grad2.addColorStop(0, "rgba(255,179,71,0.12)");
    grad2.addColorStop(1, "rgba(255,179,71,0.03)");
    ctx.fillStyle = grad2;
    ctx.fill();

    // draw min & max labels
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.font = "12px system-ui, Arial";
    ctx.fillText("$" + formatShortNumber(max), 8, 14);
    ctx.fillText("$" + formatShortNumber(min), 8, h - 6);
}

function drawEmptyChart() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.02)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.font = "14px system-ui, Arial";
    ctx.fillText("চার্ট ডেটা নেই", 12, canvas.height/2);
}

function formatShortNumber(v) {
    if (!isFinite(v)) return String(v);
    if (v >= 1e9) return (v/1e9).toFixed(2) + "B";
    if (v >= 1e6) return (v/1e6).toFixed(2) + "M";
    if (v >= 1e3) return (v/1e3).toFixed(2) + "K";
    if (v >= 1) return Number(v).toFixed(2);
    return Number(v).toPrecision(4);
}

// initial placeholder
drawEmptyChart();
showMessage("কয়েন লিখে 'চেক করুন' চাপুন");
