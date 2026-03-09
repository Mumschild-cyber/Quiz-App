// ============= QUIZ SYSTEM DATA =============
const allQuizzes = {
    love: {
        name: "Love Questions",
        icon: "💕",
        questions: [
            {question: "What is the most important ingredient in a romantic relationship?", options: ["Trust", "Money", "Physical attraction", "Social status"], answer: "Trust"},
            {question: "How often should you say 'I love you' to your partner?", options: ["Once a day", "Once a week", "Whenever you feel it", "Only on special occasions"], answer: "Whenever you feel it"},
            {question: "What is considered the best first date activity?", options: ["Dinner and conversation", "Extreme sports", "Shopping", "Video games"], answer: "Dinner and conversation"},
            {question: "How many years is considered a 'healthy' relationship milestone?", options: ["3 months", "1 year", "5 years", "All above are meaningful"], answer: "All above are meaningful"},
            {question: "What should you do if your partner forgets an important date?", options: ["Leave them immediately", "Communicate how it made you feel", "Ignore it", "Make them feel guilty forever"], answer: "Communicate how it made you feel"},
            {question: "Which is more important in love: passion or commitment?", options: ["Passion", "Commitment", "Both equally", "Neither matters"], answer: "Both equally"},
            {question: "What is the best way to apologize to someone you love?", options: ["Text message", "Through a friend", "Face-to-face with sincerity", "Ignore the issue"], answer: "Face-to-face with sincerity"},
            {question: "How should you handle conflicts with your partner?", options: ["Avoid talking about it", "Listen and communicate openly", "Always agree with them", "Bring up past arguments"], answer: "Listen and communicate openly"},
            {question: "What does love at first sight really mean?", options: ["Instant attraction", "Growing affection over time", "A movie myth", "Love is always immediate"], answer: "Instant attraction"},
            {question: "What is the best gift to express romantic love?", options: ["Something expensive", "Something thoughtful and personal", "Flowers every day", "Material items only"], answer: "Something thoughtful and personal"},
            {question: "How important is maintaining individual interests in a relationship?", options: ["Not important", "Very important", "Only for long-term relationships", "Only for married couples"], answer: "Very important"},
            {question: "What should you do if you catch feelings for someone?", options: ["Never tell them", "Tell them directly when ready", "Wait forever hoping", "Tell everyone except them"], answer: "Tell them directly when ready"},
            {question: "Which is a sign of true love?", options: ["Always agreeing", "Supporting each other's dreams", "Never arguing", "Being jealous"], answer: "Supporting each other's dreams"},
            {question: "How long does it take to truly fall in love?", options: ["A few days", "It varies for everyone", "Exactly 6 months", "One year always"], answer: "It varies for everyone"},
            {question: "What makes a relationship last long?", options: ["Physical looks", "Money and status", "Effort, trust, and communication", "Luck alone"], answer: "Effort, trust, and communication"},
            {question: "Is it okay to have doubts in a relationship?", options: ["No, never", "Yes, it's normal and healthy", "Only at the beginning", "Only if you're not in love"], answer: "Yes, it's normal and healthy"},
            {question: "What is the most romantic gesture you can do?", options: ["Grand public display", "Listening and understanding them", "Expensive gifts", "Constant texting"], answer: "Listening and understanding them"},
        ]
    },
    football: {
        name: "Football Questions",
        icon: "⚽",
        questions: [
            {question: "How many players does each team have on the pitch in a standard football match?", options: ["9", "10", "11", "12"], answer: "11"},
            {question: "How long is a standard football match (excluding stoppage time)?", options: ["60 minutes", "80 minutes", "90 minutes", "100 minutes"], answer: "90 minutes"},
            {question: "How many points is a win worth in most football leagues?", options: ["1", "2", "3", "5"], answer: "3"},
            {question: "What is the restart called after a goal is scored?", options: ["Drop ball", "Kick-off", "Throw-in", "Goal-kick"], answer: "Kick-off"},
            {question: "Which card means a player is sent off?", options: ["Yellow", "Red", "Green", "Blue"], answer: "Red"},
            {question: "What does VAR stand for in football?", options: ["Video Assistant Referee", "Verified Action Replay", "Virtual Assistant Review", "Video Attack Ruling"], answer: "Video Assistant Referee"},
            {question: "Which country won the first FIFA World Cup in 1930?", options: ["Brazil", "Uruguay", "Italy", "Argentina"], answer: "Uruguay"},
            {question: "From which restart can a player NOT be offside?", options: ["Throw-in", "Free Kick", "Open play", "Penalty kick"], answer: "Throw-in"},
            {question: "How far is the penalty spot from the goal line?", options: ["6 yards", "12 yards", "18 yards", "22 yards"], answer: "12 yards"},
            {question: "From which type of free kick can you score directly without another touch?", options: ["Direct free kick", "Indirect free kick", "Both", "Neither"], answer: "Direct free kick"},
            {question: "What is the area in front of the goal called?", options: ["Penalty area", "Goal area", "D-box", "All of the above"], answer: "All of the above"},
            {question: "How many substitutes can a team typically make in a match?", options: ["1", "2", "3", "5"], answer: "3"},
            {question: "What does 'offside' mean?", options: ["Being in front of the ball", "Being ahead of defenders", "Being ahead of the second-to-last defender", "Being behind the goal line"], answer: "Being ahead of the second-to-last defender"},
            {question: "Which player wears a different colored jersey?", options: ["Defender", "Midfielder", "Goalkeeper", "Forward"], answer: "Goalkeeper"},
            {question: "How many times can a goalkeeper touch the ball with hands in a match?", options: ["Unlimited", "Once per play", "Only on crosses", "Never"], answer: "Unlimited"},
            {question: "What is the diameter of a football?", options: ["20-22 cm", "25-28 cm", "30-35 cm", "40-45 cm"], answer: "25-28 cm"},
            {question: "Who won the most FIFA World Cup titles?", options: ["Germany", "Argentina", "Brazil", "France"], answer: "Brazil"},
        ]
    },
    nigeria: {
        name: "Nigeria Economy",
        icon: "🇳🇬",
        questions: [
            {question: "What is Nigeria's largest source of revenue?", options: ["Agriculture", "Oil and gas", "Telecommunications", "Manufacturing"], answer: "Oil and gas"},
            {question: "What is Nigeria's official currency?", options: ["Pound", "Dollar", "Naira", "Euro"], answer: "Naira"},
            {question: "Which Nigerian sector employs the most people?", options: ["Oil", "Agriculture", "Retail", "Technology"], answer: "Agriculture"},
            {question: "What percentage of Nigeria's GDP does oil contribute?", options: ["10-20%", "30-40%", "50-60%", "70-80%"], answer: "30-40%"},
            {question: "Which is Nigeria's largest commercial bank?", options: ["Access Bank", "GTBank", "Zenith Bank", "First Bank"], answer: "First Bank"},
            {question: "What is the minimum wage in Nigeria (2024)?", options: ["₦18,000", "₦30,000", "₦70,000", "₦100,000"], answer: "₦70,000"},
            {question: "Nigeria's stock exchange is located in which city?", options: ["Lagos", "Abuja", "Kano", "Port Harcourt"], answer: "Lagos"},
            {question: "What is Nigeria's major export product?", options: ["Cocoa", "Coffee", "Crude oil", "Cotton"], answer: "Crude oil"},
            {question: "How many states does Nigeria have?", options: ["30", "33", "36", "37"], answer: "36"},
            {question: "What is Nigeria's inflation rate approximately (2024)?", options: ["10%", "20%", "30%", "40%"], answer: "30%"},
            {question: "Which Nigerian sector is growing fastest currently?", options: ["Oil", "Technology", "Agriculture", "Mining"], answer: "Technology"},
            {question: "What is Nigeria's GDP ranking in Africa?", options: ["1st", "2nd", "3rd", "5th"], answer: "1st"},
            {question: "Nigeria's central bank is called?", options: ["CBN", "NBD", "NGB", "NBC"], answer: "CBN"},
            {question: "What is the primary agricultural product of Nigeria?", options: ["Rice", "Cassava", "Maize", "All of the above"], answer: "All of the above"},
            {question: "How many major oil fields does Nigeria have?", options: ["5", "15", "25", "35"], answer: "15"},
            {question: "Nigeria's debt-to-GDP ratio is approximately?", options: ["20%", "35%", "50%", "65%"], answer: "35%"},
            {question: "Which Nigerian company is listed on international stock exchanges?", options: ["Dangote Group", "BUA Group", "Nestlé Nigeria", "All of the above"], answer: "All of the above"},
        ]
    },
    education: {
        name: "Importance of Education",
        icon: "📚",
        questions: [
            {question: "What is the primary purpose of education?", options: ["Earning money", "Personal development and societal progress", "Social status", "Entertainment"], answer: "Personal development and societal progress"},
            {question: "Education improves which of the following?", options: ["Health outcomes", "Earning potential", "Critical thinking", "All of the above"], answer: "All of the above"},
            {question: "What percentage of global poverty reduction is attributed to education?", options: ["10%", "25%", "37%", "50%"], answer: "37%"},
            {question: "Quality education helps reduce which social problem?", options: ["Crime", "Unemployment", "Inequality", "All of the above"], answer: "All of the above"},
            {question: "Education enables individuals to make?", options: ["Random decisions", "Informed decisions", "Emotional decisions", "Quick decisions"], answer: "Informed decisions"},
            {question: "Which skill is developed through education?", options: ["Problem-solving", "Communication", "Leadership", "All of the above"], answer: "All of the above"},
            {question: "What is the global literacy rate approximately?", options: ["60%", "70%", "80%", "90%"], answer: "80%"},
            {question: "Education contributes to sustainable development by?", options: ["Reducing poverty", "Creating jobs", "Promoting peace", "All of the above"], answer: "All of the above"},
            {question: "Which group benefits most from quality education?", options: ["Rich people", "Poor communities", "Young people", "Educated people"], answer: "Poor communities"},
            {question: "Education is a right recognized by which organization?", options: ["WHO", "UNESCO", "UN", "World Bank"], answer: "UN"},
            {question: "What does SDG 4 focus on?", options: ["Health", "Quality Education", "Clean Water", "Poverty"], answer: "Quality Education"},
            {question: "How does education affect economic growth?", options: ["Negatively", "No impact", "Positively", "Uncertain"], answer: "Positively"},
            {question: "Education reduces gender inequality by?", options: ["Empowering girls", "Creating opportunities", "Increasing awareness", "All of the above"], answer: "All of the above"},
            {question: "Which country has the highest literacy rate?", options: ["India", "Japan", "Finland", "USA"], answer: "Finland"},
            {question: "Education strengthens which institutions?", options: ["Governments", "Businesses", "Communities", "All of the above"], answer: "All of the above"},
            {question: "What is the estimated return on education investment?", options: ["5x", "10x", "15x", "20x"], answer: "10x"},
            {question: "Education helps individuals achieve which of these?", options: ["Career goals", "Personal fulfillment", "Social connections", "All of the above"], answer: "All of the above"},
        ]
    },
    ai: {
        name: "AI vs Human Efficiency",
        icon: "🤖",
        questions: [
            {question: "In which area is AI faster than humans?", options: ["Decision-making", "Data processing", "Physical tasks", "Creative thinking"], answer: "Data processing"},
            {question: "What is a major advantage of human intelligence?", options: ["Speed", "Memory", "Creativity and adaptability", "Consistency"], answer: "Creativity and adaptability"},
            {question: "Can AI replace human jobs completely?", options: ["Yes, always", "No, never", "Some jobs, but humans adapt", "Uncertain"], answer: "Some jobs, but humans adapt"},
            {question: "Which task is AI more efficient at?", options: ["Emotional support", "Complex analysis of patterns", "Artistic creation", "Strategic planning"], answer: "Complex analysis of patterns"},
            {question: "What is a limitation of current AI systems?", options: ["Speed", "Lack of common sense", "Accuracy", "Memory"], answer: "Lack of common sense"},
            {question: "Humans excel in which area compared to AI?", options: ["Calculations", "Communication", "Pattern recognition", "Data storage"], answer: "Communication"},
            {question: "What percentage of jobs will be automated in next 20 years?", options: ["10%", "25%", "50%", "75%"], answer: "25%"},
            {question: "AI's efficiency is limited by?", options: ["Power supply", "Internet", "Training data quality", "Programming"], answer: "Training data quality"},
            {question: "Which field has AI achieved highest efficiency?", options: ["Healthcare", "Transportation", "Image recognition", "All equal"], answer: "Image recognition"},
            {question: "Can humans work better than AI in healthcare?", options: ["Yes, always", "No, AI is better", "Both have strengths", "Depends on task"], answer: "Both have strengths"},
            {question: "What is AI's main advantage in business?", options: ["Cost reduction", "Productivity", "Consistency", "All of the above"], answer: "All of the above"},
            {question: "Humans are better at which type of problem-solving?", options: ["Linear problems", "Novel situations", "Repetitive tasks", "Mathematical calculations"], answer: "Novel situations"},
            {question: "AI requires what for learning?", options: ["Consciousness", "Massive data", "Motivation", "Sleep"], answer: "Massive data"},
            {question: "Which profession is least likely to be automated?", options: ["Accountant", "Therapist", "Clerk", "Analyst"], answer: "Therapist"},
            {question: "What human skill is hardest to replicate in AI?", options: ["Logic", "Intuition", "Calculation", "Memory"], answer: "Intuition"},
            {question: "AI systems can work how many hours without break?", options: ["8 hours", "12 hours", "Indefinitely", "Limited by power"], answer: "Indefinitely"},
            {question: "What is the future of AI and human collaboration?", options: ["AI dominates", "Humans dominate", "Complementary partnership", "Separation"], answer: "Complementary partnership"},
        ]
    },
    sample: {
        name: "Sample Question Topic",
        icon: "⭐",
        questions: [
            {question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4"},
            {question: "Which planet is known as the Red Planet?", options: ["Venus", "Jupiter", "Mars", "Saturn"], answer: "Mars"},
            {question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], answer: "Paris"},
            {question: "Who wrote Romeo and Juliet?", options: ["Dickens", "Shakespeare", "Austen", "Marlowe"], answer: "Shakespeare"},
            {question: "What is the largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific"},
            {question: "Which element has symbol 'Au'?", options: ["Silver", "Aluminum", "Gold", "Argon"], answer: "Gold"},
            {question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: "2"},
            {question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7"},
            {question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"], answer: "300,000 km/s"},
            {question: "Which is the tallest mountain?", options: ["K2", "Everest", "Kilimanjaro", "Denali"], answer: "Everest"},
            {question: "What is the study of stars called?", options: ["Geology", "Astronomy", "Botany", "Zoology"], answer: "Astronomy"},
            {question: "How many sides does a hexagon have?", options: ["4", "5", "6", "7"], answer: "6"},
            {question: "Which country is largest by area?", options: ["Canada", "Russia", "China", "USA"], answer: "Russia"},
            {question: "What is 10 x 5?", options: ["40", "50", "60", "70"], answer: "50"},
            {question: "Which metal is liquid at room temperature?", options: ["Gold", "Silver", "Mercury", "Copper"], answer: "Mercury"},
            {question: "What is the deepest ocean trench?", options: ["Mariana Trench", "Tonga Trench", "Philippine Trench", "Kuril-Kamchatka"], answer: "Mariana Trench"},
            {question: "How many legs does a spider have?", options: ["6", "8", "10", "12"], answer: "8"},
        ]
    }
};

// ============= STATE MANAGEMENT =============
let currentUser = null;
let isAdminMode = false;
let allUsers = [];
let currentQuizType = null;
let quizData = [];

// Quiz state
let currentQuestion = 0;
let score = 0;
let attempted = 0;
let userAnswers = [];
let timeLeft = 15;
let timerInterval = null;
let streak = 0;
let bestStreak = 0;
let navigatedBack = false;
let suppressSpeak = false;
let lastAttemptedIndex = -1;
let enableSpeech = true;

// ============= ADMIN CREDENTIALS =============
const ADMIN_CREDENTIALS = {
    username: "mumschild",
    password: "21/08/2007"
};

// ============= LOCALSTORAGE MANAGEMENT =============
function initializeUsersStorage() {
    if (!localStorage.getItem('quiz_users')) {
        localStorage.setItem('quiz_users', JSON.stringify([]));
    }
}

function loadUsersFromStorage() {
    const storedUsers = localStorage.getItem('quiz_users');
    allUsers = storedUsers ? JSON.parse(storedUsers) : [];
}

function saveUsersToStorage() {
    localStorage.setItem('quiz_users', JSON.stringify(allUsers));
}

function createUser(user) {
    user.id = Date.now().toString();
    user.createdAt = new Date().toLocaleString();
    user.quizAttempts = user.quizAttempts || [];
    user.profilePicture = user.profilePicture || null;
    allUsers.push(user);
    saveUsersToStorage();
    return user;
}

function updateUser(user) {
    const index = allUsers.findIndex(u => u.id === user.id);
    if (index !== -1) {
        allUsers[index] = user;
        saveUsersToStorage();
    }
}

// ============= DOM ELEMENTS =============
let authContainer, quizContainer, dashboardContainer, adminContainer;
let navbar, profileBtn, searchBox, searchInput;
let loginForm, signupForm, adminLoginForm;
let settingsModal, settingsBtn, settingsCloseBtn, speechToggle, settingsLogoutBtn;
let cancelQuizModal, cancelQuizBtn, cancelQuizYes, cancelQuizNo;
let profileModal, profileCloseBtn, profileLogoutBtn, uploadProfileBtn, profilePictureInput;
let navDropdown, navDashboardBtn, navHome, navSettings;
let themeDark, themeLight, themeApp;

// Quiz elements
let timerEl, questionEl, optionsEl, feedbackEl, resultEl, scoreEl, totalEl, percentEl;
let summaryEl, reviewEl, restartBtn, prevBtn, nextBtn, streakEl, progressFill, userInfoEl;
let questionNumberEl;

// ============= INITIALIZATION =============
document.addEventListener('DOMContentLoaded', () => {
    // Stop any ongoing speech
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }

    // Initialize storage
    initializeUsersStorage();
    loadUsersFromStorage();

    // Get DOM elements
    getDOMElements();
    
    // Set up event listeners
    setupAuthListeners();
    setupNavbarListeners();
    setupModalListeners();
    setupThemeListeners();
    setupSpeechListener();

    // Show login page by default
    showAuthPage('login-page');
});

function getDOMElements() {
    // Containers
    authContainer = document.getElementById('auth-container');
    quizContainer = document.getElementById('quiz-container');
    dashboardContainer = document.getElementById('dashboard-container');
    adminContainer = document.getElementById('admin-container');
    navbar = document.getElementById('navbar');
    
    // Navbar elements
    profileBtn = document.getElementById('profile-btn');
    searchBox = document.getElementById('search-box');
    searchInput = document.getElementById('search-input');
    navDropdown = document.getElementById('nav-dropdown');
    navDashboardBtn = document.getElementById('nav-dashboard-btn');
    navHome = document.getElementById('nav-home');
    navSettings = document.getElementById('nav-settings');
    
    // Forms
    loginForm = document.getElementById('login-form');
    signupForm = document.getElementById('signup-form');
    adminLoginForm = document.getElementById('admin-login-form');
    
    // Modals
    settingsModal = document.getElementById('settings-modal');
    settingsBtn = document.getElementById('settings-btn');
    settingsCloseBtn = document.getElementById('settings-close-btn');
    settingsLogoutBtn = document.getElementById('settings-logout-btn');
    speechToggle = document.getElementById('speech-toggle');
    
    cancelQuizModal = document.getElementById('cancel-quiz-modal');
    cancelQuizBtn = document.getElementById('cancel-quiz-btn');
    cancelQuizYes = document.getElementById('cancel-quiz-yes');
    cancelQuizNo = document.getElementById('cancel-quiz-no');
    
    profileModal = document.getElementById('profile-modal');
    profileCloseBtn = document.getElementById('profile-close-btn');
    profileLogoutBtn = document.getElementById('profile-logout-btn');
    uploadProfileBtn = document.getElementById('upload-profile-btn');
    profilePictureInput = document.getElementById('profile-picture-input');
    
    // Theme radios
    themeDark = document.getElementById('theme-dark');
    themeLight = document.getElementById('theme-light');
    themeApp = document.getElementById('theme-app');
    
    // Quiz elements (will be null initially, get when quiz starts)
    refreshQuizElements();
}

function refreshQuizElements() {
    timerEl = document.querySelector('#time');
    questionEl = document.querySelector('.question');
    optionsEl = document.querySelector('.options');
    feedbackEl = document.querySelector('#feedback');
    resultEl = document.querySelector('.result');
    scoreEl = document.querySelector('#score');
    totalEl = document.querySelector('#total');
    percentEl = document.querySelector('#percent');
    summaryEl = document.querySelector('#summary');
    reviewEl = document.querySelector('#review');
    restartBtn = document.querySelector('.restart-btn');
    prevBtn = document.querySelector('.previous-btn');
    nextBtn = document.querySelector('.next-btn');
    streakEl = document.querySelector('#streak-count');
    progressFill = document.querySelector('#progress-fill');
    userInfoEl = document.querySelector('#user-info');
    questionNumberEl = document.querySelector('#question-number');
}

// ============= AUTH FUNCTIONS =============
function showAuthPage(pageId) {
    // Hide all auth pages
    document.querySelectorAll('.auth-page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Hide all other containers
    if (authContainer) authContainer.style.display = 'flex';
    if (quizContainer) quizContainer.style.display = 'none';
    if (dashboardContainer) dashboardContainer.style.display = 'none';
    if (adminContainer) adminContainer.style.display = 'none';
    if (navbar) navbar.style.display = 'none';
    if (profileBtn) profileBtn.style.display = 'none';
    if (searchBox) searchBox.classList.add('hidden');
}

function setupAuthListeners() {
    // Login form
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('login-username').value.trim();
            const password = document.getElementById('login-password').value.trim();

            // Check admin login
            if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
                isAdminMode = true;
                showAdminDashboard();
                loginForm.reset();
                return;
            }

            // Check user login
            const user = allUsers.find(u => u.username === username && u.password === password);
            if (user) {
                currentUser = user;
                showDashboard();
                loginForm.reset();
            } else {
                alert('Invalid username or password');
            }
        });
    }

    // Signup form
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('signup-username').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value.trim();

            if (allUsers.find(u => u.username === username)) {
                alert('Username already exists');
                return;
            }

            const newUser = {
                username,
                email,
                password,
                quizAttempts: [],
                profilePicture: null
            };

            const created = createUser(newUser);
            allUsers.push(created);
            alert('Account created successfully! You can now login.');
            signupForm.reset();
            showAuthPage('login-page');
        });
    }

    // Admin login form
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('admin-username').value.trim();
            const password = document.getElementById('admin-password').value.trim();

            if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
                isAdminMode = true;
                showAdminDashboard();
                adminLoginForm.reset();
            } else {
                alert('Invalid admin credentials');
            }
        });
    }

    // Navigation links
    const toSignup = document.getElementById('to-signup-from-login');
    const toLogin = document.getElementById('to-login-from-signup');
    const backToLogin = document.getElementById('back-to-login');
    const toAdmin = document.getElementById('to-admin-from-login');

    if (toSignup) toSignup.addEventListener('click', (e) => {
        e.preventDefault();
        showAuthPage('signup-page');
    });

    if (toLogin) toLogin.addEventListener('click', (e) => {
        e.preventDefault();
        showAuthPage('login-page');
    });

    if (backToLogin) backToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        showAuthPage('login-page');
    });

    if (toAdmin) toAdmin.addEventListener('click', (e) => {
        e.preventDefault();
        showAuthPage('admin-login-page');
    });

    // Admin logout
    const adminLogoutBtn = document.getElementById('admin-logout-btn');
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', () => {
            isAdminMode = false;
            currentUser = null;
            adminContainer.style.display = 'none';
            showAuthPage('login-page');
        });
    }
}

