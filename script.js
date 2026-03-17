// ============= QUIZ DATA =============
const allQuizzes = {
    love: {
        name: "Love Questions",
        icon: "💕",
        category: "relationships",
        difficulty: "Easy",
        questions: [
            {question: "What is the most important ingredient in a romantic relationship?", options: ["Trust", "Money", "Physical attraction", "Social status"], answer: "Trust"},
            {question: "How often should you say 'I love you' to your partner?", options: ["Once a day", "Once a week", "Whenever you feel it", "Only on special occasions"], answer: "Whenever you feel it"},
            {question: "What is considered the best first date activity?", options: ["Dinner and conversation", "Extreme sports", "Shopping", "Video games"], answer: "Dinner and conversation"},
            {question: "What should you do if your partner forgets an important date?", options: ["Leave them immediately", "Communicate how it made you feel", "Ignore it", "Make them feel guilty"], answer: "Communicate how it made you feel"},
            {question: "What is the best way to apologize to someone you love?", options: ["Text message", "Through a friend", "Face-to-face with sincerity", "Ignore the issue"], answer: "Face-to-face with sincerity"},
            {question: "How should you handle conflicts with your partner?", options: ["Avoid talking", "Listen and communicate", "Always agree", "Bring up past arguments"], answer: "Listen and communicate"},
            {question: "What makes a relationship last long?", options: ["Physical looks", "Money", "Effort and communication", "Luck"], answer: "Effort and communication"},
        ]
    },
    football: {
        name: "Football Questions",
        icon: "⚽",
        category: "sports",
        difficulty: "Medium",
        questions: [
            {question: "How many players does each team have on the pitch?", options: ["9", "10", "11", "12"], answer: "11"},
            {question: "How long is a standard football match?", options: ["60 min", "80 min", "90 min", "100 min"], answer: "90 minutes"},
            {question: "How many points is a win worth in most leagues?", options: ["1", "2", "3", "5"], answer: "3"},
            {question: "Which card means a player is sent off?", options: ["Yellow", "Red", "Green", "Blue"], answer: "Red"},
            {question: "What does VAR stand for?", options: ["Video Assistant Referee", "Virtual Action Replay", "Video Attack Rule", "Visual Aid Review"], answer: "Video Assistant Referee"},
            {question: "Which country won the first FIFA World Cup?", options: ["Brazil", "Uruguay", "Italy", "Argentina"], answer: "Uruguay"},
            {question: "How far is the penalty spot from the goal?", options: ["6 yards", "12 yards", "18 yards", "22 yards"], answer: "12 yards"},
        ]
    },
    nigeria: {
        name: "Nigeria Economy",
        icon: "🇳🇬",
        category: "economy",
        difficulty: "Hard",
        questions: [
            {question: "What is Nigeria's largest source of revenue?", options: ["Agriculture", "Oil and gas", "Telecoms", "Manufacturing"], answer: "Oil and gas"},
            {question: "What is Nigeria's official currency?", options: ["Pound", "Dollar", "Naira", "Euro"], answer: "Naira"},
            {question: "Which sector employs the most people?", options: ["Oil", "Agriculture", "Retail", "Tech"], answer: "Agriculture"},
            {question: "What percentage of GDP does oil contribute?", options: ["10-20%", "30-40%", "50-60%", "70-80%"], answer: "30-40%"},
            {question: "How many states does Nigeria have?", options: ["30", "33", "36", "37"], answer: "36"},
            {question: "What is Nigeria's inflation rate approx (2024)?", options: ["10%", "20%", "30%", "40%"], answer: "30%"},
            {question: "Nigeria's central bank is called?", options: ["CBN", "NBD", "NGB", "NBC"], answer: "CBN"},
        ]
    },
    education: {
        name: "Importance of Education",
        icon: "📚",
        category: "education",
        difficulty: "Easy",
        questions: [
            {question: "What is the primary purpose of education?", options: ["Earning money", "Personal development", "Social status", "Entertainment"], answer: "Personal development"},
            {question: "Education improves which of these?", options: ["Health", "Earning", "Thinking", "All of above"], answer: "All of above"},
            {question: "What percentage of poverty reduction is attributed to education?", options: ["10%", "25%", "37%", "50%"], answer: "37%"},
            {question: "Which skill is developed through education?", options: ["Problem-solving", "Communication", "Leadership", "All of above"], answer: "All of above"},
            {question: "What is the global literacy rate approx?", options: ["60%", "70%", "80%", "90%"], answer: "80%"},
            {question: "What does SDG 4 focus on?", options: ["Health", "Quality Education", "Clean Water", "Poverty"], answer: "Quality Education"},
        ]
    },
    ai: {
        name: "AI vs Human",
        icon: "🤖",
        category: "technology",
        difficulty: "Medium",
        questions: [
            {question: "In which area is AI faster than humans?", options: ["Creativity", "Data processing", "Emotion", "Intuition"], answer: "Data processing"},
            {question: "What is a human advantage over AI?", options: ["Speed", "Memory", "Creativity", "Consistency"], answer: "Creativity"},
            {question: "Can AI replace all human jobs?", options: ["Yes", "No, some jobs remain", "Uncertain", "Already has"], answer: "No, some jobs remain"},
            {question: "What limits current AI?", options: ["Speed", "Common sense", "Memory", "Power"], answer: "Common sense"},
            {question: "Which field has AI achieved highest efficiency?", options: ["Healthcare", "Transport", "Image recognition", "All equal"], answer: "Image recognition"},
        ]
    },
    geography: {
        name: "World Geography",
        icon: "🌍",
        category: "geography",
        difficulty: "Medium",
        questions: [
            {question: "What is the largest continent?", options: ["Africa", "Asia", "Europe", "America"], answer: "Asia"},
            {question: "Which is the longest river?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile"},
            {question: "What is the smallest country?", options: ["Monaco", "Vatican City", "San Marino", "Malta"], answer: "Vatican City"},
            {question: "Which desert is the largest?", options: ["Sahara", "Arabian", "Gobi", "Kalahari"], answer: "Sahara"},
            {question: "What is the deepest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific"},
        ]
    }
};

