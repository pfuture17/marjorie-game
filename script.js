const category = [
  {
    image: "assets/logo-starbucks.jpg",
    p: "Brewed for Those Who Love It",
    answer: "starbucks",
  },
  {
    image: "assets/logo-amazon.jpg",
    p: "Work Hard. Have Fun. Make History.",
    answer: "amazon",
  },
  {
    image: "assets/logo-android.jpg",
    p: "Be Together. Not the Same.",
    answer: "android",
  },
  {
    image: "assets/logo-apple.jpg",
    p: "Think Different.",
    answer: "apple",
  },
  {
    image: "assets/logo-dominos.jpg",
    p: "It's What We Do.",
    answer: "dominos",
  },
  {
    image: "assets/logo-gatorade.jpg",
    p: "Win From Within.",
    answer: "gatorade",
  },
  {
    image: "assets/logo-lacoste.jpg",
    p: "Life is a Beautiful Sport.",
    answer: "lacoste",
  },
  {
    image: "assets/logo-miamiheat.jpg",
    p: "Burning up the court.",
    answer: "miami heat",
  },
  {
    image: "assets/logo-mitsubishi.jpg",
    p: "Drive your Ambition.",
    answer: "mitsubishi",
  },
  {
    image: "assets/logo-wendys.jpg",
    p: "Quality is Our Recipe.",
    answer: "wendys",
  },
  {
    image: "assets/logo-nike.jpg",
    p: "Just Do It.",
    answer: "nike",
  },
  {
    image: "assets/logo-paypal.jpg",
    p: "The simpler, safer way to pay and get paid.",
    answer: "paypal",
  },
  {
    image: "assets/logo-pepsi.jpg",
    p: "That's What I Like",
    answer: "pepsi",
  },
  {
    image: "assets/logo-safari.jpg",
    p: "Experience the web like never before.",
    answer: "safari",
  },
  {
    image: "assets/logo-shell.jpg",
    p: "Make the Future",
    answer: "shell",
  },
];

let currentLogoIndex = 0;
const logoElement = document.getElementById("logo");
const hintElement = document.getElementById("hint");
const answerElement = document.getElementById("answer");
const correctPrompt = document.getElementById("congratulationPrompt");
const resultText = document.getElementById("resultText");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
correctPrompt.style.display = "none";
let life = 3;
let score = 0;
let level = 1;
const newLevel = "Level: " + level;
document.getElementById("level").innerHTML = newLevel;
document.getElementById("life").innerHTML = life;
document.getElementById("score").innerHTML = score;
const btn = document.querySelector("button.show");
const promp = document.querySelector(".promp");
const close = document.querySelector(".promp .close");

//FUNCTION TO SHUFFLE THE CATEGORY
function shuffleLogo(category) {
  for (let i = category.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [category[i], category[j]] = [category[j], category[i]];
  }
  return category;
}

//Function to load the next category/image and text hint
function loadNextLogo() {
  shuffleLogo(category);
  const logo = category[currentLogoIndex];
  const hint = category[currentLogoIndex];
  logoElement.src = logo.image;
  hintElement.innerHTML = hint.p;
  answerElement.value = "";
  // resultElement.innerHTML = "";
}

//Function to check if the answer is correct or wrong
function checkAnswer() {
  const logo = category[currentLogoIndex];
  const answer = answerElement.value.toLowerCase();
  if (answer === logo.answer.toLowerCase()) {
    correctPrompt.style.display = "block";
    currentLogoIndex++;
    score++;
    level++;
    life = 3;
    const newLevel = "Level: " + level;
    document.getElementById("level").innerHTML = newLevel;
    document.getElementById("hint").innerHTML = hint;
    document.getElementById("score").innerHTML = score;
    document.getElementById("life").innerHTML = life;
    if (currentLogoIndex >= category.length) {
      currentLogoIndex = 0;
    }
    resultText.innerHTML = "Correct!";
    hintElement.innerHTML = "";
    nextBtn.addEventListener("click", () => {
      loadNextLogo();
      correctPrompt.style.display = "none";
    });
  } else if (answer === "") {
    resultText.innerHTML = "Please type your answer!";
    correctPrompt.style.display = "block";
  } else {
    resultText.innerHTML = "Incorrect! Please Try Again";
    correctPrompt.style.display = "block";
    life--;
    document.getElementById("life").innerHTML = life;
    document.getElementById("answer").value = "";
    if (life <= 0) {
      resultText.innerHTML = "Game Over! Game will restart";
      correctPrompt.style.display = "block";
      setTimeout(function () {
        location.reload();
      }, 3000);
    }
  }
}
loadNextLogo();

btn.addEventListener("click", () => {
  promp.classList.add("show");
});
close.addEventListener("click", () => {
  promp.classList.remove("show");
});