// ============= DASHBOARD FUNCTIONS =============
function showDashboard() {
    if (!currentUser) return;

    // Hide all other containers
    authContainer.style.display = 'none';
    quizContainer.style.display = 'none';
    adminContainer.style.display = 'none';
    
    // Show dashboard and navbar
    dashboardContainer.style.display = 'block';
    navbar.style.display = 'flex';
    profileBtn.style.display = 'flex';
    searchBox.classList.remove('hidden');

    // Update welcome message
    const welcomeMsg = document.getElementById('dashboard-welcome');
    if (welcomeMsg) {
        welcomeMsg.textContent = `Welcome, ${currentUser.username}!`;
    }

    // Render dashboard content
    renderDashboard();
    updateDashboardStats();
}

function renderDashboard() {
    const quizTopicsList = document.getElementById('quiz-topics-list');
    if (!quizTopicsList) return;

    quizTopicsList.innerHTML = '';

    Object.entries(allQuizzes).forEach(([key, quiz]) => {
        const card = document.createElement('div');
        card.className = 'quiz-topic-card';
        card.setAttribute('data-quiz-type', key);

        card.innerHTML = `
            <div class="topic-info">
                <div class="topic-icon">${quiz.icon}</div>
                <div class="topic-details">
                    <div class="topic-name">${quiz.name}</div>
                    <div class="topic-questions-count">${quiz.questions.length} questions</div>
                </div>
            </div>
            <div class="topic-controls">
                <label class="topic-toggle">
                    <input type="checkbox" class="quiz-toggle-checkbox" />
                    <span class="topic-toggle-slider"></span>
                </label>
                <button class="confirm-btn" disabled>Start</button>
            </div>
        `;

        const checkbox = card.querySelector('.quiz-toggle-checkbox');
        checkbox.addEventListener('change', (e) => {
            handleQuizToggle(e, key, card);
        });

        const confirmBtn = card.querySelector('.confirm-btn');
        confirmBtn.addEventListener('click', () => {
            startQuizWithType(key);
        });

        quizTopicsList.appendChild(card);
    });
}

