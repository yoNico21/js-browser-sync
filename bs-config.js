// bs-config.js
const path = require("path");

console.log("src folder:", path.join(__dirname, "src/**/*"));
console.log("public folder:", path.join(__dirname, "public/**/*"));

module.exports = {
	server: "./",
	startPath: "/index.html",
	files: [path.join(__dirname, "**/*")],
	watch: {
		usePolling: true, // Enable polling to detect changes
		interval: 1000, // Adjust the polling interval as needed (1 second)
	},
	// browser: ["google chrome", "firefox"],
	browser: "firefox", // Open in Firefox by default
	port: 3000,
	logLevel: "debug", // Use debug to see more details about file watching
	reloadOnRestart: true,
	reloadDebounce: 100,
	notify: false,
	cache: false,
	injectChanges: true,
	cors: true,
};
