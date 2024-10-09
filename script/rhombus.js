function calculateRombusArea(){
    const rombusInputOne=getInputById('rombus-inputOne');
    const rombusInputTwo=getInputById('rombus-inputTwo');
    // calculation area
    const areaValue = 0.5*rombusInputOne*rombusInputTwo;
    // Display Onscreen
    displayOnscreen('rhombus-area',areaValue);
}
// take input
function getInputById(element){
    const getInputText = document.getElementById(element)
    const getInputValue = getInputText.value ;
    const finalValue= parseFloat(getInputValue);
    return finalValue;
}
// display onscreen function
function displayOnscreen(onScreenId,areaValue){
    const displayArea= document.getElementById(onScreenId);
    displayArea.innerText=areaValue;
}

