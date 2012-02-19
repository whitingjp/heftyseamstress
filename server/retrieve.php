<?php

$word = $_REQUEST["word"];
if ($word == null) {
        die("You ogre! Unhand that hefty seamstress!");
}

$mysqli = new mysqli("localhost", "v21", "", "v21");
if($result = $mysqli->query(sprintf("select * from heftyseamstress where word = \"%s\"", $mysqli->real_escape_string($word))))
{
        $row = $result->fetch_assoc();
		if ($row['phrase'] != null && strlen($row['phrase']) > 0)
			die($row['phrase']);
}
else
{
        die("failure");
}

die("failure");

?>
