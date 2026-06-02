var cssRoot = document.querySelector(':root');

function checkTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDark()
    } else {
        setLight()
    }
}

function setLight() {    
    cssRoot.style.setProperty('--bkg-color', '#FFFFFF');
    cssRoot.style.setProperty('--fnt-color', '#7f0000');
    cssRoot.style.setProperty('--lnk-color', '#df0000');
}

function setDark() {
    cssRoot.style.setProperty('--bkg-color', '#000000');
    cssRoot.style.setProperty('--fnt-color', '#007f00');
    cssRoot.style.setProperty('--lnk-color', '#00df00')
}