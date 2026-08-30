function renderHeader() {
    let headerDOM = document.getElementById('titleHeader') as HTMLHeadingElement;
    let titleDOM = document.querySelector('title') as HTMLTitleElement;
    const windowLocation = window.location.href;
    let headerText;

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

function renderQuoteText() {
    fetch('/assets/other/quotes.json')
        .then((response) => response.json()
        .then((json) => {
            let quoteDOM = document.getElementById('quoteText') as HTMLElement;
            const quotesLength = Object.keys(json).length + 1
            const luckyNumber = Math.floor(Math.random() * quotesLength);

            const quoteContent = json["quote." + luckyNumber]["content"]
            const quoteAuthor = json["quote." + luckyNumber]["author"]
            const quoteURL = json["quote." + luckyNumber]["url"]

            const fullQuoteText = `${quoteContent} - ${quoteAuthor}`

            let quoteElement = document.createElement('a') as HTMLAnchorElement;
            let linkTextNode = document.createTextNode(fullQuoteText)

            quoteElement.appendChild(linkTextNode);
            quoteElement.href = quoteURL;

            quoteDOM.appendChild(quoteElement);

        }));
}

function renderNavigation() {
    let links = ['about', 'music', 'contact', 'other'];
    let navDOM = document.getElementById('navigationElement') as HTMLUListElement;
    let navButtonElement = document.createElement('ul') as HTMLElement;

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

export { renderHeader, renderQuoteText, renderNavigation }
