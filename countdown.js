const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let timerInterval;
let time = 0;
rl.question('Enter countdown seconds: ', (answer) => {
  time = parseInt(answer, 10);
  timerInterval = setInterval(() => {
    if (time >= 0) {
      console.log(`Time remaining: ${time}`);
      time--;
    }
    if (time < 0) {
      clearInterval(timerInterval);
      console.log("Countdown Complete!");
      rl.close();
      process.stdin.setRawMode(false); 
    }
  }, 1000);
  setTimeout(() => {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', (key) => {
      if (key.toString().toLowerCase() === 's') {
        clearInterval(timerInterval);
        console.log("Countdown Stopped by user.");
        rl.close();
        process.stdin.setRawMode(false);
      }
    });
  }, 1000);
});
