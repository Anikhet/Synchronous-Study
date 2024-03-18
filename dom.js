//DOM = Document Object Model
// DOM Manipulation = to manipulate the HTML and CSS of the page


// *Accessing elements*
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// document.querySelector works for all of the above but just chooses first match
// document.querySelectorAll works for a all and matches all
var btn = document.querySelector('button');
btn.textContent = 'I am a button';


// *style*
btn.style.color = 'red';
// classList.add('class')
// classList.remove('class') 



// *Creating elements*
var h1 = document.createElement('h1');
h1.textContent = 'I am a h1';
document.body.appendChild(h1);
document.body.insertBefore(h1, btn);
// document.body.removeChild(h1);