// ============= ACHIEVEMENTS =============
const achievements = [
    { id: 'first', name: 'First Steps', icon: '🏆', desc: 'Complete your first quiz', condition: (user) => user.quizAttempts?.length >= 1 },
    { id: 'streak7', name: '7-Day Streak', icon: '🔥', desc: 'Complete quizzes 7 days in a row', condition: (user) => (user.streak || 0) >= 7 },
    { id: 'perfect', name: 'Perfect Score', icon: '💯', desc: 'Get 100% on any quiz', condition: (user) => user.quizAttempts?.some(a => a.percentage === 100) },
    { id: 'master10', name: 'Quiz Master', icon: '🎯', desc: 'Complete 10 quizzes', condition: (user) => user.quizAttempts?.length >= 10 },
    { id: 'categories', name: 'Explorer', icon: '🗺️', desc: 'Try quizzes from 3 different categories', condition: (user) => {
        const cats = new Set(user.quizAttempts?.map(a => a.quizType).map(t => allQuizzes[t]?.category));
        return cats.size >= 3;
    }},
    { id: 'hard', name: 'Hard Mode', icon: '⚡', desc: 'Complete a hard difficulty quiz', condition: (user) => user.quizAttempts?.some(a => allQuizzes[a.quizType]?.difficulty === 'Hard') }
];

// ============= STATE =============
let currentUser = null;
let isAdminMode = false;
let allUsers = [];
let currentQuizType = null;
let quizData = [];
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let timeLeft = 15;
let timerInterval = null;
let streak = 0;
let enableSpeech = true;
let enableSound = true;
let navigatedBack = false;
let lastAttemptedIndex = -1;

// Admin credentials
const ADMIN_CREDENTIALS = {
    username: "mumschild",
    password: "21/08/2007"
};

// ============= STORAGE =============
function initializeStorage() {
    if (!localStorage.getItem('quiz_users')) {
        localStorage.setItem('quiz_users', JSON.stringify([]));
    }
    if (!localStorage.getItem('daily_quiz')) {
        localStorage.setItem('daily_quiz', JSON.stringify({
            date: new Date().toDateString(),
            quiz: 'sample',
            completedBy: []
        }));
    }
}

function loadUsers() {
    const stored = localStorage.getItem('quiz_users');
    allUsers = stored ? JSON.parse(stored) : [];
}

function saveUsers() {
    localStorage.setItem('quiz_users', JSON.stringify(allUsers));
}

function createUser(user) {
    user.id = Date.now().toString();
    user.createdAt = new Date().toLocaleString();
    user.quizAttempts = [];
    user.profilePicture = null;
    user.streak = 0;
    user.lastPlayed = null;
    user.achievements = [];
    allUsers.push(user);
    saveUsers();
    return user;
}

function updateUser(user) {
    const index = allUsers.findIndex(u => u.id === user.id);
    if (index !== -1) {
        allUsers[index] = user;
        saveUsers();
    }
}

// ============= DOM ELEMENTS =============
let authContainer, quizContainer, dashboardContainer, adminContainer;
let navbar, profileBtn, searchBox, searchInput;
let loginForm, signupForm, adminLoginForm;
let settingsModal, settingsBtn, settingsCloseBtn, speechToggle, soundToggle, settingsLogoutBtn;
let profileModal, profileCloseBtn, profileLogoutBtn, uploadProfileBtn, profilePictureInput;
let navDropdown, navDashboardBtn, navLeaderboardBtn, navSettings, navAchievements, navDaily;
let themeDark, themeLight, themeApp;
let achievementsModal, achievementsCloseBtn;
let leaderboardModal, leaderboardCloseBtn, leaderboardTabs;
let dailyModal, dailyCloseBtn;
let timerSelect, defaultTimerSelect;
let categoryFilters;
let homeBtn, backHomeBtn;
let timerEl, questionEl, optionsEl, feedbackEl, resultEl, scoreEl, totalEl, percentEl;
let summaryEl, reviewEl, restartBtn, prevBtn, nextBtn, streakEl, progressFill, userInfoEl;
let questionNumberEl, difficultyBadge;
let shareWhatsapp, shareStatus, shareTwitter, shareCopy;
let celebrationCloseBtn, celebrationCancelBtn;

// ============= INIT =============
document.addEventListener('DOMContentLoaded', () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    
    initializeStorage();
    loadUsers();
    getDOMElements();
    setupListeners();
    loadSettings();
    
    showAuthPage('login-page');
});

function getDOMElements() {
    authContainer = document.getElementById('auth-container');
    quizContainer = document.getElementById('quiz-container');
    dashboardContainer = document.getElementById('dashboard-container');
    adminContainer = document.getElementById('admin-container');
    navbar = document.getElementById('navbar');
    
    profileBtn = document.getElementById('profile-btn');
    searchBox = document.getElementById('search-box');
    searchInput = document.getElementById('search-input');
    navDropdown = document.getElementById('nav-dropdown');
    navDashboardBtn = document.getElementById('nav-dashboard-btn');
    navLeaderboardBtn = document.getElementById('nav-leaderboard-btn');
    navSettings = document.getElementById('nav-settings');
    navAchievements = document.getElementById('nav-achievements');
    navDaily = document.getElementById('nav-daily');
    
    loginForm = document.getElementById('login-form');
    signupForm = document.getElementById('signup-form');
    adminLoginForm = document.getElementById('admin-login-form');
    
    settingsModal = document.getElementById('settings-modal');
    settingsBtn = document.getElementById('settings-btn');
    settingsCloseBtn = document.getElementById('settings-close-btn');
    settingsLogoutBtn = document.getElementById('settings-logout-btn');
    speechToggle = document.getElementById('speech-toggle');
    soundToggle = document.getElementById('sound-toggle');
    
    achievementsModal = document.getElementById('achievements-modal');
    achievementsCloseBtn = document.getElementById('achievements-close-btn');
    
    leaderboardModal = document.getElementById('leaderboard-modal');
    leaderboardCloseBtn = document.getElementById('leaderboard-close-btn');
    leaderboardTabs = document.querySelectorAll('.leaderboard-tab');
    
    dailyModal = document.getElementById('daily-modal');
    dailyCloseBtn = document.getElementById('daily-close-btn');
    
    timerSelect = document.getElementById('timer-select');
    defaultTimerSelect = document.getElementById('default-timer');
    
    categoryFilters = document.querySelectorAll('.category-filter');
    
    profileModal = document.getElementById('profile-modal');
    profileCloseBtn = document.getElementById('profile-close-btn');
    profileLogoutBtn = document.getElementById('profile-logout-btn');
    uploadProfileBtn = document.getElementById('upload-profile-btn');
    profilePictureInput = document.getElementById('profile-picture-input');
    
    themeDark = document.getElementById('theme-dark');
    themeLight = document.getElementById('theme-light');
    themeApp = document.getElementById('theme-app');
    
    homeBtn = document.getElementById('home-btn');
    backHomeBtn = document.getElementById('back-home-btn');
    shareWhatsapp = document.getElementById('share-whatsapp');
    shareStatus = document.getElementById('share-status');
    shareTwitter = document.getElementById('share-twitter');
    shareCopy = document.getElementById('share-copy');
    celebrationCloseBtn = document.getElementById('celebration-close-btn');
    celebrationCancelBtn = document.getElementById('celebration-cancel-btn');
    
    refreshQuizElements();
}

