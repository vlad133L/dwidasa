const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');
const overflow = document.querySelector('body');
const tech = document.querySelector('.tech');
const header = document.querySelector('.header');


mobileNavButton.addEventListener('click',function(){
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	overflow.classList.toggle('body--scroll');
	header.classList.toggle('hidden');
});




window.addEventListener("scroll",function(){
	let scrollFix=window.scrollY;
	if(scrollFix > 0){
		tech.classList.add('fix');
		header.classList.add('fix');
	}else{
		header.classList.remove('fix');
		tech.classList.remove('fix');
	}
});



