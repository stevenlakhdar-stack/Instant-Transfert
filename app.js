// --- CONFIGURATION & I18N ---
const FEE_PERCENT = 0.01; // Frais fixés à 1%

const translations = {
    fr: {
        pageTitle: "Instant Transfert - Global",
        heroBadge: "🌍 Transferts Internationaux",
        heroTitle: "Envoyez de l'argent vers<br> <span class=\"grt-text\">vos proches,<br>où qu'ils soient.</span>",
        heroDesc: "Envoyez et recevez facilement dans le monde entier. Rapide, sécurisé et très accessible.",
        loyaltyTitle: "Programme de fidélité",
        loyaltyDesc: "Frais bloqués à 1% — Et le 5ème de vos transferts est 100% sans frais !",
        feat1: "⚡ Transfert instantané",
        feat2: "🔒 100% Sécurisé",
        feat3: "💸 Frais 1.00%",
        step1Title: "Simuler l'envoi",
        step1Ind: "Étape 1/3",
        originCountry: "Pays d'envoi",
        destCountry: "Pays de destination",
        youSend: "Vous envoyez",
        exchRateLbl: "Taux de change",
        transferFeeLbl: "Frais de transfert (1%)",
        totalPayLbl: "Total à payer",
        loyaltyStatus: "Vous en êtes à 4/5 envois. Encore un et le prochain est gratuit !",
        recipientReceives: "Le destinataire reçoit",
        btnStart: "Commencer l'envoi",
        rateError: "Avertissement : Les taux entre ces devises sont introuvables.",
        step2Title: "Destinataire",
        step2Ind: "Étape 2/3",
        receiveMethodLbl: "Méthode de réception locale",
        phoneLbl: "Numéro de téléphone ou compte",
        nameLbl: "Nom complet du bénéficiaire",
        btnBack: "Retour",
        btnContinue: "Continuer",
        step3Title: "Paiement",
        step3Ind: "Étape 3/3",
        sendingWord: "Envoi de",
        toWord: "à",
        payMethodLbl: "Méthode de paiement",
        payBank: "Virement Bancaire",
        payCard: "Carte Bancaire",
        btnPay: "Payer",
        successTitle: "Transfert réussi !",
        successP1: "Vos",
        successP2: "ont été convertis. Le destinataire a reçu instantanément",
        successP3: "sur son compte.",
        btnNew: "Faire un autre transfert",
        searchPlaceholder: "Rechercher...",
        loading: "Chargement... 🌍",
        notFound: "Aucun pays trouvé",
        navUser: "Connexion",
        modalTitle: "Rejoignez-nous",
        modalDesc: "Créez votre compte en quelques secondes.",
        authGoogle: "Continuer avec Google",
        authApple: "Continuer avec Apple",
        authOr: "ou via email",
        authSignBtn: "Créer le compte",
        modeSend: "Envoyer",
        modeRequest: "Demander",
        errorStep2: "Veuillez remplir correctement ces informations.",
        shareLink: "Partager le lien",
        requestSent: "Demande envoyée !",
        favTitle: "Contacts favoris",
        btnReceipt: "Télécharger le reçu",
        referTitle: "Offrez 10 CAD, recevez 10 CAD",
        referDesc: "Invitez vos amis et recevez un bonus dès leur premier transfert.",
        btnCopy: "Copier",
        mapTitle: "Sélectionnez votre destination",
        mapHint: "Cliquez sur un pays pour le choisir comme destination.",
        notifSent: "Transfert vers {name} initié.",
        notifRequest: "{name} vous a envoyé une demande de paiement."
    },
    en: {
        pageTitle: "Instant Transfer - Global",
        heroBadge: "🌍 International Transfers",
        heroTitle: "Send money to<br> <span class=\"grt-text\">your loved ones,<br>wherever they are.</span>",
        heroDesc: "Send and receive easily worldwide. Fast, secure, and highly accessible.",
        loyaltyTitle: "Loyalty Program",
        loyaltyDesc: "Fees capped at 1% — And your 5th transfer is 100% fee-free!",
        feat1: "⚡ Instant transfer",
        feat2: "🔒 100% Secure",
        feat3: "💸 1.00% Fees",
        step1Title: "Simulate Transfer",
        step1Ind: "Step 1/3",
        originCountry: "Sending Country",
        destCountry: "Destination Country",
        youSend: "You send",
        exchRateLbl: "Exchange Rate",
        transferFeeLbl: "Transfer Fee (1%)",
        totalPayLbl: "Total to pay",
        loyaltyStatus: "You have sent 4/5 times. One more and the next is free!",
        recipientReceives: "Recipient receives",
        btnStart: "Start transfer",
        rateError: "Warning: Exchange rates for these currencies are unavailable.",
        step2Title: "Recipient",
        step2Ind: "Step 2/3",
        receiveMethodLbl: "Local Reception Method",
        phoneLbl: "Phone number or account",
        nameLbl: "Recipient's full name",
        btnBack: "Back",
        btnContinue: "Continue",
        step3Title: "Payment",
        step3Ind: "Step 3/3",
        sendingWord: "Sending",
        toWord: "to",
        payMethodLbl: "Payment Method",
        payBank: "Bank Transfer",
        payCard: "Credit Card",
        btnPay: "Pay",
        successTitle: "Transfer successful!",
        successP1: "Your",
        successP2: "were converted. The recipient instantly received",
        successP3: "in their account.",
        btnNew: "Make another transfer",
        searchPlaceholder: "Search...",
        loading: "Loading... 🌍",
        notFound: "No country found",
        navUser: "Login",
        modalTitle: "Join us",
        modalDesc: "Create your account in seconds.",
        authGoogle: "Continue with Google",
        authApple: "Continue with Apple",
        authOr: "or via email",
        authSignBtn: "Create account",
        modeSend: "Send",
        modeRequest: "Request",
        errorStep2: "Please fill in these details correctly.",
        shareLink: "Share link",
        requestSent: "Request sent!",
        favTitle: "Favorite contacts",
        btnReceipt: "Download receipt",
        referTitle: "Give 10 CAD, get 10 CAD",
        referDesc: "Invite your friends and get a bonus on their first transfer.",
        btnCopy: "Copy",
        mapTitle: "Select your destination",
        mapHint: "Click on a country to choose it as a destination.",
        notifSent: "Transfer to {name} initiated.",
        notifRequest: "{name} sent you a payment request."
    },
    es: {
        pageTitle: "Transferencia Instantánea - Global",
        heroBadge: "🌍 Transferencias Internacionales",
        heroTitle: "Envía dinero a<br> <span class=\"grt-text\">tus seres queridos,<br>estén donde estén.</span>",
        heroDesc: "Envía y recibe fácilmente en todo el mundo. Rápido, seguro y muy accesible.",
        loyaltyTitle: "Programa de Fidelidad",
        loyaltyDesc: "¡Tarifas limitadas al 1% — Y tu 5ta transferencia es 100% gratuita!",
        feat1: "⚡ Transferencia instantánea",
        feat2: "🔒 100% Seguro",
        feat3: "💸 1.00% Comisión",
        step1Title: "Simular Transferencia",
        step1Ind: "Paso 1/3",
        originCountry: "País de Envío",
        destCountry: "País de Destino",
        youSend: "Tú envías",
        exchRateLbl: "Tipo de Cambio",
        transferFeeLbl: "Comisión (1%)",
        totalPayLbl: "Total a pagar",
        loyaltyStatus: "Has realizado 4/5 envíos. ¡Uno más y el próximo es gratis!",
        recipientReceives: "El destinatario recibe",
        btnStart: "Comenzar envío",
        rateError: "Advertencia: Tipos de cambio entre estas divisas no disponibles.",
        step2Title: "Destinatario",
        step2Ind: "Paso 2/3",
        receiveMethodLbl: "Método de recepción local",
        phoneLbl: "Número de teléfono o cuenta",
        nameLbl: "Nombre completo del beneficiario",
        btnBack: "Volver",
        btnContinue: "Continuar",
        step3Title: "Pago",
        step3Ind: "Paso 3/3",
        sendingWord: "Enviando",
        toWord: "a",
        payMethodLbl: "Método de Pago",
        payBank: "Transferencia Bancaria",
        payCard: "Tarjeta de Crédito",
        btnPay: "Pagar",
        successTitle: "¡Transferencia exitosa!",
        successP1: "Tus",
        successP2: "fueron convertidos. El destinatario recibió al instante",
        successP3: "en su cuenta.",
        btnNew: "Hacer otra transferencia",
        searchPlaceholder: "Buscar...",
        loading: "Cargando... 🌍",
        notFound: "Ningún país encontrado",
        navUser: "Acceder",
        modalTitle: "Únete a nosotros",
        modalDesc: "Crea tu cuenta en segundos.",
        authGoogle: "Continuar con Google",
        authApple: "Continuar con Apple",
        authOr: "o por correo",
        authSignBtn: "Crear cuenta",
        modeSend: "Enviar",
        modeRequest: "Solicitar",
        errorStep2: "Por favor, complete estos detalles correctamente.",
        shareLink: "Compartir enlace",
        requestSent: "¡Solicitud enviada!"
    }
};

