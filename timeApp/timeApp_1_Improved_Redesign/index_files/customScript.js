/* timeApplicator */
/* Custom script */

/* "Save as", "Schedule Draft", "Employee" buttons */

u21.style.cursor = 'pointer';
u23.style.cursor = 'pointer';
u25.style.cursor = 'pointer';

/* Schedule Draft hover */

$('.u23').hover(function() {
	$(this).css({

	});
}, function() {
	$(this).css({

	});
});

/* Google, Twitter, Facebook */

$('.u8, .u9, .u10').hover(function() {
	$(this).css({
		'color' : '#373737',
		'text-decoration' : 'underline'
	});
}, function() {
	$(this).css({
		'color' : '#929292',
		'text-decoration' : 'none'
	});
});

/* Bottom navigation */
/* Schedule Draft, Employee hover effects */

u12.style.cursor = 'pointer';
u13.style.cursor = 'pointer';

$('.u12, .u13').hover(function() {
	$(this).css({
		'color' : '#373737',
		'text-decoration' : 'underline'
	});
}, function() {
	$(this).css({
		'color' : '#929292',
		'text-decoration' : 'none'
	});
});

$("div.mySlider div#slider.slider img").hover(function() {
	$('a#prev img, a#next img').stop().animate({
		opacity : "1"
	}, 400);
}, function() {
	$('a#prev img, a#next img').stop().animate({
		opacity : "0.25"
	}, 300);
});

$("a#prev img, a#next img").hover(function() {
	$(this).stop().animate({
		opacity : "1"
	}, 400);
}, function() {
	$(this).stop().animate({
		opacity : "0.25"
	}, 300);
});