function handleQuizToggle(event, quizType, cardElement) {
    const isChecked = event.target.checked;

    document.querySelectorAll('.quiz-topic-card').forEach(card => {
        if (card !== cardElement) {
            const checkbox = card.querySelector('.quiz-toggle-checkbox');
            checkbox.checked = false;
            card.classList.remove('selected');
        }
    });

    if (isChecked) {
        cardElement.classList.add('selected');
        const confirmBtn = cardElement.querySelector('.confirm-btn');
        if (confirmBtn) {
            confirmBtn.disabled = false;
        }
    } else {
        cardElement.classList.remove('selected');
        const confirmBtn = cardElement.querySelector('.confirm-btn');
        if (confirmBtn) {
            confirmBtn.disabled = true;
        }
    }

    currentQuizType = isChecked ? quizType : null;
}

function updateDashboardStats() {
    if (!currentUser) return;

    const totalQuizzes = currentUser.quizAttempts ? currentUser.quizAttempts.length : 0;
    let totalQuestions = 0;
    let totalCorrect = 0;

    if (currentUser.quizAttempts && currentUser.quizAttempts.length > 0) {
        currentUser.quizAttempts.forEach(attempt => {
            if (attempt.answers) {
                totalQuestions += attempt.answers.length;
                totalCorrect += attempt.answers.filter(a => a.isCorrect).length;
            }
        });
    }

    const progressPercent = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

    const statQuizzes = document.getElementById('stat-quizzes');
    const statProgress = document.getElementById('stat-progress');

    if (statQuizzes) statQuizzes.textContent = totalQuizzes;
    if (statProgress) statProgress.textContent = progressPercent + '%';
}

