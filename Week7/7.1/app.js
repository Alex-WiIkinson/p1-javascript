let result = document.getElementById('result');
let budget = 100;
let product = 60;

if (budget > product) {
    result.innerText = "U heeft genoeg geld!";
    result.style.color = "green";
} else {
    result.innerText = "Helaas, te weinig geld.";
    result.style.color = "red";
}