var resultLabel = document.getElementById("resultado");
var calcLabel = document.getElementById("calculo");

function getButtonValue(value){
    calcLabel.innerText = calcLabel.innerText + value;
};  

function deleteLastCharacter(){

}

function clean(){
    calcLabel.innerText = "";
}

function result(){
    var calcResult = eval(calcLabel.innerText);
    resultLabel.innerText = calcResult;
    clean();
}

function percent(){
    alert(stringCalc);
    var stringCalc = calcLabel.search("%");
}