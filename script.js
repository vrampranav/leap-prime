let userDob = document.querySelector("#dob");
const checkBtn = document.querySelector("#btnCheck");
let primeDiv = document.querySelector(".prime");
let leapOut = document.querySelector("#leapOut");
let yesBtn = document.querySelector("#btnYes");
let noBtn = document.querySelector("#btnNo");
let primeOut = document.querySelector("#primeOut");

userDob.addEventListener('click', () => {
    primeDiv.style.display = "none";
    noBtn.removeAttribute("disabled");
    primeOut.innerText = "";
    leapOut.innerText = "";
})

let day;

checkBtn.addEventListener('click', () => {
    if (userDob.value === "") {
        leapOut.innerText = "Please enter your DOB";
        leapOut.style.color = "red";
        return;
    }
    leapOut.style.color = "#843b62";
    let dob = userDob.value.split('-');
    let year = +(dob[0]);
    day = +(dob[dob.length - 1]);
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        leapOut.innerText = "You were born on a leap year!";
    }
    else {
        leapOut.innerText = "You were not born on a leap year!";
    }
    primeDiv.style.display = "block";
    noBtn.removeAttribute("disabled");
});
function checkPrime(num) {
    for (let i = 2; i <= num / 2; i++) {
        if (day % i === 0) {
            return false;
        }
    }
    return true;
}
yesBtn.addEventListener('click', () => {
    noBtn.setAttribute("disabled", "true");
    isPrime = checkPrime(day);
    if (isPrime) {
        primeOut.innerText = "Your birthday is a prime number!";
    }
    else {
        primeOut.innerText = "Your birthday is not a prime number!";
    }
});
noBtn.addEventListener('click', () => {
    primeOut.innerText = "Thank you!";
})

