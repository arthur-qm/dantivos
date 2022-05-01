var napier = document.querySelector('#simu');
var inputs = napier.querySelector('.inputs');
var displays = napier.querySelector('.displays');
var urls = [];
var curr_cols = [];

for (let i = 0; i < 10; i++) {
    urls.push(`./imgs/napier/col${i}.png`);
}

urls.push('./imgs/napier/colnull.png');

for (let i = 0; i < 11; i++) {
    
    let numi = document.createElement('button');
    numi.setAttribute('class', 'btn btn-outline-dark');
    numi.setAttribute('id', `n${i}`);
    numi.setAttribute('type', 'button');
    numi.setAttribute('onclick', `addcol(${i});`)
    
    if (i < 10) {
        numi.innerHTML = `${i}`;
    } else {
        numi.innerHTML = 'X';
    }

    inputs.appendChild(numi);
}

let col_ini = document.createElement('img');
col_ini.setAttribute('src', urls[urls.length-1])

displays.appendChild(col_ini);

function addcol(x) {
    if (x <= 9) {
        let colx = document.createElement('img');
        colx.setAttribute('src', urls[x]);
        curr_cols.push(x);

        displays.appendChild(colx);
    } else if (curr_cols.length) {
        curr_cols.pop();
        displays.removeChild(displays.lastChild);
    }
}