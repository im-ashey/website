function resizeIframe(obj) {
	// THANK YOU https://stackoverflow.com/a/9976309 !!!
	setTimeout(() => {
		obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 2 + 'px';
}, 250);
}

function changeFrame(page) {
	document.getElementById('page').src = page;
}
