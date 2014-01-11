$(".mmega > ul > li").hover(function() {
	$(".mmshow").removeClass('mmshow');
	$(this).addClass('mmshow');
});
$(".mmega").mouseleave(function(){
	$(".mmshow").removeClass('mmshow');
});