function refreshQuizElements() {
    timerEl = document.getElementById('time');
    questionEl = document.getElementById('question');
    optionsEl = document.getElementById('options');
    feedbackEl = document.getElementById('feedback');
    resultEl = document.getElementById('result');
    scoreEl = document.getElementById('score');
    totalEl = document.getElementById('total');
    percentEl = document.getElementById('percent');
    summaryEl = document.getElementById('summary');
    reviewEl = document.getElementById('review');
    restartBtn = document.getElementById('restart-btn');
    prevBtn = document.getElementById('prev-btn');
    nextBtn = document.getElementById('next-btn');
    streakEl = document.getElementById('streak-count');
    progressFill = document.getElementById('progress-fill');
    userInfoEl = document.getElementById('user-info');
    questionNumberEl = document.getElementById('question-number');
    difficultyBadge = document.getElementById('difficulty-badge');
}

// ============= SETTINGS =============
function loadSettings() {
    const savedTheme = localStorage.getItem('appTheme') || 'app';
    document.documentElement.setAttribute('data-theme', savedTheme === 'app' ? '' : savedTheme);
    
    if (savedTheme === 'dark') themeDark.checked = true;
    else if (savedTheme === 'light') themeLight.checked = true;
    else themeApp.checked = true;
    
    const savedSpeech = localStorage.getItem('speechEnabled');
    if (savedSpeech !== null) {
        enableSpeech = savedSpeech === 'true';
        if (speechToggle) speechToggle.checked = enableSpeech;
    }
    
    const savedSound = localStorage.getItem('soundEnabled');
    if (savedSound !== null) {
        enableSound = savedSound === 'true';
        if (soundToggle) soundToggle.checked = enableSound;
    }
    
    const savedDefaultTimer = localStorage.getItem('defaultTimer') || '15';
    if (defaultTimerSelect) defaultTimerSelect.value = savedDefaultTimer;
}

