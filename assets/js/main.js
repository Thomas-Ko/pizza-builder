var totalPrice = 0;

var pizzaIngredients = [
  //Sauces
	{
		name: "Tomato Sauce",
		type: "sauce",
		imgId: "tomatoSauceImg",
		checkBoxId: "tomatoSauceCheck",
		price:0,
	},
	{
		name: "BBQ Sauce",
		type: "sauce",
		imgId: "bbqSauceImg",
		checkBoxId: "bbqSauceCheck",
		price:0,
	},
	{
		name: "Pesto Sauce",
		type: "sauce",
		imgId: "pestoSauceImg",
		checkBoxId: "pestoSauceCheck",
		price:0,
	},
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


// function checkSauces() {
// 	if(($(".sauces").hasClass("display-off"))){
// 			$(".sauces").addClass("display-off");
// 		}
// 	}




for (var i = 0; i<pizzaIngredients.length;i++){ //i starts at 3 because the first 3 ingredients use radio buttons
	(function(j){
		var imgId = pizzaIngredients[j].imgId;
		var imgDiv = document.getElementById(imgId);

		var checkBoxId = pizzaIngredients[j].checkBoxId;
		var checkBoxDiv = document.getElementById(checkBoxId);
		// var price = pizzaIngredients[j].price;

		checkBoxDiv.addEventListener("click",function() {
			
			if (checkBoxDiv.checked){
				imgDiv.classList.remove("display-off");
				// totalPrice += price;
			} else {
				imgDiv.classList.add("display-off");
				// totalPrice -= price;
				/* Thomas's Note: Look at the commented out code above. I was originally go to add the price of the ingredient to totalPrice each time I clicked the input. 
				This worked fine for checkboxes. However, things got wonky when I tried to incorporate this approach to radio buttons. As a radio button isn't technically deselected
				in the same way a checkbox is, the price would not be removed from totalPrice if I clicked another radio button. Since I was not going to show the user
				the price of the pizza until he/she decided to complete the order, I decided to add a function (calculateTotalPrice); that fired when the user clicked on a "complete 
				order" button which would loop through the inputs and check  if input is chcked, add price to totalPrice.  */
			}

		});
	}(i));
	//Above is a closure. Without one, the checkboxes would only be refering to the last i in the for-loop.
}


function calculateTotalPrice() {
	totalPrice=0;
	for (var i = 0; i<pizzaIngredients.length;i++){
		var checkBoxId = pizzaIngredients[i].checkBoxId;
		var checkBoxDiv = document.getElementById(checkBoxId);
		if (checkBoxDiv.checked) {
			totalPrice2 +=pizzaIngredients[i].price;
		}
	}
}