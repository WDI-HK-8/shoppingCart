$(document).ready(function() {

//Calculating subtotal for each
$(document).on('keyup', function() {
  var sum = 0;
  for (i = 2; i <= $('#subTotal li').length; i++) {
    sum = parseInt($('#unitPrice li:nth-child(' + i + ')').text()) * $('#quantity li:nth-child(' + i + ') form input').val();
    $('#subTotal li:nth-child(' + i + ')').text(sum);
  }
})

//Calculating total
$(document).on('keyup', function() {
  var sum = 0;
  var dist = 0;
  for (i = 2; i <= $('#subTotal li').length; i++) {
    sum += parseInt($('#subTotal li:nth-child(' + i + ')').text())
  }
  for (i = 2; i <= $('#subTotal li').length; i++) {
    if ($('#productList li:nth-child(' + i + ')').text()=== "Harry" && $('#quantity li:nth-child(' + i + ') form input').val() > 0) {
      dist +=1;
    }if ($('#productList li:nth-child(' + i + ')').text()=== "Fer" && $('#quantity li:nth-child(' + i + ') form input').val() > 0) {
      dist +=1;
    }
  }
  if (dist == 1) {
    sum = 0.5  * sum;
  }else if (dist >= 2) {
    sum = 0
  }
  $('#totalPrice').text(sum)
})

//Delete row
$(document).on('click', '#deleteButton li button', function() {
  $('#subTotal li')[$(this).parent().index()].remove();
  $('#quantity li')[$(this).parent().index()].remove();
  $('#unitPrice li')[$(this).parent().index()].remove();
  $('#productList li')[$(this).parent().index()].remove();
  // console.log($(this).parent().index());
  $(this).parent().remove();
})

//Add row
$('#addButton button').click(function() {
  // $('#productList').append('<li>' + $('#addProductList form input').val() + '</li>')
  // $('#unitPrice').append('<li>' + $('#addUnitPrice form input').val() + '</li>')

  var counter = 1;
  for (i = 2; i <= $('#subTotal li').length; i++) {
      if (parseInt($('#addUnitPrice form input').val()) < parseInt($('#unitPrice li:nth-child(' + i + ')').text())) {
        counter += 1;
      }
  }
  $('#productList li:nth-child(' + counter + ')').after('<li>' + $('#addProductList form input').val() + '</li>');
  $('#unitPrice li:nth-child(' + counter + ')').after('<li>' + $('#addUnitPrice form input').val() + '</li>');

  $('#quantity').append('<li><form><input type="text" class="quantityInput"></form></li>')
  $('#subTotal').append('<li>0</li>')
  $('#deleteButton').append('<li><button type="submit" class="btn btn-primary">Delete</button></li>')

})

})
