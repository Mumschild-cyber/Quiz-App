const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'users.json');

// ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// initialize file if missing
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, '[]');
}

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// simple request logger
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
    next();
});

function readUsers() {
    try {
        const contents = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(contents || '[]');
    } catch (e) {
        console.error('Error reading users file:', e);
        return [];
    }
}

function writeUsers(users) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
}

// API endpoints
app.get('/api/users', (req, res) => {
    res.json(readUsers());
});

app.get('/api/users/:id', (req, res) => {
    const users = readUsers();
    const user = users.find(u => u.id == req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.post('/api/users', (req, res) => {
    const users = readUsers();
    const newUser = {
        id: Date.now(),
        username: req.body.username,
        email: req.body.email || '',
        password: req.body.password,
        quizAttempts: req.body.quizAttempts || [],
        createdAt: new Date().toLocaleString()
    };
    users.push(newUser);
    writeUsers(users);
    res.json(newUser);
});

app.put('/api/users/:id', (req, res) => {
    const users = readUsers();
    const idx = users.findIndex(u => u.id == req.params.id);
    if (idx === -1) {
        return res.status(404).send('User not found');
    }
    // merge updates
    users[idx] = Object.assign({}, users[idx], req.body);
    writeUsers(users);
    res.json(users[idx]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
