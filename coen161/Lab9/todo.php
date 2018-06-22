<?php
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Origin: *');

$host = "dagobah.engr.scu.edu";
$user = ""; # enter your username
$password = ""; # enter your password
$dbname = "sdb_" . $user;

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
	die("Connection failed: $conn->connection_error");
}

$sql = ""; # query to get count of todos
$countQuery = $conn->escape_string($sql);
$count = 0;
$outp = array();

if ($result = $conn->query($countQuery)) {
	while ($row = $result->fetch_assoc()) {
		$count = $row["count(*)"];
	}
} else {
	echo "Couldn't get count: $conn->error";
}

// POST request
// insert new todo 
if (isset($_POST['todo'])) {
	$sql = ""; # Create query to insert new todo from POST request
	if (!($result = $conn->query($sql))) {
		echo $sql;
		echo "Query failed: ( $conn->errno ) $conn->error";
	}
}

// GET request
// Select existing todos
if ($_SERVER["REQUEST_METHOD"] == "GET") {
	if ($count > 0) {
		// Construct SQL select statement
		$sql = ""; # Create query to get all current todos
		if (!($result = $conn->query($sql))) {
			echo $sql;
			echo "Query failed: ( $conn->errno ) $conn->error";
		} else {
			$outp = $result->fetch_all(MYSQLI_ASSOC);
		}

	}
}

echo json_encode($outp);
$conn->close();

?>