function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    let result;
    result = Number(num1) + Number(num2);

    if (num1.trim() === "" || num2.trim() === "") {
        document.getElementById('result').innerText = "Please input a number in both fields"; 
        return; 


    }


    document.getElementById('result').innerText = "Result: " + result;
}

function resetFields() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('operator').value = "+";
    document.getElementById('result').innerText = "Result: ";
}