let currentLang = "fr";

function updateLanguage() {
    const d = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (d[key]) el.innerHTML = d[key];
    });
    
    document.getElementById('originSearch').placeholder = d.searchPlaceholder;
    document.getElementById('destSearch').placeholder = d.searchPlaceholder;
    if(globalCountriesData.length === 0) {
        document.getElementById('originSelectedText').innerHTML = d.loading;
        document.getElementById('destSelectedText').innerHTML = d.loading;
    }
    
    if(tempCountriesGlobal.length > 0) {
        renderDropdownList('origin', tempCountriesGlobal);
        renderDropdownList('dest', tempCountriesGlobal);
        document.getElementById('originSelectedText').innerHTML = `${globalCountriesData[currentOriginCca2].flag} ${getCountryName(globalCountriesData[currentOriginCca2])}`;
        document.getElementById('destSelectedText').innerHTML = `${globalCountriesData[currentDestCca2].flag} ${getCountryName(globalCountriesData[currentDestCca2])}`;
    }
}

document.getElementById('languageSelect').addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateLanguage();
});

// --- MODAL UTILISATEUR ---
const userBtn = document.getElementById('userBtn');
const userModal = document.getElementById('userModal');
const closeUserModal = document.getElementById('closeUserModal');

userBtn.addEventListener('click', () => { userModal.classList.add('show'); });
closeUserModal.addEventListener('click', () => { userModal.classList.remove('show'); });
userModal.addEventListener('click', (e) => {
    if (e.target === userModal) userModal.classList.remove('show');
});


