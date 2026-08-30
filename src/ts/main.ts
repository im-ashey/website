import { generateNav } from './navigation.js'
import { setSavedTheme, setDarkTheme, setLightTheme } from './theme.js'

let darkThemeButtonDOM = document.getElementById('darkThemeButton') as HTMLAnchorElement;
let lightThemeButtonDOM = document.getElementById('lightThemeButton') as HTMLAnchorElement;

window.addEventListener("DOMContentLoaded", () => {
    setSavedTheme();

	renderHeader();
    generateNav();

    setupEventListeners();
});

function renderHeader() {
    let headerDOM = document.getElementById('titleHeader') as HTMLHeadingElement;
    let titleDOM = document.querySelector('title') as HTMLTitleElement;
    const windowLocation = window.location.href;
    let headerText = null;

    if (windowLocation?.includes('https')) {
        headerText = windowLocation.slice(5);

        headerDOM.innerHTML = headerText;
        titleDOM.innerHTML = headerText;

    } else {
        headerText = windowLocation.slice(4);

        headerDOM.innerHTML = headerText;
        titleDOM.innerHTML = headerText;
    }
}

function setupEventListeners() {
    darkThemeButtonDOM?.addEventListener('click', (e) => { // (e) => is cleaner, but less verbose on what it does exactly.
        setDarkTheme();
    });

    lightThemeButtonDOM?.addEventListener('click', (e) => {
        setLightTheme();
    });
}
