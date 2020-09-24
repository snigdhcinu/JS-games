// Red dot => 🔴
// Blue dot =>🔵
// see line 25 and 36

 let turn=1;	// 1 => player 1 (Red), 2 => player 2 (Blue)
 let player=document.getElementById('player');
 player.style.color='#ff5722';
 let body=document.getElementsByTagName('body')[0];
let times=0;
let indicator=document.getElementById('indicator');


function blink(a,b,c,d){
	setInterval(function(){
		document.getElementsByClassName(`grid-item${a}`)[0].style.backgroundColor="#cffffe";
		document.getElementsByClassName(`grid-item${b}`)[0].style.backgroundColor="#cffffe";
		document.getElementsByClassName(`grid-item${c}`)[0].style.backgroundColor="#cffffe";
		document.getElementsByClassName(`grid-item${d}`)[0].style.backgroundColor="#cffffe";
		setTimeout(function(){
		document.getElementsByClassName(`grid-item${a}`)[0].style.backgroundColor="#fff";
		document.getElementsByClassName(`grid-item${b}`)[0].style.backgroundColor="#fff";
		document.getElementsByClassName(`grid-item${c}`)[0].style.backgroundColor="#fff";
		document.getElementsByClassName(`grid-item${d}`)[0].style.backgroundColor="#fff";
		},350)
	},700)
	
}



 function hasWon(x){
 	let node='grid-item';

 	// Horizontal checker
let limit=5;
 	for(let i=0;i<=60;i++){
 		if(i==limit||i==limit+8||i==limit+16||i==limit+24||i==limit+32||i==limit+40||i==limit+48||i==limit+54){
 			i+=2;
 			continue;
 		}
 		else{
 			if(arr[i]+arr[i+1]+arr[i+2]+arr[i+3]==4&&(document.getElementsByClassName(`${node}${i+1}`)[0].innerText==document.getElementsByClassName(`${node}${i+2}`)[0].innerText==document.getElementsByClassName(`${node}${i+3}`)[0].innerText==document.getElementsByClassName(`${node}${i+4}`)[0].innerText)){

 				blink(i+1,i+2,i+3,i+4);
 				return 1;
 			}
 		}

 	}

 	// Vertical checker
 limit=40
 	for(let i=0;i<=39;i++){
 		if(i==limit||i==limit+1||i==limit+2||i==limit+3||i==limit+4||i==limit+5||i==limit+6||i==limit+7){
 			continue;
 		}
 		else{
 			if(arr[i]+arr[i+8]+arr[i+16]+arr[i+24]==4&&(document.getElementsByClassName(`${node}${i+1}`)[0].innerText==document.getElementsByClassName(`${node}${i+9}`)[0].innerText==document.getElementsByClassName(`${node}${i+17}`)[0].innerText==document.getElementsByClassName(`${node}${i+25}`)[0].innerText)){
 				blink(i+1,i+9,i+17,i+25);
 				return 1;
 			}
 		}
 	}

 	// Diagonal left-to-right checker	|| same as right-to-left

 		// top-to-down
 		for(let i=0;i<=36;i++){
 			if(arr[i]+arr[i+9]+arr[i+18]+arr[i+27]==4&&(document.getElementsByClassName(`${node}${i+1}`)[0].innerText==document.getElementsByClassName(`${node}${i+10}`)[0].innerText==document.getElementsByClassName(`${node}${i+19}`)[0].innerText==document.getElementsByClassName(`${node}${i+28}`)[0].innerText)){
 				blink(i+1,i+10,i+19,i+28);
 				return 1;
 			}
 		}

 		// down-to-top
 		for(let i=24;i>=24&&i<=60;i++){
 			if(arr[i]+arr[i-7]+arr[i-14]+arr[i-21]==4&&(document.getElementsByClassName(`${node}${i+1}`)[0].innerText==document.getElementsByClassName(`${node}${i-6}`)[0].innerText==document.getElementsByClassName(`${node}${i-13}`)[0].innerText==document.getElementsByClassName(`${node}${i-20}`)[0].innerText)){
 				blink(i+1,i-6,i-13,i-20)
 				return 1;
 			}
 		}

 	return 0;
 }


let arr=[];
	// Initializing the array to zero
	for(let i=0;i<64;i++){ 
		arr[i]=0;
	}
let victory;
 function select(k){
 	arr[k-1]=1;
 	let index=k;
 	let node='grid-item'+k
 	let item=document.getElementsByClassName(node)[0];


 	if(turn==1&&item.innerText==""&&times<1){
 		// item.innerText='🔴';
 		item.innerText='1';
 		turn=2;
		 player.innerText=turn;
		 player.style.color='#00bcd4';
 		victory=hasWon(index);
 		if(victory==1&&times<1){
 			times+=1;
 			alert(`player 1 has won`);
 			indicator.innerText=`player 1 has won`;
 			indicator.style.color='#ff5722';
 		}
 		return ;
 	}
 	if(turn==2&&item.innerText==""&&times<1){
 		// item.innerText='🔵';
 		item.innerText='2';
 		turn=1;
 		 player.innerText=turn;
 		 player.style.color='#ff5722';
 		victory=hasWon(index);
 		if(victory==1&&times<1){
 			times+=1;
 			alert(`player 2 has won`);	
 			indicator.innerText=`player 2 has won`;
 			indicator.style.color='#00bcd4';
 		}
 		return ;
 	}

 }

function reload(){
	let response= confirm('Are you sure to restart the match ??')
	if(response==true)
		location.reload()
}
