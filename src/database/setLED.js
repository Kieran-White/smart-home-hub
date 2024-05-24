
const setLED = async (color) => {
    try {
        await fetch('http://localhost:3001/set-led', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ color }),
        });
        console.log('LED color set successfully');
    } catch (error) {
        console.error('Error setting LED color:', error);
    }
};

export default setLED;
