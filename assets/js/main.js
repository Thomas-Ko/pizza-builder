var pizzaIngredients = [
  //Meat
	{
		name: "Pepperoni",
		type: "meat",
		imgId: "pepperoniImg",
		checkBoxId: "pepperoniCheck",
	},
	{
		name: "Shrimp",
		type: "meat",
		imgId: "shrimpImg",
		checkBoxId: "shrimpCheck",
	},
	{
		name: "Chicken",
		type: "meat",
		imgId: "chickenImg",
		checkBoxId: "chickenCheck",
	},
{
		name: "Sausage",
		type: "meat",
		imgId: "sausageImg",
		checkBoxId: "sausageCheck",
	},
  //Non-Meat Toppings
	{
		name: "Tomatoes",
		type: "non-meat-topping",
		imgId: "tomatoesImg",
		checkBoxId: "tomatoesCheck",
	},
	{
		name: "Spinach",
		type: "non-meat-topping",
		imgId: "spinachImg",
		checkBoxId: "spinachCheck",
	},
	{
		name: "Mushrooms",
		type: "non-meat-topping",
		imgId: "mushroomsImg",
		checkBoxId: "mushroomsCheck",
	},	
	{
		name: "Green Peppers",
		type: "non-meat-topping",
		imgId: "greenPeppersImg",
		checkBoxId: "greenPeppersCheck",
	},
	{
		name: "Red Peppers",
		type: "non-meat-topping",
		imgId: "redPeppersImg",
		checkBoxId: "redPeppersCheck",
	},
	{
		name: "Onions",
		type: "non-meat-topping",
		imgId: "onionsImg",
		checkBoxId: "onionsCheck",
	},	
	{
		name: "Black Olives",
		type: "non-meat-topping",
		imgId: "blackOlivesImg",
		checkBoxId: "blackOlivesCheck",
	},	
	{
		name: "Corn",
		type: "non-meat-topping",
		imgId: "cornImg",
		checkBoxId: "cornCheck",
	},	

  //Dressings
	{
		name: "BBQ Sauce",
		type: "dressing",
		imgId: "bbqTopSauceImg",
		checkBoxId: "bbqTopSauceCheck",
	},
	{
		name: "Hot Sauce",
		type: "dressing",
		imgId: "hotSauceImg",
		checkBoxId: "hotSauceCheck",
	},
	{
		name: "Ranch Dressing",
		type: "dressing",
		imgId: "ranchDressingImg",
		checkBoxId: "ranchDressingCheck",
	},
	
];

for (var i = 0; i<pizzaIngredients.length;i++){
	(function(j){
		var imgId = pizzaIngredients[j].imgId;
		var imgDiv = document.getElementById(imgId);

		var checkBoxId = pizzaIngredients[j].checkBoxId;
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