<?php
require_once 'dbConnect.php';

$id = $_POST['id'];
$numbers = $_POST['number'];
$unit = $_POST['unit'];
$ingredient = $_POST['ingredient'];
$edit = $_POST['edit'];
$status = $_POST['status'];


if($edit != 'edit' && $id != NULL){
    if($status == 'undefined'){
        $sql2 = "SHOW TABLE STATUS FROM nix_test" ;
        $sql = "DELETE FROM dataItem WHERE id=".$id.";";
    }else{
        $sql = "UPDATE dataItem
                SET done = '".$status."'
                WHERE id = ".$id;
    }

}else if($edit == 'edit'){
    $sql = "UPDATE dataItem
            SET numbers = '".$numbers."', unit = '".$unit."', ingredient = '".$ingredient."'
            WHERE id = ".$id;
}else if($edit == NULL){
    $sql2 = "SHOW TABLE STATUS FROM nix_test" ;

    $sql = "INSERT INTO dataItem (numbers, unit, ingredient)
    VALUES ('$numbers',' $unit', '$ingredient')";
}
$conn->query($sql2);
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();

  exit();

?>