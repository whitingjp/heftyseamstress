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
	var spl = result.split(' ');
	var p = $('<p/>');
	$('body').append(p);
	for (var item in spl)
	{
		var a = $('<a href="'+spl[item]+'">'+spl[item]+' </a>');
		p.append(a);
	}
}
