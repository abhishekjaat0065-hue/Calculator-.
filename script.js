function calculate() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Result: Please enter valid numbers.";
        return;
    }

    switch (operation) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                document.getElementById("result").innerHTML = "Result: Cannot divide by zero.";
                return;
            }
            result = num1 / num2;
            break;

        default:
            result = "Invalid Operation";
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}