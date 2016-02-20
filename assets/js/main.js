var ingredients = [
	{
		name: "BBQ Sauce (top)",
		imgId: "bbqTopSauceImg",
		checkBoxId: "bbqTopSauceCheck",
	},
	{
		name: "Hot Sauce",
		imgId: "hotSauceImg",
		checkBoxId: "hotSauceCheck",
	},
	{
		name: "Ranch Dressing",
		imgId: "ranchDressingImg",
		checkBoxId: "ranchDressingCheck",
	},
	
];

for (var i = 0; i<ingredients.length;i++){
	(function(j){
		var imgId = ingredients[j].imgId;
		var imgDiv = document.getElementById(imgId);

		var checkBoxId = ingredients[j].checkBoxId;
		var checkBoxDiv = document.getElementById(checkBoxId);
		
		checkBoxDiv.addEventListener("click",function() {
			
			if (checkBoxDiv.checked){
				imgDiv.classList.remove("display-off");
			} else {
				imgDiv.classList.add("display-off");
			}

		});
	}(i));
	//Above is a closure. Without one, the checkboxes would only be refering to the last i in the for-loop.
}

//Old Workable code
// $("#bbqTopSauceCheck").click(function(){
// 	$("#bbqTopSauceImg").toggleClass("display-off");
// });

// $("#hotSauceCheck").click(function(){
// 	$("#hotSauceImg").toggleClass("display-off");
// });

// $("#ranchDressingCheck").click(function(){
// 	$("#ranchDressingImg").toggleClass("display-off");
// });