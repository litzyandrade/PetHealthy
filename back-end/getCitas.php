<?php
    include 'db_connection.php';

    $conn=OpenCon();
    
    $GetUser = "SELECT IdPropietario FROM propietario WHERE User='" .$_POST["email"]. "'";
    if ($result = $conn->query($GetUser)){
        $data = mysqli_fetch_array($result);
       $iduser= $id_U[] = $data["IdPropietario"];
    }

     $sql = "SELECT * FROM citas WHERE idPropietario= '$iduser'";
     if ($result = $conn->query($sql)){
         for ($set = array(); $row = $result->fetch_assoc(); $set[] = $row);
         CloseCon($conn);
         echo json_encode($set);
     }
    

 
?>