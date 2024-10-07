function calculateTriangleArea(){

    // take the base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);

    // take the height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    // calculate the value

    const area = 0.5 * base * height;
    console.log(area);

    // Dispaly triangle area
     
    const displayInerValue = document.getElementById('triangle-area');
     displayInerValue.innerText= area;
     console.log(displayInerValue);

}