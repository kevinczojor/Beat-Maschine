/ Verhindert das Standardverhalten (damit das Ablegen erlaubt ist)
function allowDrop(ev) {
    ev.preventDefault();
}

// Speichert die Information, welches Bild gerade gezogen wird
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.src);
}

// Wird ausgeführt, wenn das Bild losgelassen wird
function drop(ev) {
    ev.preventDefault();
    const imgSrc = ev.dataTransfer.getData("text");
    
    // Wir prüfen, ob wir in eine Zelle droppen (und nicht auf ein bereits vorhandenes Bild)
    let targetCell = ev.target;
    if (targetCell.tagName === "IMG") {
        targetCell = targetCell.parentElement;
    }

    // Falls die Zelle leer ist, fügen wir ein neues Bild-Element hinzu
    if (targetCell.classList.contains('drop-zone')) {
        targetCell.innerHTML = ""; // Falls du das alte Bild ersetzen willst
        const newImg = document.createElement("img");
        newImg.src = imgSrc;
        newImg.style.width = "90%";
        targetCell.appendChild(newImg);
    }
}
