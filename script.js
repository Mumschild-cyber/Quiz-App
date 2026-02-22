// ============= QUIZ SYSTEM DATA =============
const allQuizzes = {
    love: {
        name: "Love Questions",
        icon: "💕",
        questions: [
            {question: "What is the most important ingredient in a romantic relationship?", Options: ["Trust", "Money", "Physical attraction", "Social status"], answer: "Trust"},
            {question: "How often should you say 'I love you' to your partner?", Options: ["Once a day", "Once a week", "Whenever you feel it", "Only on special occasions"], answer: "Whenever you feel it"},
            {question: "What is considered the best first date activity?", Options: ["Dinner and conversation", "Extreme sports", "Shopping", "Video games"], answer: "Dinner and conversation"},
            {question: "How many years is considered a 'healthy' relationship milestone?", Options: ["3 months", "1 year", "5 years", "All above are meaningful"], answer: "All above are meaningful"},
            {question: "What should you do if your partner forgets an important date?", Options: ["Leave them immediately", "Communicate how it made you feel", "Ignore it", "Make them feel guilty forever"], answer: "Communicate how it made you feel"},
            {question: "Which is more important in love: passion or commitment?", Options: ["Passion", "Commitment", "Both equally", "Neither matters"], answer: "Both equally"},
            {question: "What is the best way to apologize to someone you love?", Options: ["Text message", "Through a friend", "Face-to-face with sincerity", "Ignore the issue"], answer: "Face-to-face with sincerity"},
            {question: "How should you handle conflicts with your partner?", Options: ["Avoid talking about it", "Listen and communicate openly", "Always agree with them", "Bring up past arguments"], answer: "Listen and communicate openly"},
            {question: "What does love at first sight really mean?", Options: ["Instant attraction", "Growing affection over time", "A movie myth", "Love is always immediate"], answer: "Instant attraction"},
            {question: "What is the best gift to express romantic love?", Options: ["Something expensive", "Something thoughtful and personal", "Flowers every day", "Material items only"], answer: "Something thoughtful and personal"},
            {question: "How important is maintaining individual interests in a relationship?", Options: ["Not important", "Very important", "Only for long-term relationships", "Only for married couples"], answer: "Very important"},
            {question: "What should you do if you catch feelings for someone?", Options: ["Never tell them", "Tell them directly when ready", "Wait forever hoping", "Tell everyone except them"], answer: "Tell them directly when ready"},
            {question: "Which is a sign of true love?", Options: ["Always agreeing", "Supporting each other's dreams", "Never arguing", "Being jealous"], answer: "Supporting each other's dreams"},
            {question: "How long does it take to truly fall in love?", Options: ["A few days", "It varies for everyone", "Exactly 6 months", "One year always"], answer: "It varies for everyone"},
            {question: "What makes a relationship last long?", Options: ["Physical looks", "Money and status", "Effort, trust, and communication", "Luck alone"], answer: "Effort, trust, and communication"},
            {question: "Is it okay to have doubts in a relationship?", Options: ["No, never", "Yes, it's normal and healthy", "Only at the beginning", "Only if you're not in love"], answer: "Yes, it's normal and healthy"},
            {question: "What is the most romantic gesture you can do?", Options: ["Grand public display", "Listening and understanding them", "Expensive gifts", "Constant texting"], answer: "Listening and understanding them"},
        ]
    },
    football: {
        name: "Football Questions",
        icon: "⚽",
        questions: [
            {question: "How many players does each team have on the pitch in a standard football match?", Options: ["9", "10", "11", "12"], answer: "11"},
            {question: "How long is a standard football match (excluding stoppage time)?", Options: ["60 minutes", "80 minutes", "90 minutes", "100 minutes"], answer: "90 minutes"},
            {question: "How many points is a win worth in most football leagues?", Options: ["1", "2", "3", "5"], answer: "3"},
            {question: "What is the restart called after a goal is scored?", Options: ["Drop ball", "Kick-off", "Throw-in", "Goal-kick"], answer: "Kick-off"},
            {question: "Which card means a player is sent off?", Options: ["Yellow", "Red", "Green", "Blue"], answer: "Red"},
            {question: "What does VAR stand for in football?", Options: ["Video Assistant Referee", "Verified Action Replay", "Virtual Assistant Review", "Video Attack Ruling"], answer: "Video Assistant Referee"},
            {question: "Which country won the first FIFA World Cup in 1930?", Options: ["Brazil", "Uruguay", "Italy", "Argentina"], answer: "Uruguay"},
            {question: "From which restart can a player NOT be offside?", Options: ["Throw-in", "Free Kick", "Open play", "Penalty kick"], answer: "Throw-in"},
            {question: "How far is the penalty spot from the goal line?", Options: ["6 yards", "12 yards", "18 yards", "22 yards"], answer: "12 yards"},
            {question: "From which type of free kick can you score directly without another touch?", Options: ["Direct free kick", "Indirect free kick", "Both", "Neither"], answer: "Direct free kick"},
            {question: "What is the area in front of the goal called?", Options: ["Penalty area", "Goal area", "D-box", "All of the above"], answer: "All of the above"},
            {question: "How many substitutes can a team typically make in a match?", Options: ["1", "2", "3", "5"], answer: "3"},
            {question: "What does 'offside' mean?", Options: ["Being in front of the ball", "Being ahead of defenders", "Being ahead of the second-to-last defender", "Being behind the goal line"], answer: "Being ahead of the second-to-last defender"},
            {question: "Which player wears a different colored jersey?", Options: ["Defender", "Midfielder", "Goalkeeper", "Forward"], answer: "Goalkeeper"},
            {question: "How many times can a goalkeeper touch the ball with hands in a match?", Options: ["Unlimited", "Once per play", "Only on crosses", "Never"], answer: "Unlimited"},
            {question: "What is the diameter of a football?", Options: ["20-22 cm", "25-28 cm", "30-35 cm", "40-45 cm"], answer: "25-28 cm"},
            {question: "Who won the most FIFA World Cup titles?", Options: ["Germany", "Argentina", "Brazil", "France"], answer: "Brazil"},
        ]
    },
    nigeria: {
        name: "Nigeria Economy",
        icon: "🇳🇬",
        questions: [
            {question: "What is Nigeria's largest source of revenue?", Options: ["Agriculture", "Oil and gas", "Telecommunications", "Manufacturing"], answer: "Oil and gas"},
            {question: "What is Nigeria's official currency?", Options: ["Pound", "Dollar", "Naira", "Euro"], answer: "Naira"},
            {question: "Which Nigerian sector employs the most people?", Options: ["Oil", "Agriculture", "Retail", "Technology"], answer: "Agriculture"},
            {question: "What percentage of Nigeria's GDP does oil contribute?", Options: ["10-20%", "30-40%", "50-60%", "70-80%"], answer: "30-40%"},
            {question: "Which is Nigeria's largest commercial bank?", Options: ["Access Bank", "GTBank", "Zenith Bank", "First Bank"], answer: "First Bank"},
            {question: "What is the minimum wage in Nigeria (2024)?", Options: ["₦18,000", "₦30,000", "₦70,000", "₦100,000"], answer: "₦70,000"},
            {question: "Nigeria's stock exchange is located in which city?", Options: ["Lagos", "Abuja", "Kano", "Port Harcourt"], answer: "Lagos"},
            {question: "What is Nigeria's major export product?", Options: ["Cocoa", "Coffee", "Crude oil", "Cotton"], answer: "Crude oil"},
            {question: "How many states does Nigeria have?", Options: ["30", "33", "36", "37"], answer: "36"},
            {question: "What is Nigeria's inflation rate approximately (2024)?", Options: ["10%", "20%", "30%", "40%"], answer: "30%"},
            {question: "Which Nigerian sector is growing fastest currently?", Options: ["Oil", "Technology", "Agriculture", "Mining"], answer: "Technology"},
            {question: "What is Nigeria's GDP ranking in Africa?", Options: ["1st", "2nd", "3rd", "5th"], answer: "1st"},
            {question: "Nigeria's central bank is called?", Options: ["CBN", "NBD", "NGB", "NBC"], answer: "CBN"},
            {question: "What is the primary agricultural product of Nigeria?", Options: ["Rice", "Cassava", "Maize", "All of the above"], answer: "All of the above"},
            {question: "How many major oil fields does Nigeria have?", Options: ["5", "15", "25", "35"], answer: "15"},
            {question: "Nigeria's debt-to-GDP ratio is approximately?", Options: ["20%", "35%", "50%", "65%"], answer: "35%"},
            {question: "Which Nigerian company is listed on international stock exchanges?", Options: ["Dangote Group", "BUA Group", "Nestlé Nigeria", "All of the above"], answer: "All of the above"},
        ]
    },
    education: {
        name: "Importance of Education",
        icon: "📚",
        questions: [
            {question: "What is the primary purpose of education?", Options: ["Earning money", "Personal development and societal progress", "Social status", "Entertainment"], answer: "Personal development and societal progress"},
            {question: "Education improves which of the following?", Options: ["Health outcomes", "Earning potential", "Critical thinking", "All of the above"], answer: "All of the above"},
            {question: "What percentage of global poverty reduction is attributed to education?", Options: ["10%", "25%", "37%", "50%"], answer: "37%"},
            {question: "Quality education helps reduce which social problem?", Options: ["Crime", "Unemployment", "Inequality", "All of the above"], answer: "All of the above"},
            {question: "Education enables individuals to make?", Options: ["Random decisions", "Informed decisions", "Emotional decisions", "Quick decisions"], answer: "Informed decisions"},
            {question: "Which skill is developed through education?", Options: ["Problem-solving", "Communication", "Leadership", "All of the above"], answer: "All of the above"},
            {question: "What is the global literacy rate approximately?", Options: ["60%", "70%", "80%", "90%"], answer: "80%"},
            {question: "Education contributes to sustainable development by?", Options: ["Reducing poverty", "Creating jobs", "Promoting peace", "All of the above"], answer: "All of the above"},
            {question: "Which group benefits most from quality education?", Options: ["Rich people", "Poor communities", "Young people", "Educated people"], answer: "Poor communities"},
            {question: "Education is a right recognized by which organization?", Options: ["WHO", "UNESCO", "UN", "World Bank"], answer: "UN"},
            {question: "What does SDG 4 focus on?", Options: ["Health", "Quality Education", "Clean Water", "Poverty"], answer: "Quality Education"},
            {question: "How does education affect economic growth?", Options: ["Negatively", "No impact", "Positively", "Uncertain"], answer: "Positively"},
            {question: "Education reduces gender inequality by?", Options: ["Empowering girls", "Creating opportunities", "Increasing awareness", "All of the above"], answer: "All of the above"},
            {question: "Which country has the highest literacy rate?", Options: ["India", "Japan", "Finland", "USA"], answer: "Finland"},
            {question: "Education strengthens which institutions?", Options: ["Governments", "Businesses", "Communities", "All of the above"], answer: "All of the above"},
            {question: "What is the estimated return on education investment?", Options: ["5x", "10x", "15x", "20x"], answer: "10x"},
            {question: "Education helps individuals achieve which of these?", Options: ["Career goals", "Personal fulfillment", "Social connections", "All of the above"], answer: "All of the above"},
        ]
    },
    ai: {
        name: "AI vs Human Efficiency",
        icon: "🤖",
        questions: [
            {question: "In which area is AI faster than humans?", Options: ["Decision-making", "Data processing", "Physical tasks", "Creative thinking"], answer: "Data processing"},
            {question: "What is a major advantage of human intelligence?", Options: ["Speed", "Memory", "Creativity and adaptability", "Consistency"], answer: "Creativity and adaptability"},
            {question: "Can AI replace human jobs completely?", Options: ["Yes, always", "No, never", "Some jobs, but humans adapt", "Uncertain"], answer: "Some jobs, but humans adapt"},
            {question: "Which task is AI more efficient at?", Options: ["Emotional support", "Complex analysis of patterns", "Artistic creation", "Strategic planning"], answer: "Complex analysis of patterns"},
            {question: "What is a limitation of current AI systems?", Options: ["Speed", "Lack of common sense", "Accuracy", "Memory"], answer: "Lack of common sense"},
            {question: "Humans excel in which area compared to AI?", Options: ["Calculations", "Communication", "Pattern recognition", "Data storage"], answer: "Communication"},
            {question: "What percentage of jobs will be automated in next 20 years?", Options: ["10%", "25%", "50%", "75%"], answer: "25%"},
            {question: "AI's efficiency is limited by?", Options: ["Power supply", "Internet", "Training data quality", "Programming"], answer: "Training data quality"},
            {question: "Which field has AI achieved highest efficiency?", Options: ["Healthcare", "Transportation", "Image recognition", "All equal"], answer: "Image recognition"},
            {question: "Can humans work better than AI in healthcare?", Options: ["Yes, always", "No, AI is better", "Both have strengths", "Depends on task"], answer: "Both have strengths"},
            {question: "What is AI's main advantage in business?", Options: ["Cost reduction", "Productivity", "Consistency", "All of the above"], answer: "All of the above"},
            {question: "Humans are better at which type of problem-solving?", Options: ["Linear problems", "Novel situations", "Repetitive tasks", "Mathematical calculations"], answer: "Novel situations"},
            {question: "AI requires what for learning?", Options: ["Consciousness", "Massive data", "Motivation", "Sleep"], answer: "Massive data"},
            {question: "Which profession is least likely to be automated?", Options: ["Accountant", "Therapist", "Clerk", "Analyst"], answer: "Therapist"},
            {question: "What human skill is hardest to replicate in AI?", Options: ["Logic", "Intuition", "Calculation", "Memory"], answer: "Intuition"},
            {question: "AI systems can work how many hours without break?", Options: ["8 hours", "12 hours", "Indefinitely", "Limited by power"], answer: "Indefinitely"},
            {question: "What is the future of AI and human collaboration?", Options: ["AI dominates", "Humans dominate", "Complementary partnership", "Separation"], answer: "Complementary partnership"},
        ]
    },
    sample: {
        name: "Sample Question Topic",
        icon: "⭐",
        questions: [
            {question: "What is 2 + 2?", Options: ["3", "4", "5", "6"], answer: "4"},
            {question: "Which planet is known as the Red Planet?", Options: ["Venus", "Jupiter", "Mars", "Saturn"], answer: "Mars"},
            {question: "What is the capital of France?", Options: ["London", "Berlin", "Paris", "Madrid"], answer: "Paris"},
            {question: "Who wrote Romeo and Juliet?", Options: ["Dickens", "Shakespeare", "Austen", "Marlowe"], answer: "Shakespeare"},
            {question: "What is the largest ocean?", Options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific"},
            {question: "Which element has symbol 'Au'?", Options: ["Silver", "Aluminum", "Gold", "Argon"], answer: "Gold"},
            {question: "What is the smallest prime number?", Options: ["0", "1", "2", "3"], answer: "2"},
            {question: "How many continents are there?", Options: ["5", "6", "7", "8"], answer: "7"},
            {question: "What is the speed of light?", Options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"], answer: "300,000 km/s"},
            {question: "Which is the tallest mountain?", Options: ["K2", "Everest", "Kilimanjaro", "Denali"], answer: "Everest"},
            {question: "What is the study of stars called?", Options: ["Geology", "Astronomy", "Botany", "Zoology"], answer: "Astronomy"},
            {question: "How many sides does a hexagon have?", Options: ["4", "5", "6", "7"], answer: "6"},
            {question: "Which country is largest by area?", Options: ["Canada", "Russia", "China", "USA"], answer: "Russia"},
            {question: "What is 10 x 5?", Options: ["40", "50", "60", "70"], answer: "50"},
            {question: "Which metal is liquid at room temperature?", Options: ["Gold", "Silver", "Mercury", "Copper"], answer: "Mercury"},
            {question: "What is the deepest ocean trench?", Options: ["Mariana Trench", "Tonga Trench", "Philippine Trench", "Kuril-Kamchatka"], answer: "Mariana Trench"},
            {question: "How many legs does a spider have?", Options: ["6", "8", "10", "12"], answer: "8"},
        ]
    }
};

let quizData = []; // Will be populated when quiz type is selected

// ============= AUTH SYSTEM =============
const ADMIN_CREDENTIALS = {
    username: "mumschild",
    password: "21/08/2007"
};

let currentUser = null;
let isAdminMode = false;
let allUsers = [];

/* Firebase configuration (replace with your project values) */
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);
const usersRef = firebase.database().ref('users');

async function loadUsersFromServer() {
    const snapshot = await usersRef.once('value');
    const obj = snapshot.val() || {};
    allUsers = Object.keys(obj).map(key => ({ ...obj[key], id: key }));
}

async function createUserOnServer(user) {
    const newRef = usersRef.push();
    user.id = newRef.key;
    await newRef.set(user);
    return user;
}

async function updateUserOnServer(user) {
    if (!user.id) return;
    await usersRef.child(user.id).set(user);
}

let currentQuizType = null; // Track selected quiz type

// ============= PAGE ELEMENTS =============
const authContainer = document.getElementById('auth-container');
const quizContainer = document.getElementById('quiz-container');
const adminContainer = document.getElementById('admin-container');

// Auth forms - will be queried in DOMContentLoaded
let loginForm = null;
let signupForm = null;
let adminLoginForm = null;

// Navigation links - will be queried in DOMContentLoaded
let toSignupFromLogin = null;
let toLoginFromSignup = null;
let backToLogin = null;

// Settings elements
let settingsModal = null;
let settingsBtn = null;
let settingsCloseBtn = null;
let speechToggle = null;
let settingsLogoutBtn = null;

// Quiz elements (initialized after page load)
let timerEl, questionEl, optionsEl, feedbackEl, resultEl, scoreEl, totalEl, percentEl;
let summaryEl, reviewEl, restartBtn, prevBtn, nextBtn, streakEl, progressFill, userInfoEl;

let currentQuestion = 0;
let score = 0;
let attempted = 0;
let userAnswers = [];
let timeLeft = 15;
let timerInterval;
let streak = 0;
let bestStreak = 0;
let navigatedBack = false;
let suppressSpeak = false;
let lastAttemptedIndex = -1;
let enableSpeech = true;

// ============= LOGIN & SIGNUP HANDLERS =============
// (Firebase-based loadUsersFromServer is defined earlier)

document.addEventListener('DOMContentLoaded', async () => {
    // Stop any ongoing speech on page load
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }

    // fetch existing users from Firebase
    await loadUsersFromServer();

    // Re-query form elements in case they weren't ready before
    const loginFormEl = document.getElementById('login-form');
    const signupFormEl = document.getElementById('signup-form');
    const adminLoginFormEl = document.getElementById('admin-login-form');
    const toSignupLink = document.getElementById('to-signup-from-login');
    const toLoginLink = document.getElementById('to-login-from-signup');
    const backToLoginLink = document.getElementById('back-to-login');
    const toAdminLink = document.getElementById('to-admin-from-login');

    if (loginFormEl) {
        loginFormEl.addEventListener('submit', async (e) => {
            e.preventDefault();
            await loadUsersFromServer();
            const username = document.getElementById('login-username').value.trim();
            const password = document.getElementById('login-password').value.trim();

            console.log('Login attempt:', username, password); // Debug

            // Check for admin login
            if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
                isAdminMode = true;
                showAdminDashboard();
                return;
            }

            // Check user login
            const user = allUsers.find(u => u.username === username && u.password === password);
            if (user) {
                currentUser = user;
                startQuiz();
                loginFormEl.reset();
            } else {
                alert('Invalid username or password');
            }
        });
    }

    if (signupFormEl) {
        signupFormEl.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('signup-username').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value.trim();

            // Check if user already exists
            if (allUsers.find(u => u.username === username)) {
                alert('Username already exists');
                return;
            }

            let newUser = {
                username,
                email,
                password,
                quizAttempts: []
            };
            try {
                const created = await createUserOnServer(newUser);
                allUsers.push(created);
                alert('Account created successfully! You can now login.');
                signupFormEl.reset();
                switchPage(document.getElementById('login-page'));
            } catch (err) {
                console.error('signup failed', err);
                alert('Unable to create account. Check Firebase configuration and network.');
            }
        });
    }

    if (adminLoginFormEl) {
        adminLoginFormEl.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('admin-username').value.trim();
            const password = document.getElementById('admin-password').value.trim();

            if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
                isAdminMode = true;
                showAdminDashboard();
                adminLoginFormEl.reset();
            } else {
                alert('Invalid admin credentials');
            }
        });
    }

    // Page switching
    if (toSignupLink) {
        toSignupLink.addEventListener('click', (e) => {
            e.preventDefault();
            switchPage(document.getElementById('signup-page'));
        });
    }

    if (toLoginLink) {
        toLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            switchPage(document.getElementById('login-page'));
        });
    }

    if (backToLoginLink) {
        backToLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            switchPage(document.getElementById('login-page'));
        });
    }

    if (toAdminLink) {
        toAdminLink.addEventListener('click', (e) => {
            e.preventDefault();
            switchPage(document.getElementById('admin-login-page'));
        });
    }

    // Settings modal handlers
    settingsModal = document.getElementById('settings-modal');
    settingsBtn = document.getElementById('settings-btn');
    settingsCloseBtn = document.getElementById('settings-close-btn');
    speechToggle = document.getElementById('speech-toggle');
    settingsLogoutBtn = document.getElementById('settings-logout-btn');

    const dashboardBtn = document.getElementById('dashboard-btn');
    if (dashboardBtn) {
        dashboardBtn.addEventListener('click', () => {
            goToDashboard();
        });
    }

    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            if (settingsModal) {
                settingsModal.style.display = 'flex';
            }
        });
    }

    if (settingsCloseBtn) {
        settingsCloseBtn.addEventListener('click', () => {
            if (settingsModal) {
                settingsModal.style.display = 'none';
            }
        });
    }

    // Close modal when clicking outside
    if (settingsModal) {
        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) {
                settingsModal.style.display = 'none';
            }
        });
    }

    if (speechToggle) {
        // Load saved speech preference
        const savedSpeechPref = localStorage.getItem('speechEnabled');
        if (savedSpeechPref !== null) {
            enableSpeech = savedSpeechPref === 'true';
            speechToggle.checked = enableSpeech;
        }

        speechToggle.addEventListener('change', (e) => {
            enableSpeech = e.target.checked;
            localStorage.setItem('speechEnabled', enableSpeech);
            
            if ('speechSynthesis' in window) {
                // Always cancel current speech first
                window.speechSynthesis.cancel();
                
                // If toggled ON, immediately speak the current question
                if (enableSpeech && currentUser && quizData.length > 0 && currentQuestion < quizData.length) {
                    const q = quizData[currentQuestion];
                    const opts = q.Options || q.options || [];
                    if (opts.length) {
                        speak(`${q.question}. Options: ${opts.join(', ')}.`);
                    } else {
                        speak(q.question);
                    }
                }
            }
        });
    }

    if (settingsLogoutBtn) {
        settingsLogoutBtn.addEventListener('click', () => {
            currentUser = null;
            enableSpeech = true; // Reset to default
            quizContainer.style.display = 'none';
            authContainer.style.display = 'block';
            switchPage(document.getElementById('login-page'));
            clearInterval(timerInterval);
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
            if (settingsModal) settingsModal.style.display = 'none';
        });
    }
});

