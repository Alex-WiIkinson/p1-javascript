let result = document.getElementById('result');
let budget = prompt("Wat is uw budget?");
let product = prompt("Wat cost het product?");

if (budget >= product) {
    result.innerText = "U heeft genoeg geld!";
    result.style.color = "green";
} else {
    result.innerText = "Helaas, te weinig geld.";
    result.style.color = "red";
}