function filterQuizzes(query) {
    const quizTopicsList = document.getElementById('quiz-topics-list');
    if (!quizTopicsList) return;

    const cards = quizTopicsList.querySelectorAll('.quiz-topic-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    const noResults = quizTopicsList.querySelector('.no-results-message');
    if (visibleCount === 0) {
        if (!noResults) {
            const message = document.createElement('div');
            message.className = 'no-results-message';
            message.innerHTML = '<p>No quizzes found matching your search</p>';
            quizTopicsList.appendChild(message);
        }
    } else if (noResults) {
        noResults.remove();
    }
}

// ============= QUIZ FUNCTIONS =============
function startQuizWithType(quizType) {
    quizData = allQuizzes[quizType].questions;
    currentQuizType = quizType;

    // Re-get quiz elements
    refreshQuizElements();

    // Hide dashboard, show quiz
    dashboardContainer.style.display = 'none';
    navbar.style.display = 'none';
    searchBox.classList.add('hidden');
    quizContainer.style.display = 'block';

    if (userInfoEl) {
        userInfoEl.textContent = `${allQuizzes[quizType].name} - ${currentUser.username}`;
    }

    // Reset quiz state
    resetQuizState();

    // Add button listeners
    if (restartBtn) {
        restartBtn.removeEventListener('click', restartQuiz);
        restartBtn.addEventListener('click', restartQuiz);
    }

    if (prevBtn) {
        prevBtn.removeEventListener('click', goToPrevious);
        prevBtn.addEventListener('click', goToPrevious);
    }

    if (nextBtn) {
        nextBtn.removeEventListener('click', goToNext);
        nextBtn.addEventListener('click', goToNext);
    }

    loadQuestion();
}

function resetQuizState() {
    currentQuestion = 0;
    score = 0;
    attempted = 0;
    userAnswers = [];
    streak = 0;
    bestStreak = 0;
    navigatedBack = false;
    suppressSpeak = false;
    lastAttemptedIndex = -1;
    timeLeft = 15;

    clearInterval(timerInterval);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();

    if (resultEl) resultEl.style.display = 'none';
    if (summaryEl) summaryEl.textContent = '';
    if (reviewEl) reviewEl.innerHTML = '';
    if (questionEl) questionEl.style.display = 'block';
    if (optionsEl) optionsEl.style.display = 'flex';
    if (feedbackEl) feedbackEl.style.display = 'block';
    if (restartBtn) restartBtn.style.display = 'none';
}

function loadQuestion() {
    clearInterval(timerInterval);
    clearFeedback();

    if (currentQuestion >= quizData.length) {
        endQuiz();
        return;
    }

    const q = quizData[currentQuestion];

    if (questionEl) {
        questionEl.textContent = q.question;
    }

    if (questionNumberEl) {
        questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    }

    const opts = q.options || [];

    if (optionsEl) {
        optionsEl.innerHTML = '';
        opts.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option';
            btn.type = 'button';
            btn.textContent = opt;
            btn.addEventListener('click', () => handleOptionClick(btn, opt));
            optionsEl.appendChild(btn);
        });

        const prev = userAnswers[currentQuestion];
        if (prev && prev.selected !== undefined) {
            const buttons = optionsEl.querySelectorAll('button.option');
            buttons.forEach(btn => {
                if (btn.textContent === prev.selected) {
                    btn.classList.add('selected');
                }
            });
            setFeedback(prev.isCorrect);
        } else {
            clearFeedback();
        }

        const shouldSpeak = !(prev && prev.selected !== undefined) && !suppressSpeak;
        if (shouldSpeak && enableSpeech) {
            if (opts.length) {
                speak(`${q.question}. Options: ${opts.join(', ')}.`);
            } else {
                speak(q.question);
            }
        }
    }

    if (progressFill) {
        const pct = Math.round((currentQuestion / quizData.length) * 100);
        progressFill.style.width = pct + '%';
    }

    // Show/hide navigation buttons
    if (prevBtn) {
        prevBtn.style.display = currentQuestion > 0 && userAnswers[currentQuestion - 1]?.selected !== undefined ? 'inline-block' : 'none';
    }
    
    if (nextBtn) {
        nextBtn.style.display = navigatedBack && currentQuestion < Math.min(lastAttemptedIndex + 1, quizData.length - 1) ? 'inline-block' : 'none';
    }

    timeLeft = 15;
    if (timerEl) timerEl.textContent = timeLeft;
    startTimer();
}

