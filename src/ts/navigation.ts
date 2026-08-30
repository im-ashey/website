const links = ['about', 'music', 'contact', 'other'];
const linksLength = links.length - 1;
let navDOM = document.getElementById('navigationElement') as HTMLUListElement;

function generateNav() {
    for (let i = 0 as number; i <= linksLength; i++) {
        let navButtonElement = document.createElement('ul') as HTMLElement;
        let navButtonListElement = document.createElement('li');
        let navButtonAnchorElement = document.createElement('a');
        let linkTextNode = document.createTextNode(links[i]!);

        navButtonElement.appendChild(navButtonListElement);
        navButtonAnchorElement.appendChild(linkTextNode);
        navButtonAnchorElement.href = links[i]!;
        navButtonListElement.appendChild(navButtonAnchorElement);

        navDOM.appendChild(navButtonElement);
    }
}

export { generateNav }
