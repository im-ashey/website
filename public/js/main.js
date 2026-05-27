function resizeIframe(obj) {
	// THANK YOU https://stackoverflow.com/a/9976309 !!!
		obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 5 + 'px';
}

function changeFrame(page) {
	document.getElementById('page').src = page;
}
