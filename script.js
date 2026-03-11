function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("imageSrc", ev.target.src);
}

function dragEnter(ev) {
    ev.preventDefault();
    if (ev.target.classList.contains('drop-zone')) {
        ev.target.classList.add('drag-over');
    }
}

function dragLeave(ev) {
    if (ev.target.classList.contains('drop-zone')) {
        ev.target.classList.remove('drag-over');
    }
}

function drop(ev) {
    ev.preventDefault();
    let target = ev.target;
    if (target.tagName === "IMG") target = target.parentElement;
    
    target.classList.remove('drag-over');
    const src = ev.dataTransfer.getData("imageSrc");

    if (target.classList.contains('drop-zone')) {
        target.innerHTML = ""; 
        const newImg = document.createElement("img");
        newImg.src = src;
        target.appendChild(newImg);
    }
}

function clearAll() {
    document.querySelectorAll('.drop-zone').forEach(z => z.innerHTML = "");
}