// --- DATA STRUCTURES ---
let globalCountriesData = {};
let tempCountriesGlobal = [];
let originRates = {}; 
let currentOriginCca2 = "CA";
let currentDestCca2 = "SN";
let isRateAvailable = true;
let currentAppMode = "send"; // "send" or "request"
let rateChart = null;
let savedContacts = JSON.parse(localStorage.getItem('instant_contacts') || '[]');
let notifications = [];

const customOperators = {
    "SN": [{val: "wave", label: "Wave 🌊"}, {val: "orange", label: "Orange 🟠"}, {val: "free", label: "Free 🔴"}],
    "CI": [{val: "wave", label: "Wave 🌊"}, {val: "orange", label: "Orange 🟠"}, {val: "mtn", label: "MTN 🟡"}],
    "MA": [{val: "cash", label: "Cash Plus 💶"}, {val: "wafacash", label: "Wafacash 🟡"}, {val: "bank", label: "Virement 🏦"}],
    "GH": [{val: "mtn", label: "MTN 🟡"}, {val: "vodafone", label: "Telecel 🔴"}]
};

function getCountryName(c) {
    if (!c.translations) return c.name;
    if (currentLang === 'fr' && c.translations.fra) return c.translations.fra.common;
    if (currentLang === 'es' && c.translations.spa) return c.translations.spa.common;
    return c.name; 
}

// --- INITIALISATION DES PAYS ---
async function initGlobalData() {
    try {
        const countryRes = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2,idd,currencies,flag,translations");
        const rawCountries = await countryRes.json();
        
        let tempCountries = [];
        
        rawCountries.forEach(c => {
            if (!c.currencies || Object.keys(c.currencies).length === 0) return;
            const currencyCode = Object.keys(c.currencies)[0];
            
            let prefix = "";
            if (c.idd && c.idd.root) {
                prefix = c.idd.root + (c.idd.suffixes && c.idd.suffixes.length === 1 ? c.idd.suffixes[0] : "");
            }

            const ops = customOperators[c.cca2] || [
                {val: "bank", label: "Bank Transfer 🏦"},
                {val: "wallet", label: "Mobile Wallet 📱"},
                {val: "cash", label: "Cash 💵"}
            ];

            tempCountries.push({
                cca2: c.cca2,
                name: c.name.common,
                translations: c.translations,
                flag: c.flag || "🌍",
                currency: currencyCode,
                prefix: prefix,
                operators: ops
            });
        });

        tempCountries.sort((a, b) => getCountryName(a).localeCompare(getCountryName(b)));
        tempCountriesGlobal = tempCountries;

        tempCountries.forEach(c => {
            globalCountriesData[c.cca2] = c;
        });

        renderDropdownList('origin', tempCountriesGlobal);
        renderDropdownList('dest', tempCountriesGlobal);
        
        selectCountry('origin', "CA");
        selectCountry('dest', "SN");

        updateLanguage();
        renderFavList();
        initMockNotifications();
        
    } catch (error) {
        console.error("Erreur API:", error);
        document.getElementById('originSelectedText').textContent = '❌ API Error';
    }
}

