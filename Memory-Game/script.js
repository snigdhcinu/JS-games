function revert(value){
	document.getElementsByClassName('box'+value)[0].style.backgroundImage="url('images/blank.png')";
}
function clear(value){
	document.getElementsByClassName('box'+value)[0].style.backgroundImage="url('images/white.png')";
	

}
let arr=[ "cheeseburger.png", "fries.png","hotdog.png","ice-cream.png","milkshake.png","pizza.png","cheeseburger.png","fries.png","hotdog.png", "pic.png","candy.jfif","ice-cream.png","pic.png","candy.jfif","milkshake.png","pizza.png"]

let test=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let map=[];
let index;
let number;
for(let i=0;i<16;i++){
	index=Math.floor(Math.random()*test.length);
	number=test.splice(index,1);
	map.push(number); 
}
// console.log(map);

let count=0;
let flag=0
let target;
let score=document.getElementById('result');
score.innerText=parseInt(0);
let netScore=16;
let first_click;
let second_click;
function show(value){
	if(document.getElementsByClassName('box'+value)[0].style.backgroundImage==="url('images/white.png')"){
		return ;
	}
	else{
	count+=1;
	flag=map[value-1];
	if(count==1){
		target=arr[flag];
		 first_click=value;
	}
	 second_click=value;

	document.getElementsByClassName('box'+value)[0].style.backgroundImage="url('images/"+arr[flag]+"')";
	if(count==2){
		count=0;
		if(arr[flag]==target&&first_click!=second_click){
			score.innerText=parseInt(score.innerText)+parseInt(2);
			setTimeout(function(){
				clear(first_click);
				clear(second_click);
			},350)
		}
		else{
			setTimeout(function()
			{
				revert(first_click);
				revert(second_click);
			},350)
		}
	}

}

}