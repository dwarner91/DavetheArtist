$(document).ready(function(){
$(':header').css('font-size', '35px');
$('body').css('background-color', 'red');
$('main').prepend('<input type= "image" src="dove.jpg" alt="dove wielding a black katana" class="wide">', '<br>' , '<input type= "image" src="Eldritch Butterfly Final.jpg" alt="eldritch butterfly monster" class= "square">');
$('input').click(function(){$(this).animate({'rotate': '+=90deg'})});
$('.square').css({'width': '500px', 'height': '500px', 'margin-top' : '150px'}).mouseover(function(){$(this).animate({'width' : '1000px', 'height' : '1000px'})}).mouseleave(function(){$(this).animate({'width' : '500px', 'height' : '500px'})});
$('.wide').css({'width': '750px', 'height': '500px'}).mouseover(function(){$(this).animate({'width' : '1500px', 'height' : '1000px'})}).mouseleave(function(){$(this).animate({'width' : '750px', 'height' : '500px'})});
$('p:last-child').css({'font-size': '20px', 'font-weight': 'bold'});
// $('#enlarge').click(function(){$('input').animate({'width': '1500px', 'height': '1000px'})});
// $('#shrink').click(function(){$('input').animate({'width': '750px', 'height': '500px'})});
$('#shrink').click(function(){$('.wide').animate({'width': '750px', 'height': '500px'}); $('.square').animate({'width': '500px', 'height': '500px'})});
});



window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }