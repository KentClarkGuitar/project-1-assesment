//state 
var sum;

//cached elements
var displayEl = document.querySelector('h1');
var inpEl = document.querySelector('input');


//event listeners
document.getElementById('addBtn').addEventListener('click', function () {
    // get text from input & parseFloat
    // then update sum by adding input
    sum += parseFloat(inpEl.value);
    //inpEl.value = '';
    render();
    // call render 
});


//event listeners
document.getElementById('subBtn').addEventListener('click', function () {
    // get text from input & parseFloat
    // then update sum by adding input
    sum -= parseFloat(inpEl.value);
    //inpEl.value = '';
    render();
    // call render 
});


//functions 
function init() {
    sum = 0;
    render();
}

function render() {
    displayEl.textContent = sum;
    //displayEl.textContent = (sum >= 0 ? '+' : '') + sum;
    displayEl.style.color = sum >= 0 ? 'black' : 'red';
}

init();





