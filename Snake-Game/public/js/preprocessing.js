/* This file contains the pre processing needed to develop the layout of the app, 
	such as :- 

	1. Creating 400 cells of dimension (10 X 10).
	2. Give these cells a unique class Name.
*/

let grid=document.getElementById('grid');

// Creating 50 cells and adding them to #grid.
let cell_no=400;

// Store this as session Storage, so that other js files may use it too.
window.sessionStorage;
sessionStorage.setItem("cell_no",400)

for(let i=0;i<cell_no;i++){
	let element=document.createElement('div');
	grid.appendChild(element);
}


// Giving each of the cells a unique class name.
for(let i=0;i<cell_no;i++){
	document.getElementsByTagName('div')[i+1].classList.add(`cell${i+1}`);
	document.getElementsByTagName('div')[i+1].classList.add('cell');
}




