var Gpio = require('onoff').Gpio,
    led = new Gpio(21, 'out');

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://10.3.8.212:1883');

client.subscribe('LED');

client.on('message', function(topic, message) {
  console.log(message.toString());

  led.writeSync(1);

  setTimeout(function() {
      led.writeSync(0);  // Turn LED off.
  }, 5000);

});

exports.turnOnOffLed = function(req, res){

	console.log('Client started...');
	res.status(200).json({'message': 'Client 1 is alive.. Turning ligth!'});
}