//var site = 'http://nottheinternet.com/games/heftyseamstress'
//var retrieve = site+'/retrieve.php?word='

var site = 'http://jonathanwhiting.com/jam/uk6/seamstress/'
var retrievesite = site+''


function load()
{
	retrieve('test');
}

function retrieve(word)
{
	$.get(retrievesite+word, function(result)
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
		var a = $('<a href="javascript:void(0)" onclick="retrieve(\''+spl[item]+'\');">'+spl[item]+' </a>');
		//var a = $('<a href="'+retrieve+spl[item]+'">'+spl[item]+' </a>');
		p.append(a);
	}
}
