<?php
    $destinatario = 'danyvargase@gmail.com';
    //esto es al correo que se enviara el mensaje
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];

    $header = "enviado desde el formulario";
    $mensajeCompleto = "Nombre: " . $nombre ."\nCorreo: ". $email ."\nTelefono: " .$telefono ."\nMensaje: ". $mensaje;

    mail($destinatario, $nombre, $mensajeCompleto);
    echo "<script>alert('correo enviado exitosamente')</script>";
    echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";
?>