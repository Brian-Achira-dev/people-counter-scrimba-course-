
countEl = document.getElementById('counter-el');
console.log(countEl)



let count = 0;
function increase(){
    count = count+1;
    console.log(count);
    countEl.innerHTML  = count;
}

function decrease(){
    count = count-1;
    console.log(count);
    countEl.innerHTML  = count;
}
