		// Change dice 1 values
var node1=document.getElementsByClassName('img1');
var randomNumber1=Math.floor(Math.random()*6+1);
node1[0].src="images/dice"+randomNumber1+".png";
		// Change dice 2 values
var node2=document.getElementsByClassName('img2');
var randomNumber2=Math.floor(Math.random()*6+1);
node2[0].src="images/dice"+randomNumber2+".png";
		// Deciding the winner.
var playerNode=document.getElementsByTagName('h1');
	if(randomNumber1>randomNumber2)
		{
			playerNode[0].textContent="Player 1 Wins!!!!";
		}
	if(randomNumber1<randomNumber2)
		{
			playerNode[0].textContent="Player 2 Wins!!!!";
		}
	if (randomNumber1==randomNumber2) 
		{
			playerNode[0].textContent="Its a draw !!!";
		}