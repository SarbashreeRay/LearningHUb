try {
  require('./content.js');
  console.log("Syntax OK");
} catch(e) {
  console.error("Syntax Error: " + e.message + " at " + e.stack);
}
