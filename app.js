let yourscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const yourpara = document.querySelector("#you");
const comppara = document.querySelector("#comp");
const youchoose = document.querySelector("#youchoose");
const compchoose = document.querySelector("#compchoose");

const matchdraw = () => {
  msg.innerText = "match draw play again.🤝";
  msg.style.background = "none";
};

const showwineer = (whichwin) => {
  if (whichwin) {
    yourscore++;
    yourpara.innerText = yourscore;

    console.log("youwin");
    msg.innerText = "you win!🏆";
    msg.style.background = "green";
  } else {
    compscore++;
    comppara.innerText = compscore;
    console.log("you loose");
    msg.innerText = "you loose.😑";
    msg.style.background = "red";
  }
};

// generate compchoice
const gecompchoice = () => {
  const options = ["stone", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

//userchoice
const playgame = (userchoice) => {
  //compchoice
  const compchoice = gecompchoice();
  compchoose.innerText = `comp:-${compchoice}`;

  if (userchoice === compchoice) {
    matchdraw();
  } else {
    let userwin = true;
    if (userchoice === "paper") {
      userwin = compchoice === "scissors" ? false : true;
    } else if (userchoice === "stone") {
      userwin = compchoice === "paper" ? false : true;
    } else {
      userwin = compchoice === "stone" ? false : true;
    }
    showwineer(userwin);
  }
};

choices.forEach((cho) => {
  cho.addEventListener("click", () => {
    const userchoice = cho.getAttribute("id");
    youchoose.innerText = `you:-${userchoice}`;

    playgame(userchoice);
  });
});
