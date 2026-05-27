function resizeIframe(obj) {
	// THANK YOU https://stackoverflow.com/a/9976309 !!!
	setTimeout(() => {
		obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}, 250);

}
