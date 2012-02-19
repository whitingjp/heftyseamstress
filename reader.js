
var site = 'http://nottheinternet.com/games/heftyseamstress'
var retrievesite = site+'/retrieve.php?word='
//var site = 'http://jonathanwhiting.com/jam/uk6/seamstress/'
//var retrievesite = site+''

function storesite(word, phrase)
{
	return site+'/store.php?word='+word+'&phrase='+phrase;
}

var inputword = '';

function load()
{
	retrieve('youths');
}

function retrieve(word)
{
	$('a.expandable').replaceWith(function() {
		var thisText = $(this).text();
		
		if(thisText == word)
			return $('<span class="expanded">'+thisText+'</span>');
		else
			return $('<span>'+thisText+'</span>');
	});	
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
	$('.inputter').remove();
	inputword = result;
	var p = $('<p/>');
	$('#main').append(p);	
	var form = $('<form method="" action="" class="inputter" onsubmit="return false;" />');
	p.append(form);
	var input =  $('<input type="text"  name="input"/>');
	form.append(input);
	$(input).keypress(function(e) { if(e.which == 13) process_input(this.form); });
	var button = $('<input type="button" name="button" Value="Add" onClick="process_input(this.form)">');
	form.append(button);
}

function check_input(input)
{
	input = input.trim();
	if(input.length == 0)
		return "Enter a phrase.";		
	if (!(input.match(/^[a-zA-Z.,!';:? ]+$/)))
		return "Invalid character."
	var spl = input.toLowerCase().split(' ');
	if(spl.length < inputword.length)
		return "Less words than letters.";
	if(spl.length > inputword.length)
		return "More words than letters.";
	for(var i in spl)
	{
		if(spl[i][0] != inputword[i].toLowerCase())
		{
			return "Words don't match letters.";
		}
	}
	return "";
}

function process_input(form)
{
	var val = form.input.value;
	$('.warning').remove();
	var chk = check_input(val);
	if(chk=='')
	{
		show(val);
		$.get(storesite(inputword,val));
		$('.inputter').remove();
	} else
	{		
		var warning = $('<span class="warning">'+chk+'</p>');
		$('.inputter').append(warning);
	}
	return false;
}

function show(result)
{
	result = result.replace(/'/g, '');
	var a_string = '<a class="expandable" href="javascript:void(0)" onclick="retrieve(\'$1\');">$1</a>';
	var linked = result.replace(/([a-zA-Z]+)/g, a_string);	
	var p = $('<p>'+linked+'</p>');
	$('#main').append(p);
}
