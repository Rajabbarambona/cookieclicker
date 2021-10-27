const labelCounter = document.getElementById("counter");
const btnIncrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnMultiplier = document.getElementById("multi");
const messageLabel = document.getElementById("message");
const multiplierPriceLabel = document.getElementById("multiplierPrice");

/initialize the conuter to zero/
let count = 0;
let multiplierValue = 0; // will keep the multiplier purchase value

multiplierPriceLabel.innerHTML = count;

// Multiplication function
function multiply(number) {
    return number * 2;
}

// ** EVENTS  ** //

// Increase score
btnIncrease.addEventListener("click", () => {
    count += 1;
    labelCounter.innerHTML = count;
    multiplierPriceLabel.innerHTML = count;
    if (multiplierValue == 0) {
        multiplierValue = count;
    }
});

// Decrease score
btnDecrease.addEventListener("click", () => {
    // if the counter is greater than 0
    if (count > 0) {
        count -= 1;
        labelCounter.innerHTML = count;
        multiplierPriceLabel.innerHTML = count;
    } else {
        messageLabel.innerHTML = "You can't go bellow zero!!";
    }
});

// Multiply score
btnMultiplier.addEventListener("click", () => {
    // check if the multiplier value price before allowing to multiply

    if (count >= multiplierValue) {
        labelCounter.innerHTML = multiply(count);
        count -= multiplierValue; // remove multiplier valluee + 3 (step 8)
        multiplierValue += 3; // the current value
        multiplierPriceLabel.innerHTML = multiplierValue;
        labelCounter.innerHTML = count;
    }
});

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
});
let autoincrease = () => {
    setInterval(() => {
        labelCounter.click();
    }, 30);
};