// ============= LISTENERS =============
function setupListeners() {
    // Auth forms
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (signupForm) signupForm.addEventListener('submit', handleSignup);
    if (adminLoginForm) adminLoginForm.addEventListener('submit', handleAdminLogin);
    
    // Navigation links
    document.getElementById('to-signup-from-login')?.addEventListener('click', (e) => {
        e.preventDefault();
        showAuthPage('signup-page');
    });
    
    document.getElementById('to-login-from-signup')?.addEventListener('click', (e) => {
        e.preventDefault();
        showAuthPage('login-page');
    });
    
    document.getElementById('back-to-login')?.addEventListener('click', (e) => {
        e.preventDefault();
        showAuthPage('login-page');
    });
    
    document.getElementById('to-admin-from-login')?.addEventListener('click', (e) => {
        e.preventDefault();
        showAuthPage('admin-login-page');
    });
    
    // Admin logout
    document.getElementById('admin-logout-btn')?.addEventListener('click', () => {
        isAdminMode = false;
        currentUser = null;
        adminContainer.style.display = 'none';
        showAuthPage('login-page');
    });
    
    // Profile
    if (profileBtn) {
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navDropdown?.classList.toggle('active');
        });
        
        profileBtn.addEventListener('dblclick', () => {
            if (currentUser) {
                updateProfileDisplay();
                profileModal.style.display = 'flex';
            }
        });
    }
    
    if (profileCloseBtn) {
        profileCloseBtn.addEventListener('click', () => profileModal.style.display = 'none');
    }
    
    if (profileModal) {
        profileModal.addEventListener('click', (e) => {
            if (e.target === profileModal) profileModal.style.display = 'none';
        });
    }
    
    if (profileLogoutBtn) {
        profileLogoutBtn.addEventListener('click', () => {
            logout();
            profileModal.style.display = 'none';
        });
    }
    
    if (uploadProfileBtn && profilePictureInput) {
        uploadProfileBtn.addEventListener('click', () => profilePictureInput.click());
        
        profilePictureInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && currentUser) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    document.getElementById('profile-img').src = event.target.result;
                    currentUser.profilePicture = event.target.result;
                    updateUser(currentUser);
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Nav dropdown
    document.addEventListener('click', (e) => {
        if (navDropdown && profileBtn && !profileBtn.contains(e.target) && !navDropdown.contains(e.target)) {
            navDropdown.classList.remove('active');
        }
    });
    
    if (navDashboardBtn) {
        navDashboardBtn.addEventListener('click', () => {
            if (currentUser) goToDashboard();
        });
    }
    
    if (navLeaderboardBtn) {
        navLeaderboardBtn.addEventListener('click', () => {
            if (currentUser) showLeaderboard();
        });
    }
    
    if (navSettings) {
        navSettings.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentUser) {
                settingsModal.style.display = 'flex';
                navDropdown.classList.remove('active');
            }
        });
    }
    
    if (navAchievements) {
        navAchievements.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentUser) {
                showAchievements();
                navDropdown.classList.remove('active');
            }
        });
    }
    
    if (navDaily) {
        navDaily.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentUser) {
                showDailyChallenge();
                navDropdown.classList.remove('active');
            }
        });
    }
    
    // Settings
    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            settingsModal.style.display = 'flex';
        });
    }
    
    if (settingsCloseBtn) {
        settingsCloseBtn.addEventListener('click', () => settingsModal.style.display = 'none');
    }
    
    if (settingsModal) {
        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) settingsModal.style.display = 'none';
        });
    }
    
    if (settingsLogoutBtn) {
        settingsLogoutBtn.addEventListener('click', () => {
            logout();
            settingsModal.style.display = 'none';
        });
    }
    
    if (speechToggle) {
        speechToggle.addEventListener('change', (e) => {
            enableSpeech = e.target.checked;
            localStorage.setItem('speechEnabled', enableSpeech);
        });
    }
    
    if (soundToggle) {
        soundToggle.addEventListener('change', (e) => {
            enableSound = e.target.checked;
            localStorage.setItem('soundEnabled', enableSound);
        });
    }
    
    if (themeDark) {
        themeDark.addEventListener('change', () => updateTheme('dark'));
    }
    
    if (themeLight) {
        themeLight.addEventListener('change', () => updateTheme('light'));
    }
    
    if (themeApp) {
        themeApp.addEventListener('change', () => updateTheme('app'));
    }
    
    if (defaultTimerSelect) {
        defaultTimerSelect.addEventListener('change', (e) => {
            localStorage.setItem('defaultTimer', e.target.value);
        });
    }
    
    if (timerSelect) {
        timerSelect.addEventListener('change', (e) => {
            if (quizData.length > 0) {
                timeLeft = parseInt(e.target.value) || 15;
                if (timerEl) timerEl.textContent = timeLeft;
            }
        });
    }
    
    // Search
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query.length > 0) {
                filterQuizzes(query);
            } else {
                document.querySelectorAll('.quiz-topic-card').forEach(card => {
                    card.style.display = 'flex';
                });
                const noResults = document.querySelector('.no-results-message');
                if (noResults) noResults.remove();
            }
        });
    }
    
    // Category filters
    if (categoryFilters) {
        categoryFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                const category = filter.dataset.category;
                categoryFilters.forEach(f => f.classList.remove('active'));
                filter.classList.add('active');
                filterQuizzesByCategory(category);
                if (searchInput) searchInput.value = '';
            });
        });
    }
    
    // Home buttons
    if (homeBtn) {
        homeBtn.addEventListener('click', goToDashboard);
    }
    
    if (backHomeBtn) {
        backHomeBtn.addEventListener('click', goToDashboard);
    }
    
    // WhatsApp sharing
    if (shareWhatsapp) {
        shareWhatsapp.addEventListener('click', shareViaWhatsapp);
    }
    
    if (shareStatus) {
        shareStatus.addEventListener('click', shareToWhatsappStatus);
    }
    
    if (shareTwitter) {
        shareTwitter.addEventListener('click', shareViaTwitter);
    }
    
    if (shareCopy) {
        shareCopy.addEventListener('click', shareViaCopy);
    }
    
    // Celebration modal close buttons
    if (celebrationCloseBtn) {
        celebrationCloseBtn.addEventListener('click', () => {
            document.getElementById('celebration-modal').style.display = 'none';
        });
    }
    
    if (celebrationCancelBtn) {
        celebrationCancelBtn.addEventListener('click', () => {
            document.getElementById('celebration-modal').style.display = 'none';
        });
    }
    
    // Achievements modal
    if (achievementsCloseBtn) {
        achievementsCloseBtn.addEventListener('click', () => achievementsModal.style.display = 'none');
    }
    
    if (achievementsModal) {
        achievementsModal.addEventListener('click', (e) => {
            if (e.target === achievementsModal) achievementsModal.style.display = 'none';
        });
    }
    
    // Leaderboard modal
    if (leaderboardCloseBtn) {
        leaderboardCloseBtn.addEventListener('click', () => leaderboardModal.style.display = 'none');
    }
    
    if (leaderboardModal) {
        leaderboardModal.addEventListener('click', (e) => {
            if (e.target === leaderboardModal) leaderboardModal.style.display = 'none';
        });
    }
    
    if (leaderboardTabs) {
        leaderboardTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                leaderboardTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                renderLeaderboard(tab.dataset.tab);
            });
        });
    }
    
    // Daily modal
    if (dailyCloseBtn) {
        dailyCloseBtn.addEventListener('click', () => dailyModal.style.display = 'none');
    }
    
    if (dailyModal) {
        dailyModal.addEventListener('click', (e) => {
            if (e.target === dailyModal) dailyModal.style.display = 'none';
        });
    }
    
    // Cancel quiz
    document.getElementById('cancel-quiz-btn')?.addEventListener('click', () => {
        document.getElementById('cancel-quiz-modal').style.display = 'flex';
    });
    
    document.getElementById('cancel-quiz-yes')?.addEventListener('click', () => {
        goToDashboard();
        document.getElementById('cancel-quiz-modal').style.display = 'none';
    });
    
    document.getElementById('cancel-quiz-no')?.addEventListener('click', () => {
        document.getElementById('cancel-quiz-modal').style.display = 'none';
    });
    
    document.getElementById('cancel-quiz-modal')?.addEventListener('click', (e) => {
        if (e.target === document.getElementById('cancel-quiz-modal')) {
            document.getElementById('cancel-quiz-modal').style.display = 'none';
        }
    });
}

// ============= THEME =============
function updateTheme(theme) {
    localStorage.setItem('appTheme', theme);
    if (theme === 'app') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
}

// ============= AUTH =============
function showAuthPage(pageId) {
    document.querySelectorAll('.auth-page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId)?.classList.add('active');
    
    authContainer.style.display = 'flex';
    quizContainer.style.display = 'none';
    dashboardContainer.style.display = 'none';
    adminContainer.style.display = 'none';
    navbar.style.display = 'none';
    if (searchBox) searchBox.classList.add('hidden');
    if (timerSelect?.parentElement) timerSelect.parentElement.classList.add('hidden');
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        isAdminMode = true;
        showAdminDashboard();
        e.target.reset();
        return;
    }
    
    const user = allUsers.find(u => u.username === username && u.password === password);
    if (user) {
        currentUser = user;
        updateStreak();
        showDashboard();
        e.target.reset();
    } else {
        alert('Invalid username or password');
    }
}

function handleSignup(e) {
    e.preventDefault();
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    
    if (allUsers.find(u => u.username === username)) {
        alert('Username already exists');
        return;
    }
    
    const newUser = { username, email, password };
    createUser(newUser);
    alert('Account created! You can now login.');
    e.target.reset();
    showAuthPage('login-page');
}

