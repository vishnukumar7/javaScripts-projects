var grid=new Array(3);
grid[0]=new Array(3);
grid[1]=new Array(3);
grid[2]=new Array(3);
for(var row=0;row<=2;row++)
	for(var col=0;col<=2;col++)
		grid[row][col]=0;
var currentPlayer=1,moves=0,player1Win=0,player1Lose=0,player2Win=0,player2Lose=0,matches=0;
var choose=0,current=0;
function call(event)
{
	var key=event.keyCode;
	
	if(key==120 || key==88)
	{
		choose=1;
		currentPlayer=1;
		document.getElementById("turn").innerHTML="<h2>player 1 turn</h2>";
		document.getElementById("choose").value="";
		current=1;
	}
	else if(key==111 || key==79)
	{
		choose=1;
		currentPlayer=2;
		document.getElementById("turn").innerHTML="<h2>player 2 turn</h2>";
		document.getElementById("choose").value="";
		current=2;
	}
	else{
		choose=0;
		document.getElementById("turn").innerHTML="";
	}
}
function cell(x,y)
{
	if(choose==1)
	{
		if(grid[x][y]!=0)
		{
			alert('already take this move');
		}
		else if(currentPlayer==1)
		{
			grid[x][y]=1;
			document.getElementById("cell_row"+x+"_col"+y).innerHTML="X";
			if(win())
			{
				player1Win+=1;
				player2Lose+=1;
				matches+=1;
					document.getElementById("player1Win").innerHTML="Wins : "+player1Win;
				document.getElementById("player2Lose").innerHTML="Loses : "+player2Lose;
				document.getElementById("match").innerHTML="<h4>No of Matches : "+matches+"</h4>";
			}
			else
			{
				document.getElementById("turn").innerHTML="<h2>player 2 turn</h2>";
				currentPlayer=2;
				moves+=1;
			}
		}
		else
		{
			grid[x][y]=2;
			document.getElementById("cell_row"+x+"_col"+y).innerHTML="O";
			if(win())
			{
				matches+=1;
				player2Win+=1;
				player1Lose+=1;
				document.getElementById("player2Win").innerHTML="Wins : "+player2Win;
				document.getElementById("player1Lose").innerHTML="Loses : "+player1Lose;
				document.getElementById("match").innerHTML="<h4>No of Matches : "+matches+"</h4>";
			}
			else
			{
				document.getElementById("turn").innerHTML="<h2>player 1 turn</h2>";
				currentPlayer=1;
				moves+=1;
			}
		}
		if(moves==9)
		{
			matches+=1;
			document.getElementById("match").innerHTML="<h4>No of Matches : "+matches+"</h4>";
			alert('it draw');
			reset();
		}
	}
	else{
		alert('who play first');
	}
}
function win()
{
	for(var row=0;row<=2;row++) 			//check row top to bottom 
		if(grid[row][0]==currentPlayer && grid[row][1]==currentPlayer && grid[row][2]==currentPlayer)
		{
			alert('Player '+currentPlayer+' wins');
			reset();
			return true;
		}
	for(var col=0;col<=2;col++)				// check column left to right
		if(grid[0][col]==currentPlayer && grid[1][col]==currentPlayer && grid[2][col]==currentPlayer)
		{
			alert('Player '+currentPlayer+' wins');
			reset();
			return true;
		}
	if(grid[0][0]==currentPlayer && grid[1][1]==currentPlayer && grid[2][2]==currentPlayer)			// check diagonal topLeft to bottomRight
	{
		alert('Player '+currentPlayer+' wins');
		reset();
		return true;
	}
	if(grid[0][2]==currentPlayer && grid[1][1]==currentPlayer && grid[2][0]==currentPlayer)			// check diagonal topRight to bottomLeft
	{
		alert('Player '+currentPlayer+' wins');
		reset();
		return true;
	}
	return false;
}
function reset()
{
	for(var row=0;row<=2;row++)
		for(var col=0;col<=2;col++)
		{
			grid[row][col]=0;
			document.getElementById("cell_row"+row+"_col"+col).innerHTML="";
		}
	moves=0;
	currentPlayer=current;
	document.getElementById("turn").innerHTML="<h2>player "+current+" turn</h2>";
}
