let result = document.getElementById('result');
let number = 0;

function clickFunction() {
    console.log(number);
    if (number >= 10) {
        number = 0
        result.innerText = number;
    } else {
        number = number + 1;
        result.innerText = number;
    }
}