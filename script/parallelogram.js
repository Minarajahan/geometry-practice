function parallelogram() {
    // get area input
    const areaParalelogramInput = document.getElementById('area');
    const takeValue = areaParalelogramInput.value;
    const mainValue = parseFloat(takeValue);
    console.log(mainValue);

    // get area height
    const heightParalelogramInput = document.getElementById('height');
    const heightValue = heightParalelogramInput.value;
    const exactHeightValue = parseFloat(heightValue);
    console.log(exactHeightValue);

    // calculation
    const calculateValue=mainValue*heightValue;
    console.log(calculateValue);

    // Display Value

    const displayValue = document.getElementById('inerValueDisplay');
    displayValue.innerText=calculateValue;
    console.log(showInnerValue);



}