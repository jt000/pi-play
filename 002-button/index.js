const Gpio = require('gpio');
const led = new Gpio(17, 'out');
const button = new Gpio(18, 'in', 'both');

let set = false;
let pressed = false;

setLed(led, false);

button.watch((err, value) => {
    if (!pressed && value) {
        pressed = true;
        setLed(led, set = !set);
    } else if (pressed && !value) {
        pressed = false;
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
        led.writeSync(0);
    } else {
        console.log('LED OFF');
        led.writeSync(1);
    }
}
