console.log("hello world!");

// creat a navbar and change the color of its first element to red!

// document.body.childNodes

// NodeList(7) [text, nav, text, comment, text, script, text]

// document.body.childNodes[1]

// <nav>​<ul>​flex<li>​Home​</li>​<li>​About​</li>​<li>​Contact​</li>​<li>​More​</li>​</ul>​</nav>​

// document.body.childNodes[1].children

// HTMLCollection [ul]

// document.body.childNodes[1].childNodes

// NodeList(3) [text, ul, text]

// document.body.childNodes[1].firstElementChild.childNodes

// NodeList(9) [text, li, text, li, text, li, text, li, text]

// document.body.childNodes[1].firstElementchild

// undefined

// document.body.childNodes[1].firstElementChild.firstElementChild;

// li

// let navfirstelement=document.body.childNodes[1].firstElementChild.firstElementChild;

// undefined

// navfirstelement.style.backgroundColor="red"
