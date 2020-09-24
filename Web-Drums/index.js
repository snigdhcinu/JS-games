var node=document.getElementsByClassName("drum");

			// Added event-listener to all the node elements.

for(let i=0;i<node.length;i++)
		node[i].addEventListener('click',clicked);
function clicked()
	{
		switch(this.innerHTML)
		{
			case "w":
			var audio=new Audio("sounds/crash.mp3");
				break;
			case "a":
			var audio=new Audio("sounds/kick-bass.mp3");
				break;
			case "s":
			var audio=new Audio("sounds/snare.mp3");
				break;
			case "d":
			var audio=new Audio("sounds/tom-1.mp3");
				break;
			case "j":
			var audio=new Audio("sounds/tom-2.mp3");
				break;
			case "k":
			var audio=new Audio("sounds/tom-3.mp3");
				break;
			case "l":
			var audio=new Audio("sounds/tom-4.mp3");
				break;
		}
		audio.play(); // To generate corresoponding audio.
		btnAnimation(this.innerHTML); // To generate animation once a key is pressed.
	}
// so by putting it in the document, the whole page will be active to hear for keypress.
document.addEventListener('keypress',function(event){
	// console.log(event.key);
	switch(event.key)
		{
			case "w":
			var audio=new Audio("sounds/crash.mp3");
				break;
			case "a":
			var audio=new Audio("sounds/kick-bass.mp3");
				break;
			case "s":
			var audio=new Audio("sounds/snare.mp3");
				break;
			case "d":
			var audio=new Audio("sounds/tom-1.mp3");
				break;
			case "j":
			var audio=new Audio("sounds/tom-2.mp3");
				break;
			case "k":
			var audio=new Audio("sounds/tom-3.mp3");
				break;
			case "l":
			var audio=new Audio("sounds/tom-4.mp3");
				break;
		}
		audio.play();
		btnAnimation(event.key);
})
function btnAnimation(key){
	let node=document.querySelector('.'+ key);
	node.classList.add('pressed');
	setTimeout(function(){
		node.classList.remove('pressed');
	},130)
}