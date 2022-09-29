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

    const botoEnviament = document.getElementById("reservar");

    botoEnviament.addEventListener("submit", function (event) {
        event.preventDefault();

        var botonsRadio = document.getElementsByName("menor");
        for (i = 0; i < botonsRadio.length; i++) {
            if (botonsRadio[0].checked) {
                alert("No es pot fer una reserva si hi ha menors de 5 anys i la ubicació triada és la Sala Mèxic ja que no està suficientment habilitada.")
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
    // Afegeix aquí el teu codi 
}