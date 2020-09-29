 /*
	Setting up of the game characters
	
	Snake => Blue #1aa6b7
	Tail => light blue #d9ecf2
	Food => Red #f56a79
	spl. Food => Deep Red #ff414d

	1. Randomly generating food anywhere in the screen, when snake overlaps food.
	2. Snake Movement.
	3. Make food reappear once eaten.
	4. Perform Scoring.
	5. Make Spl. food appear. 
	6. Use unshift to increase size of the snake.
	7. Make snake move on its own, and increase speed with score.

 */

 		


 let direction;
 let score=0;
document.addEventListener('keydown',function(event){
	// let key=event.keyCode;
	switch(event.which){
		case 38:
		direction='up';
		move(direction);
		break;

		case 87:
		direction='up';
		move(direction);
		break;

		case 39:
		direction='right';
		move(direction);
		break;

		case 68:
		direction='right';
		move(direction);
		break;

		case 40:
		direction='down';
		move(direction);
		break;

		case 83:
		direction='down';
		move(direction);
		break;

		case 37:
		direction='left';
		move(direction);
		break;

		case 65:
		direction='left';
		move(direction);
		break;

	}
});


function move(x){
	// console.log(`we are moving ${x}`)
	let curr=parseInt(sessionStorage.getItem('currPos'))
	let limit=parseInt(sessionStorage.getItem('cell_no'))
	let edge=Math.sqrt(limit);



	switch (x){
		case 'up':
			if(curr<=20){
				curr+=(edge-1)*edge;
			}
			else{
				curr-=edge;
			}
		break;

		case 'right':
			if(curr%20==0){
				curr-=edge-1;
			}
			else{
				curr+=1;
			}
		break;

		case 'down':
			if(curr>((edge-1)*edge)){
				curr-=((edge-1)*edge);
			}
			else{
				curr+=edge;
			}
		break;

		case 'left':
			if(curr%20==1){
				curr+=edge-1;
			}
			else{
				curr-=1;
			}
		break;
	}
	
	sessionStorage.setItem('currPos',curr);

	// visualize the new current position.
	
	if(document.getElementsByClassName(`cell${curr}`)[0].style.backgroundColor=="rgb(26, 166, 183)"){
	// Collision occurs

		alert('Game Over');
		location.reload();
	}
	else{
	// Make the bgcolor of the previous white again
		for(let i=0;i<limit;i++){
			if(document.getElementsByClassName(`cell${i+1}`)[0].style.backgroundColor=="rgb(26, 166, 183)"){
				document.getElementsByClassName(`cell${i+1}`)[0].style.backgroundColor="#fff";
				// document.getElementsByClassName(`cell${curr}`)[0].style.borderRadius='0%';
			}
		}


		document.getElementsByClassName(`cell${curr}`)[0].style.backgroundColor='#1aa6b7';
		document.getElementsByClassName(`cell${curr}`)[0].style.borderRadius='50%';

		if(sessionStorage.getItem('currPos')==sessionStorage.getItem('food')){
			score+=1;
			sessionStorage.setItem('score',score);

			// Generating food randomly at a cell instantly
			let pos=Math.floor(Math.random()*limit)+1;
			sessionStorage.setItem('food',pos);
			document.getElementsByClassName(`cell${pos}`)[0].style.backgroundColor='#ff414d';
			document.getElementsByClassName(`cell${pos}`)[0].style.borderRadius='0%';

			// Update the score
			document.getElementById('points').innerText=parseInt(sessionStorage.getItem('score'))		
		}
	}
}
