var napier = document.querySelector('#simu');
var inputs = napier.querySelector('.inputs');

for (let i = 0; i < 11; i++) {
    
    let numi = document.createElement('button');
    numi.setAttribute('class', 'btn btn-outline-dark');
    numi.setAttribute('id', `n${i}`);
    numi.setAttribute('type', 'button');
    
    if (i < 10) {
        numi.innerHTML = `${i}`;
    } else {
        numi.innerHTML = 'X';
    }

    inputs.appendChild(numi);
}