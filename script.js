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
            pixel.style.cssText = 'width: 15px; height: 15px; flex: auto;';
            row.appendChild(pixel);
        }   
        container.appendChild(row);
    }
}

function colorPixel(pixel, count) {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let opacity;
    if (count < 10) {
        opacity = count * 0.1;
    } 
    pixel.style.backgroundColor = `rgb(${red}, ${green}, ${blue}, ${opacity})`;
}

function draw() {
    const pixelsNodeList = document.querySelectorAll('.pixel');
    const pixels = Array.from(pixelsNodeList);
    pixels.forEach(pixel => {
        let count = 0;
        pixel.addEventListener('mouseenter', () => {
            colorPixel(pixel, count);
            count++;
        })        
    });
}

createSquareGrid(16);
draw();