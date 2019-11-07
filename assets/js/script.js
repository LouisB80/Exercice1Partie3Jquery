$(document).ready(function(){
  $('#clickMe').on('click', function(){
    var inputValue = parseInt($('#nbClick').val()) + 1;
    $('#nbClick').val(inputValue);
  })
})
