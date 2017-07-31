var Gpio = require('onoff').Gpio,
    led = new Gpio(21, 'out');

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://10.3.8.212:1883');

exports.turnOnOffLed = function(req, res){
	led = new Gpio(21, 'out');
	client.subscribe('LED');

	client.on('message', function(topic, message) {
	  console.log(message.toString());

	  led.writeSync(1);

	  setTimeout(function() {
	      led.writeSync(0);  // Turn LED off.
	      led.unexport();    // Unexport GPIO and free resources
	  }, 5000);

	  res.status(200).json({'message': message.toString()});

	});

	console.log('Client started...');
}