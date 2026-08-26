let titleDOM = document.querySelector('h1#title-header')

if (titleDOM) {
	let titleText = window.location.href
	titleDOM.innerHTML = titleText.slice(4,-1)
}
