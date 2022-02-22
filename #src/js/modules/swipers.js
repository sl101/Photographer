import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';

// ========================================================
const swiperHero = new Swiper('.swiper-hero',{

	modules: [Navigation, Pagination, EffectFade, Autoplay],

	wrapperClass: 'swiper-hero__wrapper',
	slideClass: 'swiper-hero__slide',
	
	pagination: {
		el: '.swiper-hero__pagination',
		clickable: true,
		type: 'bullets',
	},

	speed: 1200,
	loop: true,

	effect: "fade",
	fadeEffect: {
		crossFade: true
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	});

	// ====================================================

	const swiperReview = new Swiper('.swiper-review',{

		modules: [Navigation, Pagination],

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