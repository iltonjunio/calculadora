function calcular() {
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let operacao = document.getElementById("operacao").value
    resultado = document.getElementById("resultado")

    switch (operacao) {
        case "+":
            resultado.innerHTML = "Resultado: " + (num1 + num2)
            break
        case "*":
            resultado.innerHTML = "Resultado: " + (num1 * num2)
            break
        case "-":
            resultado.innerHTML = "Resultado: " + (num1 - num2)
            break
        case "/":
            if (num2 !== 0) {
                resultado.innerHTML = "Resultado: " + (num1 / num2)
            } else {
                resultado.innerHTML = "Não é possível dividir por zero."
            }
            break
        default:
            resultado.innerHTML = "Operação não ser executada."
            break
    }
}

//------------------------------------------------------------

function soma(n1, n2, op) {
    resul = n1 + n2;
    document.getElementById("resultado").innerHTML = n1 + " " + op + " " + n2 + " = " + resul;
}
function sub(n1, n2, op) {
    resul = n1 - n2
    document.getElementById("resultado").innerHTML = n1 + " " + op + " " + n2 + " = " + resul;
}
function mult(n1, n2, op) {
    resul = n1 * n2
    document.getElementById("resultado").innerHTML = n1 + " " + op + " " + n2 + " = " + resul;
}
function divi(n1, n2, op) {
    resul = n1 / n2
    document.getElementById("resultado").innerHTML = n1 + " " + op + " " + n2 + " = " + resul;
}

function Calcular() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let op = document.getElementById("op").value;
    switch (op) {
        case '+':
            soma(n1, n2, op)
            break
        case '-':
            sub(n1, n2, op)
            break
        case '*':
            mult(n1, n2, op)
            break
        case '/':
            divi(n1, n2, op)
            break
        default:
            document.getElementById("resultado").innerHTML = "não foi posivel!"

    }
}
