// 1. Erlaubt das Ablegen (WICHTIG: ohne das geht es nicht!)
function allowDrop(ev) {
    ev.preventDefault();
}

// 2. Wird aufgerufen, wenn das Ziehen startet
function drag(ev) {
    // Wir speichern die URL des Bildes
    ev.dataTransfer.setData("text/plain", ev.target.src);
}

// 3. Optional: Zeigt an, dass man über einer Zelle schwebt (Hover-Fix)
function dragEnter(ev) {
    ev.preventDefault();
    if (ev.target.classList.contains('drop-zone')) {
        ev.target.style.backgroundColor = "#e3f2fd"; // Hellblau beim Drüberfahren
    }
}

function dragLeave(ev) {
    if (ev.target.classList.contains('drop-zone')) {
        ev.target.style.backgroundColor = "white"; // Zurück zu weiß
    }
}

// 4. Die eigentliche Drop-Logik
function drop(ev) {
    ev.preventDefault();
    
    // Hintergrundfarbe zurücksetzen
    if (ev.target.classList.contains('drop-zone')) {
        ev.target.style.backgroundColor = "white";
    }

    const imgSrc = ev.dataTransfer.getData("text/plain");
    
    // Ziel ermitteln (Sicherstellen, dass wir die Zelle treffen, nicht ein vorhandenes Bild)
    let target = ev.target;
    if (target.tagName === "IMG") {
        target = target.parentElement;
    }

    if (target.classList.contains('drop-zone')) {
        // Altes Bild löschen, falls vorhanden
        target.innerHTML = ""; 
        
        // Neues Bild-Element erstellen
        const img = document.createElement("img");
        img.src = imgSrc;
        img.style.width = "90%";
        img.style.height = "90%";
        img.style.objectFit = "contain";
        
        target.appendChild(img);
    }
}
