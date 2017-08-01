var Gpio = require('onoff').Gpio,
    led = new Gpio(21, 'out');

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://10.3.8.212:1883');
var _message;

client.subscribe('LED');

client.on('message', function(topic, message) {
  _message =  message.toString();

  console.log(_message);

  switch(_message){
  	case 'turnOn': led.writeSync(1);
  					break;

  	case 'turnOff': led.writeSync(0);
  					break; 
  }

});