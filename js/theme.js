function darkmodeToggle(checkbox) {
    if (checkbox.checked)
        setDarkmode();
    else
        setLightmode();
}

function setDarkmode() {
    let body = document.getElementById("body");
    body.classList.remove("bg-light");
    body.classList.remove("text-dark");
    body.classList.add("bg-dark");
    body.classList.add("text-light");
}

function setLightmode() {
    let body = document.getElementById("body");
    body.classList.remove("bg-dark");
    body.classList.remove("text-light");
    body.classList.add("bg-light");
    body.classList.add("text-dark");
}