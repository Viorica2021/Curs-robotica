function toggleMenu() {
    var menu = document.getElementById('menu-links');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Funcție pentru actualizarea datei
function actualizeazaData() {
    const dataElement = document.getElementById('data-curenta');
    const dataCurenta = new Date();

    const optiuni = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };

    const dataFormata = dataCurenta.toLocaleDateString('ro-RO', optiuni);
    dataElement.textContent = dataFormata;
}

// Apelăm funcția la încărcarea paginii
document.addEventListener('DOMContentLoaded', actualizeazaData);


emailjs.init("c1pdO4HeYDPxv-pzT");
function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_wdq5j4l", "template_a3c043a", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
            console.log(error);
        })
}