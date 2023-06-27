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

let equationArray = []

// gamePage
let firstNumber = 0
let secondNumber = 0
let equationObject = {}
let wrongFormat = []

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
