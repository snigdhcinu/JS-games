let response;
let correct='🔑Dumberll flies';
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev,n) {
  ev.dataTransfer.setData("text", ev.target.id);
  response=n;
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  // ev.target.appendChild(document.getElementById(data));
}

let timer;
function wiggle(){
	let chest=document.getElementById('animation');
		setTimeout(function(){
			chest.style.transform="rotate(10deg)"
		},300);
		setTimeout(function(){
			chest.style.transform="rotate(-10deg)"
		},600);
		setTimeout(function(){
			chest.style.transform="rotate(10deg)"
		},900);
		setTimeout(function(){
			chest.style.transform="rotate(-10deg)"
		},1200);
		setTimeout(function(){
			chest.style.transform="rotate(10deg)"
		},1500);
		setTimeout(function(){
			chest.style.transform="rotate(-10deg)"
		},1800);
		setTimeout(function(){
			chest.style.transform="rotate(0deg)"
		},2100);

		

}
function stopWiggle(){
	clearInterval(timer);

}
function validate(){
	let selected=document.getElementById(`op${response}`).innerText;
	setTimeout(function(){
		console.log(selected)
		if(selected==correct){
			// alert('Bingo you got the answer right !!!!')
			document.getElementById('chest-image').src='public/open.png';
		}
		else{
			alert('The answer is wrong, try again');
			// document.getElementById('chest-image').src='public/close.png';
			location.reload();
		}
	},2200)
}