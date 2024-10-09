function ellipseInputOutput(){
    const mejorEllipse=getInputValueById('mejor-area');
    const minorEllipse=getInputValueByID('minor-area');
    const areaValue= 3.1416*mejorEllipse*minorEllipse;
    setValueOfDisplay('ellipse-area',areaValue);

}

function getInputValueById(mainElement){
    const getInnerText= document.getElementById(mainElement);
    const getInnerValue=getInnerText.value;
    const getValue=parseFloat(getInnerValue);
    return getValue;
}
function setValueOfDisplay(displayValue,areaValue){
    const displayInnerValue=document.getElementById(displayValue);
    displayInnerValue.innerText=areaValue;
}