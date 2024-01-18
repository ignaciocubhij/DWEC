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

    $checkUserSql = 'SELECT * FROM datos WHERE usuario = ?';
    $checkUserStmt = mysqli_prepare($conexion, $checkUserSql);
    mysqli_stmt_bind_param($checkUserStmt, 's', $usuario);
    mysqli_stmt_execute($checkUserStmt);
    $checkUserResult = mysqli_stmt_get_result($checkUserStmt);

    if (mysqli_num_rows($checkUserResult) > 0) {
        echo json_encode(array('error' => 'El usuario ya existe'));
    } else {
        $insertSql = "INSERT INTO datos (usuario, contrasena, email, telefono, fecha) VALUES (?, ?, ?, ?, curdate())";
        $insertStmt = mysqli_prepare($conexion, $insertSql);

        if ($insertStmt) {
            $decodedUsuario = json_decode($usuario);
            $decodedPass = json_decode($pass);

            mysqli_stmt_bind_param($insertStmt, "ssss", $decodedUsuario, $decodedPass, $email, $telefono);

            if (mysqli_stmt_execute($insertStmt)) {
                echo json_encode(array('message' => 'Usuario insertado'));
            } else {
                echo json_encode(array('error' => 'Error en la insercion'));
            }

            mysqli_stmt_close($insertStmt);
        } else {
            echo json_encode(array('error' => 'Error in prepared statement'));
        }
    }

    mysqli_close($conexion);
} else {
    echo json_encode(array('error' => 'Login parameter is missing.'));
}
?>