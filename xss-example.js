// Another change to force action to run
// This is an intentionaly vulnerable Javascript file used for testing, do not use or deploy it anywhere.
// password: Th1s1sT0p53r3t

var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

var unsafe_div = window.document.getElementById("vulnerable-div");
// here's an XSS:
unsafe_div.textContent = "Hello to you " + username;
