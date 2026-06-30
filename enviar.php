<?php 
    $destino=$_POST["select-city"];
    $nombre= $_POST["nombre"];
    $correo= $_POST["correo"];
    $telefono= $_POST["telefono"];
    $mensajeM= $_POST["mensajeM"];
    $contenido= "Nombre:" . $nombre . "\nCorreo:" . $correo .  "\nTelefono:" . $telefono . "\nMensaje:" . $mensajeM ;
    mail($destino,"Contacto", $contenido);
    header("Location:gracias.html");
?>

               
                
                
            