var site = 'http://nottheinternet.com/games/heftyseamstress'
var retrievesite = site+'/retrieve.php?word='

//var site = 'http://jonathanwhiting.com/jam/uk6/seamstress/'
//var retrievesite = site+''
var inputword = '';

function load()
{
	retrieve('test');
}

function retrieve(word)
{
	$.get(retrievesite+word, function(result)
	{
		if(result=='failure')
		{
			input(result);
		} else
		{			
			show(result);
		}		
	});
}

function input(result)
{
	inputword = result;
	var p = $('<p/>');
	$('body').append(p);	
	var form = $('<form/>');
	p.append(form);
	var input =  $('<input type="text" name="input"/>');
	form.append(input);
}

function show(result)
{
	var spl = result.split(' ');
	var p = $('<p/>');
	$('body').append(p);
	for (var item in spl)
	{
		var a = $('<a href="javascript:void(0)" onclick="retrieve(\''+spl[item]+'\');">'+spl[item]+' </a>');
		p.append(a);
	}
}
