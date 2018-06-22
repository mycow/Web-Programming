(function () {
	var resources = "http://students.engr.scu.edu/~adiaztos/resources/";
	// Create an XMLHttpRequest object
	var partOne = resources + "sample1.php/";
	var xhttp = new XMLHttpRequest();
	// Handle succesful responses
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200){
			document.getElementById("sample1").innerHTML = this.responseText
		}
	};
	// Get sample1.php
	xhttp.open("GET", partOne, true);
	xhttp.send();

	// Create an XMLHttpRequest object
	var partTwo = resources + "sample2.php/";
	var xhttp2 = new XMLHttpRequest();
	// Handle succesful responses
	xhttp2.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200){
			document.getElementById("sample2").innerHTML = this.responseText
		}
	};
	// Get sample2.php
	xhttp2.open("GET", partTwo, true);
	xhttp2.send();

	// Create an XMLHttpRequest object
	var partThree = resources + "sample3.php/";
	var xhttp3 = new XMLHttpRequest();
	var list = document.createElement('ul');
	// Handle succesful responses
	xhttp3.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200){
			var result = JSON.parse(this.responseText);
			for(var i = 0; i < result.friends.length; i++){
				var bullet = document.createElement('li');
				bullet.appendChild(document.createTextNode(result.friends[i].name));
				list.appendChild(bullet);
			}
			document.getElementById("sample3").appendChild(list);
		}
	};
	// Get sample3.php
	xhttp3.open("GET", partThree, true);
	xhttp3.send();
})();