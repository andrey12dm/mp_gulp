const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}
;(() => {
	const refs = {
		openModalBtn: document.querySelector('[data-modal-open]'),
		closeModalBtn: document.querySelector('[data-modal-close]'),
		modal: document.querySelector('[data-modal]'),
	}

	refs.openModalBtn.addEventListener('click', toggleModal)
	refs.closeModalBtn.addEventListener('click', toggleModal)

	function toggleModal() {
		refs.modal.classList.toggle('is-hidden')
	}
})()
console.log('work')

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})