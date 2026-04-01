<?php
session_start();

$username = "4ucentreapartments";
$password = "4u.CentreA99";

/* AJAX LOGIN */
if (isset($_POST['login'])) {
    if ($_POST['username'] === $username && $_POST['password'] === $password) {
        $_SESSION['logged_in'] = true;
        echo "4U_ADMIN_OK";
    } else {
        echo "ERROR";
    }
    exit;
}

/* STANDARD LOGIN */
if (!isset($_SESSION['logged_in'])) {
    if (!isset($_POST['username']) || $_POST['username'] !== $username || $_POST['password'] !== $password) {
        ?>
        <form method="post">
            <input type="text" name="username" placeholder="Uživatelské jméno"><br><br>
            <input type="password" name="password" placeholder="Heslo"><br><br>
            <button type="submit">Přihlásit</button>
        </form>
        <?php
        exit;
    } else {
        $_SESSION['logged_in'] = true;
    }
}
?>
