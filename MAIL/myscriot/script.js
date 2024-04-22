
const autorizzati = [
    "vladi@ufficio.com",
    "rocco@ufficio.com",
    "cocco@ufficio.com",
    "gnocco@ufficio.com",
    "salvinio@ufficio.com",
    "giorgiameloni@ufficio.com",
];

const mail = document.getElementById("mail").value;
const esito = document.getElementById('esito')


function azione() {
    if (autorizzati == mail) {
        esito.innerHTML = "puoi entrare YAYYYYYY"
        console.log('sei ok')
    }
    else {
        esito.innerHTML = "non puoi entrare :'("
        console.log('vai via')
    }
}

// console.log(mail)