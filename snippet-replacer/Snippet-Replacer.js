var word="";
var cursor;
function Function() 
{
	var key= document.getElementById("key").value;
	var value= document.getElementById("value").value;
	if (key == "" || value== "") 
	{
        alert("Name must be filled out");
    }
	else
	{
		localStorage.setItem(key.toLowerCase(),value);
		document.getElementById("key").value="Inserted";
	}
	document.getElementById("value").value="";
}
function myFunction(event)
{
	if(event.which==9)
	{
		event.preventDefault();
		var sentence=document.getElementById("get");
		var cursor_position=sentence.selectionEnd;
		sentence=sentence.value;
		var sub_index1=0,sub_index2=sentence.length;
		for(var i=cursor_position;i<sentence.length;i++)
		{
			var code=sentence.charCodeAt(i);
			if(code!=32 && code!=10 && code!=9)
				word+=sentence.charAt(i);
			else
			{
				sub_index2=i;
				break;
			}
		}
		
		for(var i=cursor_position-1;i>=0;i--)
		{
			var code=sentence.charCodeAt(i);
			if(code!=32 && code!=10 && code!=9)
				word=sentence.charAt(i)+word;
			else
			{
				sub_index1=i+1;
				break;
				
			}
		}
		word=word.toLowerCase();
		if(localStorage.hasOwnProperty(word)==true)
		{
			var first_position=sentence.substring(0,sub_index1);
			var last_position=sentence.substring(sub_index2,sentence.length);
			var get_data=localStorage.getItem(word);
			sentence=first_position+""+get_data+""+last_position;
			document.getElementById("get").value=sentence;
			cursor=document.getElementById("get");
			cursor.setSelectionRange((first_position.length+get_data.length),(first_position.length+get_data.length));
		}
		else
		{
			document.getElementById("get").value=sentence.substring(0,cursor_position)+"\t"+sentence.substring(cursor_position,sentence.length);
			cursor=document.getElementById("get");
			var sen=sentence.substring(0,cursor_position)+"\t";
			cursor.setSelectionRange((sen.length),(sen.length));
		}
		word="";
	}
}
function reset()
{
	document.getElementById("get").value="";
}
function cancel()
{
	document.getElementById("key").value="";
	document.getElementById("value").value="";
}
function reset_all()
{
	localStorage.clear();
	
}