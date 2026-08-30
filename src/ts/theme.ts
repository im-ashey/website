let rootCSS = document.querySelector(':root') as HTMLElement; // CSSStyleSheet?

function setLightTheme() {
    rootCSS.style.setProperty('--background-color', '#DDDDDD');
    rootCSS.style.setProperty('--text-color', '#AA0000')
}

function setDarkTheme() {
    rootCSS.style.setProperty('--background-color', '#000000');
    rootCSS.style.setProperty('--text-color', '#00AA00')
}

export { setLightTheme, setDarkTheme }