function switchPage(targetPage) {
    document.querySelectorAll('.auth-page').forEach(page => {
        page.classList.remove('active');
    });
    targetPage.classList.add('active');
}

// ============= ADMIN DASHBOARD =============
async function showAdminDashboard() {
    authContainer.style.display = 'none';
    quizContainer.style.display = 'none';
    adminContainer.style.display = 'block';
    
    await loadUsersFromServer(); // make sure we have fresh data
    renderAdminDashboard();
}

function renderAdminDashboard() {
    const usersList = document.getElementById('users-list');
    const userDetails = document.getElementById('user-details');

    // Render users list
    usersList.innerHTML = '';
    if (allUsers.length === 0) {
        usersList.innerHTML = '<p class="empty-state">No registered users yet</p>';
    } else {
        allUsers.forEach(user => {
            const userItem = document.createElement('div');
            userItem.className = 'user-item';
            userItem.textContent = `${user.username} (${user.quizAttempts.length} attempts)`;
            userItem.addEventListener('click', () => showUserDetails(user));
            usersList.appendChild(userItem);
        });
    }

    // Default empty state
    if (userDetails) {
        userDetails.innerHTML = '<div class="empty-state"><p>Select a user to view their details and answers</p></div>';
    }
}

function showUserDetails(user) {
    const userDetails = document.getElementById('user-details');
    const usersList = document.querySelectorAll('.user-item');
    
    // Update active state
    usersList.forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');

    let html = '';

    // User header
    html += `
        <div class="user-header">
            <div class="user-header-info">
                <h3>${user.username}</h3>
                <p>Email: ${user.email}</p>
                <p>Joined: ${user.createdAt}</p>
            </div>
        </div>
    `;

    if (user.quizAttempts.length === 0) {
        html += '<div class="empty-state"><p>This user has not attempted any quiz yet</p></div>';
    } else {
        // Calculate overall stats
        const totalCorrect = user.quizAttempts.reduce((sum, attempt) => sum + attempt.score, 0);
        const totalQuestions = user.quizAttempts.length * quizData.length;
        const avgPercentage = Math.round((totalCorrect / totalQuestions) * 100);

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

        // Show each attempt
        user.quizAttempts.forEach((attempt, attemptIndex) => {
            const percentage = Math.round((attempt.score / quizData.length) * 100);
            
            html += `
                <div class="user-answers">
                    <h4>Attempt ${attemptIndex + 1} - ${attempt.completedAt} (${percentage}%)</h4>
            `;

            attempt.answers.forEach((answer, qIndex) => {
                const isCorrect = answer.selected === answer.correct;
                const className = isCorrect ? 'correct' : 'wrong';
                
                html += `
                    <div class="answer-item ${className}">
                        <div class="answer-question">${qIndex + 1}. ${answer.question}</div>
                        <div class="answer-user">${answer.selected || 'Not answered'}</div>
                        <div class="answer-correct">${answer.correct}</div>
                    </div>
                `;
            });

            html += `</div>`;
        });
    }

    userDetails.innerHTML = html;
}

