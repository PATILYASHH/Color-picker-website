document.addEventListener('DOMContentLoaded', () => {
    const colorSquare = document.getElementById('colorSquare');
    const colorPreview = document.getElementById('colorPreview');
    const rgbValue = document.getElementById('rgbValue');
    const hexValue = document.getElementById('hexValue');
    const copyHex = document.getElementById('copyHex');

    const updateColorDisplay = (r, g, b) => {
        const color = `rgb(${r}, ${g}, ${b})`;
        const hex = rgbToHex(r, g, b);

        colorPreview.style.backgroundColor = color;
        rgbValue.value = color;
        hexValue.value = hex;
    };

    const rgbToHex = (r, g, b) => {
        const componentToHex = c => {
            const hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        };
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    };

    colorSquare.addEventListener('mousemove', (e) => {
        if (e.buttons === 1) {  // Only update on mouse click
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const width = colorSquare.clientWidth;
            const height = colorSquare.clientHeight;

            const r = Math.round((x / width) * 255);
            const g = Math.round(((height - y) / height) * 255);
            const b = Math.round((y / height) * 255);

            updateColorDisplay(r, g, b);
        }
    });

    colorSquare.addEventListener('click', (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const width = colorSquare.clientWidth;
        const height = colorSquare.clientHeight;

        const r = Math.round((x / width) * 255);
        const g = Math.round(((height - y) / height) * 255);
        const b = Math.round((y / height) * 255);

        updateColorDisplay(r, g, b);
    });

    copyHex.addEventListener('click', () => {
        hexValue.select();
        document.execCommand('copy');
        alert('HEX value copied to clipboard!');
    });
});