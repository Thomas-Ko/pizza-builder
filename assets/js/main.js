var totalPrice = 0;

var pizzaIngredients = {
 	sauces: 	[
	  			//Sauces
				{
					name: "Tomato Sauce",
					type: "sauce",
					imgId: "tomatoSauceImg",
					inputId: "tomatoSauceCheck",
					price:0,
				},
				{
					name: "BBQ Sauce",
					type: "sauce",
					imgId: "bbqSauceImg",
					inputId: "bbqSauceCheck",
					price:0,
				},
				{
					name: "Pesto Sauce",
					type: "sauce",
					imgId: "pestoSauceImg",
					inputId: "pestoSauceCheck",
					price:0,
				},
			],
	toppings: [	//these toppings all use checkboxes
	  			//Meat
				{
					name: "Pepperoni",
					type: "meat",
					imgId: "pepperoniImg",
					inputId: "pepperoniCheck",
					price: 1.5,
				},
				{
					name: "Shrimp",
					type: "meat",
					imgId: "shrimpImg",
					inputId: "shrimpCheck",
					price:3.5,
				},
				{
					name: "Chicken",
					type: "meat",
					imgId: "chickenImg",
					inputId: "chickenCheck",
					price: 1.5,
				},
				{
					name: "Sausage",
					type: "meat",
					imgId: "sausageImg",
					inputId: "sausageCheck",
					price: 1.5,
				},
				{
					name: "Ham",
					type: "meat",
					imgId: "hamImg",
					inputId: "hamCheck",
					price: 1.5,
				},
				{
					name: "Steak",
					type: "meat",
					imgId: "steakImg",
					inputId: "steakCheck",
					price: 2.5,
				},
				{
					name: "Bacon",
					type: "meat",
					imgId: "baconImg",
					inputId: "baconCheck",
					price: 1.5,
				},
			  //Non-Meat Toppings
				{
					name: "Tomatoes",
					type: "non-meat-topping",
					imgId: "tomatoesImg",
					inputId: "tomatoesCheck",
					price: 1,
				},
				{
					name: "Spinach",
					type: "non-meat-topping",
					imgId: "spinachImg",
					inputId: "spinachCheck",
					price: 1
				},
				{
					name: "Mushrooms",
					type: "non-meat-topping",
					imgId: "mushroomsImg",
					inputId: "mushroomsCheck",
					price: 1.5,
				},	
				{
					name: "Green Peppers",
					type: "non-meat-topping",
					imgId: "greenPeppersImg",
					inputId: "greenPeppersCheck",
					price: 1,
				},
				{
					name: "Red Peppers",
					type: "non-meat-topping",
					imgId: "redPeppersImg",
					inputId: "redPeppersCheck",
					price: 1,
				},
				{
					name: "Onions",
					type: "non-meat-topping",
					imgId: "onionsImg",
					inputId: "onionsCheck",
					price: 1
				},	
				{
					name: "Black Olives",
					type: "non-meat-topping",
					imgId: "blackOlivesImg",
					inputId: "blackOlivesCheck",
					price: 1
				},	
				{
					name: "Corn",
					type: "non-meat-topping",
					imgId: "cornImg",
					inputId: "cornCheck",
					price: 1,
				},	
				{
					name: "Pineapples",
					type: "non-meat-topping",
					imgId: "pineapplesImg",
					inputId: "pineapplesCheck",
					price: 1,
				},	

			  //Dressings
				{
					name: "BBQ Sauce",
					type: "dressing",
					imgId: "bbqTopSauceImg",
					inputId: "bbqTopSauceCheck",
					price: 0.75,
				},
				{
					name: "Hot Sauce",
					type: "dressing",
					imgId: "hotSauceImg",
					inputId: "hotSauceCheck",
					price: 0.75,
				},
				{
					name: "Ranch Dressing",
					type: "dressing",
					imgId: "ranchDressingImg",
					inputId: "ranchDressingCheck",
					price: 0.75,
				}
			],	
};


function checkSauces() {
	$(".sauces").addClass("display-off");
}

for (var i = 0; i<pizzaIngredients.sauces.length;i++){ //i starts at 0 and goes less than 3 because those are the radio buttons
	(function(j){
		var imgId = pizzaIngredients.sauces[j].imgId;
		var imgDiv = document.getElementById(imgId);

		var inputId = pizzaIngredients.sauces[j].inputId;
		var checkBoxDiv = document.getElementById(inputId);

		checkBoxDiv.addEventListener("click",function() {
			checkSauces();
			if (checkBoxDiv.checked){
				imgDiv.classList.remove("display-off");
			} 	
		});
	}(i));
}


for (var i = 0; i<pizzaIngredients.toppings.length;i++){ //i starts at 3 because the first 3 ingredients use radio buttons
	(function(j){
		var imgId = pizzaIngredients.toppings[j].imgId;
		var imgDiv = document.getElementById(imgId);

		var inputId = pizzaIngredients.toppings[j].inputId;
		var checkBoxDiv = document.getElementById(inputId);
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
				the price of the pizza until he/she decided to complete the order, I decided to add a function (calculateTotalPrice) that fired when the user clicked on a "complete 
				order" button which would loop through the inputs and check  if input is chcked, add price to totalPrice.  */
			}

		});
	}(i));
	//Above is a closure. Without one, the checkboxes would only be refering to the last i in the for-loop.
}

function calculateTotalPrice() {
	totalPrice=0;
	for (var i = 0; i<pizzaIngredients.length;i++){
		var inputId = pizzaIngredients[i].inputId;
		var checkBoxDiv = document.getElementById(inputId);
		if (checkBoxDiv.checked) {
			totalPrice2 +=pizzaIngredients[i].price;
		}
	}
}

function uncheckOnRefresh() {
	$('input').prop('checked', false);
	$("#tomatoSauceCheck").prop('checked', true);
	/*the above code achieves the same thing as this code:
		var inputs = document.getElementsByTagName('input');
			for (i=0;i<inputs.length;i++){
				inputs[i].checked=false;
			}
		document.getElementById('tomatoSauceCheck').checked=true;
	 	document.getElementById('tomatoSauceCheck').checked="checked"; */
}


uncheckOnRefresh();
//Above is needed for certain browsers to work.
/*Thomas's Note: Without this code, if I checked off a bunch of ingredients and refreshed the page in firefox, the checkboxes would still be checked
and the images would be gone. Most divs holding images have the display-off class which makes their display none on refresh. When the user clicks a check box, the display-off
class is removed. Without this code, that won't happen. */