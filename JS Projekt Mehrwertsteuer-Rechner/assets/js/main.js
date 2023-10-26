const berechne = () => {
    const berechnungsArt = document.querySelector('input[name="berechnungsArt"]:checked');
    const mehrwertSteuersatz = parseFloat(document.querySelector('input[name="mehrwertsteuersatz"]:checked').value);
    const nettoBetrag = Number(document.querySelector("#inputId").value);

    let mehrwertSteuer;
    let bruttoBetrag;
    const pTag = document.getElementById("neuerPtag")
    const neuerText = document.getElementById("neuerText");

    if (berechnungsArt.value ==="nettoToBrutto") {
        mehrwertSteuer = nettoBetrag * (mehrwertSteuersatz/ 100);
        bruttoBetrag = nettoBetrag + mehrwertSteuer;

        pTag.textContent = "Nettobetrag (Preis ohne Mehrwertstuer) in Euro";
        neuerText.textContent = "Bruttobetrag (Endpreis)";
        document.getElementById("resultMehrwertsteuerId").textContent = mehrwertSteuer.toFixed(2)+ "€";
        document.getElementById("resultBruttobetragId").textContent = bruttoBetrag.toFixed(2)+ "€";
    } else if (berechnungsArt.value === "bruttoToNetto"){
        bruttoBetrag = nettoBetrag - ((mehrwertSteuersatz/ 100)*nettoBetrag);
        mehrwertSteuer = nettoBetrag * (mehrwertSteuersatz / 100);
    
        pTag.textContent = "Bruttobetrag (Preis inklusive Mehrwertsteuer in Euro";
        neuerText.textContent = "Nettobetrag";
        document.getElementById("resultMehrwertsteuerId").textContent = mehrwertSteuer.toFixed(2)+ "€";
        document.getElementById("resultBruttobetragId").textContent = bruttoBetrag.toFixed(2)+ "€";
    }
}

const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(button => {
    button.addEventListener('change', berechne);
});
