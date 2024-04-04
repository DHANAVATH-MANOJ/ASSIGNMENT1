function functionJS(a, b, num) {
    switch (num) {
        case 1:
            return a + b;
        case 2:
            if (a > b) {
                return a - b;
            } else {
                return b - a;
            }
        case 3:
            return a * b;
        case 4:
            if (b !== 0) {
                return a / b;
            } else {
                return "Error: Division by zero!";
            }
        default:
            return "INPUT IS INCORRECT";
    }
}

function main() {
    let a = parseInt(prompt("Enter the first number:"));
    let b = parseInt(prompt("Enter the second number:"));
    let opt = parseInt(prompt("Enter 1 to add, 2 to subtract, 3 to multiply, 4 to divide:"));

    let res = functionJS(a, b, opt);
    alert(res);
}

main();
