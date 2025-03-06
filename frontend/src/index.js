function calculate(operator) {
    const num1 = document.getElementById('num1').value.trim();
    const num2 = document.getElementById('num2').value.trim();

    if (num1 === "" || num2 === "") {
        document.getElementById('result').innerText = "Please input a number in both fields"; 
        return;
    }

    let result;
    if (operator === "+") {
        result = Number(num1) + Number(num2);
    } else if (operator === "-") {
        result = Number(num1) - Number(num2);
    }

    document.getElementById('operator').innerText = operator;
    document.getElementById('result').innerText = "Result: " + result;
}

function resetFields() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('operator').innerText = "+";
    document.getElementById('result').innerText = "Result: ";
}