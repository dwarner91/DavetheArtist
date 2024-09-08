$(document).ready(function(){
$(':header').css('font-size', '35px');
$('body').css('background-color', 'red');
$('main').prepend('<img src="dove.jpg" alt="dove wielding a black katana">');
$('img').css({'width': '750px', 'height': '500px'});
$('p:last-child').css({'font-size': '20px', 'font-weight': 'bold'});
$('#enlarge').click(function(){$('img').animate({'width': '1500px', 'height': '1000px'})});
$('#shrink').click(function(){$('img').animate({'width': '750px', 'height': '500px'})});
});
