const Gpio = require('gpio');
const led = new Gpio(17, 'out');
const button = new Gpio(18, 'in', 'both');

let set = false;

setLed(led, false);

button.watch((err, value) => {
    if (value) {
        setLed(led, set != set);
    }
});

process.on('SIGINT', () => {
    console.log('Cleaning up');

    led.unexport();
    button.unexport();
});

function setLed(led, value) {
    if (value) {
        console.log('LED ON');
        led.writeSync(1);
    } else {
        console.log('LED OFF');
        led.writeSync(0);
    }
}
