const links = ['about', 'music', 'contact']
let navDom = document.querySelector('nav')
let navElement = document.createElement('ul')

function generateNav() {
		navElement.appendChild(document.createTextNode("hello!"));

		if (navDom) {
				navDom.insertBefore(navElement, navDom)
		}
}

// 				<ul id="nav">
//					<li>
//						<a href="about">about</a>
//					</li>
//					<li>
//						<a href="music">music</a>
//					</li>
//					<li>
//						<a href="contact">contact</a>
//					</li>
//				</ul>

export { generateNav }
