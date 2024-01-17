<?php
    header('Content-Type: application/json; charset=utf-8');

    $server = "localhost";
    $BD = "p4";
    $user = "root";
    $password = "";
    
    $conexion = mysqli_connect($server, $user, $password, $BD) or die("error en la conexión");
    mysqli_set_charset($conexion, "utf8");

    if (isset($_POST['enviar'])) {
        $usuario = $_POST['usuario'];
        $pass = $_POST['pass'];
        $email = $_POST['email'];
        $telefono = $_POST['telefono'];

        $sql = "INSERT INTO datos (usuario, contrasena, email, telefono, fecha) VALUES (?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($conexion, $sql);
        mysqli_stmt_bind_param($stmt, "sssss", json_decode($usuario), json_decode($pass), $email, $telefono, curdate());
        mysqli_stmt_execute($stmt);
        $consulta = mysqli_stmt_get_result($stmt);

        $usuarios = array();

        if (mysqli_num_rows($consulta) > 0) {
            while ($row = mysqli_fetch_array($consulta)) {
                $usuarios[] = array('usuario' => $usuario, 'insertado' => 'si');
            }
            echo 'Usuario insertado';
        } else {
            echo 'Error en la insercion';
        }

        /* $comp = 'SELECT * FROM datos where usuario = ?';
        $stmt2 = mysqli_prepare($conexion, $comp);
        mysqli_stmt_bind_param($stmt2, "s", $usuario);
        mysqli_stmt_execute($stmt2);
        $consulta2 = mysqli_stmt_get_result($stmt2);

        
        if (mysqli_num_rows($consulta2) > 0) {
            echo 'El usuario ya existe';
        } else {
        } */


        $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

        $json_string = json_encode($usuarios);
        echo $json_string;
    } else {
        echo json_encode(array('error' => 'Login parameter is missing.'));
    }
?>