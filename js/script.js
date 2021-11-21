const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');
const overflow = document.querySelector('body');
const tech = document.querySelector('.tech');
const header = document.querySelector('.header');
const link = document.querySelector('.nav__link');

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



const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
  		e.preventDefault()
   	const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
   })
})
}

document.querySelectorAll(".nav__link").forEach(nav__link => 
	nav__link.addEventListener("click", () => mobileNav.classList.remove('active') )
)
document.querySelectorAll(".nav__link").forEach(nav__link => 
	nav__link.addEventListener("click", () => overflow.classList.remove('body--scroll'))
)
document.querySelectorAll(".nav__link").forEach(nav__link => 
	nav__link.addEventListener("click", () => mobileNavIcon.classList.remove('active'))
)
document.querySelectorAll(".nav__link").forEach(nav__link => 
	nav__link.addEventListener("click", () => header.classList.remove('hidden'))
)