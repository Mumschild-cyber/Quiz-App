const quizData = [
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
];

// ============= AUTH SYSTEM =============
const ADMIN_CREDENTIALS = {
    username: "mumschild",
    password: "21/08/2007"
};

let currentUser = null;
let isAdminMode = false;
let allUsers = JSON.parse(localStorage.getItem('quizUsers')) || [];

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
document.addEventListener('DOMContentLoaded', () => {
    // Re-query form elements in case they weren't ready before
    const loginFormEl = document.getElementById('login-form');
    const signupFormEl = document.getElementById('signup-form');
    const adminLoginFormEl = document.getElementById('admin-login-form');
    const toSignupLink = document.getElementById('to-signup-from-login');
    const toLoginLink = document.getElementById('to-login-from-signup');
    const backToLoginLink = document.getElementById('back-to-login');
    const toAdminLink = document.getElementById('to-admin-from-login');

    if (loginFormEl) {
        loginFormEl.addEventListener('submit', (e) => {
            e.preventDefault();
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
        signupFormEl.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('signup-username').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value.trim();

            // Check if user already exists
            if (allUsers.find(u => u.username === username)) {
                alert('Username already exists');
                return;
            }

            const newUser = {
                id: Date.now(),
                username,
                email,
                password,
                quizAttempts: [],
                createdAt: new Date().toLocaleString()
            };

            allUsers.push(newUser);
            localStorage.setItem('quizUsers', JSON.stringify(allUsers));

            alert('Account created successfully! You can now login.');
            signupFormEl.reset();
            switchPage(document.getElementById('login-page'));
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
});

function switchPage(targetPage) {
    document.querySelectorAll('.auth-page').forEach(page => {
        page.classList.remove('active');
    });
    targetPage.classList.add('active');
}

// ============= ADMIN DASHBOARD =============
function showAdminDashboard() {
    authContainer.style.display = 'none';
    quizContainer.style.display = 'none';
    adminContainer.style.display = 'block';
    
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

function saveQuizAttempt(percent) {
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
        localStorage.setItem('quizUsers', JSON.stringify(allUsers));
    }
}

function startQuiz() {
    initializeQuizElements();
    
    authContainer.style.display = 'none';
    adminContainer.style.display = 'none';
    quizContainer.style.display = 'block';

    if (userInfoEl) {
        userInfoEl.textContent = `Welcome, ${currentUser.username}!`;
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

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    attempted = 0;
    userAnswers = [];
    timeLeft = 15;
    streak = 0;
    if (timerEl) timerEl.textContent = timeLeft;
    if (streakEl) streakEl.textContent = '0';

    questionEl.style.display = 'block';
    optionsEl.style.display = 'flex';
    if (feedbackEl) feedbackEl.style.display = 'block';
    resultEl.style.display = 'none';
    restartBtn.style.display = 'none';

    if (summaryEl) summaryEl.textContent = '';
    if (reviewEl) reviewEl.innerHTML = '';
    clearFeedback();

    navigatedBack = false;
    suppressSpeak = false;
    lastAttemptedIndex = -1;

    if ('speechSynthesis' in window) window.speechSynthesis.cancel();

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

// Logout from quiz
document.addEventListener('DOMContentLoaded', () => {
    const quizLogoutBtn = document.getElementById('quiz-logout-btn');
    if (quizLogoutBtn) {
        quizLogoutBtn.addEventListener('click', () => {
            currentUser = null;
            quizContainer.style.display = 'none';
            authContainer.style.display = 'block';
            switchPage(document.getElementById('login-page'));
            clearInterval(timerInterval);
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        });
    }
});