function clearFeedback() {
    if (!feedbackEl) return;
    feedbackEl.textContent = '';
    feedbackEl.classList.remove('correct', 'wrong');
    
    if (optionsEl) {
        const markers = optionsEl.querySelectorAll('.marker');
        markers.forEach(m => m.remove());
        const opts = optionsEl.querySelectorAll('.option');
        opts.forEach(o => o.classList.remove('is-correct', 'is-wrong', 'selected', 'locked'));
    }
}

function setFeedback(isCorrect) {
    if (!feedbackEl) return;
    feedbackEl.classList.remove('correct', 'wrong');

    if (isCorrect) {
        feedbackEl.textContent = 'Correct! ✓';
        feedbackEl.classList.add('correct');
    } else {
        feedbackEl.textContent = 'Wrong! ✕';
        feedbackEl.classList.add('wrong');
    }
}

function lockOptions() {
    const buttons = optionsEl.querySelectorAll('button.option');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('locked');
    });
}

function handleOptionClick(clickedButton, selectedOption) {
    const q = quizData[currentQuestion];
    const isCorrect = selectedOption === q.answer;

    lockOptions();

    const makeMarker = (type) => {
        const span = document.createElement('span');
        span.className = `marker ${type === 'ok' ? 'ok' : 'bad'}`;
        span.setAttribute('aria-hidden', 'true');
        span.textContent = type === 'ok' ? '✓' : '✕';
        return span;
    };

    if (isCorrect) {
        clickedButton.classList.add('is-correct');
        clickedButton.appendChild(makeMarker('ok'));
    } else {
        clickedButton.classList.add('is-wrong');
        clickedButton.appendChild(makeMarker('bad'));

        const correctAnswer = q.answer;
        const buttons = optionsEl.querySelectorAll('button.option');
        buttons.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('is-correct');
                btn.appendChild(makeMarker('ok'));
            }
        });
    }

    recordAnswer(selectedOption);
    navigatedBack = false;
    clearInterval(timerInterval);
    
    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 750);
}

