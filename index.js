function insert(num) {
    let number = document.querySelector("#number-result").innerHTML;
    document.querySelector("#number-result").innerHTML = number + num;
}

function apagar() {
    document.querySelector("#number-result").innerHTML = "";
}

function calcular() {
    let result = document.querySelector("#number-result").innerHTML;
    
    document.querySelector("#number-result").innerHTML = eval(result);
}