<?php
$word = $_REQUEST["word"];
$phrase = urldecode($_REQUEST["phrase"]);


$words_in_phrase = explode(" ", $phrase);
for ($i = 0; $i < strlen($word); $i++) {
    if ( $words_in_phrase[$i][0] != $word[$i]){
        die("failure__not_cromulent");
    }
}

//check for how many words there are in the phrase


$mysqli = new mysqli("localhost", "v21", "", "v21");

if($mysqli->query(sprintf("insert into heftyseamstress( `word`,`phrase`) values (\"%s\", \"%s\");", $mysqli->real_escape_string($word),  $mysqli->real_escape_string($phrase))) === TRUE)
{
        die("success");
}
else
{
        die("failure");
}

?>
