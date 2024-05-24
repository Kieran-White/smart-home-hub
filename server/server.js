// server.js

const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');

const app = express();

// Use CORS middleware to allow requests from all origins
app.use(cors());

app.post('/set-led', (req, res) => {
    const { color } = req.body;
    const pythonProcess = spawn('python', ['led_controller.py', color]);

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
