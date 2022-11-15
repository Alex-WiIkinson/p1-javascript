let inputField = document.getElementById('age');
let modalBox = document.getElementById('modalBox');
let button = document.getElementById('showButton');
let deny = document.getElementById('denyText');


function displayModal() {
    modalBox.style.display = "flex";
    button.style.display = "none";
}

function confirm() {
    let inputField = document.getElementById('age').value;

    if (isNaN(inputField) || inputField == "") { //Is input not a number or empty?
        alert("Invalid input, please only use numbers");

    } else if (inputField < 18) { //Is input lesser than 18?
        modalBox.style.display = "none";
        document.getElementById('body').classList.add("bodyDenyColor");
        deny.style.display = "flex";

    } else if (inputField >= 18) { //Is input equal to or greater than 18?
        modalBox.style.display = "none";
        window.location.href = "https://www.google.com/";
    }
}