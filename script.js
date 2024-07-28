document.addEventListener('DOMContentLoaded', () => {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');
    const colorDisplay = document.getElementById('colorDisplay');
    const saveColor = document.getElementById('saveColor');
    const colorList = document.getElementById('colorList');

    const updateColorDisplay = () => {
        const red = redRange.value;
        const green = greenRange.value;
        const blue = blueRange.value;
        const color = `rgb(${red}, ${green}, ${blue})`;
        colorDisplay.style.backgroundColor = color;
        redValue.textContent = red;
        greenValue.textContent = green;
        blueValue.textContent = blue;
    };

    redRange.addEventListener('input', updateColorDisplay);
    greenRange.addEventListener('input', updateColorDisplay);
    blueRange.addEventListener('input', updateColorDisplay);

    saveColor.addEventListener('click', () => {
        const red = redRange.value;
        const green = greenRange.value;
        const blue = blueRange.value;
        const color = `rgb(${red}, ${green}, ${blue})`;
        const colorBlock = document.createElement('div');
        colorBlock.className = 'color-block';
        colorBlock.style.backgroundColor = color;
        colorList.appendChild(colorBlock);
    });

    // Initial update to set the color display to the initial slider values
    updateColorDisplay();
});