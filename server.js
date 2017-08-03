var Gpio = require('onoff').Gpio,
	button = new Gpio(19, 'in', 'both'),
    led = new Gpio(21, 'out');

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://10.3.8.231:1883');
var _message;

client.subscribe('LED');

client.on('message', function(topic, message) {
  _message =  message.toString();

  switch(_message){
  	case 'turnOnLed': led.writeSync(1);
  					break;

  	case 'turnOffLed': led.writeSync(0);
  					break; 
  }

});

button.watch(function(err, state) {
    if(state == 1) {
        // turn LED on
        //led.writeSync(1);
        client.publish('LED', 'turnOn');
    } else {
        // turn LED off
        led.writeSync(0);
    }
});
