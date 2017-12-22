<?php
$username = $_POST['username'];
$password = $_POST['password'];
if ($username == 'admin' && $password == '123') {
    echo '{"code":1,"message":"(账号：' . $username . '，密码：' . $password . ')"}';
} else {
    echo '{"code":2,"message":"(账号：' . $username . '，密码：' . $password . ')"}';
}
?>

