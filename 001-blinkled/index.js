const Gpio = require('./gpio'),
      led = new Gpio(17, 'out');

var count = 10;
var set = false;

setLed(led, false);

const timer = setInterval(() => {
    if (count-- > 0) {
        setLed(led, set = !set);
    } else {
        setLed(led, false);
        led.unexport();
        clearInterval(timer);
    }
}, 500);

function setLed(led, value) {
    if (value) {
        console.log('LED ON');
        led.writeSync(1);
    } else {
        console.log('LED OFF');
        led.writeSync(0);        
    }
}