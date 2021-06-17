
countEl = document.getElementById('counter-el');
console.log(countEl)



let count = 0;
function increase(){
    count = count+1;
    //console.log(count);
    countEl.innerText  = count;
}

function decrease(){
    count = count-1;
    //console.log(count);
    countEl.innerText  = count;
}

let savEl = document.getElementById('save-el');


function save(){
	let var1 = count + " - ";
	savEl.textContent += var1;
    count = 0;
    countEl.textContent = count;
}


