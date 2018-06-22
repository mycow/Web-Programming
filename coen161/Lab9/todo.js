(function () {
	"use strict";
	var template = $("#todo-template");
	var index = 0;
	template.hide();

	$("#todo-form").find("button").click(function (event) {
		event.preventDefault();

		var inputField = $("#todo-form input[type='text']");

		$.post("todoSolution.php", {
			todo: inputField.val()
		});

		var newTodo = template.clone();

		newTodo.find("input[type='text']").val(inputField.val());
		newTodo.find(".input-group-prepend .input-group-text").text(++index);

		newTodo.show();

		$(".card-body#todo-list").append(newTodo);

		inputField.val("");
	});

	$.get("todoSolution.php", function(data) {

		for (var i = 0; i < data.length; i++) {
			var newTodo = template.clone();
			newTodo.attr("id", data[i].id);
			newTodo.find("input[type='text']").val(data[i].description);
			newTodo.find(".input-group-prepend .input-group-text").text(++index);
			newTodo.show();
			$(".card-body#todo-list").append(newTodo);	
		}

	});
}());	