let icon = document.querySelector(".js-light-icon");
let image = `<img class="light-icon" src="images/light-mode-icon.png">`;

document.querySelector(".js-light-icon").addEventListener("click", () => {
	if (icon.innerHTML === image) {
		icon.innerHTML = `<img class="dark-icon" src="images/dark-mode-icon.png">`;
		document.querySelector("body").classList.add("dark-mode");
	} else {
		icon.innerHTML = image;
		document.querySelector("body").classList.remove("dark-mode");
	}
});

let buttonElement = document.querySelector(".js-task-button");
let arrow = `<span>Tasks &amp; Responsibilities </span><img class="arrow-down" src="images/arrow_down_icon.png">`;

document.querySelector(".js-task-button").addEventListener("click", () => {
	if (buttonElement.innerHTML === arrow) {
		buttonElement.innerHTML = `<span>Tasks &amp; Responsibilities </span><img class="arrow-up" src="images/arrow_up_icon.png">`;
		document.querySelector(".js-content-details").innerHTML = "Have Experience working in Figma, recreating pharmaceutical project screens using design systems, and converting low-fidelity designs into high-fidelity prototypes. Also skilled in creating responsive web designs and brainstorming design solutions. Additionally,have technical expertise in C# and SQL, handling backend tasks like stored procedures and database queries, while connecting to multiple relational databases. Responsibilities include analyzing and developing application requirements, providing optimized technical solutions, conducting unit and system testing, and collaborating with stakeholders across the UK and USA for requirement analysis.Also offer mentorship and training to new team members.";
	} else {
		buttonElement.innerHTML = arrow;
		document.querySelector(".js-content-details").innerHTML = "";
	}
});

let buttonElement1 = document.querySelector(".js-task-button1");
let arrow1 = `<span>Tasks &amp; Responsibilities </span><img class="arrow-down" src="images/arrow_down_icon.png">`;

document.querySelector(".js-task-button1").addEventListener("click", () => {
	if (buttonElement1.innerHTML === arrow1) {
		buttonElement1.innerHTML = `<span>Tasks &amp; Responsibilities </span><img class="arrow-up" src="images/arrow_up_icon.png">`;
		document.querySelector(".js-content-details1").innerHTML = "Preparing presentation, pamphlets, invites, postcard etc for the welcoming of the clients to have the smooth meeting and make it a success.We believe in building strong, long-lasting relationships that foster collaboration and mutual growth. By working closely with you, we aim to offer tailored solutions that address your specific business needs, leveraging our expertise in innovation, technology, and customer service. As we embark on this journey together, we are committed to providing seamless support, transparent communication, and exceptional service to ensure your experience with us is both productive and rewarding.";
	} else {
		buttonElement1.innerHTML = arrow1;
		document.querySelector(".js-content-details1").innerHTML = "";
	}
});
