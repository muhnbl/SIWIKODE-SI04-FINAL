// JavaScript Document
function logout() {
	var Really = confirm("Are you sure?");
	if (Really) {
		document.write("Logout");
		window.location = "login.html";
	} else {
		document.write("Thanks :)");
		window.location = "home.html"
	}
}