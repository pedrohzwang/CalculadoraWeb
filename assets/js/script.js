var labelResultado = document.getElementById("resultado");
var labelCalculo = document.getElementById("calculo");

function getNum(numero){
    labelResultado.innerText = labelResultado.innerText + numero;
};  

function deleteLastCharacter(){
    
}

function clean(){
    labelResultado.innerText = "";
    labelCalculo.innerText = "";
}

