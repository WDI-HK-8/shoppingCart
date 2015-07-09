$(document).ready(function(){

//calculate the subtotal for item

$(document).on('keyup', '.itemQty', function(){
	console.log("quantity input is keyup");
	getQuantity = parseInt($(this).val());
	priceOfItem = parseInt($(this).parent().prev().text());
	subtotal = 0
	subtotal = getQuantity * priceOfItem||0.00; 
	$(this).parent().next().text(subtotal.toFixed(2));

});

//total
$(document).on('mouseout', '.itemQty, .cancel', function(){
	console.log("mouseout refresh ready for total calc");
	total =0;
	for (var i=0; i<$('.items .subTotal').length; i++){
	total+=parseInt($($('.items .subTotal')[i]).text())
	}
	$('.totalPrice > h2').text("$"+total.toFixed(2));
	
});


//remove item list button
$(document).on('click', '.cancel', function(){
	console.log("Cancel button is clicked")
	$(this).parent().parent().remove()
});

//fail safe
$(document).on('mouseenter, mouseout', '#newItemName, #newCostPerItem', function(){
	console.log("fail safe")
	newItem = $('#newItemName').val();
	newPrice = $.isNumeric($('#newCostPerItem').val())? $('#newCostPerItem').val(): 0 
	if((newItem == 0) || (newPrice == 0)){
		$('#createNewItem').hide();
	} else {$('#createNewItem').show()}

})

//append items
$(document).on('click', '#createNewItem', function(){
	newItem = $('#newItemName').val();
	newPrice = $.isNumeric($('#newCostPerItem').val())? $('#newCostPerItem').val(): 0 
	console.log("add new item" + newItem + newPrice);
	$('.hidden_items > li').first().text(newItem);
	$('.hidden_items > li').first().next().text(newPrice);
	newList = $('.items').last().append($('.hidden_items').clone().removeClass("hidden_items").addClass("items"));


})

$(document).on('mouseout', '#createNewItem', function(){
	console.log("mouse is out");
	$('#newItemName').val("");
	$('#newCostPerItem').val("");

})





// clicking the calculate prices button
$('#calculatePrices').click(function(){
	console.log("calculate prices button clicked")

	getQuantity = parseInt($(this).val());
	priceOfItem = parseInt($(this).parent().prev().text());
	subtotal = 0
	subtotal = getQuantity * priceOfItem||0.00; 
	$(this).parent().next().text(subtotal.toFixed(2));

	total =0;
	for (var i=0; i<$('.items .subTotal').length; i++){
	total+=parseInt($($('.items .subTotal')[i]).text())
	}
	$('.totalPrice > h2').text("$"+total.toFixed(2));
})






})