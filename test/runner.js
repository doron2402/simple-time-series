const Exec = require('child_process').exec;

// Simple test runner
const GREEN = '\u001B[32m';
const RED = '\u001b[31m';
const RESET = '\u001B[0m';
console.log(`${GREEN}>> Running Tests....${RESET}`);
const files = [
  './test/e2e.spec',
  './test/test_1.spec.js',
  './test/test_2.spec.js',
  './test/test_3.spec.js',
  './test/test_4.spec.js',
  './test/test_5.spec.js',
  './test/test_6.spec.js',
  './test/test_7.spec.js',
  './test/helper.spec.js'
];
files.forEach((file) => {
  Exec(`node ${file}`, function (error, stdout, stderr) {
    if (error !== null) {
      console.log(`${RED} exec error: ${error}`);
      console.error(`${RED}>> Test: ${file} Failed!${RESET}`);
      console.error(stderr);
    }
    else {
      console.log(stdout);
      console.log(`${GREEN}>> Test: ${file} Completed!${RESET}`);
    }
  });
});

console.log(`${GREEN}>> Test Completed!${RESET}`);