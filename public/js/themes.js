var cssRoot = document.querySelector(":root");
let theme;

function checkTheme() {
    theme = localStorage.getItem("theme");

    if (theme == null) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setDark();
        } else {
            setLight();
        }
    } else {
        if (theme == "dark") {
            setDark();
        } else {
            setLight();
        }
    }
}

function setSavedTheme(input) {
    if (input == "dark") {
        localStorage.setItem("theme", "dark");
        location.reload();
    } else {
        localStorage.setItem("theme", "light");
        location.reload();
    }
}

function setLight() {
    cssRoot.style.setProperty("--bkg-color", "#FFFFFF");
    cssRoot.style.setProperty("--fnt-color", "#7f0000");
    cssRoot.style.setProperty("--lnk-color", "#df0000");
}

function setDark() {
    cssRoot.style.setProperty("--bkg-color", "#000000");
    cssRoot.style.setProperty("--fnt-color", "#007f00");
    cssRoot.style.setProperty("--lnk-color", "#00df00");
}