// --- GESTION DES TAUX DE CHANGE (DYNAMIQUE) ---
async function fetchRatesForOrigin(currencyCode) {
    try {
        const rateRes = await fetch(`https://open.er-api.com/v6/latest/${currencyCode}`);
        const rateData = await rateRes.json();
        originRates = rateData.rates;
        isRateAvailable = true;
        document.getElementById('rateErrorMsg').style.display = "none";
    } catch (e) {
        originRates = {};
        isRateAvailable = false;
        document.getElementById('rateErrorMsg').style.display = "block";
    }
    updateConversion();
    updateChart();
}

function switchMode(mode) {
    currentAppMode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(mode === 'send' ? 'modeSend' : 'modeRequest').classList.add('active');
    
    // UI Updates
    const d = translations[currentLang];
    document.getElementById('step1TitleEl').textContent = mode === 'send' ? d.step1Title : d.modeRequest;
    document.getElementById('receiveMethodLblEl').textContent = mode === 'send' ? d.receiveMethodLbl : (currentLang === 'fr' ? "Méthode de paiement du tiers" : "Third-party payment method");
    
    const payBtn = document.querySelector('.btn-pay');
    if (payBtn) {
        payBtn.innerHTML = mode === 'send' ? `<span data-i18n="btnPay">${d.btnPay}</span> <span id="finalPay">...</span> <span id="finalCurr">...</span>` : `<span data-i18n="shareLink">${d.shareLink}</span>`;
    }

    updateConversion();
}

function initChart() {
    const ctx = document.getElementById('rateChart').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 50);
    gradient.addColorStop(0, 'rgba(236, 72, 153, 0.4)');
    gradient.addColorStop(1, 'rgba(236, 72, 153, 0)');

    rateChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', '', ''],
            datasets: [{
                data: [0, 0, 0, 0, 0, 0, 0],
                borderColor: '#ec4899',
                borderWidth: 2,
                fill: true,
                backgroundColor: gradient,
                tension: 0.4,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: { x: { display: false }, y: { display: false } }
        }
    });
}

function updateChart() {
    if (!rateChart) return;
    const destCountry = globalCountriesData[currentDestCca2];
    if (!destCountry) return;
    
    let rate = 1;
    if (isRateAvailable && originRates[destCountry.currency]) {
        rate = originRates[destCountry.currency];
    }

    // Simulate 7 days history
    const baseRate = rate;
    const data = [];
    for (let i = 0; i < 7; i++) {
        data.push(baseRate * (0.98 + Math.random() * 0.04));
    }
    data[6] = rate; // Today is actual rate

    rateChart.data.datasets[0].data = data;
    rateChart.update();
}

// --- DOM ELEMENTS (DROPDOWNS) ---
function setupDropdown(type) {
    const header = document.getElementById(`${type}DropdownHeader`);
    const body = document.getElementById(`${type}DropdownBody`);
    const search = document.getElementById(`${type}Search`);
    const container = document.getElementById(`${type}DropdownContainer`);

    header.addEventListener('click', (e) => {
        e.stopPropagation();
        body.classList.toggle('show');
        if (body.classList.contains('show')) search.focus();
    });

    document.addEventListener('click', (e) => {
        if (container && !container.contains(e.target)) {
            body.classList.remove('show');
        }
    });

    search.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const filtered = tempCountriesGlobal.filter(c => {
            const name = getCountryName(c).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return name.includes(term) || c.currency.toLowerCase().includes(term);
        });
        renderDropdownList(type, filtered);
    });
}

setupDropdown('origin');
setupDropdown('dest');

function renderDropdownList(type, list) {
    const listEl = document.getElementById(`${type}List`);
    listEl.innerHTML = "";
    if(list.length === 0) {
         listEl.innerHTML = `<div style="padding: 12px 16px; color: var(--text-muted); text-align:center;">${translations[currentLang].notFound}</div>`;
         return;
    }
    
    list.forEach(c => {
        const div = document.createElement('div');
        div.className = 'dropdown-option';
        div.textContent = `${c.flag} ${getCountryName(c)} (${c.currency})`;
        div.addEventListener('click', () => {
            selectCountry(type, c.cca2);
            document.getElementById(`${type}DropdownBody`).classList.remove('show');
            document.getElementById(`${type}Search`).value = ""; 
            renderDropdownList(type, tempCountriesGlobal); 
        });
        listEl.appendChild(div);
    });
}

