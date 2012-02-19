
var site = 'http://nottheinternet.com/games/heftyseamstress'
var retrievesite = site+'/retrieve.php?word='
var storesite = site+'/store.php?word=test&phrase='
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
			input(word);
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
	$('#main').append(p);	
	var form = $('<form action="" method="" class="inputter"/>');
	p.append(form);
	var input =  $('<input type="text" name="input"/>');
	form.append(input);
	var button = $('<input type="button" name="button" Value="Add" onClick="process_input(this.form)">');
	form.append(button);
}

function check_input(input)
{
	var spl = input.split(' ');
	if(spl.length != inputword.length)
	{
		return "Not the same number of words as letters.";
	}
	for(var i in spl)
	{
		if(spl[i][0] != inputword[i])
		{
			alert(spl[i][0]+' : '+inputword);
			return "Not all words start with corresponding letter of word.";
		}
	}
	return "";
}

function process_input(form)
{
	var val = form.input.value;
	var chk = check_input(val);
	if(chk=='')
	{
		show(val);
		$.get(storesite+val);
		$('.inputter').remove();
	} else
	{
		alert(chk);
	}
}

function show(result)
{
	var spl = result.split(' ');
	var p = $('<p/>');
	$('#main').append(p);
	for (var item in spl)
	{
		var a = $('<a href="javascript:void(0)" onclick="retrieve(\''+spl[item]+'\');">'+spl[item]+' </a>');
		p.append(a);
	}
}
