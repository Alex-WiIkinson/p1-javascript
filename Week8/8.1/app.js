let result = document.getElementById('result'); // Output element.

function multiply() {
    let field1 = document.getElementById('field1').value;
    let field2 = document.getElementById('field2').value;

    if (isNaN(field1) || isNaN(field2)) { //Is the either of the values not a number?
        result.innerText = "You may only use numbers.";
    } else if (field1 == "" || field2 == "") { //Is either of the values empty?
        result.innerText = "You did not fill all fields.";
    } else {
        let ans = Number(field1) * Number(field2); //Convert to numbers to ensure desired result.

        result.innerText = ans;
    }
}

function devide() {
    let field1 = document.getElementById('field1').value;
    let field2 = document.getElementById('field2').value;

    if (isNaN(field1) || isNaN(field2)) {
        result.innerText = "You may only use numbers.";
    } else if (field1 == "" || field2 == "") {
        result.innerText = "You did not fill all fields.";
    } else {
        let ans = Number(field1) / Number(field2);

        result.innerText = ans;
    }
}

function add() {
    let field1 = document.getElementById('field1').value;
    let field2 = document.getElementById('field2').value;

    if (isNaN(field1) || isNaN(field2)) {
        result.innerText = "You may only use numbers.";
    } else if (field1 == "" || field2 == "") {
        result.innerText = "You did not fill all fields.";
    } else {
        let ans = Number(field1) + Number(field2);

        result.innerText = ans;
    }
}

function minus() {
    let field1 = document.getElementById('field1').value;
    let field2 = document.getElementById('field2').value;

    if (isNaN(field1) || isNaN(field2)) {
        result.innerText = "You may only use numbers.";
    } else if (field1 == "" || field2 == "") {
        result.innerText = "You did not fill all fields.";
    } else {
        let ans = Number(field1) - Number(field2);

        result.innerText = ans;
    }
}