function selectCountry(type, cca2) {
    if (!globalCountriesData[cca2]) return;
    const country = globalCountriesData[cca2];
    
    document.getElementById(`${type}SelectedText`).textContent = `${country.flag} ${getCountryName(country)}`;
    
    if (type === 'origin') {
        currentOriginCca2 = cca2;
        document.getElementById('currencyOriginTag').textContent = country.currency;
        fetchRatesForOrigin(country.currency); 
    } else {
        currentDestCca2 = cca2;
        updateDestUI(country);
    }
}

function updateDestUI(country) {
    document.getElementById('currencyDestTag').textContent = country.currency;
    document.getElementById('dialPrefix').textContent = country.prefix;
    
    const walletType = document.getElementById('walletType');
    walletType.innerHTML = "";
    country.operators.forEach(op => {
        const option = document.createElement('option');
        option.value = op.val;
        let label = op.label;
        if(currentLang==='fr' && label==="Bank Transfer 🏦") label = "Virement Bancaire 🏦";
        if(currentLang==='fr' && label==="Mobile Wallet 📱") label = "Portefeuille Mobile 📱";
        if(currentLang==='es' && label==="Bank Transfer 🏦") label = "Transferencia Bancaria 🏦";
        if(currentLang==='es' && label==="Mobile Wallet 📱") label = "Billetera Móvil 📱";
        option.textContent = label;
        walletType.appendChild(option);
    });
    
    updateConversion();
}

// --- CALCULS & DOM ---
const sendAmountInput = document.getElementById('sendAmount');
const receiveAmountInput = document.getElementById('receiveAmount');

sendAmountInput.addEventListener('input', updateConversion);

function updateConversion() {
    let cadAmount = parseFloat(sendAmountInput.value);
    const destCountry = globalCountriesData[currentDestCca2];
    const origCountry = globalCountriesData[currentOriginCca2];
    if (!destCountry || !origCountry) return;

    if (isNaN(cadAmount) || cadAmount < 0) cadAmount = 0;

    let rate = 1;
    if (isRateAvailable && originRates[destCountry.currency]) {
        rate = originRates[destCountry.currency];
        document.getElementById('rateErrorMsg').style.display = "none";
    } else if (origCountry.currency === destCountry.currency) {
        rate = 1;
    } else {
        document.getElementById('rateErrorMsg').style.display = "block";
    }

    const convertedAmount = cadAmount * rate;
    const fee = cadAmount * FEE_PERCENT;
    const totalPay = cadAmount + fee;

    const isDecimalContent = !["XOF", "XAF", "CVE", "GNF"].includes(destCountry.currency);
    const formattedReceived = isDecimalContent ? 
        convertedAmount.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) :
        Math.floor(convertedAmount).toLocaleString('fr-FR');

    receiveAmountInput.value = formattedReceived;
    
    let displayRate = rate > 10 ? Math.round(rate * 100) / 100 : rate;
    
    document.getElementById('exchangeRateTxt').textContent = displayRate;
    document.getElementById('rateCurr1').textContent = origCountry.currency;
    document.getElementById('rateCurr2').textContent = destCountry.currency;
    
    document.getElementById('feeTxt').textContent = fee.toFixed(2);
    document.getElementById('feeCurr').textContent = origCountry.currency;
    document.getElementById('totalPay').textContent = totalPay.toFixed(2);
    document.getElementById('totalCurr').textContent = origCountry.currency;
    document.getElementById('finalPay').textContent = totalPay.toFixed(2);
    document.getElementById('finalCurr').textContent = origCountry.currency;
    
    document.getElementById('recapReceive').textContent = formattedReceived;
    document.getElementById('recapCurr').textContent = destCountry.currency;
    
    document.getElementById('successSent').textContent = cadAmount.toLocaleString('fr-FR');
    document.getElementById('sucOrigCurr').textContent = origCountry.currency;
    document.getElementById('successRec').textContent = formattedReceived;
    document.getElementById('sucDestCurr').textContent = destCountry.currency;
}

initGlobalData();

