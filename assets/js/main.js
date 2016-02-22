
var priceTotal = 9.99;

var pizzaIngredients = [
  //Sauces
	// {
	// 	name: "Tomato Sauce",
	// 	type: "sauce",
	// 	imgId: "tomatoSauceImg",
	// 	checkBoxId: "tomatoSauceCheck",
	// },
	// {
	// 	name: "BBQ Sauce",
	// 	type: "sauce",
	// 	imgId: "bbqSauceImg",
	// 	checkBoxId: "bbqSauceCheck",
	// },
	// {
	// 	name: "Pesto Sauce",
	// 	type: "sauce",
	// 	imgId: "pestoSauceImg",
	// 	checkBoxId: "pestoSauceCheck",
	// },
  //Meat
	{
		name: "Pepperoni",
		type: "meat",
		imgId: "pepperoniImg",
		checkBoxId: "pepperoniCheck",
		price: 1.5,
	},
	{
		name: "Shrimp",
		type: "meat",
		imgId: "shrimpImg",
		checkBoxId: "shrimpCheck",
		price:3.5,
	},
	{
		name: "Chicken",
		type: "meat",
		imgId: "chickenImg",
		checkBoxId: "chickenCheck",
		price: 1.5,
	},
	{
		name: "Sausage",
		type: "meat",
		imgId: "sausageImg",
		checkBoxId: "sausageCheck",
		price: 1.5,
	},
	{
		name: "Ham",
		type: "meat",
		imgId: "hamImg",
		checkBoxId: "hamCheck",
		price: 1.5,
	},
	{
		name: "Steak",
		type: "meat",
		imgId: "steakImg",
		checkBoxId: "steakCheck",
		price: 2.5,
	},
	{
		name: "Bacon",
		type: "meat",
		imgId: "baconImg",
		checkBoxId: "baconCheck",
		price: 1.5,
	},
  //Non-Meat Toppings
	{
		name: "Tomatoes",
		type: "non-meat-topping",
		imgId: "tomatoesImg",
		checkBoxId: "tomatoesCheck",
		price: 1,
	},
	{
		name: "Spinach",
		type: "non-meat-topping",
		imgId: "spinachImg",
		checkBoxId: "spinachCheck",
		price: 1
	},
	{
		name: "Mushrooms",
		type: "non-meat-topping",
		imgId: "mushroomsImg",
		checkBoxId: "mushroomsCheck",
		price: 1.5,
	},	
	{
		name: "Green Peppers",
		type: "non-meat-topping",
		imgId: "greenPeppersImg",
		checkBoxId: "greenPeppersCheck",
		price: 1,
	},
	{
		name: "Red Peppers",
		type: "non-meat-topping",
		imgId: "redPeppersImg",
		checkBoxId: "redPeppersCheck",
		price: 1,
	},
	{
		name: "Onions",
		type: "non-meat-topping",
		imgId: "onionsImg",
		checkBoxId: "onionsCheck",
		price: 1
	},	
	{
		name: "Black Olives",
		type: "non-meat-topping",
		imgId: "blackOlivesImg",
		checkBoxId: "blackOlivesCheck",
		price: 1
	},	
	{
		name: "Corn",
		type: "non-meat-topping",
		imgId: "cornImg",
		checkBoxId: "cornCheck",
		price: 1,
	},	
	{
		name: "Pineapples",
		type: "non-meat-topping",
		imgId: "pineapplesImg",
		checkBoxId: "pineapplesCheck",
		price: 1,
	},	

  //Dressings
	{
		name: "BBQ Sauce",
		type: "dressing",
		imgId: "bbqTopSauceImg",
		checkBoxId: "bbqTopSauceCheck",
		price: 0.75,
	},
	{
		name: "Hot Sauce",
		type: "dressing",
		imgId: "hotSauceImg",
		checkBoxId: "hotSauceCheck",
		price: 0.75,
	},
	{
		name: "Ranch Dressing",
		type: "dressing",
		imgId: "ranchDressingImg",
		checkBoxId: "ranchDressingCheck",
		price: 0.75,
	},
	
];

// var radios = document.forms["ingredients"].elements["sauce"];

// for(var i=0; i<3; i++) {
// 	(function(j){
// 		var imgId = pizzaIngredients[j].imgId;
// 		var imgDiv = document.getElementById(imgId);

// 		var checkBoxId = pizzaIngredients[j].checkBoxId;
// 		var checkBoxDiv = document.getElementById(checkBoxId);
		
// 		checkBoxDiv.addEventListener("click",function() {
			
// 			if (checkBoxDiv.checked){
// 				imgDiv.classList.remove("display-off");
// 			} else {
// 				imgDiv.classList.add("display-off");
// 			}

// 		});
// 	}(i));
// }

for (var i = 0; i<pizzaIngredients.length;i++){ //i starts at 3 because the first 3 ingredients use radio buttons
	(function(j){
		var imgId = pizzaIngredients[j].imgId;
		var imgDiv = document.getElementById(imgId);

		var checkBoxId = pizzaIngredients[j].checkBoxId;
		var checkBoxDiv = document.getElementById(checkBoxId);
		var price = pizzaIngredients[j].price;
		
		checkBoxDiv.addEventListener("click",function() {
			
			if (checkBoxDiv.checked){
				imgDiv.classList.remove("display-off");
				priceTotal += price;
			} else {
				imgDiv.classList.add("display-off");
				priceTotal -= price;
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