document.getElementById('admin-logout-btn').addEventListener('click', () => {
    isAdminMode = false;
    currentUser = null;
    adminContainer.style.display = 'none';
    authContainer.style.display = 'block';
    switchPage(document.getElementById('login-page'));
    document.getElementById('admin-username').value = '';
    document.getElementById('admin-password').value = '';
});

// ============= QUIZ INITIALIZATION =============
function initializeQuizElements() {
    const quizDiv = document.getElementById('quiz-container');
    timerEl = quizDiv.querySelector('#time');
    questionEl = quizDiv.querySelector('.question');
    optionsEl = quizDiv.querySelector('.options');
    feedbackEl = quizDiv.querySelector('#feedback');
    resultEl = quizDiv.querySelector('.result');
    scoreEl = quizDiv.querySelector('#score');
    totalEl = quizDiv.querySelector('#total');
    percentEl = quizDiv.querySelector('#percent');
    summaryEl = quizDiv.querySelector('#summary');
    reviewEl = quizDiv.querySelector('#review');
    restartBtn = quizDiv.querySelector('.restart-btn');
    prevBtn = quizDiv.querySelector('.previous-btn');
    nextBtn = quizDiv.querySelector('.next-btn');
    streakEl = quizDiv.querySelector('#streak-count');
    progressFill = quizDiv.querySelector('#progress-fill');
    userInfoEl = quizDiv.querySelector('#user-info');
}

