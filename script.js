//Async

//Things that take time are generally done asynchronously, in the side stack, and then the result is put back in the main stack.
//settimeout, setinterval, fetch, promises, axios


console.log('I am first');
console.log('I am second');

setTimeout(()=>{
    console.log('I am inside setTimeout');
},0)

console.log('I am third');



fetch(`https://randomuser.me/api/`)
.then(data => data.json())
.then(data => {
    console.log(data.results[0].name.first);
})  
