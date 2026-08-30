let links = ['about', 'music', 'contact', 'other'];
let navDOM = document.getElementById('navigationElement') as HTMLUListElement;
let navButtonElement = document.createElement('ul') as HTMLElement;

function generateNav() {
    const windowLocation = window.location.href;

    for (let i = 0; i <= links.length; i++) {
        if (windowLocation.includes(links[i]!)) {
            links.splice(i, 1);
            links.unshift('home')
        }
    }

    const linksLength = links.length - 1

    for (let i = 0; i <= linksLength; i++) {
        let navButtonListElement = document.createElement('li');
        let navButtonAnchorElement = document.createElement('a');
        let linkTextNode = document.createTextNode(links[i]!);

        navButtonElement.appendChild(navButtonListElement);
        navButtonAnchorElement.appendChild(linkTextNode);
        if (links[i] != 'home') {
            navButtonAnchorElement.href = links[i]!;
        } else {
            navButtonAnchorElement.href = '/';
        }
        navButtonListElement.appendChild(navButtonAnchorElement);
    }
    navDOM.appendChild(navButtonElement);
}

export { generateNav }
