function toggleNav() {
	let element = document.getElementById("nav__toggle");
	let show = document.getElementById("nav");
	addEventListener("click", nav__toggle);
	if (nav.style.display == "none") {
		nav.style.display = "block";
	} else {
		nav.style.display = "none";
	}
}
