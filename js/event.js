//direct-----------1
function makeRed() {
    document.body.style.backgroundColor = "yellow";
}


/* blue btn set------------2 */
const bluebtn = document.getElementById('make-btn-blue');
bluebtn.onclick = makeblue;
function makeblue() {
    document.body.style.backgroundColor = 'blue';
}

// red btn set by anonymus function--------3
const redbtn = document.getElementById('make-btn-red');
redbtn.onclick = function () {
    document.body.style.backgroundColor = 'red';
}


//add eventListener---------4
const goldbtn = document.getElementById('make-btn-gold');
goldbtn.addEventListener('click', makegold)
function makegold() {
    document.body.style.backgroundColor = 'goldenrod';
}

//add eventListener-----------5
const hotpinkbtn = document.getElementById('make-btn-pink');
hotpinkbtn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
});

//direct short cut--------------6
document.getElementById('make-btn-lightblue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
});
