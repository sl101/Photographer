// import { use } from 'browser-sync';

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

// ========================================================
const swiperHero = new Swiper('.swiper-hero',{

	// modules: 'swiper/scss/effect-fade',

	wrapperClass: 'swiper-hero__wrapper',
	slideClass: 'swiper-hero__slide',
	
	pagination: {
		el: '.swiper-hero__pagination',
		clickable: true,
		type: 'bullets',
	},

	// effect: "fade",
	// fadeEffect: {
	// 	crossFade: true,
	// },
	// autoplay: {
	// 	delay: 2000,
	// },
	});

	// ====================================================

	const swiperReview = new Swiper('.swiper-review',{

		wrapperClass: 'swiper-review__wrapper',
		slideClass: 'swiper-review__slide',
		
		navigation: {
			nextEl: '.swiper-review__arrow--next',
			prevEl: '.swiper-review__arrow--prev',
		},
		
		pagination: {
			el: '.swiper-review__pagination',
			clickable: true,
			type: 'bullets',
		},
	
		spaceBetween: 70,
	
		});