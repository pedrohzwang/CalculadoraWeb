var labelResultado = document.getElementById("resultado");
var labelCalculo = document.getElementById("calculo");

function getButtonValue(value){
    labelCalculo.innerText = labelCalculo.innerText + value;
};  

function deleteLastCharacter(){

}

function clean(){
    labelCalculo.innerText = "";
}

function result(){
    var calcResult = eval(labelCalculo.innerText);
    labelResultado.innerText = calcResult;
    clean();
}
