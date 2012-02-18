//var site = 'http://nottheinternet.com/games/heftyseamstress'
//var retrieve = site+'/retrieve.php?word='
//var storesite = site+'/store.php?word=test&phrase='
var site = 'http://jonathanwhiting.com/jam/uk6/seamstress'
var retrievesite = site+'/'
var storesite = site+'/store.php?word=test&phrase='
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
	var form = $('<form action="" method="" class="inputter"/>');
	p.append(form);
	var input =  $('<input type="text" name="input"/>');
	form.append(input);
	var button = $('<input type="button" name="button" Value="Add" onClick="process_input(this.form)">');
	form.append(button);
}

function process_input(form)
{
	var val = form.input.value;
	show(val);
	$.get(storesite+val);
	$('.inputter').remove();
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
