let rootCSS = document.querySelector(':root') as HTMLElement; // CSSStyleSheet?
const savedTheme = localStorage.getItem('savedTheme');

function setSavedTheme() {
    if (savedTheme != null) {
        if (savedTheme == 'light') {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    } else {
        setDarkTheme();
    }
}

function setLightTheme() {
    localStorage.setItem('savedTheme', 'light');

    rootCSS.style.setProperty('--background-color', '#DDDDDD');
    rootCSS.style.setProperty('--text-color', '#AA0000');
}

function setDarkTheme() {
    localStorage.setItem('savedTheme', 'dark');

    rootCSS.style.setProperty('--background-color', '#000000');
    rootCSS.style.setProperty('--text-color', '#00AA00');
}

export { setSavedTheme, setDarkTheme, setLightTheme }
