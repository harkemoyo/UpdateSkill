// Pages
const gamePage = document.getElementById("game-page");
const scorePage = document.getElementById("score-page");
const splashPage = document.getElementById("splash-page");
const countdownPage = document.getElementById("countdown-page");
// Splash Page
const startForm = document.getElementById("start-form");
const radioContainers = document.querySelectorAll(".radio-container");
const radioInputs = document.querySelectorAll("input");
const bestScores = document.querySelectorAll(".best-score-value");
// Countdown Page
const countdown = document.querySelector(".countdown");
// Game Page
const itemContainer = document.querySelector(".item-container");
// Score Page
const finalTimeEl = document.querySelector(".final-time");
const baseTimeEl = document.querySelector(".base-time");
const penaltyTimeEl = document.querySelector(".penalty-time");
const playAgainBtn = document.querySelector(".play-again");

// equation
let questionAmount = 0

let equationsArray = []

// gamePage
let firstNumber = 0
let secondNumber = 0
let equationObject = {}
let wrongFormat = []

// get math random upto max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function createEquations() {
    // Randomly choose how many correct equations there should be
    const correctEquations = getRandomInt(questionAmount);
  
    //Set amount of wrong equations
    const wrongEquations = questionAmount - correctEquations;
  
    //Loop through, multiply random numbers up to 9, push to array
    for (let i = 0; i < correctEquations; i++) {
      firstNumber = getRandomInt(9);
      secondNumber = getRandomInt(9);
      const equationValue = firstNumber * secondNumber;
      const equation = `${firstNumber} x ${secondNumber} = ${equationValue}`;
      equationObject = { value: equation, evaluated: "true" };
      equationsArray.push(equationObject);
    }
    //Loop through, mess with the equation results, push to array
    for (let i = 0; i < wrongEquations; i++) {
      firstNumber = getRandomInt(9);
      secondNumber = getRandomInt(9);
      const equationValue = firstNumber * secondNumber;
      wrongFormat[0] = `${firstNumber} x ${secondNumber + 1} = ${equationValue}`;
      wrongFormat[1] = `${firstNumber} x ${secondNumber} = ${equationValue - 1}`;
      wrongFormat[2] = `${firstNumber + 1} x ${secondNumber} = ${equationValue}`;
      const formatChoice = getRandomInt(3);
      const equation = wrongFormat[formatChoice];
      equationObject = { value: equation, evaluated: "false" };
      equationsArray.push(equationObject);
    }
    console.log('equationArray:', equationsArray)
}

// populate countdown start
function countDownStart(){
    countdown.textContent = '3'
    setTimeout(()=>{
        countdown.textContent = '2'
    }, 500)
    setTimeout(()=>{
        countdown.textContent = '1'
    }, 1000)
    setTimeout(()=>{
        countdown.textContent = 'G0!'
    }, 1500)
}

// navigate from splash to countdown page
function showCountDown(){
    countdownPage.hidden = false
    splashPage.hidden = true 
    countDownStart()
    createEquations()
}


// get value from selected radio button
function getRadioValue(){
    let radioValue;
    radioInputs.forEach((inputInRadio)=>{
        if (inputInRadio.checked) {
            radioValue = inputInRadio.value   
        }
        
    });
    return radioValue
}
// form that decides amount of question
function selectQuestionAmount(e) {
 e.preventDefault()
questionAmount = getRadioValue()
    console.log("questionAmount:",questionAmount);
    // check if there is a valid question amount
    
        showCountDown()
    

}



startForm.addEventListener('click', () =>{
    
    // has queryselector that takes an array
    radioContainers.forEach((radioEl)=>{
        // to remove the selected styling
        radioEl.classList.remove('selected-label')

        // adding it back when if input is checked
        if (radioEl.children[1].checked) {
            radioEl.classList.add('selected-label')
        }
        
    })
    
})

// Event Listeners

startForm.addEventListener('submit', selectQuestionAmount)
