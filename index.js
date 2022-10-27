let number = document.querySelector("#number-result");

//while(number.length < 10) {

function insert(num) {
    let numero = document.querySelector("#number-result").textContent;
    console.log(numero);
    if(numero.length < 10) {
    let number = document.querySelector("#number-result").innerHTML;
    document.querySelector("#number-result").innerHTML = number + num;
    }
}

function apagar() {
    document.querySelector("#number-result").innerHTML = "";
}

function calcular() {
    let result = document.querySelector("#number-result").innerHTML;
    
    document.querySelector("#number-result").innerHTML = eval(result);
}

//}