 /*
	Setting up of the game characters, and environment
	
	Snake => Blue #1aa6b7
	Tail => light blue #d9ecf2
	Food => Red #f56a79
	spl. Food => Deep Red #ff414d

	1. Create Snake Class.
	2. Randomly generating food anywhere in the screen.

 */



// Below condition makes sure that DOM is fully loaded, else will recheck after 100mS

let stateCheck=setInterval(()=>{
if(document.readyState==='complete'){

	clearInterval(stateCheck);
	// Importing the no. of cells
	let limit=sessionStorage.getItem('cell_no');

	// Setting the properties of our snake
	sessionStorage.setItem('initPos',209);
	sessionStorage.setItem('currPos',209);
	sessionStorage.setItem('length',1);

	sessionStorage.setItem('score',0);
	// sessionStorage.setItem('')


	// Generating food randomly at a cell initially
	let pos=Math.floor(Math.random()*limit)+1;
	sessionStorage.setItem('food',pos);

	document.getElementsByClassName(`cell${pos}`)[0].style.backgroundColor='#ff414d';


	// Rendering Snake at a fixed position
	document.getElementsByClassName('cell209')[0].style.backgroundColor='#1aa6b7';
	document.getElementsByClassName('cell209')[0].style.borderRadius='50%';

}

},100);


// Setting value for our points

document.getElementById('points').innerText=parseInt(sessionStorage.getItem('score'))



