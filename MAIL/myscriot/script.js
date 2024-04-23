
const autorizzati = [
    "vladi@ufficio.com",
    "rocco@ufficio.com",
    "cocco@ufficio.com",
    "gnocco@ufficio.com",
    "salvinio@ufficio.com",
    "giorgiameloni@ufficio.com",
];

const esito = document.getElementById('esito');

function azione() {

    let mailFind = false
    const mail = document.getElementById("mail").value;
    for (let number = 0; number < autorizzati.length; number++) {
        if (mail == autorizzati[number]) {
            mailFind = true
        }
        else {
        }
    }
    if (mailFind == true) {
        console.log('sei ok')
        esito.innerHTML = "puoi entrare YAYYYYYY"
    }
    else {
        console.log('vai via')
        esito.innerHTML = "non puoi entrare :'("
    }

}
