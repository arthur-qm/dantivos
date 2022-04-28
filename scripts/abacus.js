const ROWS = 10;
const COLS = 10;

var lefts = [];
var colors = [];
var active_hover = 0;

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
        obj.setAttribute('id', `o${i}-${j}`);
        obj.style.backgroundColor = `rgb(${colors[i][0]}, ${colors[i][1]}, ${colors[i][2]})`;

        r.appendChild(obj); 
    }

    abacus.appendChild(r);
    
}

function change(row, column) {

    let fila = abacus.querySelector(`#r${row}`);
    let pushedguy = fila.querySelector('.push');
    let obj_at = fila.querySelector(`#o${row}-${column}`);

    if (pushedguy === null || pushedguy === undefined) {
        obj_at.classList.add('push');
        lefts[row] = column;
        return;
    }

    pushedguy.classList.remove('push');

    if (lefts[row]-1 >= column) {
        obj_at.classList.add('push');
        
        lefts[row] = column;
    } else {

        if (column+1 < COLS) {
            fila.querySelector(`#o${row}-${column+1}`).classList.add('push');
        }

        lefts[row] = column + 1;
    }
}

for (let i = 0; i < ROWS; i++)
    for (let j = 0; j < COLS; j++)
        abacus.querySelector(`#o${i}-${j}`).setAttribute('onclick', `change(${i}, ${j});`);

for (let i = 0; i < ROWS; i++)
    abacus.querySelector(`#r${i}`).addEventListener('mouseover', function (ev) {
        active_hover = i;
    });

document.addEventListener('keydown', function (e) {
    let x = -1;
    
    if (e.code === 'Minus') {
        x = 10;
    } else {
        x = parseInt(e.code.slice(-1));
    }

    if (!(typeof(x) === typeof(1) && 0 <= x && x <= 10)) return;
    
    if (lefts[active_hover] == x) return;

    if (lefts[active_hover] < x)
        change(active_hover, x-1);
    else
        change(active_hover, x);
});