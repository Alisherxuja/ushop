/* $('#cat1').hover(function(){
$('.right-items1').addClass('hovered');
}, function() {
});

$('#cat2').hover(function(){
$('.right-items2').addClass('hovered');
}, function() {
});

$('#cat3').hover(function(){
$('.right-items3').addClass('hovered');
}, function() {
});




$('#cat1').hover(function(){
$('.right-items2').removeClass('hovered');
}, function() {
});

$('#cat1').hover(function(){
$('.right-items3').removeClass('hovered');
}, function() {
});

$('#cat2').hover(function(){
$('.right-items1').removeClass('hovered');
}, function() {
});

$('#cat2').hover(function(){
$('.right-items3').removeClass('hovered');
}, function() {
});

$('#cat3').hover(function(){
$('.right-items1').removeClass('hovered');
}, function() {
});

$('#cat3').hover(function(){
$('.right-items2').removeClass('hovered');
}, function() {
}); 
 */



function openCity(evt, cityName) {
    var i, das, cat;
    das = document.getElementsByClassName("das");
    for (i = 0; i < das.length; i++) {
        das[i].style.display = "none";
    }
    cat = document.getElementsByClassName("cat");
    for (i = 0; i < cat.length; i++) {
        cat[i].className = cat[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }