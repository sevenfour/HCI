/* timeApplicator */
/* Custom script */

/* Top right links */

/* Home */
$('#u5_MessageBox, #u6_MessageBox, #u7_MessageBox, #u8_MessageBox').css({
	'height' : '90px',
	'width' : '290px',
	'margin' : '0',
	'position': 'absolute',
	'top' : '50px',
	'left' : '701px',
	'display' : 'none',
	'z-index' : '9999'
});

$('#u5').click(function(){
	$('#u5_MessageBox').toggle(200);
});

/* Help */
$('#u6_MessageBox, #u7_MessageBox, #u8_MessageBox').css({
	'height' : '75px',
});

$('#u6').click(function(){
	$('#u6_MessageBox').toggle(200);
});

/* FAQ */

$('#u7').click(function(){
	$('#u7_MessageBox').toggle(200);
});

/* Log-Out */

$('#u8_MessageBox').css({
	'top' : '75px'
});

$('#u8').click(function(){
	$('#u8_MessageBox').toggle(200);
});

/* Left Navigation */

/* Employee tab */
/* Submit btn */

$('#u380').click(function(){
	$('#u36_line, #u37_line').css({
		'background-color' : '#FFFFFF',
		'height' : '3px'
	});
	$('.u33_link, .u39_link, .u40_link').unbind('click', false);
	$('#u32_img').removeClass('u32_disabled');
	$('#u38_img').removeClass('u38_disabled');
	$('#u40_img').removeClass('u40_disabled');
	$('#u32_img').addClass('u32_normal');
	$('#u38_img').addClass('u38_normal');
	$('#u40_img').addClass('u40_normal');
	$('div#u33_rtf p span, div#u39_rtf p span, div#u41_rtf p span').css({
		'color' : '#333333'
	});
});

/* Day Off Requests btn */

$('.u33_link').bind('click', false);
$('#u32_img').addClass('u32_disabled');
$('div#u33_rtf p span').css({
		'color' : '#929292'
});

/* Availability btn */

$('.u39_link').bind('click', false);
$('#u38_img').addClass('u38_disabled');
$('div#u39_rtf p span').css({
		'color' : '#929292'
});

/* Lines under the buttons */

/* Line under the "Day Off Requests" */

$('#u36_line').css({
	'background-color' : '#E1E1E1',
	'height' : '1px'
})

/* Line under the "Availability" */

$('#u37_line').css({
	'background-color' : '#E1E1E1',
	'height' : '1px'
})

/* Make Draft btn */

$('.u40_link').bind('click', false);
$('#u40_img').addClass('u40_disabled');
$('div#u41_rtf p span').css({
		'color' : '#929292'
});

/* Tabs */
/* Schedule Draft tab */
/* Prev, Next */

$('#u49_MessageBox, #u51_MessageBox, #u165_MessageBox').css({
	'height' : '77px',
	'width' : '310px',
	'margin' : '0',
	'position': 'absolute',
	'top' : '548px',
	'left' : '503px',
	'display' : 'none',
	'z-index' : '9999'
});

/* Prev */

$('#u49').hover(
	function(){
		$('#u49_MessageBox').toggle(200);
	},
	function(){
		$('#u49_MessageBox').toggle(200);
});

/* Next */

$('#u51_MessageBox').css({
	'left' : '680px'
});

$('#u51').hover(
	function(){
		$('#u51_MessageBox').toggle(200);
	},
	function(){
		$('#u51_MessageBox').toggle(200);
});

/* Employee tab */

/* Employee name tag */

$('#employeeName_emp, #employeeName_dayOff, #employeeName_availab').css({
	'margin-top' : '45px',
	'margin-left' : '105px',
	'color' : '#333333',
    'font-family' : 'Helvetica',
    'font-size' : '15px',
    'font-style' : 'normal',
    'font-weight' : 'normal',
    'text-decoration' : 'none'
});

/* Submit btn */
/* Radio buttons */

$('#u380').click(function(){
	switch(empNum)
    {
    case 1:
        empName = "Phillipa Rubic";
        break;
    case 2:
        empName = "Ellen DeBari";
        break;
    case 3:
        empName = "Alex Smirnoff";
        break;
    case 4:
        empName = "Corthny Wozniak";
        break;
    case 5:
        empName = "Stacy Bolt";
        break;
    case 6:
        empName = "Edward Thompson";
        break;
    case 7:
        empName = "McKenzi Azo";
        break;
    case 8:
        empName = "Julia Stevston";
        break;
    case 9:
        empName = "Sasha Panman";
        break;
    case 10:
        empName = "Autumn Winter";
        break;
    case 11:
        empName = "Kayleen Stankovich";
        break;
    case 12:
        empName = "Perl Fredrickson";
        break;
    case 13:
        empName = "Nao Onuki";
        break;
	default:
	    empName = ""; 
	}
	
	$('#employeeName_emp, #employeeName_dayOff, #employeeName_availab').text(empName);
});

/* Day Off Requests tab */

/* Undo btn */

u165.style.cursor = 'pointer';
$('#u165_MessageBox').css({
	'left' : '265px'
});

$('#u165').hover(
	function(){
		$('#u165_MessageBox').toggle(200);
	},
	function(){
		$('#u165_MessageBox').toggle(200);
});


/* Availability tab */

/* Discard All btn */

u347.style.cursor = 'pointer';
$('#u347').click(function(){
	$('#employeeName_emp, #employeeName_dayOff, #employeeName_availab').text("");
});

/* Google, Twitter, Facebook */

$('.u15, .u16, .u17').hover(function() {
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

/* Bottom navigation hover effects*/

$('.u19, .u20, .u21, .u22').hover(function() {
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

/* Bottom navigation functionality */

/* Schedule Draft */

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	SetPanelState('u350', 'pd1u350','fade','',300,'fade','',300);

	SetPanelState('u42', 'pd0u42','fade','',300,'fade','',300);

	SetPanelState('u159', 'pd1u159','fade','',300,'fade','',300);

	SetPanelState('u168', 'pd1u168','fade','',300,'fade','',300);

	SetPanelState('u346', 'pd1u346','fade','',300,'fade','',300);

}
});

/* Employee */
u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	SetPanelState('u350', 'pd0u350','fade','',300,'fade','',300);

	SetPanelState('u42', 'pd1u42','fade','',300,'fade','',300);

	SetPanelState('u159', 'pd1u159','fade','',300,'fade','',300);

	SetPanelState('u168', 'pd1u168','fade','',300,'fade','',300);

	SetPanelState('u346', 'pd1u346','fade','',300,'fade','',300);

}
});

/* Day Off Requests */

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	SetPanelState('u159', 'pd0u159','fade','',300,'fade','',300);

	SetPanelState('u350', 'pd1u350','fade','',300,'fade','',300);

	SetPanelState('u42', 'pd1u42','fade','',300,'fade','',300);

	SetPanelState('u168', 'pd1u168','fade','',300,'fade','',300);

	SetPanelState('u346', 'pd1u346','fade','',300,'fade','',300);

}
});

/* Availability */

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	SetPanelState('u168', 'pd0u168','fade','',300,'fade','',300);

	SetPanelState('u159', 'pd1u159','fade','',300,'fade','',300);

	SetPanelState('u350', 'pd1u350','fade','',300,'fade','',300);

	SetPanelState('u346', 'pd0u346','fade','',300,'fade','',300);

	SetPanelState('u42', 'pd1u42','fade','',300,'fade','',300);

}
});