document.getElementById('themeToggle').addEventListener('click', () => {
    const htmlEl = document.documentElement;
    const currentTheme = htmlEl.getAttribute('data-theme');
    htmlEl.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
});


// --- WIKIPEDIA API ---
async function fetchWikiFact(countryName) {
    try {
        const langUrl = currentLang === 'en' ? 'en' : (currentLang === 'es' ? 'es' : 'fr');
        const res = await fetch(`https://${langUrl}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(countryName)}`);
        if (!res.ok) return null;
        const data = await res.json();
        return {
            fact: data.extract,
            img: data.thumbnail ? data.thumbnail.source : (data.originalimage ? data.originalimage.source : null)
        };
    } catch(e) {
        return null;
    }
}

async function nextStep(stepNumber) {
    if (stepNumber === 2) {
        // Simple Reset errors
        document.getElementById('errorMsgStep2').style.display = 'none';
        document.querySelectorAll('.standard-input').forEach(i => i.classList.remove('error-border', 'error-shake'));
    }

    if (stepNumber === 3) {
        const nameInput = document.getElementById('recipientName');
        const phoneInput = document.getElementById('recipientPhone');
        
        let isValid = true;
        if (!nameInput.value.trim()) {
            nameInput.classList.add('error-border', 'error-shake');
            isValid = false;
        }
        if (!phoneInput.value.trim() || phoneInput.value.length < 5) {
            phoneInput.classList.add('error-border', 'error-shake');
            isValid = false;
        }

        if (!isValid) {
            document.getElementById('errorMsgStep2').style.display = 'block';
            return;
        }

        const name = nameInput.value.trim();
        document.getElementById('recapName').textContent = name;
        
        // Suggest adding to favs if not already there
        // (Logic handled in processPayment)
    }
    
    if (stepNumber === 4) {
        // Logique Utilisateur
        const destCountryName = globalCountriesData[currentDestCca2] ? getCountryName(globalCountriesData[currentDestCca2]) : "Monde";
        const box = document.getElementById('culturalFactBox');
        const textEl = document.getElementById('culturalFactText');
        
        textEl.textContent = "Recherche d'informations culturelles...";
        box.style.display = 'block';
        box.style.backgroundImage = 'none';
        box.style.background = 'linear-gradient(135deg, var(--primary-color), #ec4899)';

        // API Call Non-bloquant
        fetchWikiFact(destCountryName).then(wikiData => {
            if (wikiData && wikiData.fact) {
                textEl.textContent = wikiData.fact;
                if (wikiData.img) {
                    box.style.backgroundImage = `url('${wikiData.img}')`;
                }
            } else {
                textEl.textContent = "L'argent voyage plus vite que jamais, rapprochant les cultures et les familles à travers la planète.";
            }
        }).catch(() => {
            textEl.textContent = "L'argent voyage plus vite que jamais, rapprochant les cultures et les familles à travers la planète.";
        });

        // Update success text for Request mode
        if (currentAppMode === 'request') {
            document.querySelector('.grt-text[data-i18n="successTitle"]').textContent = translations[currentLang].requestSent;
            document.getElementById('culturalFactBox').previousElementSibling.style.display = 'none';
        } else {
            document.querySelector('.grt-text[data-i18n="successTitle"]').textContent = translations[currentLang].successTitle;
            document.getElementById('culturalFactBox').previousElementSibling.style.display = 'block';
        }
    }
    
    document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
    document.getElementById(`step${stepNumber}`).classList.add('active');
}

function processPayment() {
    const btn = document.querySelector('.btn-pay');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = `<span style="display:inline-block; animation:spin 1s linear infinite;">⏳</span>`;
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        
        const recipientNameTxt = document.getElementById('recipientName').value.trim() || 'Beneficiary';
        const finalAmnt = document.getElementById('totalPay').textContent;
        const curOrig = document.getElementById('totalCurr').textContent;
        
        const type = currentAppMode === 'send' ? 'send' : 'request';
        addTransactionToHistory(currentDestCca2, finalAmnt, curOrig, recipientNameTxt, type);
        saveContact(recipientNameTxt, document.getElementById('recipientPhone').value.trim(), currentDestCca2);

        document.getElementById('recipientName').value = '';
        document.getElementById('recipientPhone').value = '';

        nextStep(4);
        showToast(translations[currentLang].notifSent.replace('{name}', recipientNameTxt));
    }, 1500);
}

