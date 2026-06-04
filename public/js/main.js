let buttons = ["home", "about", "music", "webrings", "contact"];

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

function warningAccepted() {
	localStorage.setItem('warningAccepted', 'true')
	document.getElementById('nav').innerHTML = `
	<ul class="nav">
		<li><p id="home" onclick="changeFrame('pages/home.html', 'home')">home</p></li>
		<li><p id="about" onclick="changeFrame('pages/about.html', 'about')">about</p></li>
		<li><p id="music" onclick="changeFrame('pages/music.html', 'music')">music</p></li>
		<li><p id="webrings" onclick="changeFrame('pages/webrings.html', 'webrings')">webrings</p></li>
		<li><p id="contact" onclick="changeFrame('pages/contact.html', 'contact')">contact + links</p></li>
	</ul>
	`
	changeFrame('pages/home.html', 'home');
	renderQuote()
}

function checkLanding() {
	if (localStorage.getItem('warningAccepted') == 'true') {
		warningAccepted()
	} else {
		document.getElementById('landing').innerHTML = `
		<h2>welcome to my website!</h2>
		<p>thanks for visiting my website! just before you visit, i have a few things to warn you about.</p>
		<ul>
			<li><p>there is mild swearing</p></li>
			<li><p>there might be discussion of mental health, so be warned if you're sensitive to the subject.</p></li>
			<li><p>if it's not obvious, this website requires JS. you can audit the code <a href='//github.com/im-ashey/website'>here</a></p></li>
			<li><p>and this website was also terribly programmed. got problems? submit a bug report on the <a href='//github.com/im-ashey/website'>github</a>.
		</ul>

		<br />
		<p>with all that being said, do you wish to proceed?</p>
		<br />

		<ul class='nav'>
			<li><p onclick="warningAccepted(); location.reload()">yes</p></li>
			<li><p onclick="window.location.href = 'https://google.com'">no</p>
		</ul>
		`
	}
}

function resetNav() {
    for (let i = 0; i < buttons.length; i++) {
        document.getElementById(buttons[i]).style.fontWeight = "normal";
        document.getElementById(buttons[i]).style.textDecoration = "none";
    }
}

function changeFrame(page, button) {
	if (button) {
		document.getElementById("page").src = page;
		resetNav();
		document.getElementById(button).style.fontWeight = "bold";
		document.getElementById(button).style.textDecoration = "underline";
	} else {
		document.getElementById("page").src = page;
	}
}