function handleAdminLogin(e) {
    e.preventDefault();
    const username = document.getElementById('admin-username').value.trim();
    const password = document.getElementById('admin-password').value.trim();
    
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        isAdminMode = true;
        showAdminDashboard();
        e.target.reset();
    } else {
        alert('Invalid admin credentials');
    }
}

function logout() {
    currentUser = null;
    
    quizContainer.style.display = 'none';
    dashboardContainer.style.display = 'none';
    adminContainer.style.display = 'none';
    authContainer.style.display = 'flex';
    showAuthPage('login-page');
    
    clearInterval(timerInterval);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    
    navbar.style.display = 'none';
    if (searchBox) searchBox.classList.add('hidden');
    if (timerSelect?.parentElement) timerSelect.parentElement.classList.add('hidden');
}

// ============= DASHBOARD =============
function showDashboard() {
    if (!currentUser) return;
    
    authContainer.style.display = 'none';
    quizContainer.style.display = 'none';
    adminContainer.style.display = 'none';
    
    dashboardContainer.style.display = 'block';
    navbar.style.display = 'flex';
    if (searchBox) searchBox.classList.remove('hidden');
    if (timerSelect?.parentElement) timerSelect.parentElement.classList.add('hidden');
    
    document.getElementById('dashboard-welcome').textContent = `Welcome, ${currentUser.username}!`;
    
    renderDashboard();
    updateDashboardStats();
    resetDashboardFilters();
}

function renderDashboard() {
    const quizTopicsList = document.getElementById('quiz-topics-list');
    if (!quizTopicsList) return;
    
    quizTopicsList.innerHTML = '';
    
    Object.entries(allQuizzes).forEach(([key, quiz]) => {
        const card = document.createElement('div');
        card.className = 'quiz-topic-card';
        card.dataset.quizType = key;
        card.dataset.category = quiz.category;
        
        card.innerHTML = `
            <div class="topic-info">
                <div class="topic-icon">${quiz.icon}</div>
                <div class="topic-details">
                    <div class="topic-name">${quiz.name}</div>
                    <div class="topic-meta">
                        <span>${quiz.questions.length} questions</span>
                        <span class="difficulty-tag ${quiz.difficulty.toLowerCase()}">${quiz.difficulty}</span>
                    </div>
                </div>
            </div>
            <div class="topic-controls">
                <label class="topic-toggle">
                    <input type="checkbox" class="quiz-toggle-checkbox" data-quiz="${key}" />
                    <span class="topic-toggle-slider"></span>
                </label>
                <button class="confirm-btn" data-quiz="${key}" disabled>Start</button>
            </div>
        `;
        
        quizTopicsList.appendChild(card);
    });
    
    // Add event listeners
    document.querySelectorAll('.quiz-toggle-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function(e) {
            const card = this.closest('.quiz-topic-card');
            
            document.querySelectorAll('.quiz-toggle-checkbox').forEach(cb => {
                if (cb !== this) {
                    cb.checked = false;
                    cb.closest('.quiz-topic-card').classList.remove('selected');
                    cb.closest('.quiz-topic-card').querySelector('.confirm-btn').disabled = true;
                }
            });
            
            if (this.checked) {
                card.classList.add('selected');
                card.querySelector('.confirm-btn').disabled = false;
                currentQuizType = this.dataset.quiz;
            } else {
                card.classList.remove('selected');
                card.querySelector('.confirm-btn').disabled = true;
                currentQuizType = null;
            }
        });
    });
    
    document.querySelectorAll('.confirm-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const quizType = this.dataset.quiz;
            if (quizType) {
                startQuiz(quizType);
            }
        });
    });
}

function filterQuizzes(query) {
    const cards = document.querySelectorAll('.quiz-topic-card');
    const quizTopicsList = document.getElementById('quiz-topics-list');
    let visible = 0;
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            card.style.display = 'flex';
            visible++;
        } else {
            card.style.display = 'none';
        }
    });
    
    const existing = quizTopicsList.querySelector('.no-results-message');
    if (existing) existing.remove();
    
    if (visible === 0 && query.length > 0) {
        const msg = document.createElement('div');
        msg.className = 'no-results-message';
        msg.innerHTML = '<p>No quizzes found matching your search</p>';
        quizTopicsList.appendChild(msg);
    }
}

