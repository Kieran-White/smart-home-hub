const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Your frontend URL
  credentials: true,               // Allow credentials (cookies, HTTP authentication)
  optionsSuccessStatus: 200        // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options('*', cors(corsOptions));

app.post('/set-led', (req, res) => {
    const { color } = req.body;
    const pythonProcess = spawn('python', ['../src/python/led_controller.py', color]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`Python stdout: ${data}`);
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Python stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`Python process exited with code ${code}`);
        res.sendStatus(200);
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
