var resultLabel = document.getElementById("resultado");
var calcLabel = document.getElementById("calculo");

function getButtonValue(value){
    calcLabel.innerText = calcLabel.innerText + value;
};  

function deleteLastCharacter(){
    calcLabel.innerText = calcLabel.innerText.substring(0, calcLabel.innerText.length-1);
}

function reset(){
    calcLabel.innerText = "";
    
}

function clean(){
    resultLabel.innerText = "";
}


function result(){
var calcResult = eval(calcLabel.innerText);
resultLabel.innerText = calcResult;
    reset();
}
