console.log("HERE");

function ScrollAnimate(input){
	console.log(input)
	jQuery('html,body').animate({scrollTop: jQuery(input).offset().top}, 1000);
	console.log('in function')
}