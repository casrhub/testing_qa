async function calculate(operation) {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "") {
        alert("Please enter both numbers!");
        return;
    }

    const apiUrl = `http://localhost:8080/math/${operation === "+" ? "add" : "subtract"}?num1=${num1}&num2=${num2}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById("result").textContent = `Result: ${data.result}`;
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch result. Make sure the backend is running.");
    }
}

function resetFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "Result:";
}
