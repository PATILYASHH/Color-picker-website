document.addEventListener('DOMContentLoaded', () => {
    const colorInput = document.getElementById('colorInput');
    const selectedColor = document.getElementById('selectedColor');
    const saveColor = document.getElementById('saveColor');
    const colorList = document.getElementById('colorList');

    // Update the selected color text
    colorInput.addEventListener('input', (event) => {
        selectedColor.textContent = event.target.value;
    });

    // Save the selected color
    saveColor.addEventListener('click', () => {
        const colorValue = colorInput.value;
        const colorBlock = document.createElement('div');
        colorBlock.className = 'color-block';
        colorBlock.style.backgroundColor = colorValue;
        colorList.appendChild(colorBlock);
    });
});