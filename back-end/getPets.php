<?php
    include 'db_connection.php';

    $conn=OpenCon();
    
   
     $sql = "SELECT * FROM mascota";
     if ($result = $conn->query($sql)){
         for ($set = array(); $row = $result->fetch_assoc(); $set[] = $row);
         CloseCon($conn);
         echo json_encode($set);
     }
    

 
?>