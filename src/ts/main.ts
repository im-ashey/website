import { renderHeader, renderQuoteText, renderNavigation } from './rendering.js'
import { setSavedTheme, setDarkTheme, setLightTheme } from './theme.js'

window.addEventListener("DOMContentLoaded", () => {
    setSavedTheme();

    renderHeader();
    renderQuoteText();
    renderNavigation();

    setupEventListeners();
});

function setupEventListeners() {
    let darkThemeButtonDOM = document.getElementById('darkThemeButton') as HTMLAnchorElement;
    let lightThemeButtonDOM = document.getElementById('lightThemeButton') as HTMLAnchorElement;

    darkThemeButtonDOM?.addEventListener('click', (e) => { // (e) => is cleaner, but less verbose on what it does exactly.
        setDarkTheme();
    });

    lightThemeButtonDOM?.addEventListener('click', (e) => {
        setLightTheme();
    });
}
