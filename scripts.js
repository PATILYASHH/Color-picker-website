document.addEventListener('DOMContentLoaded', () => {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');
    const hexValue = document.getElementById('hexValue');
    const colorPreview = document.getElementById('colorPreview');
    const saveColor = document.getElementById('saveColor');
    const colorList = document.getElementById('colorList');

    const updateColorDisplay = () => {
        const red = redRange.value;
        const green = greenRange.value;
        const blue = blueRange.value;
        const color = `rgb(${red}, ${green}, ${blue})`;
        const hex = rgbToHex(parseInt(red), parseInt(green), parseInt(blue));

        colorPreview.style.backgroundColor = color;
        document.body.style.backgroundColor = color;
        redValue.value = red;
        greenValue.value = green;
        blueValue.value = blue;
        hexValue.value = hex;
    };

    const rgbToHex = (r, g, b) => {
        const componentToHex = c => {
            const hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        };
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    };

    const hexToRgb = (hex) => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    };

    redRange.addEventListener('input', updateColorDisplay);
    greenRange.addEventListener('input', updateColorDisplay);
    blueRange.addEventListener('input', updateColorDisplay);

    redValue.addEventListener('input', () => {
        redRange.value = redValue.value;
        updateColorDisplay();
    });

    greenValue.addEventListener('input', () => {
        greenRange.value = greenValue.value;
        updateColorDisplay();
    });

    blueValue.addEventListener('input', () => {
        blueRange.value = blueValue.value;
        updateColorDisplay();
    });

    hexValue.addEventListener('input', () => {
        const [r, g, b] = hexToRgb(hexValue.value);
        redRange.value = r;
        greenRange.value = g;
        blueRange.value = b;
        updateColorDisplay();
    });

    saveColor.addEventListener('click', () => {
        const color = hexValue.value;
        const colorBlock = document.createElement('div');
        colorBlock.className = 'color-block';
        colorBlock.style.backgroundColor = color;
        colorList.appendChild(colorBlock);
    });

    // Initial update to set the color display to the initial slider values
    updateColorDisplay();
});