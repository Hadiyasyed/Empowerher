const loadingInterval = setInterval(function() {
  console.log("Loading...");
}, 1000);
setTimeout(function() {
  clearInterval(loadingInterval);
  console.log("Loaded successfully!");
}, 5000);