function recordAnswer(selectedOption) {
    const q = quizData[currentQuestion];
    const isCorrect = selectedOption === q.answer;

    const prev = userAnswers[currentQuestion];
    if (prev && prev.isCorrect) {
        score = Math.max(0, score - 1);
    }

    userAnswers[currentQuestion] = {
        question: q.question,
        selected: selectedOption,
        correct: q.answer,
        isCorrect
    };

    if (currentQuestion > lastAttemptedIndex) lastAttemptedIndex = currentQuestion;

    score = userAnswers.reduce((s, a) => s + (a && a.isCorrect ? 1 : 0), 0);
    attempted = userAnswers.reduce((c, a) => c + (a && a.selected !== undefined ? 1 : 0), 0);

    // Calculate streak
    let max = 0;
    let run = 0;
    for (let i = 0; i < userAnswers.length; i++) {
        const a = userAnswers[i];
        if (a && a.isCorrect) {
            run++;
            if (run > max) max = run;
        } else {
            run = 0;
        }
    }
    bestStreak = max;

    let cur = 0;
    for (let i = currentQuestion; i >= 0; i--) {
        const a = userAnswers[i];
        if (a && a.isCorrect) cur++; else break;
    }
    streak = cur;
    if (streakEl) streakEl.textContent = streak;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timerEl) timerEl.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            
            // Auto-select no answer
            if (!userAnswers[currentQuestion]?.selected) {
                recordAnswer(null);
            }
            
            currentQuestion++;
            loadQuestion();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    
    if (questionEl) questionEl.style.display = 'none';
    if (optionsEl) optionsEl.style.display = 'none';
    if (feedbackEl) feedbackEl.style.display = 'none';
    if (resultEl) resultEl.style.display = 'block';

    const total = quizData.length;
    const percent = total === 0 ? 0 : Math.round((score / total) * 100);
    
    if (scoreEl) scoreEl.textContent = score;
    if (totalEl) totalEl.textContent = total;
    if (percentEl) percentEl.textContent = percent;

    // Celebration for high scores
    if (percent >= 95) {
        triggerCelebration(percent);
    }

    let message = "Keep going!";
    if (percent >= 90) message = "You're a love expert! 💕";
    else if (percent >= 75) message = "Excellent!";
    else if (percent >= 50) message = "Good start!";

    const wrong = attempted - score;
    const unanswered = total - attempted;

    if (summaryEl) {
        summaryEl.textContent = `${message} You scored ${score}/${total} · ${wrong} wrong · ${unanswered} unanswered`;
    }

    // Render review
    if (reviewEl) {
        renderReview();
    }

    if (restartBtn) restartBtn.style.display = 'inline-block';

    // Save attempt
    saveQuizAttempt(percent);
}

function renderReview() {
    if (!reviewEl) return;

    reviewEl.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'review-title';
    title.textContent = 'Answer Review';
    reviewEl.appendChild(title);

    quizData.forEach((q, index) => {
        const attempt = userAnswers[index];
        const selected = attempt ? attempt.selected : null;
        const correct = attempt ? attempt.correct : q.answer;
        const isCorrect = attempt ? attempt.isCorrect : false;

        const item = document.createElement('div');
        item.className = `review-item ${isCorrect ? 'is-correct' : 'is-wrong'}`;

        const qEl = document.createElement('div');
        qEl.className = 'review-question';
        qEl.textContent = `${index + 1}. ${q.question}`;

        const meta = document.createElement('div');
        meta.className = 'review-meta';

        const badge = document.createElement('span');
        badge.className = `badge ${isCorrect ? 'ok' : (selected === null ? 'na' : 'bad')}`;
        badge.textContent = isCorrect ? 'Correct' : (selected === null ? 'Unanswered' : 'Wrong');

        const your = document.createElement('div');
        your.className = 'review-line';
        your.innerHTML = `<span class="review-label">Your answer:</span> <span class="review-value">${selected ?? 'Unanswered'}</span>`;

        const right = document.createElement('div');
        right.className = 'review-line';
        right.innerHTML = `<span class="review-label">Correct:</span> <span class="review-value">${correct}</span>`;

        meta.appendChild(badge);
        meta.appendChild(your);
        meta.appendChild(right);

        item.appendChild(qEl);
        item.appendChild(meta);
        reviewEl.appendChild(item);
    });
}

function saveQuizAttempt(percent) {
    if (!currentUser) return;

    const attempt = {
        score: score,
        percentage: percent,
        answers: userAnswers.map(a => ({
            question: a.question,
            selected: a.selected,
            correct: a.correct,
            isCorrect: a.isCorrect
        })),
        completedAt: new Date().toLocaleString(),
        quizType: currentQuizType
    };

    currentUser.quizAttempts.push(attempt);
    updateUser(currentUser);
}

function restartQuiz() {
    clearInterval(timerInterval);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();

    resetQuizState();
    loadQuestion();
}

function goToPrevious() {
    if (currentQuestion <= 0) return;
    
    clearInterval(timerInterval);
    currentQuestion--;
    suppressSpeak = true;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    navigatedBack = true;
    loadQuestion();
}

function goToNext() {
    if (currentQuestion >= quizData.length - 1) return;
    
    clearInterval(timerInterval);
    currentQuestion++;
    suppressSpeak = false;
    navigatedBack = false;
    loadQuestion();
}

function goToDashboard() {
    // Clear quiz state
    clearInterval(timerInterval);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();

    // Hide quiz, show dashboard
    quizContainer.style.display = 'none';
    dashboardContainer.style.display = 'block';
    navbar.style.display = 'flex';
    searchBox.classList.remove('hidden');

    // Reset quiz state
    resetQuizState();

    // Re-render dashboard
    renderDashboard();
    updateDashboardStats();
}

// ============= SPEECH FUNCTIONS =============
function speak(text) {
    if (!enableSpeech) return;
    if (!('speechSynthesis' in window)) return;

    try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;
        utterance.pitch = 1;
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    } catch (e) {
        console.warn('Speech error', e);
    }
}