// ============= QUIZ FUNCTIONS =============
function speak(text) {
    if (!enableSpeech) return;
    if (!('speechSynthesis' in window)) return;
    try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.rate = 0.95;
        u.pitch = 1;
        u.lang = 'en-US';
        window.speechSynthesis.speak(u);
    } catch (e) {
        console.warn('Speech error', e);
    }
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
        const questionNumber = document.getElementById('question-number');
        if (questionNumber) {
            questionNumber.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
        }
    }

    const opts = q.Options || q.options || [];

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
        optionsEl.style.display = 'flex';

        const prev = userAnswers[currentQuestion];
        if (prev && prev.selected !== undefined && prev.selected !== null) {
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

        const shouldSpeak = !(prev && prev.selected !== undefined && prev.selected !== null) && !suppressSpeak;
        if (shouldSpeak) {
            if (opts.length) {
                speak(`${q.question}. Options: ${opts.join(', ')}.`);
            } else {
                speak(q.question);
            }
        }
    }

    if (progressFill) {
        const pct = Math.round(((currentQuestion) / quizData.length) * 100);
        progressFill.style.width = pct + '%';
    }

    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    if (prevBtn && currentQuestion > 0 && userAnswers[currentQuestion - 1] && userAnswers[currentQuestion - 1].selected !== undefined && userAnswers[currentQuestion - 1].selected !== null) {
        prevBtn.style.display = 'inline-block';
    }
    if (nextBtn && navigatedBack && currentQuestion < Math.min(lastAttemptedIndex + 1, quizData.length - 1)) {
        nextBtn.style.display = 'inline-block';
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
        opts.forEach(o => o.classList.remove('is-correct', 'is-wrong', 'selected'));
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

function lockOption() {
    const buttons = optionsEl.querySelectorAll('button.option');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('locked');
    });
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
    attempted = userAnswers.reduce((c, a) => c + (a && a.selected !== null && a.selected !== undefined ? 1 : 0), 0);

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

