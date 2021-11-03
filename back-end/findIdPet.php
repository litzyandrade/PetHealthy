<?php
    include 'db_connection.php';

    $conn=OpenCon();
    $json = file_get_contents('php://input');
 
    $obj = json_decode($json,true);

  $sql = "SELECT IdMascota FROM mascota where Nombre = '" .$_POST["pet"]. "'";
  
  if ($result = $conn->query($sql)){
      for ($set = array(); $row = $result->fetch_assoc(); $set[] = $row);
      CloseCon($conn);
      echo json_encode($set);
  }
?>