window.addEventListener('DOMContentLoaded', () => {
	'use strict';


	// scroll
	const scroll = () => {
		const btnUp = document.getElementById('btn-up');

		btnUp.addEventListener('click', () => {
			window.scrollTo({
				left: 0,
				top: 0,
				behavior: 'smooth'
			});
		});
	};

	scroll();

});