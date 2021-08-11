<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<link href="css.css" rel="stylesheet"> 
</head>
<body>
<div class="krop">

<?php
$h = 0;
for($i=0;$i<50;$i++){

    $color = "rgb(".random_int(0,255).",".random_int(0,255).",".random_int(0,255).")";
    echo "<div class=box style=background-color:$color></div>";






    /*$colors = array("orange","green","blue","red");
    echo "<div class=box style=background-color:$colors[$h]></div>";
    if($h>3){
        $h=0;
    }*/
}

?>



</div>
</body>
</html>