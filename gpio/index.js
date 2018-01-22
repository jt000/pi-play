const os = require('os');

if (os.platform() === 'linux') {
    module.exports = require('onoff').Gpio;
    return;
} 

console.warn(`WARN: Platform ${os.platform()} does not support GPIO. Returning mock instead.`);

/**
 * Constructor. Exports a GPIO to userspace.
 *
 * The constructor is written to function for both superusers and
 * non-superusers. See README.md for more details.
 *
 * gpio: number      // The Linux GPIO identifier; an unsigned integer.
 * direction: string // Specifies whether the GPIO should be configured as an
 *                   // input or output. The valid values are: 'in', 'out',
 *                   // 'high', and 'low'. 'high' and 'low' are variants of
 *                   // 'out' that configure the GPIO as an output with an
 *                   // initial level of high or low respectively.
 * [edge: string]    // The interrupt generating edge for the GPIO. Can be
 *                   // specified for GPIO inputs and outputs. The edge
 *                   // specified determine what watchers watch for. The valid
 *                   // values are: 'none', 'rising', 'falling' or 'both'.
 *                   // The default value is 'none'. [optional]
 * [options: object] // Additional options. [optional]
 *
 * The options argument supports the following:
 * debounceTimeout: number  // Can be used to software debounce a button or
 *                          // switch using a timeout. Specified in
 *                          // milliseconds. The default value is 0.
 * activeLow: boolean       // Specifies whether the values read from or
 *                          // written to the GPIO should be inverted. The
 *                          // interrupt generating edge for the GPIO also
 *                          // follow this this setting. The valid values for
 *                          // activeLow are true and false. Setting activeLow
 *                          // to true inverts. The default value is false.
 */
function Gpio(gpio, direction, edge, options) {
}

/**
 * Read GPIO value asynchronously.
 *
 * [callback: (err: error, value: number) => {}] // Optional callback
 */
Gpio.prototype.read = function (callback) {
};

/**
 * Read GPIO value synchronously.
 *
 * Returns - number // 0 or 1
 */
Gpio.prototype.readSync = function () {
    return 0;
};

/**
 * Write GPIO value asynchronously.
 *
 * value: number                  // 0 or 1
 * [callback: (err: error) => {}] // Optional callback
 */
Gpio.prototype.write = function (value, callback) {
};

/**
 * Write GPIO value synchronously.
 *
 * value: number // 0 or 1
 */
Gpio.prototype.writeSync = function (value) {
};

/**
 * Watch for hardware interrupts on the GPIO. Inputs and outputs can be
 * watched. The edge argument that was passed to the constructor determines
 * which hardware interrupts are watcher for. The 3.13 kernel dropped support
 * for interrupt generating outputs, irrespective of whether the underlying
 * hardware supports them or not.
 *
 * Note that the value passed to the callback does not represent the value of
 * the GPIO the instant the interrupt occured, it represents the value of the
 * GPIO the instant the GPIO value file is read which may be several
 * milliseconds after the actual interrupt. By the time the GPIO value is read
 * the value may have changed. There are scenarios where this is likely to
 * occur, for example, with buttons or switches that are not hadrware
 * debounced.
 *
 * callback: (err: error, value: number) => {}
 */
Gpio.prototype.watch = function (callback) {
};

/**
 * Stop watching for hardware interrupts on the GPIO.
 */
Gpio.prototype.unwatch = function (callback) {
};

/**
 * Remove all watchers for the GPIO.
 */
Gpio.prototype.unwatchAll = function () {
};

/**
 * Get GPIO direction.
 *
 * Returns - string // 'in', or 'out'
 */
Gpio.prototype.direction = function () {
};

/**
 * Set GPIO direction.
 *
 * direction: string // Specifies whether the GPIO should be configured as an
 *                   // input or output. The valid values are: 'in', 'out',
 *                   // 'high', and 'low'. 'high' and 'low' are variants of
 *                   // 'out' that configure the GPIO as an output with an
 *                   // initial level of high or low respectively.
 */
Gpio.prototype.setDirection = function (direction) {
};

/**
 * Get GPIO interrupt generating edge.
 *
 * Returns - string // 'none', 'rising', 'falling' or 'both'
 */
Gpio.prototype.edge = function () {
};

/**
 * Set GPIO interrupt generating edge.
 *
 * edge: string // The interrupt generating edge for the GPIO. Can be
 *              // specified for GPIO inputs and outputs. The edge
 *              // specified determine what watchers watch for. The valid
 *              // values are: 'none', 'rising', 'falling' or 'both'.
 */
Gpio.prototype.setEdge = function (edge) {
};

/**
 * Get GPIO activeLow setting.
 *
 * Returns - boolean
 */
Gpio.prototype.activeLow = function () {
    return false;
};

/**
 * Set GPIO activeLow setting.
 *
 * invert: boolean // Specifies whether the values read from or
 *                 // written to the GPIO should be inverted. The
 *                 // interrupt generating edge for the GPIO also
 *                 // follow this this setting. The valid values for
 *                 // activeLow are true and false. Setting activeLow
 *                 // to true inverts. The default value is false.
 */
Gpio.prototype.setActiveLow = function (invert) {
};

/**
 * Get GPIO options.
 *
 * Returns - object // Must not be modified
 */
Gpio.prototype.options = function () {
    return {};
};

/**
 * Reverse the effect of exporting the GPIO to userspace. The Gpio object
 * should not be used after calling this method.
 */
Gpio.prototype.unexport = function () {
};

module.exports = Gpio;