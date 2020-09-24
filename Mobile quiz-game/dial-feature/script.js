	/* later version update can be using circular list as a data structure, which will
	make the implementation of the algorithm more efficient */


	let array=['Session1','Session2','Session3','Session4','Session5','Session6','Session7','Session8','Session9','Session10'];
	// array.push(' ');	// Using this hack where last item is empty item
	let links=['#'];

	let list=document.getElementsByTagName('ul')[0];
	let listItem=document.getElementsByClassName('list-item');


	
	// Audio plays when we scroll

	function tick(){
		let audio=new Audio("public/sounds/tick.mp3");
		audio.play();
		setTimeout(audio.pause(),500);
	}


	// Populate the list after received items from API into array

	let index=0;
	let ul=document.getElementsByClassName('list')[0];
	let len=array.length;
	while(index<51*array.length){
		// listItem[index].innerHTML=`<li class='list-item'>${array[index]}</li>`;
		// list[0].innerHTML=`<li class='list-item'>${array[index]}</li>`;
		let node=document.createTextNode(array[index%len]);
		let li=document.createElement('li')
		let a=document.createElement('a')
		li.classList.add('list-item');
		a.classList.add('session-link');
		a.appendChild(node);
		li.appendChild(a)
		ul.appendChild(li);

			// created <li><a>text-node</a></li>

		index+=1;
	}
	let scrollBy=Math.floor(51/2)*60*len
	let max_limit=51*60*len;
	ul.scrollBy(0,scrollBy);	// Math.floor(51/2)*60*len
	// console.log(ul.scrollTop)

			// Giving value to href attribute of a element.
	for(let i=0;i<array.length;i++){	// For now we have set limit of iterator to length of array, however it will be best to set it to that of links, which we will get from the API.
		document.getElementsByClassName('session-link')[i].href='#';
	}


	let direction;
	function wheel(event){
		direction=event.deltaY;
		console.log('wheel event reading')
	}

	function check(){
		console.log('scroll event reading')
		// console.log(ul.scrollTop)
		if(ul.scrollTop==0&&direction<0){
			ul.scrollBy(0,scrollBy);
			console.log('going into space')
		}

		if(ul.scrollTop==max_limit-60&&direction>0){
			ul.scrollBy(0,-scrollBy);
			console.log('going underground')
		}
	}
