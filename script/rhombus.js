function rhombusInputOutput(){
const rhombusInputOne= getInputValuId('detect-area');
const rhombusInputTwo=getInputValuId('base-area');

// calculate value
const areaCalculate = 0.5*rhombusInputOne*rhombusInputTwo;

// Display the value onscreen
displayOnScreen('rhombus-area',areaCalculate);


}
function getInputValuId(rhobusElement){
    const rhombusInnerText=document.getElementById(rhobusElement);
    const rombusValue = rhombusInnerText.value ;
    const getInnerValue= parseFloat(rombusValue);
    return getInnerValue;
}

// set area
function displayOnScreen(displayId,areaCalculate){
    const displayAreaValue=document.getElementById(displayId);
    displayAreaValue.innerText=areaCalculate;
}