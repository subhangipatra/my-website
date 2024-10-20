let icon = document.querySelector(".js-light-icon");
let image = `<img class="light-icon" src="images/light-mode-icon.png">`;

document.querySelector(".js-light-icon").addEventListener("click", () => {
	if (icon.innerHTML === image) {
		icon.innerHTML = `<img class="dark-icon" src="images/dark-mode-icon.png">`;
		document.querySelector("body").classList.add("dark-mode");
	} else {
		icon.innerHTML = `<img class="light-icon" src="images/light-mode-icon.png">`;
		document.querySelector("body").classList.remove("dark-mode");
	}
});
