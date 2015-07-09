$(document).ready(function(){

	
	  //EVENT: on change of item QTY. Change selector to document and add arg2 to class for updating

	  //stylistic errors
	$(document).on('change',".item_qty",function() {


	  //define jQuery object refs
	  var itm_qty = $(this).val();
	  var itm_tot_pr = $(this).parent().next().text();
	  var itm_tot_obj = $(this).parent().next();
	  var all_itm_tot_obj = $('.col-xs-1').get(); //need to de-reference jQuery object
	  var itm_pr = $(this).parent().prev().text();
	  var tot_pr_obj = $('#tot_price_display');

	  //process itm_pr and itm_tot, remove dollar sign
	  itm_tot_pr = itm_tot_pr.slice(1);
	  itm_pr = itm_pr.slice(1);
	  var tot_pr = 0; //resets cost on change invocation

	  
	  //check if number is non-negative or zero, is a number
	  //convert input to number with two decimal places
	  	

	  if($.isNumeric(itm_pr) == true && itm_qty >= 0 && itm_qty.length > 0 ){
	  	//adds up the priceXquantity and sets text of total price per item
	  	itm_tot_pr = (itm_pr * parseInt(itm_qty)).toFixed(2);
	  	itm_tot_obj.text('$'+itm_tot_pr);
	  	itm_tot_obj.css('color','rgba(87,225,103,0.95)');

	  	all_itm_tot_obj.forEach(function(elem){
	  		tot_pr+=parseInt($(elem).text().slice(1), 10);
	  	});

	  	tot_pr_obj.text(tot_pr);

	  	//why won't this work in place of forEach() method??
	  	//for(var x in all_itm_tot_obj){
	  	// 	console.log(x);
	  	// }

	  	//Reverts to zero value when left empty post-change
	  }else if(itm_qty.length === 0){
	  	alert('you left a blank.');
	  	itm_tot_obj.text('$0.00');
	  	itm_tot_obj.css('color','white');
	  }

	  else if($.isNumeric(itm_qty)==false){ //provides alert if blur focus with non-numeric values
	  	alert('your item QTY value is NOT a number');
	  	$(itm_qty).css('color','red');
	  }

	});
	
	//EVENT: Error catching via change color of input as you type
	// $(document).on('keyup',".item_qty",function (e) {
	//         // Allow: backspace, delete, tab, escape, enter and .
	//         if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
	//              // Allow: Ctrl+A
	//             (e.keyCode == 65 && e.ctrlKey === true) ||
	//              // Allow: Ctrl+C
	//             (e.keyCode == 67 && e.ctrlKey === true) ||
	//              // Allow: Ctrl+X
	//             (e.keyCode == 88 && e.ctrlKey === true) ||
	//              // Allow: home, end, left, right
	//             (e.keyCode >= 35 && e.keyCode <= 39)) {
	//                  // let it happen, don't do anything
	//                  return;
	//         }
	//         // Ensure that it is a number and stop the keypress
	//         if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
	//             e.preventDefault();
	//         }
 //    });

	// $(document).on("keyup",".item_qty",function(){
	// 	var itm_qty = $(this).val();
	// 	if($.isNumeric(itm_qty)==false){
	// 		// console.log('typed wrong input 2');
	// 		$(itm_qty).css({'color':'rgb(255,0,0)'}); 
	// 	};
	// });


	//EVENT: Create new product list 

	//link create button click
	$(document).on('click','#create_btn', function(){
		//define jQuery object refs
		var created_item_name = $('#item_name').val(); 
		var created_item_price = parseInt($('#item_price').val()).toFixed(2);

		//check item_price is not NaN
		if(isNaN(created_item_price)==false && created_item_name !== "name"){

		//append created item and price onto the list
		var new_list_location = $('.item_row').after().last();
		
		//this string is ridiculous...anyway to shorten it??
		var append_arg = '<div class="item_row"><li class="col-xs-4 list-unstyled">'+created_item_name+'</li><li class="col-xs-3 list-unstyled">$'+created_item_price+'</li><li class="col-xs-4 list-unstyled"><strong>QTY</strong><input type="text" class="item_qty" placeholder="0"><button class="btn btn-danger cancel_btn">Cancel Item</button></li><li class="col-xs-1 list-unstyled">$0.00</li></div>';

		//add animation slideDown
		$(append_arg).appendTo(new_list_location).hide().fadeIn(1000); //.slideDown("fast");
		// new_list_location.css("=isibility","hidden");		
		}
		//checks if the price is actually a number
		else if(isNaN(created_item_price)==true){
			alert('I\'m not adding this list. You didn\'t put in a number.');
		}
		//checks if the item name input is actually edited
		else if(created_item_name === "name"){
			alert('I\'m not adding this list. You didn\'t even change the item name.');
		}	
    
    // $('#item_name').val('blank');
    // $('#item_price').val(000);
	});

	//EVENT: Delete product list that is clicked on 'Cancel Item'
	$(document).on('click','#cancel_btn', function(){
		var delete_list = $(this).parent().parent();
		delete_list.fadeOut(1000, function(){
			$(this).remove();
		});
	});

});



