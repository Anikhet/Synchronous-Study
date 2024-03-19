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

//Event handler, no event listener = events are ignored
btn.addEventListener('dblclick', function() {
    console.log('I was clicked');
    h1.style.color = 'blue';
})

btn.addEventListener('click', function() {
    console.log('I was clicked');
    h1.style.color = 'red';
})


// *Event Object*



// Hell task 1

var c = document.querySelector('#btt')
var p = document.querySelector('p')
c.addEventListener('click', function() {
    p.textContent = 'I am a paragraph'
})


//Hell task 2
// Swap images

var img1 = document.querySelector('#i1')
var img2 = document.querySelector('#i2')
var btn = document.querySelector('#swap')
btn.addEventListener('click', function() {
    var temp = img1.src
    img1.src = img2.src
    img2.src = temp
}
)

// Hell task 3 

// When dealing with forms, submit button refreshes the pages which causes the js to not work

var form = document.querySelector('form')
var in1 = document.querySelector('#in1')
var in2= document.querySelector('#in2')
//var in = document.querySelectorAll('input[type="text"]')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    if(in1.value === '' || in2.value ===''){
        alert('The values are blank')
}
}
)


// Hell task 4

var btn= document.querySelector('#inter')


btn.addEventListener('click', function(){


})



var data = [
    {
        name:"Anikhet",
         src:"https://avatars.githubusercontent.com/u/51974582?v=4"
    },
    {
        name:"Tehkina",
         src:"https://avatars.githubusercontent.com/u/51974582?v=4"
    },
    {
        name:"Prison",
         src:"https://avatars.githubusercontent.com/u/51974582?v=4"
    },
    {
        name:"Pennywise",
         src:"https://avatars.githubusercontent.com/u/51974582?v=4"
    },
]