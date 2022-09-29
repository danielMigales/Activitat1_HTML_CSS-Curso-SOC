(function () {
    /***** Oferta gastronòmica *****/
    afegeixEsdevenimentCopiaText();
    /***** Reserves *****/
    afegeixEsdevenimentCanviNumeroComensals();
    afegeixEsdevenimentEnviamentFormulari();

    /***** Footer (secció contacte) *****/
    afegeixHoraActual();
})();

/***** Oferta gastronòmica *****/
function afegeixEsdevenimentCopiaText() {
    const textNoCopiable = document.getElementById("ofertaGastronomica");
    textNoCopiable.addEventListener("copy", function (event) {
        event.preventDefault();
        alert("Sol·liciti a info@restaurantorenga.cat l'oferta gastronòmica en format digital i li enviarem un document PDF amb tota la informació.");
    });
}

/***** Reserves *****/
function afegeixEsdevenimentCanviNumeroComensals() {
    const numeroComensals = document.querySelector("#numeroComensals");
    numeroComensals.addEventListener("change", function (event) {
        const compte = document.querySelector("#preuAproximat");
        let resultat = (event.target.value) * 50;
        compte.textContent = resultat;
    });
}

function afegeixEsdevenimentEnviamentFormulari() {
    const inputRadio = document.getElementsByTagName("form")[0];
    inputRadio.addEventListener("submit", function (event) {
        event.preventDefault();
        const botonsRadio = this.elements["menor"]
        const valorRadioSeleccionat = botonsRadio.value;
        if (valorRadioSeleccionat == "Si") {
            var desplegableUbicacions = document.getElementById("ubicacio");
            var llocEscogit = ubicacio.options[ubicacio.selectedIndex].text;

            if (llocEscogit == "Sala Mèxic") {
                alert("No es pot fer una reserva si hi ha menors de 5 anys i la ubicació triada és la Sala Mèxic ja que no està suficientment habilitada.");
            }
            else {
                alert("Reserva efectuada. L'esperem el dia i hora indicada")
            }
        }
        else {
            alert("Reserva efectuada. L'esperem el dia i hora indicada")
        }
    });
}

/***** Footer (secció contacte) *****/
function afegeixHoraActual() {
    const nouParagraf = document.createElement("p");
    nouParagraf.innerHTML = "Hora actual: <span id=\"horaActual\"></span>";
    const elementAddress = document.querySelector("address");
    const ultimParagraf = elementAddress.lastElementChild;
    elementAddress.removeChild(ultimParagraf);
    elementAddress.appendChild(nouParagraf);
    elementAddress.appendChild(ultimParagraf);
    setInterval(actualitzaHora, 1000);
}

function actualitzaHora() {
    const data = new Date();
    let hores = data.getHours();
    let minuts = data.getMinutes();
    let segons = data.getSeconds();
    hores = estableixFormatDosDigits(hores);
    minuts = estableixFormatDosDigits(minuts);
    segons = estableixFormatDosDigits(segons);
    document.getElementById("horaActual").innerHTML = hores + ":" + minuts + ":" + segons;
}

function estableixFormatDosDigits(valor) {
    if (valor < 10) {
        valor = '0' + valor;
    }
    return valor;
}