<?php
header('Content-Type: application/json; charset=utf-8');

$server = "localhost";
$BD = "ajax8";
$user = "root";
$password = "";

$conexion = mysqli_connect($server, $user, $password, $BD) or die("error en la conexión");
mysqli_set_charset($conexion, "utf8");

if (isset($_POST['login'])) {
    $sql = "SELECT nombre FROM usuarios WHERE nombre = ?";
    $stmt = mysqli_prepare($conexion, $sql);
    mysqli_stmt_bind_param($stmt, "s", $_POST['login']);
    mysqli_stmt_execute($stmt);
    $consulta = mysqli_stmt_get_result($stmt);

    $usuarios = array();

    if (mysqli_num_rows($consulta) > 0) {
        while ($row = mysqli_fetch_array($consulta)) {
            $usuario = $row['nombre'];
            $usuarios[] = array('usuario' => $usuario, 'disponible' => 'no');
        }
    } else {
        $usuarios[] = array('usuario' => $_POST['login'], 'disponible' => 'si');
    }

    $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

    $json_string = json_encode($usuarios);
    echo $json_string;
} else {
    echo json_encode(array('error' => 'Login parameter is missing.'));
}
?>