// --- FAVOURITE CONTACTS ---
function saveContact(name, phone, cca2) {
    if (savedContacts.find(c => c.phone === phone)) return;
    savedContacts.unshift({ name, phone, cca2 });
    if (savedContacts.length > 5) savedContacts.pop();
    localStorage.setItem('instant_contacts', JSON.stringify(savedContacts));
    renderFavList();
}

function renderFavList() {
    const container = document.getElementById('favContactsContainer');
    const list = document.getElementById('favList');
    if (!container || !list) return;

    if (savedContacts.length === 0) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'block';
    list.innerHTML = "";
    savedContacts.forEach(c => {
        const country = globalCountriesData[c.cca2];
        const initial = c.name.charAt(0).toUpperCase();
        const div = document.createElement('div');
        div.className = 'fav-item';
        div.innerHTML = `
            <div class="fav-avatar">${initial}</div>
            <div class="fav-name">${c.name.split(' ')[0]}</div>
        `;
        div.onclick = () => {
            document.getElementById('recipientName').value = c.name;
            document.getElementById('recipientPhone').value = c.phone;
            selectCountry('dest', c.cca2);
        };
        list.appendChild(div);
    });
}

// --- RECEIPT PDF GENERATION ---
function generateReceiptPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const TRX_ID = "TRX-" + Math.random().toString(36).substr(2, 6).toUpperCase();
    const date = new Date().toLocaleString();
    const dest = globalCountriesData[currentDestCca2];
    const amountOrig = document.getElementById('sendAmount').value;
    const amountDest = document.getElementById('recapReceive').textContent;
    const fee = document.getElementById('feeTxt').textContent;

    // Header
    doc.setFillColor(236, 72, 153);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text("INSTANT TRANSFERT", 105, 25, { align: "center" });

    // Body
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text("RECU DE TRANSACTION OFFICIEL", 20, 60);
    doc.setFontSize(10);
    doc.text(`ID Transaction: ${TRX_ID}`, 20, 70);
    doc.text(`Date: ${date}`, 20, 75);

    doc.line(20, 85, 190, 85);

    doc.setFontSize(12);
    doc.text("Détails du transfert:", 20, 100);
    doc.text(`Expéditeur: Client Instant`, 30, 110);
    doc.text(`Bénéficiaire: ${document.getElementById('recapName').textContent}`, 30, 117);
    doc.text(`Destination: ${getCountryName(dest)} ${dest.flag}`, 30, 124);

    doc.line(20, 135, 190, 135);

    doc.text("Montants:", 20, 150);
    doc.text(`Montant envoyé: ${amountOrig} CAD`, 30, 160);
    doc.text(`Frais (1%): ${fee} CAD`, 30, 167);
    doc.text(`Le bénéficiaire reçoit: ${amountDest} ${dest.currency}`, 30, 174);

    // QR Code Simulation
    doc.setDrawColor(200, 200, 200);
    doc.rect(150, 60, 30, 30);
    doc.setFontSize(8);
    doc.text("QR VERIF", 157, 77);

    // Footer
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text("Ce document est un reçu numérique généré automatiquement.", 105, 280, { align: "center" });

    doc.save(`Recu_${TRX_ID}.pdf`);
}

// --- MAP MODAL & LOGIC ---
function openMapModal() {
    document.getElementById('mapModal').classList.add('show');
    renderMap();
}
document.getElementById('closeMapModal').onclick = () => document.getElementById('mapModal').classList.remove('show');

function renderMap() {
    const container = document.getElementById('mapContainer');
    // Simplified SVG Map (Focus on world shapes)
    container.innerHTML = `
        <svg viewBox="0 0 1000 500" style="width:100%; height:100%;">
            <!-- Mock continents/major countries -->
            <path class="map-country" d="M150,100 L250,100 L250,200 L150,200 Z" data-cca2="CA" title="Canada"/>
            <path class="map-country" d="M450,250 L500,250 L500,350 L450,400 Z" data-cca2="SN" title="Senegal"/>
            <path class="map-country" d="M420,200 L480,200 L480,250 L420,250 Z" data-cca2="MA" title="Maroc"/>
            <path class="map-country" d="M200,250 L300,250 L300,350 L200,350 Z" data-cca2="BR" title="Bresil"/>
            <path class="map-country" d="M700,150 L850,150 L850,300 L700,300 Z" data-cca2="CN" title="Chine"/>
            <path class="map-country" d="M500,100 L600,100 L600,180 L500,180 Z" data-cca2="FR" title="France"/>
            <text x="200" y="155" fill="white" font-size="20" style="pointer-events:none;">CA</text>
            <text x="470" y="330" fill="white" font-size="20" style="pointer-events:none;">SN</text>
            <text x="445" y="230" fill="white" font-size="15" style="pointer-events:none;">MA</text>
            <text x="540" y="145" fill="white" font-size="20" style="pointer-events:none;">FR</text>
        </svg>
    `;
    container.querySelectorAll('.map-country').forEach(path => {
        path.onclick = () => {
            const cca2 = path.getAttribute('data-cca2');
            selectCountry('dest', cca2);
            document.getElementById('mapModal').classList.remove('show');
            showToast(`Destination: ${getCountryName(globalCountriesData[cca2])}`);
        };
    });
}

