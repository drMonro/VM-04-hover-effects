const board = document.querySelector('#board');
const colors = ['#92374d', '#8c5383', '#4a5899', '#559cad', '#c1b2ab', '#129490', '#e0a890', '#065143'];
const SQUARES_COUNT = 700;

const getRandomColor = () => {
  const colorIndex = Math.floor(Math.random() * colors.length);
  return colors[colorIndex];
}

const setColor = (element) => {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

const removeColor = (element) => {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;

}

for (let i = 0; i < SQUARES_COUNT; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
    board.append(square);
}
