var price;
var quantity;
var total;

price = 5;
quantity = 25;
total = price * quantity;

var el = document.getElementById('mouseCost');
el.textContent = '$'+total;