function filterQuizzesByCategory(category) {
    const cards = document.querySelectorAll('.quiz-topic-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function resetDashboardFilters() {
    document.querySelectorAll('.category-filter').forEach(filter => {
        if (filter.dataset.category === 'all') {
            filter.classList.add('active');
        } else {
            filter.classList.remove('active');
        }
    });
    
    document.querySelectorAll('.quiz-topic-card').forEach(card => {
        card.style.display = 'flex';
    });
    
    if (searchInput) searchInput.value = '';
}

function updateDashboardStats() {
    if (!currentUser) return;
    
    const totalQuizzes = currentUser.quizAttempts?.length || 0;
    const achievementsCount = currentUser.achievements?.length || 0;
    
    document.getElementById('stat-quizzes').textContent = totalQuizzes;
    document.getElementById('stat-streak').textContent = currentUser.streak || 0;
    document.getElementById('stat-achievements').textContent = achievementsCount;
}

function updateStreak() {
    if (!currentUser) return;
    
    const today = new Date().toDateString();
    const lastPlayed = currentUser.lastPlayed;
    
    if (lastPlayed) {
        const lastDate = new Date(lastPlayed);
        const diffDays = Math.floor((new Date() - lastDate) / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            currentUser.streak = (currentUser.streak || 0) + 1;
        } else if (diffDays > 1) {
            currentUser.streak = 1;
        }
    } else {
        currentUser.streak = 1;
    }
    
    currentUser.lastPlayed = today;
    updateUser(currentUser);
}

// ============= QUIZ =============
function startQuiz(quizType) {
    quizData = allQuizzes[quizType].questions;
    currentQuizType = quizType;
    
    refreshQuizElements();
    
    dashboardContainer.style.display = 'none';
    navbar.style.display = 'none';
    if (searchBox) searchBox.classList.add('hidden');
    if (timerSelect?.parentElement) timerSelect.parentElement.classList.remove('hidden');
    quizContainer.style.display = 'block';
    
    userInfoEl.textContent = `${allQuizzes[quizType].name} - ${currentUser.username}`;
    difficultyBadge.textContent = allQuizzes[quizType].difficulty;
    difficultyBadge.dataset.difficulty = allQuizzes[quizType].difficulty;
    
    resetQuizState();
    
    if (restartBtn) restartBtn.addEventListener('click', restartQuiz);
    if (prevBtn) prevBtn.addEventListener('click', goToPrevious);
    if (nextBtn) nextBtn.addEventListener('click', goToNext);
    
    loadQuestion();
}

function resetQuizState() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    streak = 0;
    navigatedBack = false;
    lastAttemptedIndex = -1;
    
    const defaultTime = parseInt(localStorage.getItem('defaultTimer') || '15');
    timeLeft = defaultTime;
    if (timerSelect) timerSelect.value = defaultTime;
    
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
    
    questionEl.textContent = q.question;
    questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    
    optionsEl.innerHTML = '';
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.textContent = opt;
        btn.addEventListener('click', () => handleOptionClick(btn, opt));
        optionsEl.appendChild(btn);
    });
    
    const prev = userAnswers[currentQuestion];
    if (prev?.selected) {
        const buttons = optionsEl.querySelectorAll('button');
        buttons.forEach(btn => {
            if (btn.textContent === prev.selected) {
                btn.classList.add('selected');
            }
        });
        setFeedback(prev.isCorrect);
    }
    
    const shouldSpeak = !prev && enableSpeech;
    if (shouldSpeak) {
        speak(`${q.question}. Options: ${q.options.join(', ')}.`);
    }
    
    const pct = Math.round((currentQuestion / quizData.length) * 100);
    progressFill.style.width = pct + '%';
    
    if (prevBtn) {
        prevBtn.style.display = currentQuestion > 0 && userAnswers[currentQuestion-1]?.selected ? 'inline-block' : 'none';
    }
    
    if (nextBtn) {
        nextBtn.style.display = navigatedBack && currentQuestion < Math.min(lastAttemptedIndex+1, quizData.length-1) ? 'inline-block' : 'none';
    }
    
    timeLeft = parseInt(timerSelect?.value || localStorage.getItem('defaultTimer') || '15');
    if (timeLeft > 0) {
        timerEl.textContent = timeLeft;
        startTimer();
    } else {
        timerEl.textContent = '∞';
    }
}

function startTimer() {
    if (timeLeft <= 0) return;
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            
            if (!userAnswers[currentQuestion]?.selected) {
                recordAnswer(null);
            }
            
            currentQuestion++;
            loadQuestion();
        }
    }, 1000);
}

