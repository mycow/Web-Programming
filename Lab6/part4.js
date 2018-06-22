(function(){
	var resources = "http://students.engr.scu.edu/~adiaztos/resources/";

	//sample1.php
	var smpl1 = resources +"sample1.php/";
	$("#sample1").load(smpl1);

	//sample2.php
	var smpl2 = resources +"sample2.php/";
	$("#sample2").load(smpl2);

	//sample3.php
	var smpl3 = resources +"sample3.php/";
	$("#sample3").append($("<ul id=\"friendsList\"></ul>"));
	$.get(smpl3, function(data,status){
		var result = JSON.parse(data);
		if(status == "success"){
			for(var i = 0; i < result.friends.length; i ++){
				$("#friendsList").append($("<li>" + result.friends[i].name + "</li>"));
			}
		}
	});
})();