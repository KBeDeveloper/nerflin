var user = [
	{
		"name" :"admin",
		"pwd" : "admin"
	},
	{
		"name" : "user",
		"pwd": "user"
	}
]

$(document).ready(function(){
	document.getElementById("accessForm").action = "An_L.txt";
})

$("#accessForm").submit(function(){
	var usr = document.getElementById("user").value;
	var psw = document.getElementById("password").value;
	if(usr==user[0].name&&psw==user[0].pwd){
		return true;
	}else{
		alert("Incorrect credentials");
		return false;
	}
})