// ============= NAVBAR FUNCTIONS =============
function setupNavbarListeners() {
    if (!navbar) return;

    // Profile button dropdown
    if (profileBtn) {
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (navDropdown) {
                navDropdown.classList.toggle('active');
            }
        });
    }

    // Dashboard nav button
    if (navDashboardBtn) {
        navDashboardBtn.addEventListener('click', () => {
            if (currentUser) {
                goToDashboard();
            }
        });
    }

    // Nav dropdown items
    if (navHome) {
        navHome.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentUser) {
                goToDashboard();
                navDropdown.classList.remove('active');
            }
        });
    }

    if (navSettings) {
        navSettings.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentUser && settingsModal) {
                settingsModal.style.display = 'flex';
                navDropdown.classList.remove('active');
            }
        });
    }

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
        if (navDropdown && profileBtn && !profileBtn.contains(e.target) && !navDropdown.contains(e.target)) {
            navDropdown.classList.remove('active');
        }
    });

    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query.length > 0) {
                filterQuizzes(query);
            } else {
                renderDashboard();
            }
        });
    }
}

// ============= PROFILE MODAL FUNCTIONS =============
function setupModalListeners() {
    // Profile modal
    if (profileBtn) {
        profileBtn.addEventListener('dblclick', () => {
            if (currentUser) {
                updateProfileDisplay();
                profileModal.style.display = 'flex';
            }
        });
    }

    if (profileCloseBtn) {
        profileCloseBtn.addEventListener('click', () => {
            profileModal.style.display = 'none';
        });
    }

    if (profileModal) {
        profileModal.addEventListener('click', (e) => {
            if (e.target === profileModal) {
                profileModal.style.display = 'none';
            }
        });
    }

    if (profileLogoutBtn) {
        profileLogoutBtn.addEventListener('click', () => {
            logout();
            profileModal.style.display = 'none';
        });
    }

    // Profile picture upload
    if (uploadProfileBtn && profilePictureInput) {
        uploadProfileBtn.addEventListener('click', () => {
            profilePictureInput.click();
        });

        profilePictureInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && currentUser) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const profileImg = document.getElementById('profile-img');
                    if (profileImg) {
                        profileImg.src = event.target.result;
                        currentUser.profilePicture = event.target.result;
                        updateUser(currentUser);
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Settings modal
    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            settingsModal.style.display = 'flex';
        });
    }

    if (settingsCloseBtn) {
        settingsCloseBtn.addEventListener('click', () => {
            settingsModal.style.display = 'none';
        });
    }

    if (settingsModal) {
        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) {
                settingsModal.style.display = 'none';
            }
        });
    }

    if (settingsLogoutBtn) {
        settingsLogoutBtn.addEventListener('click', () => {
            logout();
            settingsModal.style.display = 'none';
        });
    }

    // Cancel quiz modal
    if (cancelQuizBtn) {
        cancelQuizBtn.addEventListener('click', () => {
            cancelQuizModal.style.display = 'flex';
        });
    }

    if (cancelQuizYes) {
        cancelQuizYes.addEventListener('click', () => {
            goToDashboard();
            cancelQuizModal.style.display = 'none';
        });
    }

    if (cancelQuizNo) {
        cancelQuizNo.addEventListener('click', () => {
            cancelQuizModal.style.display = 'none';
        });
    }

    if (cancelQuizModal) {
        cancelQuizModal.addEventListener('click', (e) => {
            if (e.target === cancelQuizModal) {
                cancelQuizModal.style.display = 'none';
            }
        });
    }
}

function updateProfileDisplay() {
    if (!currentUser) return;

    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const profileUsername = document.getElementById('profile-username');
    const profileQuizzes = document.getElementById('profile-quizzes');
    const profileImg = document.getElementById('profile-img');

    if (profileName) profileName.textContent = currentUser.username;
    if (profileEmail) profileEmail.textContent = currentUser.email || '-';
    if (profileUsername) profileUsername.textContent = currentUser.username;
    if (profileQuizzes) profileQuizzes.textContent = (currentUser.quizAttempts && currentUser.quizAttempts.length) || 0;
    if (profileImg && currentUser.profilePicture) {
        profileImg.src = currentUser.profilePicture;
    } else {
        profileImg.src = 'https://via.placeholder.com/120';
    }
}

function logout() {
    currentUser = null;
    enableSpeech = true;
    
    // Hide all containers
    quizContainer.style.display = 'none';
    dashboardContainer.style.display = 'none';
    adminContainer.style.display = 'none';
    
    // Show auth
    authContainer.style.display = 'flex';
    showAuthPage('login-page');
    
    // Clear timers and speech
    clearInterval(timerInterval);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    
    // Hide navbar elements
    navbar.style.display = 'none';
    profileBtn.style.display = 'none';
    searchBox.classList.add('hidden');
}

// ============= THEME FUNCTIONS =============
function setupThemeListeners() {
    const savedTheme = localStorage.getItem('appTheme') || 'app';
    
    if (savedTheme === 'dark' && themeDark) themeDark.checked = true;
    else if (savedTheme === 'light' && themeLight) themeLight.checked = true;
    else if (themeApp) themeApp.checked = true;

    applyTheme(savedTheme);

    const updateTheme = (theme) => {
        localStorage.setItem('appTheme', theme);
        applyTheme(theme);
    };

    if (themeDark) themeDark.addEventListener('change', () => updateTheme('dark'));
    if (themeLight) themeLight.addEventListener('change', () => updateTheme('light'));
    if (themeApp) themeApp.addEventListener('change', () => updateTheme('app'));
}

function applyTheme(theme) {
    const root = document.documentElement;
    
    if (theme === 'dark') {
        root.style.setProperty('--bg-0', '#0f0f0f');
        root.style.setProperty('--bg-1', '#1a1a1a');
        root.style.setProperty('--bg-2', '#2a2a2a');
        root.style.setProperty('--text', '#ffffff');
        root.style.setProperty('--muted', 'rgba(255, 255, 255, 0.75)');
        root.style.setProperty('--card', 'rgba(255, 255, 255, 0.05)');
    } else if (theme === 'light') {
        root.style.setProperty('--bg-0', '#f5f5f5');
        root.style.setProperty('--bg-1', '#e8e8e8');
        root.style.setProperty('--bg-2', '#d4d4d4');
        root.style.setProperty('--text', '#1a1a1a');
        root.style.setProperty('--muted', 'rgba(0, 0, 0, 0.6)');
        root.style.setProperty('--card', 'rgba(0, 0, 0, 0.08)');
    } else {
        // App theme (default)
        root.style.setProperty('--bg-0', '#14532d');
        root.style.setProperty('--bg-1', '#166534');
        root.style.setProperty('--bg-2', '#15803d');
        root.style.setProperty('--text', '#ffffff');
        root.style.setProperty('--muted', 'rgba(255, 255, 255, 0.75)');
        root.style.setProperty('--card', 'rgba(234, 179, 8, 0.25)');
    }
}