function handleOptionClick(clickedButton, selectedOption) {
    const isCorrect = selectedOption === quizData[currentQuestion].answer;

    lockOption();

    if (optionsEl) {
        const existing = optionsEl.querySelectorAll('.marker');
        existing.forEach(e => e.remove());
    }

    const makeMarker = (type) => {
        const span = document.createElement('span');
        span.className = `marker ${type === 'ok' ? 'ok' : 'bad'}`;
        span.setAttribute('aria-hidden', 'true');
        span.textContent = type === 'ok' ? '✓' : '✕';
        return span;
    }

    if (isCorrect) {
        clickedButton.classList.add('is-correct');
        clickedButton.appendChild(makeMarker('ok'));
    } else {
        clickedButton.classList.add('is-wrong');
        clickedButton.appendChild(makeMarker('bad'));

        const correctAnswer = quizData[currentQuestion].answer;
        const buttons = optionsEl.querySelectorAll('button.option');
        buttons.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('is-correct');
                btn.appendChild(makeMarker('ok'));
            }
        });
    }

    if (feedbackEl) feedbackEl.textContent = '';

    recordAnswer(selectedOption);
    navigatedBack = false;
    clearInterval(timerInterval);
    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 750)
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timerEl) timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            recordAnswer(null);
            currentQuestion++;
            loadQuestion();
        }
    }, 1000)
}

