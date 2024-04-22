
const umano = document.getElementById('umano');
const computer = document.getElementById('computer');
const vincitore = document.getElementById('vincitore');


function azione() {
    const ptumano = Math.floor(Math.random() * 6) + 1;
    const ptcomputer = Math.floor(Math.random() * 6) + 1;
    umano.innerHTML = ptumano;
    computer.innerHTML = ptcomputer;

    if (ptumano > ptcomputer) {
        vincitore.innerHTML = 'vince umano'
    }
    else if (ptumano == ptcomputer) {
        vincitore.innerHTML = 'pareggio , rilancia';
    }
    else {
        vincitore.innerHTML = 'vince compuer';
    }
}





