const items = ["bkg", "fnt", "lnk"];
const lightColors = ["#FFFFFF", "#7f0000", "#df0000"];
const darkColors = ["#000000", "#007f00", "#00df00"];

const cssRoot = document.querySelector(":root");

function checkTheme() {
    const theme = localStorage.getItem("theme");

    if (theme == null) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            renderTheme("dark");
        } else {
            renderTheme("light");
        }
    } else {
        if (theme == "dark") {
            renderTheme("dark");
        } else {
            renderTheme("light");
        }
    }
}

function setSavedTheme(input) {
    if (input == "dark") {
        localStorage.setItem("theme", "dark");
        checkTheme();
    } else {
        localStorage.setItem("theme", "light");
        checkTheme();
    }
}

function renderTheme(theme) {
    if (theme == "dark") {
        for (let i = 0; i < items.length; i++) {
            if (cssRoot) {
                cssRoot.style.setProperty("--" + `${items[i]}` + "-color", `${darkColors[i]}`);
            }
        }
    } else if (theme == "light") {
        for (let i = 0; i < items.length; i++) {
            if (cssRoot) {
                cssRoot.style.setProperty("--" + `${items[i]}` + "-color", `${lightColors[i]}`);
            }
        }
    } else {
        console.log("theme not defined!");
    }
}