function endQuiz() {
    clearInterval(timerInterval);
    questionEl.style.display = 'none';
    optionsEl.style.display = 'none';
    if (feedbackEl) feedbackEl.style.display = 'none';
    resultEl.style.display = 'block';
    scoreEl.textContent = score;

    const total = quizData.length;
    const wrong = attempted - score;
    const unanswered = total - attempted;
    const percent = total === 0 ? 0 : Math.round((score / total) * 100);
    if (percentEl) percentEl.textContent = percent;
    if (totalEl) totalEl.textContent = total;

    let label = "Keep going!";
    if (percent >= 90) label = "You're a love expert! 💕";
    else if (percent >= 75) label = "Excellent!";
    else if (percent >= 50) label = "Good start!";

    // Trigger celebration if 95% or higher
    if (percent >= 95) {
        triggerCelebration(percent);
    }

    if (summaryEl) summaryEl.textContent = `${label} You scored ${score}/${total} · ${wrong} wrong · ${unanswered} unanswered`;

    if (reviewEl) {
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

            const your = document.createElement('div');
            your.className = 'review-line';
            your.innerHTML = `<span class="review-label">Your answer:</span> <span class="review-value">${selected ?? 'Unanswered'}</span>`;

            const right = document.createElement('div');
            right.className = 'review-line';
            right.innerHTML = `<span class="review-label">Correct:</span> <span class="review-value">${correct}</span>`;

            const badge = document.createElement('span');
            badge.className = `badge ${isCorrect ? 'ok' : (selected === null ? 'na' : 'bad')}`;
            badge.textContent = isCorrect ? 'Correct' : (selected === null ? 'Unanswered' : 'Wrong');

            meta.appendChild(badge);
            meta.appendChild(your);
            meta.appendChild(right);

            item.appendChild(qEl);
            item.appendChild(meta);
            reviewEl.appendChild(item);
        });
    }
    restartBtn.style.display = 'block';

    // Save the attempt to user's history
    saveQuizAttempt(percent);
}

