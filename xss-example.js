// This is an intentionaly vulnerable Javascript file used for testing, do not use or deploy it anywhere.
// Password: T0pS3cret!@
var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

var unsafe_div = window.document.getElementById("vulnerable-div");
unsafe_div.innerHTML = "Hello to you ";
