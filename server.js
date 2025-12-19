// // Backend Server - server.js
// // Run with: node server.js

// const express = require('express');
// const cors = require('cors');
// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // In-memory storage (messages will be lost on server restart)
// // For persistent storage, use a database like MongoDB, PostgreSQL, etc.
// let messages = [];
// let messageIdCounter = 1;

// // Get all messages
// app.get('/api/messages', (req, res) => {
//     res.json(messages);
// });

// // Post a new message
// app.post('/api/messages', (req, res) => {
//     const { user, code } = req.body;
    
//     if (!user || !code) {
//         return res.status(400).json({ error: 'User and code are required' });
//     }
    
//     const newMessage = {
//         id: messageIdCounter++,
//         user: user,
//         code: code,
//         timestamp: Date.now()
//     };
    
//     messages.push(newMessage);
//     res.status(201).json(newMessage);
// });

// // Delete a message (optional)
// app.delete('/api/messages/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const index = messages.findIndex(msg => msg.id === id);
    
//     if (index !== -1) {
//         messages.splice(index, 1);
//         res.json({ message: 'Message deleted' });
//     } else {
//         res.status(404).json({ error: 'Message not found' });
//     }
// });

// // Clear all messages (optional, for testing)
// app.delete('/api/messages', (req, res) => {
//     messages = [];
//     messageIdCounter = 1;
//     res.json({ message: 'All messages cleared' });
// });

// app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
//     console.log(`📡 API endpoint: http://localhost:${PORT}/api/messages`);
// });

// // Graceful shutdown
// process.on('SIGINT', () => {
//     console.log('\n👋 Server shutting down...');
//     process.exit(0);
// });

// Backend Server - server.js
// Run with: node server.js
const path = require('path');

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage
let messages = [];
let messageIdCounter = 1;

// ✅ Get messages for a specific room
app.get('/api/messages', (req, res) => {
    const { room } = req.query;

    if (!room) {
        return res.json([]); // no room, no messages
    }

    const roomMessages = messages.filter(msg => msg.room === room);
    res.json(roomMessages);
});

// ✅ Post a new message to a room
app.post('/api/messages', (req, res) => {
    const { room, user, code } = req.body;
    
    if (!room || !user || !code) {
        return res.status(400).json({ error: 'Room, user and code are required' });
    }
    
    const newMessage = {
        id: messageIdCounter++,
        room: room,
        user: user,
        code: code,
        timestamp: Date.now()
    };
    
    messages.push(newMessage);
    res.status(201).json(newMessage);
});

// Delete a message (optional)
app.delete('/api/messages/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = messages.findIndex(msg => msg.id === id);
    
    if (index !== -1) {
        messages.splice(index, 1);
        res.json({ message: 'Message deleted' });
    } else {
        res.status(404).json({ error: 'Message not found' });
    }
});

// Clear all messages (optional)
app.delete('/api/messages', (req, res) => {
    messages = [];
    messageIdCounter = 1;
    res.json({ message: 'All messages cleared' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 API endpoint: http://localhost:${PORT}/api/messages`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Server shutting down...');
    process.exit(0);
});
