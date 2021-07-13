function checkBrowser() {
// Get the user-agent string
let userAgentString = 
navigator.userAgent;

// Detect Safari
let safariAgent = userAgentString.indexOf("Safari") > -1;
console.log("safari", safariAgent);

// Detect Chrome
let chromeAgent = 
userAgentString.indexOf("Chrome") > -1;
  
// Discard Safari since it also matches Chrome
if ((chromeAgent) && (safariAgent)) safariAgent = false;
console.log("safariAgent", safariAgent);
}
checkBrowser();