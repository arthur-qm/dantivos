const ROWS = 10;
const COLS = 10;

var lefts = [];

for (let i = 0; i < ROWS; i++) {
    lefts.push(COLS);
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
        r.appendChild(obj); 
    }

    abacus.appendChild(r);
    
}
