var Gpio = require('onoff').Gpio,
  led = new Gpio(21, 'out'),
  button = new Gpio(19, 'in', 'both');

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

button.watch(function (err, value) {
  if (err) {
    throw err;
  }

  if(value == 1){
    client.publish('LED', 'turnOn');
  }
});

process.on('SIGINT', function () {
  led.unexport();
  button.unexport();
});
