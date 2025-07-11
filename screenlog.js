// prevents broadcasts from staying on the screen and affecting game visibility.
const logTemporary = (message, duration = 7000) => {
  const lines = message.split('\n');
  for (const line of lines) {
    process.stdout.write(`${line}\n`);
  }

  setTimeout(() => {
    for (let i = 0; i < lines.length; i++) {
      process.stdout.write('\x1b[1A'); // move up
      process.stdout.write('\x1b[2K'); // clear
    }
  }, duration);
  
};

module.exports = logTemporary;