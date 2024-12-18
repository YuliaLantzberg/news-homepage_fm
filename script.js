const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".menu__close");

function openNav() {
	const menu = document.querySelector(".menu");
	document.querySelector(".overlay").style.display = "block";
	menu.style.display = "flex";
	menu.style.width = "68.26%";
	document.body.style.overflowY = "hidden";
}

function closeNav() {
	const menu = document.querySelector(".menu");
	document.querySelector(".overlay").style.display = "none";
	menu.style.display = "none";
	menu.style.width = "0";
	document.body.style.overflowY = "scroll";
}

hamburgerBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
