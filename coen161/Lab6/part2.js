(function () {
	var resources = "http://students.engr.scu.edu/~adiaztos/resources";
	var template = document.getElementById("template");

	// remove template from the page, since it is only a template
	var parent = template.parentNode;
	parent.removeChild(template);

	// Create an XMLHttpRequest object
	var xhttp = new XMLHttpRequest();
	var contact = resources + "contacts.php/";
	// Set onreadystatechange
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200){
			var text = JSON.parse(this.responseText);
			populateContacts(text);
		}
	};
	// Open and send requests
	xhttp.open("GET", contact, true);
	xhttp.send();
	// This function takes the list of contacts and clones a new element from the template with the value of each contact
	function populateContacts(contacts) {
		for(var i = 0; i < contacts.length; i++){
			var node = template.cloneNode(true);
			node.id = contacts[i].id;

			var spanTag = node.getElementByTagName('span')[0];
			spanTag.innherHTML += 1;
			spanTag.id = spanTag.id + i + contacts[i].id;

			var inputTag = node.getElementByTagName('input');
			inputTag[0].value = contacts[i].name;
			inputTag[1].value = contacts[i].email;

			parent.appendChild(node);
		}
	}

	// submits a request with the search query for the filtered list of contacts
	function search() {
		// clear the current contacts list
		while (parent.lastChild){
			parent.removeChild(parent.lastChild);
		}
		var searchQ = document.getElementById("searchField").value;
		var result = resources + "contacts.php/?query=" + searchQ;
		xhttp.open("POST", result, true);
		xhttp.send();
	}

	// assign the search function as the click handler for search button
	var searchBtn = document.getElementById("searchBtn");
	searchBtn.addEventListener("click", search);
})();