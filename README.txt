------------------------
---- Pizza Builder -----
------------------------

This is a basic app used for ordering a pizza. 

When the user selects the ingredients he/she wants, the appropriate image appears.

When the user clicks on the order button, a modal pops up giving him/her the price of the pizza and an option to cancel out of the modal or confirm his/her order.

------------------------
Things I specifically learned:

- used Inkscape (vector graphics software similar to Adobe Illustrator but free) to create the pizza and then make layers for each ingredient. Then I exported the layers as png images. Most of graphics (except for the dressings and ham which I made myself) were taken from freepik.com but I manipulated a lot of those images (cutting, reshaping, recoloring, transforming, etc.) for the look I desired.

- made a modal using mainly css and html. I used css transitions for a nice fading effect.

- incorporated jQuery. Previously, I was using just plain javascript in my code even though I had a basic knowledge of jQuery. I didn't want to start off being reliant on jQuery. I felt this project was a good time to start using it.

- seperation of concerns was definitely neater in this project than previous projects. I thought I did a fairly good job of making the code easy to read and follow.

- used custom fonts that I downloaded. Previously, I had only been using google fonts.

------------------------
Things to work on / incorporate in next version:

- use javascript to create html for the images and inputs. Right now, it's all just written in the html file. It should be fairly easy to do since I have the pizzaIngredients object set up nicely. Just add an img property to each ingredient with the image source and use a loop to create specific divs and inputs.

- add some other options for the pizza, such as:
	- different sizes and crusts. 
	- add an input to choose the number of pizzas
	- maybe have toppings selectable for left half, right half, or whole. 

- a thank you message after confirming the order

- change Order and Confirm Order button to Add to Order and Confirm Add to Order buttons.
- allow user to view the previous pizzas they added to their order and remove them. Add a button which will reveal that information on click or maybe add a div next to or under the inputs which displays that information.
- make a Checkout button to make final checkout

