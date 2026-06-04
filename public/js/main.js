const navDom = document.querySelectorAll("ul.nav")[0];
const navButtons = navDom['children']['length'];
let buttonList = [];

function getButtons() {
    for (i = 0; i < navButtons; i++) {
        buttonList.push(navDom['children'][i]['firstChild']['id'])
    }
}

function renderQuote() {
    fetch("../assets/other/quotes.json")
        .then((response) => response.json())
        .then((data) => {
            let quotenum = Math.floor(Math.random() * Object.keys(data).length);
            if (data["quote." + quotenum]["url"]) {
                document.getElementById("quote").outerHTML = "<a id='quote'>";
                document.getElementById("quote").innerHTML =
                    `"${data["quote." + quotenum]["content"]}" - ${data["quote." + quotenum]["author"]}`;
                document.getElementById("quote").href = `${data["quote." + quotenum]["url"]}`;
            } else {
                document.getElementById("quote").innerHTML =
                    `"${data["quote." + quotenum]["content"]}" - ${data["quote." + quotenum]["author"]}`;
            }
        })
        .catch((error) => console.error("something broke idk", error));
}

function resizeIframe(obj) {
    // THANK YOU https://stackoverflow.com/a/9976309 !!!
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 5 + "px";
}

function changeFrame(page, button) {
    getButtons();
	if (button) {
		document.getElementById("page").src = page;
		for (let i = 0; i < buttonList.length; i++) {
        	document.getElementById(buttonList[i]).style.fontWeight = "normal";
        	document.getElementById(buttonList[i]).style.textDecoration = "none";
    	}
		document.getElementById(button).style.fontWeight = "bold";
		document.getElementById(button).style.textDecoration = "underline";
	}
}
