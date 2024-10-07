function rectangleArea(){
    // take input width
    const rectangleWidthInput = document.getElementById('rect-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width);


    // take length input

    const rectangleLengthInput = document.getElementById('rect-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);

    // calculate the value

    const rectArea = width * length;
    console.log(rectArea);

    // Show the display area
    const rectangleDisplayArea = document.getElementById('rectangle-area');
    rectangleDisplayArea.innerText= rectArea;
    console.log(rectangleDisplayArea);
}