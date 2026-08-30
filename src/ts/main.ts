import { generateNav } from './navigation.js'

window.addEventListener("DOMContentLoaded", () => {
	renderHeader();
	// generateNav();
});

function renderHeader() {
    let titleDOM = document.getElementById('title-header') as HTMLBodyElement;
    const windowLocation = window.location.href as string;

		if (windowLocation?.includes('https')) {
            titleDOM.innerHTML = windowLocation.slice(5, -1)
        } else {
            titleDOM.innerHTML = windowLocation.slice(4, -1)
        }
}