async function saveQuizAttempt(percent) {
    if (currentUser) {
        const attempt = {
            score: score,
            percentage: percent,
            answers: userAnswers.map(a => ({
                question: a.question,
                selected: a.selected,
                correct: a.correct,
                isCorrect: a.isCorrect
            })),
            completedAt: new Date().toLocaleString()
        };

        currentUser.quizAttempts.push(attempt);
        allUsers = allUsers.map(u => u.id === currentUser.id ? currentUser : u);

        try {
            await updateUserOnServer(currentUser);
        } catch (err) {
            console.error('Failed to update user in Firebase', err);
        }
    }
}

function startQuiz() {
    // Show dashboard instead of quiz directly
    authContainer.style.display = 'none';
    adminContainer.style.display = 'none';
    const dashboardContainer = document.getElementById('dashboard-container');
    if (dashboardContainer) {
        dashboardContainer.style.display = 'flex';
    }
    quizContainer.style.display = 'none';

    // Update dashboard welcome message
    const welcomeMsg = document.getElementById('dashboard-welcome');
    if (welcomeMsg) {
        welcomeMsg.textContent = `Welcome, ${currentUser.username}!`;
    }

    // Render quiz topics
    renderDashboard();
}

function renderDashboard() {
    const quizTopicsList = document.getElementById('quiz-topics-list');
    if (!quizTopicsList) return;

    quizTopicsList.innerHTML = '';

    // Loop through all quizzes and create topic cards
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

        // Add toggle event listener
        const checkbox = card.querySelector('.quiz-toggle-checkbox');
        checkbox.addEventListener('change', (e) => {
            handleQuizToggle(e, key, card);
        });

        // Add confirm button event listener
        const confirmBtn = card.querySelector('.confirm-btn');
        confirmBtn.addEventListener('click', (e) => {
            handleConfirmQuiz(e, key);
        });

        quizTopicsList.appendChild(card);
    });
}

function handleQuizToggle(event, quizType, cardElement) {
    const isChecked = event.target.checked;

    // Uncheck all other cards
    document.querySelectorAll('.quiz-topic-card').forEach(card => {
        if (card !== cardElement) {
            const checkbox = card.querySelector('.quiz-toggle-checkbox');
            checkbox.checked = false;
            card.classList.remove('selected');
        }
    });

    // Update current card
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

    // Update current quiz type
    currentQuizType = isChecked ? quizType : null;
}

