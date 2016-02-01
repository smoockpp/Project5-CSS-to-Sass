$('header').sticky({
  getWidthFrom: 'body',
  responsiveWidth: true
});



var $selectMenu = $("<select></select>");
$("header .container").append($selectMenu);

//Cycle over menu links
$(".main-nav a").each(function() {
  var $anchor = $(this);
  // Create an option
  var $option = $("<option></option>");
  
  // Deal with selected 
  if ($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true );
  }
  
  // Option's value is the href
  $option.val($anchor.attr('href'));
  // Option's text is the text of link
  
  $option.text($anchor.text());
  //apend option to select
  $selectMenu.append($option);
});

//Bind change listener to the select
$selectMenu.change(function() {
  //Go to select's Location
  window.location = $selectMenu.val();
});

