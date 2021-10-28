// References
const labelCounter = document.getElementById("counter");
const btnIncrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnMultiplier = document.getElementById("multi");
const messageLabel = document.getElementById("message");
const multiplierPriceLabel = document.getElementById("multiplierPrice");
const bonusValue = document.getElementById("bonusValue");
const bonusCountdown = document.getElementById("bonusCountdown");
const bntBonus = document.getElementById("bonus");
const myPopup = document.getElementById("myPopup");


/*initialize the conuter to zero*/
let count = 0;
let multiplierValue = 5; // will keep on multiplying the purchase value (x5)
let bonusPrice = 20;

// default price to buy a multiplier
multiplierPriceLabel.innerHTML = multiplierValue;

// default price for bonus
bonusValue.innerHTML = bonusPrice;

/* 
we deactive the multiplier button by default untill the score 
reach the amount that can buy a multiplier and bonus 

*/
function checkValue() {
    // check multiplier value

    if (count >= multiplierValue) {
        btnMultiplier.disabled = false;
    } else {
        btnMultiplier.disabled = true;
    }

    // check the bonus value
    if (count >= bonusPrice) {
        bntBonus.disabled = false;
    } else {
        bntBonus.disabled = true;
    }
}

//Multiplication function
function multiply(number) {
    return number * 2;
}

// message displayer
function messageDisplayer(message) {
    // display the message when score decreases below zero
    messageLabel.innerHTML = message;

    // wait for 3 second then delete the message
    setTimeout(() => {
        messageLabel.innerHTML = "";
    }, 3000);
}

// disable all the buttons
function disableButtons() {
    btnIncrease.disabled = true;
    btnDecrease.disabled = true;
    btnReset.disabled = true;
    btnMultiplier.disabled = true;
}

// enable buttons
function enableButtons() {
    btnIncrease.disabled = false;
    btnDecrease.disabled = false;
    btnReset.disabled = false;
    btnMultiplier.disabled = false;
}

// Countdown
function countdown(seconds) {
    disableButtons();

    function tick() {
        // we decrease total number of second each time the function is called
        seconds--;
        // we display the number of seconds remaining
        bonusCountdown.innerHTML = ` -> ${String(seconds)}`;

        // if the remaining seconds are greater than 0
        if (seconds > 0) {
            // we run again the function
            setTimeout(tick, 1000);
        } else {
            // enable all the buttons
            enableButtons();
            // check value
            checkValue();
        }
    }
    // first when the countdown function is called run the tick function
    tick();
}

// *********** AUTO-CLICKER ************** //

// autoclicker will run every 45second
setInterval(() => {
    // check if the user has enough scores to buy a multiplier then run the autoclick
    if (count >= multiplierValue) {
        btnIncrease.click();
        messageDisplayer("Auto-clicker ran!!");
        checkValue();
    }
}, 45000);

// ********* EVENTS  ************* //

// Increase score
btnIncrease.addEventListener("click", () => {
    // adding multiplier and count value
    count += 1;
    labelCounter.innerHTML = count;
    checkValue();
});

// Decrease score
btnDecrease.addEventListener("click", () => {
    // if the counter is greater than 0
    if (count > 0) {
        count -= 1;
        labelCounter.innerHTML = count;
    } 
    else {
       /*pop up display if count is less than 0*/
        myPopup.classList.toggle("show");
       
    }
});

// Multiply score
btnMultiplier.addEventListener("click", () => {
    // check if the multiplier value price before allowing to multiply
    if (count >= multiplierValue) {
        // update counter value by multiplying * 2
        labelCounter.innerHTML = multiply(count);
        count -= multiplierValue; // remove multiplier valuee + 3 (step 8)
        multiplierValue += 3; // the current value
        multiplierPriceLabel.innerHTML = multiplierValue;
        labelCounter.innerHTML = count;
        checkValue(); // check multiplier value;
    }
});

// Reset
btnReset.addEventListener("click", () => {
    count = 0;
    multiplierValue = 5;
    multiplierPriceLabel.innerHTML = multiplierValue;
    labelCounter.innerHTML = count;
    checkValue();
});

// Bonus
bntBonus.addEventListener("click", () => {
    console.log(`bonusIncrease`, count, multiplierValue);
    // increase the current multiplier value by 200%
    const bonusIncrease = (200 * multiplierValue) / 100;
    console.log(`bonusIncrease`, bonusIncrease);
    // add the bonus point to the score
    count += bonusIncrease;

    // update the score on the page (DOM)
    labelCounter.innerHTML = count;

    // increase the price of the multiplier
    multiplierValue += 10; // the current value

    // update the value on the page
    multiplierPriceLabel.innerHTML = multiplierValue;

    // disabled the button and display countdown
    bntBonus.disabled = true;

    // run the countdown function
    countdown(30);

   
});

// check multiplier status when the app is running
checkValue();
