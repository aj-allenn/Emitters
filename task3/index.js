const EventEmitter = require('events');
const emitter = new EventEmitter();

function startCountdown() {
  const numbers = [3, 2, 1];

  numbers.forEach((num, i) => {
    setTimeout(() => {
      console.log(num);
     
      if (i === numbers.length - 1) {
        setTimeout(() => emitter.emit('launch:ready'), 200);
      }
    },i * 1000); 
  });
}

emitter.on('launch:ready', () => {
  console.log('Launch protocol approved');
});

startCountdown();