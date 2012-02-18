var site = 'http://jonathanwhiting.com/jam/uk6/seamstress'

function load()
{
	$.get(site+'/test.txt', function(result)
	{
		show(result);
	});
}

function show(result)
{
	alert("Data Loaded: " + result);	
	
	var p = $('<p>'+result+'</p>');
	$('body').append(p);
}
