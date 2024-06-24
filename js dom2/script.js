console.log("hello world")

// hello world
// document.body.firstElementChild
// <div class=​"container">​…​</div>​
// document.body.firstElementChild.childNodes
// NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]



// document.body.firstElementChild
// <div class=​"container">​…​</div>​
// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// document.body.firstElementChild.children[0];
// <div class=​"box">​box1​</div>​
// document.body.firstElementChild.children[0].nextElementSibling;
// <div class=​"box">​box2​</div>​


// hello world
// document.body.firstElementChild.children[2];
// <div class=​"box">​box3​</div>​
// document.body.firstElementChild.children[2].previousElementSibling;
// <div class=​"box">​box2​</div>​