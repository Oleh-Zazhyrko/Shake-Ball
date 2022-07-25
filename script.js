const ballBtn = document.querySelector(".ball-image-btn");
const input = document.querySelector(".input-question");
const error = document.querySelector(".error");
const answer = document.querySelector(".answer");

const answersList = [
	"Maybe tomorrow",
	"Not think so",
	"Try another option",
	"You`ll suck",
	"You`ve got love",
	"It`s up to you",
	"Better eat the chocolate",
	"Yes",
	"No",
];

const showAnimation = () => {
	ballBtn.classList.add("shake-animation");
	setTimeout(checkInput, 1000);
};
const checkInput = () => {
	if (input.value === "") {
		error.textContent = "You have to ask a question!";
		answer.textContent = "";
	} else if (input.value.slice(-1) !== "?") {
		error.textContent = `Question must and by symbol "?"`;
		answer.textContent = "";
	} else {
		showAnswer();
		error.textContent = "";
	}

	ballBtn.classList.remove("shake-animation");
};

const showAnswer = () => {
	let i = getRandomInt(answersList.length);
	answer.innerHTML = `<span>Answer: </span> ${answersList[i]}`;
	ballBtn.classList.remove("shake-animation");
};

const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
};

ballBtn.addEventListener("click", showAnimation);
