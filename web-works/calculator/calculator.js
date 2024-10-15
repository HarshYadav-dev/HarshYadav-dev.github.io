var fNum = "";
var sNum = "";
var sign = "";
var finalResult = 0;
var display = "";

function getNum(value) {
    if(sign == "") {
        fNum += value;
        display += value;
    }

    else {
        sNum += value;
        display += value;
    }

    document.getElementById('display').value = display;
}

function getSum(getSign) {
    sign = getSign;
    display += getSign;

    document.getElementById('display').value = display;
}

function getValue() {

    if(sign == "+") {
        finalResult = parseInt(fNum) + parseInt(sNum);
        document.getElementById('display').value = finalResult;
    }

    else if(sign == "-") {
        finalResult = parseInt(fNum) - parseInt(sNum);
        document.getElementById('display').value = finalResult;
    }

    else if(sign == "*") {
        finalResult = parseInt(fNum) * parseInt(sNum);
        document.getElementById('display').value = finalResult;
    }

    else {
        finalResult = parseInt(fNum) / parseInt(sNum);
        document.getElementById('display').value = finalResult;
    }

}

function clearValue (){
    fNum = "";
    sNum = "";
    sign = "";
    finalResult = 0;
    display = "";

    document.getElementById('display').value = display;
}