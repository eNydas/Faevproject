<?php
    $destinatario = 'inscripciones@faev.com.co';
    //esto es al correo que se enviara el mensaje
    $nombre = $_POST['cliente'];
    $edad = $_POST['edad'];
    $programa = $_POST['programa'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];

    $header = "enviado desde el formulario de inscripción";
    $mensajeCompleto = "Nombre: " . $nombre ."\nCorreo: ". $email ."\nTelefono: " .$telefono ."\nPrograma al que aplica: ". $programa . "\nEdad: " . $edad;

    mail($destinatario, $nombre, $mensajeCompleto);
    echo "<script>alert('correo enviado exitosamente')</script>";
    echo "<script>setTimeout(\"location.href='../index.html'\",1000)</script>";
?>