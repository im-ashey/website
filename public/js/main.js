function resizeIframe(obj) {
	// THANK YOU https://stackoverflow.com/a/9976309 !!!
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}
