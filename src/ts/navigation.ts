const links = ['about', 'music', 'contact', 'other'];
const linksLength = links.length - 1;
let navDOM = document.getElementById('navigationElement') as HTMLUListElement;
let navButtonElement = document.createElement('ul') as HTMLElement;

function generateNav() {
    for (let i = 0; i <= linksLength; i++) {
        let navButtonListElement = document.createElement('li');
        let navButtonAnchorElement = document.createElement('a');
        let linkTextNode = document.createTextNode(links[i]!);

        navButtonElement.appendChild(navButtonListElement);
        navButtonAnchorElement.appendChild(linkTextNode);
        navButtonAnchorElement.href = links[i]!;
        navButtonListElement.appendChild(navButtonAnchorElement);
    }
    navDOM.appendChild(navButtonElement);
}

export { generateNav }
