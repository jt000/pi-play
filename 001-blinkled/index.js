import { setInterval, clearInterval } from 'timers';

const Gpio = require('onoff').Gpio,
      led = new Gpio(17, 'out');

var count = 10;
var set = false;

setLed(false);

const timer = setInterval(() => {
    if (count-- > 0) {
        setLed(set = !set);
    } else {
        setLed(false);
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