function handleConfirmQuiz(event, quizType) {
    event.preventDefault();

    // Set quizData to selected quiz type
    quizData = allQuizzes[quizType].questions;
    currentQuizType = quizType;

    // Initialize quiz and start
    initializeQuizElements();
    
    const dashboardContainer = document.getElementById('dashboard-container');
    if (dashboardContainer) {
        dashboardContainer.style.display = 'none';
    }
    quizContainer.style.display = 'block';

    if (userInfoEl) {
        userInfoEl.textContent = `${allQuizzes[quizType].name} - ${currentUser.username}`;
    }

    // Clear previous results
    const resultEl = quizContainer.querySelector('.result');
    if (resultEl) {
        resultEl.style.display = 'none';
    }
    const summaryEl = quizContainer.querySelector('#summary');
    if (summaryEl) {
        summaryEl.textContent = '';
    }
    const reviewEl = quizContainer.querySelector('#review');
    if (reviewEl) {
        reviewEl.innerHTML = '';
    }

    // Reset quiz state
    currentQuestion = 0;
    score = 0;
    attempted = 0;
    userAnswers = [];
    streak = 0;
    bestStreak = 0;
    navigatedBack = false;
    suppressSpeak = false;
    lastAttemptedIndex = -1;

    // Add event listeners to buttons
    const restartBtn = quizContainer.querySelector('.restart-btn');
    const prevBtn = quizContainer.querySelector('.previous-btn');
    const nextBtn = quizContainer.querySelector('.next-btn');

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

function goToDashboard() {
    // Return to dashboard without saving quiz attempt
    const quizContainer = document.getElementById('quiz-container');
    const dashboardContainer = document.getElementById('dashboard-container');
    
    if (quizContainer) quizContainer.style.display = 'none';
    if (dashboardContainer) dashboardContainer.style.display = 'flex';

    // Clear quiz state
    clearInterval(timerInterval);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    
    currentQuestion = 0;
    score = 0;
    attempted = 0;
    userAnswers = [];
    timeLeft = 15;
    streak = 0;
    navigatedBack = false;
    suppressSpeak = false;
    lastAttemptedIndex = -1;

    // Re-render dashboard to reset toggle states
    renderDashboard();
}

function restartQuiz() {
    // Restart the same quiz
    clearInterval(timerInterval);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    
    currentQuestion = 0;
    score = 0;
    attempted = 0;
    userAnswers = [];
    timeLeft = 15;
    streak = 0;
    bestStreak = 0;
    if (streakEl) streakEl.textContent = '0';

    const questionEl = quizContainer.querySelector('.question');
    const optionsEl = quizContainer.querySelector('.options');
    const feedbackEl = quizContainer.querySelector('#feedback');
    const resultEl = quizContainer.querySelector('.result');
    const summaryEl = quizContainer.querySelector('#summary');
    const reviewEl = quizContainer.querySelector('#review');
    const restartBtn = quizContainer.querySelector('.restart-btn');

    if (questionEl) questionEl.style.display = 'block';
    if (optionsEl) optionsEl.style.display = 'flex';
    if (feedbackEl) feedbackEl.style.display = 'block';
    if (resultEl) resultEl.style.display = 'none';
    if (restartBtn) restartBtn.style.display = 'none';

    if (summaryEl) summaryEl.textContent = '';
    if (reviewEl) reviewEl.innerHTML = '';
    clearFeedback();

    navigatedBack = false;
    suppressSpeak = false;
    lastAttemptedIndex = -1;

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
    if (currentQuestion >= lastAttemptedIndex + 1) {
        navigatedBack = false;
    }
    loadQuestion();
}

// ============= CELEBRATION FUNCTION =============
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

    // Show modal
    modal.style.display = 'flex';

    // Generate fireworks
    generateFireworks();

    // Play celebration sound
    playFireworkSound();

    // Auto-hide after 4 seconds
    setTimeout(() => {
        modal.style.display = 'none';
    }, 4000);
}

function generateFireworks() {
    const container = document.getElementById('fireworks-container');
    if (!container) return;

    // Clear previous fireworks
    container.innerHTML = '';

    // Create multiple bursts
    for (let burst = 0; burst < 5; burst++) {
        setTimeout(() => {
            createFireworkBurst(container);
        }, burst * 300);
    }
}

function createFireworkBurst(container) {
    const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff', '#ff6bff', '#00ffff', '#ffaa00'];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';

        // Random color
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 10px ${color}`;

        // Random position from center
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 5 + Math.random() * 8;
        const tx = Math.cos(angle) * velocity * 20;
        const ty = Math.sin(angle) * velocity * 20;

        // Position at center
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);

        // Random size
        const size = 5 + Math.random() * 8;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Random animation delay
        particle.style.animationDelay = (Math.random() * 0.3) + 's';

        container.appendChild(particle);
    }
}

function playFireworkSound() {
    // Create audio context for sound
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioContext.currentTime;

        // Create multiple sounds for firework effect
        for (let i = 0; i < 3; i++) {
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();

            osc.connect(gain);
            gain.connect(audioContext.destination);

            // Varying frequencies for cool sound
            osc.frequency.setValueAtTime(800 - i * 200, now);
            osc.frequency.exponentialRampToValueAtTime(200 - i * 100, now + 0.3);

            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

            osc.start(now + i * 0.1);
            osc.stop(now + 0.3 + i * 0.1);
        }
    } catch (e) {
        // Audio context not available
        console.log('Audio not available');
    }
}

// Function to handle new user registration
function registerNewUser(username) {
    const registrationDate = new Date();
    const newUser = { username, registrationDate };

    // Assuming we have a users array to store registered users
    users.push(newUser);

    // Notify admin about the new user
    notifyAdmin(newUser);
}

// Function to notify admin about new user registration
function notifyAdmin(user) {
    console.log(`New user registered: ${user.username} on ${user.registrationDate}`);
    // Additional logic to send an email or notification can be added here
}

// Example users array to store registered users
const users = [];

