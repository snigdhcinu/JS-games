let score_counter=document.getElementById('score');
let timer;

function end(){
	clearInterval(timer);
	alert('Time is up !!!')
	alert(`You Scored ${score}`);
	location.reload();
	// alert('timeup')
}



function validate_input(){
	let mode=document.getElementsByTagName('input')[0].value;
	if(mode!="Easy"&&mode!="Medium"&&mode!="Hard"){
		alert('invalid input');
		return 'invalidInput';
	}


}

let score=0;
function point_increase(){
	let name="cell"+index;
	score+=15;
	score_counter.innerText=score;
	document.getElementsByClassName(name)[0].removeEventListener('click',point_increase);

}

function point_decrease(){
	score-=5;
	score_counter.innerText=score;
}


let index;
let element;
function reset_all(x){
	for(let i=1;i<=9;i++){
		let name="cell"+i;

		if(i==x){
			continue;
		}
		else{
			document.getElementsByClassName(name)[0].style.backgroundImage="url('white.png')";
		}
	}
}
function play(){
	if(score<-10){
		alert('Game Over');
		clearInterval(timer);
		return ;
	}
	else{
	index=Math.floor(Math.random()*9)+1;
	let name="cell"+index;
	// name=toString(name);
	console.log(name);
	element=document.getElementsByClassName(name)[0];
	element.addEventListener("click",point_increase);
	element.addEventListener("click",point_decrease);
	// element=document.getElementsByClassName("'cell"+index+"'")[0];

	console.log(element)
	element.style.backgroundImage="url('mole.jpg')";
	reset_all(index);

	}
}

function start(){
	setTimeout(end,60000);
	let mode=document.getElementsByTagName('input')[0].value;
	let time;
	let n=validate_input();
	if(n=='invalidInput'){
		location.reload();
	}
	switch(mode){
		case "Easy":
		time=1000;
		break;
		
		case "Medium":
		time=600;
		break;

		case "Hard":
		time=400;
		break;

	}
	timer = setInterval(play, time);
}

