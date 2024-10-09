function calculatePentagonArea() {
    const perimeter = getInputValueByID('perimeter-area');
    const apothem=getInputValueByID('apothem-area');

    const area =0.5*perimeter*apothem;
    getInnerTextShow('pentagon-area',area);

}

function getInputValueByID(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const getValue = parseFloat(inputValueText);
    return getValue;
}

function getInnerTextShow(elementValue,area){
    const textArea=document.getElementById(elementValue);
    textArea.innerText= area;
}