// ============= SPEECH TOGGLE =============
function setupSpeechListener() {
    if (!speechToggle) return;

    const savedSpeechPref = localStorage.getItem('speechEnabled');
    if (savedSpeechPref !== null) {
        enableSpeech = savedSpeechPref === 'true';
        speechToggle.checked = enableSpeech;
    }

    speechToggle.addEventListener('change', (e) => {
        enableSpeech = e.target.checked;
        localStorage.setItem('speechEnabled', enableSpeech);
        
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            
            if (enableSpeech && currentUser && quizData.length > 0 && currentQuestion < quizData.length) {
                const q = quizData[currentQuestion];
                const opts = q.options || [];
                if (opts.length) {
                    speak(`${q.question}. Options: ${opts.join(', ')}.`);
                } else {
                    speak(q.question);
                }
            }
        }
    });
}

// ============= ADMIN FUNCTIONS =============
function showAdminDashboard() {
    authContainer.style.display = 'none';
    quizContainer.style.display = 'none';
    dashboardContainer.style.display = 'none';
    navbar.style.display = 'none';
    profileBtn.style.display = 'none';
    
    adminContainer.style.display = 'block';
    
    loadUsersFromStorage();
    renderAdminDashboard();
}

function renderAdminDashboard() {
    const usersList = document.getElementById('users-list');
    const userDetails = document.getElementById('user-details');

    if (!usersList || !userDetails) return;

    usersList.innerHTML = '';
    
    if (allUsers.length === 0) {
        usersList.innerHTML = '<p class="empty-state">No registered users yet</p>';
    } else {
        allUsers.forEach(user => {
            const userItem = document.createElement('div');
            userItem.className = 'user-item';
            userItem.textContent = `${user.username} (${user.quizAttempts?.length || 0} attempts)`;
            userItem.addEventListener('click', (e) => showUserDetails(user, e));
            usersList.appendChild(userItem);
        });
    }

    userDetails.innerHTML = '<div class="empty-state"><p>Select a user to view their details and answers</p></div>';
}

function showUserDetails(user, event) {
    const userDetails = document.getElementById('user-details');
    const usersList = document.querySelectorAll('.user-item');
    
    usersList.forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');

    let html = '';

    html += `
        <div class="user-header">
            <div class="user-header-info">
                <h3>${user.username}</h3>
                <p>Email: ${user.email || 'N/A'}</p>
                <p>Joined: ${user.createdAt || 'Unknown'}</p>
            </div>
        </div>
    `;

    if (!user.quizAttempts || user.quizAttempts.length === 0) {
        html += '<div class="empty-state"><p>This user has not attempted any quiz yet</p></div>';
    } else {
        // Calculate stats
        let totalCorrect = 0;
        let totalQuestions = 0;
        
        user.quizAttempts.forEach(attempt => {
            if (attempt.answers) {
                totalCorrect += attempt.answers.filter(a => a.isCorrect).length;
                totalQuestions += attempt.answers.length;
            }
        });
        
        const avgPercentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

        html += `
            <div class="user-score">
                <div class="score-box">
                    <div class="score-box-label">Total Attempts</div>
                    <div class="score-box-value">${user.quizAttempts.length}</div>
                </div>
                <div class="score-box">
                    <div class="score-box-label">Total Correct</div>
                    <div class="score-box-value">${totalCorrect}</div>
                </div>
                <div class="score-box">
                    <div class="score-box-label">Avg Score</div>
                    <div class="score-box-value">${avgPercentage}%</div>
                </div>
            </div>
        `;

        user.quizAttempts.forEach((attempt, attemptIndex) => {
            const percentage = Math.round((attempt.score / (attempt.answers?.length || 1)) * 100);
            
            html += `
                <div class="user-answers">
                    <h4>Attempt ${attemptIndex + 1} - ${attempt.completedAt} (${percentage}%)</h4>
            `;

            if (attempt.answers) {
                attempt.answers.forEach((answer, qIndex) => {
                    const isCorrect = answer.isCorrect;
                    const className = isCorrect ? 'correct' : 'wrong';
                    
                    html += `
                        <div class="answer-item ${className}">
                            <div class="answer-question">${qIndex + 1}. ${answer.question}</div>
                            <div class="answer-user">${answer.selected || 'Not answered'}</div>
                            <div class="answer-correct">${answer.correct}</div>
                        </div>
                    `;
                });
            }

            html += `</div>`;
        });
    }

    userDetails.innerHTML = html;
}

// ============= CELEBRATION FUNCTIONS =============
function triggerCelebration(percent) {
    const modal = document.getElementById('celebration-modal');
    if (!modal) return;

    const quizType = currentQuizType ? allQuizzes[currentQuizType].name : 'Quiz';
    const celebrationText = document.getElementById('celebration-text');
    const celebrationTopic = document.getElementById('celebration-topic');

    if (celebrationText) {
        celebrationText.textContent = `You are a GURU! 🌟`;
    }
    
    if (celebrationTopic) {
        celebrationTopic.textContent = `${quizType} completed with ${percent}% accuracy`;
    }

    modal.style.display = 'flex';
    generateFireworks();
    playFireworkSound();

    setTimeout(() => {
        modal.style.display = 'none';
    }, 4000);
}

function generateFireworks() {
    const container = document.getElementById('fireworks-container');
    if (!container) return;

    container.innerHTML = '';

    for (let burst = 0; burst < 5; burst++) {
        setTimeout(() => {
            createFireworkBurst(container);
        }, burst * 300);
    }
}

function createFireworkBurst(container) {
    const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff', '#ff6bff', '#00ffff', '#ffaa00'];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';

        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 10px ${color}`;

        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 5 + Math.random() * 8;
        const tx = Math.cos(angle) * velocity * 20;
        const ty = Math.sin(angle) * velocity * 20;

        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);

        const size = 4 + Math.random() * 6;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        particle.style.animationDelay = (Math.random() * 0.3) + 's';

        container.appendChild(particle);
    }
}

function playFireworkSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioContext.currentTime;

        for (let i = 0; i < 3; i++) {
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();

            osc.connect(gain);
            gain.connect(audioContext.destination);

            osc.frequency.setValueAtTime(800 - i * 200, now);
            osc.frequency.exponentialRampToValueAtTime(200 - i * 100, now + 0.3);

            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

            osc.start(now + i * 0.1);
            osc.stop(now + 0.3 + i * 0.1);
        }
    } catch (e) {
        // Audio not available
        console.log('Audio not available');
    }
}