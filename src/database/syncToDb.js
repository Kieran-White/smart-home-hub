const { spawn } = require('node:child_process');
const updateDocument = require("./dbUpdate");

const syncToDb = async (id, dataKeyPair, widgets) => {
    const newRoom = widgets[id];
    const response = await updateDocument(newRoom, dataKeyPair);

    if (newRoom === "Living Room") {
        if ("isLightOn" in dataKeyPair) {
            if (!dataKeyPair.isLightOn) {
                callPythonScript(["#000000"]);
            }
        }
        if ("colour" in dataKeyPair) {
            callPythonScript([dataKeyPair.colour]);
        }
    }
}

function callPythonScript(args) {
    const pythonScript = '../python/led_controller.py';
    const pythonProcess = spawn('python', [pythonScript, ...args]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`Python stdout: ${data}`);
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Python stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`Python process exited with code ${code}`);
    });
}

module.exports = syncToDb;