function clearFeedback() {
    if (feedbackEl) {
        feedbackEl.textContent = '';
        feedbackEl.classList.remove('correct', 'wrong');
    }
    
    if (optionsEl) {
        optionsEl.querySelectorAll('.marker').forEach(m => m.remove());
        optionsEl.querySelectorAll('.option').forEach(o => {
            o.classList.remove('is-correct', 'is-wrong', 'selected', 'locked');
            o.disabled = false;
        });
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

function handleOptionClick(clickedButton, selectedOption) {
    const q = quizData[currentQuestion];
    const isCorrect = selectedOption === q.answer;
    
    optionsEl.querySelectorAll('.option').forEach(btn => {
        btn.disabled = true;
        btn.classList.add('locked');
    });
    
    const makeMarker = (type) => {
        const span = document.createElement('span');
        span.className = `marker ${type}`;
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
        optionsEl.querySelectorAll('.option').forEach(btn => {
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
    
    userAnswers[currentQuestion] = {
        question: q.question,
        selected: selectedOption,
        correct: q.answer,
        isCorrect
    };
    
    if (currentQuestion > lastAttemptedIndex) lastAttemptedIndex = currentQuestion;
    
    score = userAnswers.reduce((s, a) => s + (a?.isCorrect ? 1 : 0), 0);
    
    let cur = 0;
    for (let i = currentQuestion; i >= 0; i--) {
        if (userAnswers[i]?.isCorrect) cur++; else break;
    }
    streak = cur;
    if (streakEl) streakEl.textContent = streak;
}

function endQuiz() {
    clearInterval(timerInterval);
    
    questionEl.style.display = 'none';
    optionsEl.style.display = 'none';
    feedbackEl.style.display = 'none';
    resultEl.style.display = 'block';
    
    const total = quizData.length;
    const percent = total === 0 ? 0 : Math.round((score / total) * 100);
    
    scoreEl.textContent = score;
    totalEl.textContent = total;
    percentEl.textContent = percent;
    
    if (percent === 100) {
        triggerCelebration(percent);
    }
    
    let message = "Keep going!";
    if (percent >= 90) message = "Excellent work! 🌟";
    else if (percent >= 75) message = "Great job! 👍";
    else if (percent >= 50) message = "Good start! 💪";
    
    summaryEl.textContent = `${message} You scored ${score}/${total}`;
    
    renderReview();
    restartBtn.style.display = 'inline-block';
    
    saveQuizAttempt(percent);
    checkAchievements();
}

function renderReview() {
    if (!reviewEl) return;
    
    reviewEl.innerHTML = '<div class="review-title">Answer Review</div>';
    
    quizData.forEach((q, index) => {
        const attempt = userAnswers[index];
        const selected = attempt?.selected;
        const correct = attempt?.correct || q.answer;
        const isCorrect = attempt?.isCorrect || false;
        
        const item = document.createElement('div');
        item.className = `review-item ${isCorrect ? 'is-correct' : 'is-wrong'}`;
        
        item.innerHTML = `
            <div class="review-question">${index+1}. ${q.question}</div>
            <div class="review-meta">
                <span class="badge ${isCorrect ? 'ok' : (selected ? 'bad' : 'na')}">
                    ${isCorrect ? 'Correct' : (selected ? 'Wrong' : 'Unanswered')}
                </span>
                <div class="review-line">
                    <span class="review-label">Your answer:</span>
                    <span class="review-value">${selected || 'Unanswered'}</span>
                </div>
                <div class="review-line">
                    <span class="review-label">Correct:</span>
                    <span class="review-value">${correct}</span>
                </div>
            </div>
        `;
        
        reviewEl.appendChild(item);
    });
}

function saveQuizAttempt(percent) {
    if (!currentUser) return;
    
    const attempt = {
        score,
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
    
    if (!currentUser.quizAttempts) currentUser.quizAttempts = [];
    currentUser.quizAttempts.push(attempt);
    
    updateStreak();
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
    navigatedBack = true;
    loadQuestion();
}

function goToNext() {
    if (currentQuestion >= quizData.length - 1) return;
    
    clearInterval(timerInterval);
    currentQuestion++;
    navigatedBack = false;
    loadQuestion();
}

function goToDashboard() {
    clearInterval(timerInterval);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    
    quizContainer.style.display = 'none';
    dashboardContainer.style.display = 'block';
    navbar.style.display = 'flex';
    if (searchBox) searchBox.classList.remove('hidden');
    if (timerSelect?.parentElement) timerSelect.parentElement.classList.add('hidden');
    
    resetQuizState();
    renderDashboard();
    updateDashboardStats();
    resetDashboardFilters();
}

// ============= SPEECH =============
function speak(text) {
    if (!enableSpeech || !('speechSynthesis' in window)) return;
    
    try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    } catch (e) {
        console.warn('Speech error', e);
    }
}

// ============= PROFILE =============
function updateProfileDisplay() {
    if (!currentUser) return;
    
    document.getElementById('profile-username').textContent = currentUser.username;
    document.getElementById('profile-email').textContent = currentUser.email || '-';
    document.getElementById('profile-joined').textContent = currentUser.createdAt || '-';
    document.getElementById('profile-achievements').textContent = currentUser.achievements?.length || 0;
    document.getElementById('profile-streak').textContent = (currentUser.streak || 0) + ' days';
    
    const img = document.getElementById('profile-img');
    img.src = currentUser.profilePicture || 'https://via.placeholder.com/120';
}

// ============= ACHIEVEMENTS =============
function showAchievements() {
    if (!currentUser) return;
    
    const list = document.getElementById('achievements-list');
    list.innerHTML = '';
    
    achievements.forEach(ach => {
        const unlocked = currentUser.achievements?.includes(ach.id) || ach.condition(currentUser);
        
        const div = document.createElement('div');
        div.className = `achievement-item ${unlocked ? '' : 'locked'}`;
        div.innerHTML = `
            <div class="achievement-icon">${ach.icon}</div>
            <div class="achievement-info">
                <div class="achievement-name">${ach.name}</div>
                <div class="achievement-desc">${ach.desc}</div>
            </div>
            <div class="achievement-badge">
                <ion-icon name="${unlocked ? 'checkmark-circle' : 'lock-closed'}"></ion-icon>
            </div>
        `;
        
        list.appendChild(div);
    });
    
    achievementsModal.style.display = 'flex';
}

function checkAchievements() {
    if (!currentUser) return;
    
    let changed = false;
    if (!currentUser.achievements) currentUser.achievements = [];
    
    achievements.forEach(ach => {
        if (!currentUser.achievements.includes(ach.id) && ach.condition(currentUser)) {
            currentUser.achievements.push(ach.id);
            changed = true;
            alert(`🏆 Achievement Unlocked: ${ach.name}!`);
        }
    });
    
    if (changed) {
        updateUser(currentUser);
        updateDashboardStats();
    }
}

// ============= LEADERBOARD =============
function showLeaderboard() {
    renderLeaderboard('global');
    leaderboardModal.style.display = 'flex';
}

function renderLeaderboard(type) {
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = '';
    
    let users = [...allUsers];
    
    if (type === 'weekly') {
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        
        users = users.map(u => {
            const weeklyScore = u.quizAttempts?.filter(a => new Date(a.completedAt) >= weekAgo)
                .reduce((sum, a) => sum + (a.score || 0), 0) || 0;
            return { ...u, weeklyScore };
        }).sort((a, b) => (b.weeklyScore || 0) - (a.weeklyScore || 0));
    } else if (type === 'friends') {
        // Friends tab - for now just show all users (can be enhanced later)
        users = users.sort((a, b) => {
            const aTotal = a.quizAttempts?.reduce((s, q) => s + (q.score || 0), 0) || 0;
            const bTotal = b.quizAttempts?.reduce((s, q) => s + (q.score || 0), 0) || 0;
            return bTotal - aTotal;
        });
    } else {
        users = users.sort((a, b) => {
            const aTotal = a.quizAttempts?.reduce((s, q) => s + (q.score || 0), 0) || 0;
            const bTotal = b.quizAttempts?.reduce((s, q) => s + (q.score || 0), 0) || 0;
            return bTotal - aTotal;
        });
    }
    
    users.slice(0, 10).forEach((user, index) => {
        const total = user.quizAttempts?.reduce((s, q) => s + (q.score || 0), 0) || 0;
        const initial = user.username[0].toUpperCase();
        
        const div = document.createElement('div');
        div.className = 'leaderboard-item';
        div.innerHTML = `
            <div class="leaderboard-rank">#${index+1}</div>
            <div class="leaderboard-avatar">${initial}</div>
            <div class="leaderboard-info">
                <div class="leaderboard-name">${user.username}</div>
                <div class="leaderboard-score">${user.quizAttempts?.length || 0} quizzes</div>
            </div>
            <div class="leaderboard-value">${total}</div>
        `;
        
        if (user.id === currentUser?.id) {
            div.style.background = 'rgba(34, 197, 94, 0.3)';
        }
        
        list.appendChild(div);
    });
}

// ============= DAILY CHALLENGE =============
function showDailyChallenge() {
    const daily = JSON.parse(localStorage.getItem('daily_quiz') || '{}');
    const today = new Date().toDateString();
    
    if (daily.date !== today) {
        const quizzes = Object.keys(allQuizzes);
        const randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
        
        const newDaily = {
            date: today,
            quiz: randomQuiz,
            completedBy: []
        };
        
        localStorage.setItem('daily_quiz', JSON.stringify(newDaily));
        daily.quiz = randomQuiz;
        daily.completedBy = [];
    }
    
    const quiz = allQuizzes[daily.quiz];
    const completed = daily.completedBy?.includes(currentUser?.id);
    
    const body = document.getElementById('daily-body');
    body.innerHTML = `
        <div class="daily-quiz">
            <h3>${quiz.name}</h3>
            <p>${quiz.icon} ${quiz.questions.length} questions • ${quiz.difficulty}</p>
            <div class="daily-badge">
                ${completed ? '✓ Completed' : 'New Challenge!'}
            </div>
            <button class="daily-btn" id="start-daily-btn" ${completed ? 'disabled' : ''}>
                ${completed ? 'Already Completed' : 'Start Daily Challenge'}
            </button>
        </div>
    `;
    
    document.getElementById('start-daily-btn')?.addEventListener('click', () => {
        dailyModal.style.display = 'none';
        startQuiz(daily.quiz);
    });
    
    dailyModal.style.display = 'flex';
}

// ============= ADMIN =============
function showAdminDashboard() {
    authContainer.style.display = 'none';
    quizContainer.style.display = 'none';
    dashboardContainer.style.display = 'none';
    navbar.style.display = 'none';
    
    adminContainer.style.display = 'block';
    
    loadUsers();
    renderAdminDashboard();
}

function renderAdminDashboard() {
    const usersList = document.getElementById('users-list');
    const userDetails = document.getElementById('user-details');
    
    usersList.innerHTML = '';
    
    if (allUsers.length === 0) {
        usersList.innerHTML = '<p class="empty-state">No users yet</p>';
    } else {
        allUsers.forEach(user => {
            const item = document.createElement('div');
            item.className = 'user-item';
            item.textContent = `${user.username} (${user.quizAttempts?.length || 0} attempts)`;
            item.addEventListener('click', (e) => showUserDetails(user, e));
            usersList.appendChild(item);
        });
    }
    
    userDetails.innerHTML = '<div class="empty-state">Select a user to view details</div>';
}

function showUserDetails(user, event) {
    document.querySelectorAll('.user-item').forEach(i => i.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    const details = document.getElementById('user-details');
    
    let html = `
        <div class="user-header">
            <div class="user-header-info">
                <h3>${user.username}</h3>
                <p>Email: ${user.email || 'N/A'}</p>
                <p>Joined: ${user.createdAt || 'Unknown'}</p>
                <p>Achievements: ${user.achievements?.length || 0}</p>
            </div>
        </div>
    `;
    
    if (!user.quizAttempts?.length) {
        html += '<div class="empty-state">No quiz attempts</div>';
    } else {
        let totalCorrect = 0;
        let totalQuestions = 0;
        
        user.quizAttempts.forEach(attempt => {
            if (attempt.answers) {
                totalCorrect += attempt.answers.filter(a => a.isCorrect).length;
                totalQuestions += attempt.answers.length;
            }
        });
        
        const avg = totalQuestions ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
        
        html += `
            <div class="user-score">
                <div class="score-box">
                    <div class="score-box-label">Attempts</div>
                    <div class="score-box-value">${user.quizAttempts.length}</div>
                </div>
                <div class="score-box">
                    <div class="score-box-label">Correct</div>
                    <div class="score-box-value">${totalCorrect}</div>
                </div>
                <div class="score-box">
                    <div class="score-box-label">Avg</div>
                    <div class="score-box-value">${avg}%</div>
                </div>
            </div>
        `;
        
        user.quizAttempts.forEach((attempt, i) => {
            const pct = Math.round((attempt.score / (attempt.answers?.length || 1)) * 100);
            
            html += `
                <div class="user-answers">
                    <h4>Attempt ${i+1} - ${attempt.completedAt} (${pct}%)</h4>
            `;
            
            if (attempt.answers) {
                attempt.answers.forEach((ans, qi) => {
                    html += `
                        <div class="answer-item ${ans.isCorrect ? 'correct' : 'wrong'}">
                            <div class="answer-question">${qi+1}. ${ans.question}</div>
                            <div class="answer-user">${ans.selected || 'Unanswered'}</div>
                            <div class="answer-correct">${ans.correct}</div>
                        </div>
                    `;
                });
            }
            
            html += '</div>';
        });
    }
    
    details.innerHTML = html;
}

// ============= CELEBRATION =============
function triggerCelebration(percent) {
    const modal = document.getElementById('celebration-modal');
    if (!modal) return;
    
    const quizName = allQuizzes[currentQuizType]?.name || 'Quiz';
    
    document.getElementById('celebration-text').textContent = 'Perfect Score! 🌟';
    document.getElementById('celebration-topic').textContent = `${quizName} - 100% Accuracy`;
    
    modal.style.display = 'flex';
    generateFireworks();
    
    // No auto-close - user must click X or Cancel button
}

function generateFireworks() {
    const container = document.getElementById('fireworks-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createBurst(container);
        }, i * 300);
    }
}

function createBurst(container) {
    const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff', '#ff6bff'];
    
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'firework-particle';
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        p.style.backgroundColor = color;
        
        const angle = (Math.PI * 2 * i) / 30;
        const dist = 5 + Math.random() * 10;
        const tx = Math.cos(angle) * dist * 20;
        const ty = Math.sin(angle) * dist * 20;
        
        p.style.left = '50%';
        p.style.top = '50%';
        p.style.setProperty('--tx', tx + 'px');
        p.style.setProperty('--ty', ty + 'px');
        
        container.appendChild(p);
        
        setTimeout(() => p.remove(), 1200);
    }
}

// ============= WHATSAPP SHARE =============
function shareViaWhatsapp() {
    const percent = percentEl?.textContent || '0';
    const quizName = allQuizzes[currentQuizType]?.name || 'Quiz';
    const text = `I scored ${percent}% on the ${quizName} quiz at Intellibliss! 🎯\n\nTry it yourself: ${window.location.href}`;
    
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function shareToWhatsappStatus() {
    const percent = percentEl?.textContent || '0';
    const quizName = allQuizzes[currentQuizType]?.name || 'Quiz';
    const text = `I scored ${percent}% on the ${quizName} quiz! 🎯\n\nPlay at Intellibliss: ${window.location.href}`;
    
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function shareViaTwitter() {
    const percent = percentEl?.textContent || '0';
    const quizName = allQuizzes[currentQuizType]?.name || 'Quiz';
    const text = `I scored ${percent}% on the ${quizName} quiz at Intellibliss! 🎯`;
    const url = window.location.href;
    
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function shareViaCopy() {
    const percent = percentEl?.textContent || '0';
    const quizName = allQuizzes[currentQuizType]?.name || 'Quiz';
    const text = `I scored ${percent}% on the ${quizName} quiz at Intellibliss! 🎯\n\nTry it yourself: ${window.location.href}`;
    
    navigator.clipboard?.writeText(text).then(() => {
        alert('Result copied to clipboard!');
    }).catch(() => {});
}