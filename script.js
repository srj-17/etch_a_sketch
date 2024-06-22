let container = document.querySelector('.container'); 

function createSquareGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.toggle('row');
        row.style.display = 'flex';
        row.style.flexDirection = 'row';
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            pixel.classList.toggle('pixel');
            pixel.style.cssText = 'background-color : grey; width: 15px; height: 15px; flex: auto;';
            row.appendChild(pixel);
        }   
        container.appendChild(row);
    }
}

function colorPixel(pixel) {
    pixel.style.backgroundColor = 'white';
}

function draw() {
    const pixelsNodeList = document.querySelectorAll('.pixel');
    const pixels = Array.from(pixelsNodeList);
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseenter', () => {
            colorPixel(pixel);
        })        
    });
}

createSquareGrid(16);
draw();