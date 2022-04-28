const ROWS = 10;
const COLS = 10;

var lefts = [];
var colors = [];

for (let i = 0; i < ROWS; i++) {
    lefts.push(COLS);
}

for (let i = 0; i < ROWS; i++) {
    
    let c = [];

    for (let j = 0; j < 3; j++) {
        c.push(Math.floor(256 * Math.random()));
    }

    colors.push(c);

}

var abacus = document.getElementById('simu')

for (let i = 0; i < ROWS; i++) {
    
    let r = document.createElement('div');
    r.setAttribute('class', 'row');
    r.setAttribute('id', `r${i}`);

    for (let j = 0; j < COLS; j++) {
        let obj = document.createElement('div');
        obj.setAttribute('class', 'unity');
        obj.setAttribute('id', `o${i}${j}`);
        obj.style.backgroundColor = `rgb(${colors[i][0]}, ${colors[i][1]}, ${colors[i][2]})`;

        r.appendChild(obj); 
    }

    abacus.appendChild(r);
    
}
