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
    let titleDOM = document.getElementById('title-header') as HTMLHeadingElement;
    const windowLocation = window.location.href as string;

		if (windowLocation?.includes('https')) {
            titleDOM.innerHTML = windowLocation.slice(5, -1)
        } else {
            titleDOM.innerHTML = windowLocation.slice(4, -1)
        }
}

function setupEventListeners() {
    darkThemeButtonDOM.addEventListener('click', (e) => { // (e) => is cleaner, but less verbose on what it does exactly.
        setDarkTheme();
    });

    lightThemeButtonDOM.addEventListener('click', (e) => {
        setLightTheme();
    });
}
