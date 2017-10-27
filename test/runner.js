// Simple test runner
const GREEN = '\u001B[32m';
const RESET = '\u001B[0m';
console.log(`${GREEN}>> Running Tests....${RESET}`);
require('./e2e.spec');
require('./test_1.spec.js');
require('./test_2.spec.js');
require('./test_3.spec.js');
require('./test_4.spec.js');
require('./test_5.spec.js');
require('./test_6.spec.js');
console.log(`${GREEN}>> Test Completed!${RESET}`);