// --- NOTIFICATIONS & TOASTS ---
function initMockNotifications() {
    setInterval(() => {
        if (Math.random() > 0.8) {
            const names = ["Marie", "Alpha", "Karim", "Sophie", "Jean"];
            const name = names[Math.floor(Math.random() * names.length)];
            const msg = translations[currentLang].notifRequest.replace('{name}', name);
            showNotification(msg);
        }
    }, 15000);
}

function showNotification(msg) {
    const badge = document.getElementById('notifBadge');
    badge.style.display = 'block';
    showToast(msg);
}

document.getElementById('notifBtn').onclick = () => {
    document.getElementById('notifBadge').style.display = 'none';
};

function showToast(msg) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}

// --- REFERRAL LOGIC ---
function copyReferralCode() {
    const code = document.getElementById('promoCode').textContent;
    navigator.clipboard.writeText(code);
    showToast(currentLang === 'fr' ? "Code copié !" : "Code copied!");
}

const style = document.createElement('style');
style.innerHTML = `@keyframes spin { 100% { transform: rotate(360deg); } }`;
document.head.appendChild(style);

// --- BACKGROUND SLIDESHOW ---
const bgCitiesInfo = [
    "https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b9/Above_Gotham.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/cc/Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f4/Dakar_corniche_ouest.jpg"
];
let currentBgIndex = 0;
function changeBackground() {
    const bg = document.getElementById('bgSlideshow');
    if(bg) {
        bg.style.backgroundImage = `url('${bgCitiesInfo[currentBgIndex]}')`;
    }
    currentBgIndex = (currentBgIndex + 1) % bgCitiesInfo.length;
}
setInterval(changeBackground, 6000);
changeBackground();
initChart();

// --- TRANSACTION HISTORY ---
const localHistory = [];
function addTransactionToHistory(destCca2, amount, currency, recipientCodeName, type = 'send') {
    const country = globalCountriesData[destCca2];
    const flag = country ? country.flag : "🌍";
    
    let status = currentLang === 'fr' ? "Terminé" : (currentLang === 'en' ? "Completed" : "Completado");
    if (type === 'request') {
        status = currentLang === 'fr' ? "Demande envoyée" : (currentLang === 'en' ? "Request sent" : "Solicitud enviada");
    }
    
    localHistory.unshift({
        id: "TRX-" + Math.random().toString(36).substr(2, 6).toUpperCase(),
        flag, recipientCodeName, amount, currency, status, type
    });
    renderHistory();
}

function renderHistory() {
    const section = document.getElementById('historySection');
    const list = document.getElementById('transactionsList');
    if (!section || !list) return;
    if (localHistory.length === 0) {
        section.style.display = 'none';
        return;
    }
    section.style.display = 'block';
    list.innerHTML = "";
    localHistory.slice(0, 5).forEach(tx => {
        const symbol = tx.type === 'send' ? '-' : '+';
        const color = tx.type === 'send' ? 'var(--text-main)' : '#10b981';
        list.innerHTML += `
            <div class="transaction-item" style="display:flex; justify-content:space-between; align-items:center; border-bottom: 1px solid var(--card-border); padding-bottom:16px; padding-top:10px;">
                <div style="display:flex; align-items:center; gap: 12px;">
                    <div style="font-size:2.2rem; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));">${tx.flag}</div>
                    <div>
                        <div style="font-weight:600; font-size:1.1rem; color: var(--text-main);">${tx.recipientCodeName}</div>
                        <div style="font-size:0.85rem; color: var(--text-muted);">${tx.id}</div>
                    </div>
                </div>
                <div style="text-align:right;">
                    <div style="font-weight:bold; color:${color};">${symbol} ${tx.amount} ${tx.currency}</div>
                    <div style="color:#10b981; font-size:0.85rem; font-weight:600;">${tx.status}</div>
                </div>
            </div>
        `;
    });
}
