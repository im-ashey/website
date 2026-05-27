function resizeIframe(obj) {
	// THANK YOU https://stackoverflow.com/a/9976309 !!!
		obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 5 + 'px';
}

function resetNav() {
	document.getElementById('home').style.fontWeight = 'normal'
	document.getElementById('about').style.fontWeight = 'normal'
	document.getElementById('music').style.fontWeight = 'normal'
	document.getElementById('webrings').style.fontWeight = 'normal'
	document.getElementById('contact').style.fontWeight = 'normal'

	document.getElementById('home').style.fontSize = '1rem'
	document.getElementById('about').style.fontSize = '1rem'
	document.getElementById('music').style.fontSize = '1rem'
	document.getElementById('webrings').style.fontSize = '1rem'
	document.getElementById('contact').style.fontSize = '1rem'
}

function changeFrame(page, button) {
	document.getElementById('page').src = page;
	resetNav()
	document.getElementById(button).style.fontWeight = "bold";
	document.getElementById(button).style.fontSize = "1.2rem";
}
