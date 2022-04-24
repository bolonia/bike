$(document).ready(function () {
	initScroll();
	initMenu();
	initOpenBlock();
});

function initMenu() {
	$('.toggle-menu').on('click', function () {
		$('html').addClass('open-menu');
	});

	$('.head-menu').find('.cross').on('click', function () {
		$('html').removeClass('open-menu');
	});

	$('.head-menu-fader').on('click', function () {
		$('html').removeClass('open-menu');
	});


	$(document).keyup(function (e) {
		if (e.keyCode === 27) {
			$('html').removeClass('open-menu');
		}
	});
}

function initOpenBlock() {
	$('.js_open_block').each(function () {
		var hold = $(this);
		var link = hold.find('.js_toggle');
		var cl = hold.find('.js_close');

		cl.on('click', function () {
			hold.removeClass('open');
		});

		link.on('click', function () {
			hold.toggleClass('open');
		});

		hold.hover(function () {
			hold.addClass('hovering');
		}, function () {
			hold.removeClass('hovering');
		});

		$('body').click(function () {
			if (!hold.hasClass('hovering')) {
				hold.removeClass('open');
			}
		});

		$(document).keyup(function (e) {
			if (e.keyCode === 27) {
				hold.removeClass('open');
			}
		});

	});
}


function initScroll() {
	$('.index-page').each(function () {
		var topsect = $('.section-top');
		var tel1sect = $('.section-tel1');
		var tel1sectcont = tel1sect.find('.section-content');
		var tel1main = tel1sect.find('.tel1-main');
		var tel1left = tel1sect.find('.tel1-addit.left');
		var tel1right = tel1sect.find('.tel1-addit.right');
		var tel1goscale = tel1sect.find('.go-scale');
		var tel1gosearch = tel1sect.find('.go-search');
		var picsect = $('.section-pics');
		var picsectall = picsect.find('.pos1');
		var picsectfade = picsect.find('.pics__bg, .pos22, .pos27');
		var picsecttext = picsect.find('.text');
		var picgohide = picsect.find('.go-hide');
		var picgoscale = picsect.find('.go-scale');
		var picgotel = picsect.find('.go-tel');
		var picouter, picposh, picposv, picrot, pictelnum, picoutnumh, picoutnumv, picrotate1, picrotate2, picnumscale, picouteralt;
		var picgobounce = picsect.find('.go-bounce');
		var tel2sect = $('.section-tel2');
		var tel2wrap = tel2sect.find('.tel2-tel-place');
		var tel2wrapin = tel2sect.find('.tel2-tel-out');
		var tel2wraprotate = tel2sect.find('.tel2-main');
		var tel2teltransh, tel2teltransv, tel2opgo1, tel2opback1, tel2opgo2, tel2opback2, tel2opend;
		var tel2gotext1 = tel2sect.find('.show-text1');
		var tel2hidetext1 = tel2sect.find('.hide-text1');
		var tel2gotext2 = tel2sect.find('.show-text2');
		var tel2hidetext2 = tel2sect.find('.hide-text2');
		var tel2textwrap1 = tel2sect.find('.side-text').find('.text-crop.to-right');
		var tel2textwrap2 = tel2sect.find('.side-text').find('.text-crop.to-left');
		var tel2text1 = tel2textwrap1.find('.text');
		var tel2text2 = tel2textwrap2.find('.text');
		var tel2gorotate = tel2sect.find('.go-rotate');
		var tel2goscale = tel2sect.find('.go-scale');
		var tel2map = tel2sect.find('.map-place');
		var tel2mappar = tel2map.parent('.map');
		var tel2mapbg = tel2map.find('.map-place-bg');
		var tel2cover = tel2wrap.find('.tel-cover');
		var tel2gomapbg = tel2sect.find('.go-mapbg');
		var tel2gomaptext1 = tel2sect.find('.go-maptext1');
		var tel2gomaptext2 = tel2sect.find('.go-maptext2');
		var tel2gorotateback = tel2sect.find('.go-rotate-back');
		var tel2cards = tel2sect.find('.go-map-cards');
		var tel3sect = $('.section-tel3');
		var tel3wrap = tel3sect.find('.tel3-tel-place');
		var tel3wraprotate = tel3sect.find('.tel3-main');
		var tel3goscale = tel3sect.find('.go-scale');
		var tel3map = tel3sect.find('.map-place');
		var tel3mappar = tel3map.parent('.map');
		var tel3mapbg = tel3map.find('.map-place-bg');
		var tel3cover = tel3wrap.find('.tel-cover');
		var tel3gomapbg = tel3sect.find('.go-mapbg');
		var tel3gomaptext1 = tel3sect.find('.go-maptext1');
		var tel3gomaptext2 = tel3sect.find('.go-maptext2');
		var tel3gorotateback = tel3sect.find('.go-rotate-back');

		var bot = $('.section-bottom');
		var vid = $('.bottom-video').find('video');

		var breakpoint = window.matchMedia('(orientation:portrait)');


		var _calc = function () {
			var t = $(window).scrollTop();
			var h = $(window).outerHeight();

			$('.section').each(function () {
				if ($(this).offset().top < t) {
					$(this).addClass('to-top');
				} else {
					$(this).removeClass('to-top');
				}
				if (($(this).offset().top + $(this).outerHeight()) < (t + h)) {
					$(this).addClass('to-bottom');
				} else {
					$(this).removeClass('to-bottom');
				}
			});

			var telcalctop = ((t - topsect.offset().top) / topsect.outerHeight());
			var tel1toptrans = (40 - (telcalctop * 40)).toFixed(6);
			var telcalcscale = ((t - tel1goscale.offset().top) / tel1goscale.outerHeight()).toFixed(6);
			var tel1angle = (10 - (telcalcscale * 10)).toFixed(6);
			var tel1trans = (50 - (telcalcscale * 50)).toFixed(6);
			var tel1scale = (0.7285 + (telcalcscale * 0.2715)).toFixed(4);

			if (topsect.offset().top < t) {
				if (telcalctop < 0) {
					tel1sectcont.css('transform', 'translate3d(0, -40%, 0)');
					tel1sect.removeClass('is-moved');
				} else if (telcalctop <= 1 > 0) {
					tel1sectcont.css('transform', 'translate3d(0, -' + tel1toptrans + '%, 0)');
					tel1sect.removeClass('is-moved');
				} else {
					tel1sectcont.css('transform', 'translate3d(0, 0, 0)');
					tel1sect.addClass('is-moved');
				}
			} else {
				tel1sectcont.css('transform', 'translate3d(0, -40%, 0)');
				tel1sect.removeClass('is-moved');
			}

			if (tel1goscale.offset().top < t) {
				if (telcalcscale < 0) {
					tel1left.css('transform', 'scale(0.62) rotate(-10deg) translate3d(-50%, 5%, 0)');
					tel1right.css('transform', 'scale(0.62) rotate(10deg) translate3d(50%, 5%, 0)');
					tel1main.css('transform', 'scale(0.7285)');
					tel1sect.removeClass('is-scaled');
				} else if (telcalcscale <= 1 > 0) {
					tel1left.css('transform', 'scale(0.62) rotate(-' + tel1angle + 'deg) translate3d(-' + tel1trans + '%, 5%, 0)');
					tel1right.css('transform', 'scale(0.62) rotate(' + tel1angle + 'deg) translate3d(' + tel1trans + '%, 5%, 0)');
					tel1main.css('transform', 'scale(' + tel1scale + ')');
					tel1sect.removeClass('is-scaled');
				} else {
					tel1left.css('transform', 'scale(0.62) rotate(-0deg) translate3d(0%, 5%, 0)');
					tel1right.css('transform', 'scale(0.62) rotate(0deg) translate3d(0%, 5%, 0)');
					tel1main.css('transform', 'scale(1)');
					tel1sect.addClass('is-scaled');
				}
			} else {
				tel1left.css('transform', 'scale(0.62) rotate(-10deg) translate3d(-50%, 5%, 0)');
				tel1right.css('transform', 'scale(0.62) rotate(10deg) translate3d(50%, 5%, 0)');
				tel1main.css('transform', 'scale(0.7285)');
				tel1sect.removeClass('is-scaled');
			}

			if (tel1gosearch.offset().top < t) {
				tel1sect.addClass('is-search');
			} else {
				tel1sect.removeClass('is-search');
			}

			var piccalcscale = ((t - picgoscale.offset().top) / picgoscale.outerHeight());
			var picscall = (7 - (piccalcscale * 6)).toFixed(6);
			var picfade = (piccalcscale).toFixed(6);

			var piccalchide = ((t - picgohide.offset().top) / picgohide.outerHeight());

			var pichideop = (1 - piccalchide);

			if (picgohide.offset().top < t) {
				if (piccalchide < 0) {
					picsecttext.css('opacity', '1');
					picsect.removeClass('is-hide');
				} else if (piccalchide <= 1 > 0) {
					picsecttext.css('opacity', '' + pichideop + '');
					picsect.removeClass('is-hide');
				} else {
					picsecttext.css('opacity', '0');
					picsect.addClass('is-hide');
				}
			} else {
				picsecttext.css('opacity', '1');
				picsect.removeClass('is-hide');
			}

			if (picgoscale.offset().top < t) {
				if (piccalcscale < 0) {
					picsectall.css('transform', 'scale(7)');
					picsectfade.css('opacity', '0');
					picsect.removeClass('is-scaled');
				} else if (piccalcscale <= 1 > 0) {
					picsectall.css('transform', 'scale(' + picscall + ')');
					picsectfade.css('opacity', '' + picfade + '');
					picsect.removeClass('is-scaled');
				} else {
					picsectall.css('transform', 'scale(1)');
					picsectfade.css('opacity', '1');
					picsect.addClass('is-scaled');
				}
			} else {
				picsectall.css('transform', 'scale(7)');
				picsect.removeClass('is-scaled');
			}


			var piccalctel = ((t - picgotel.offset().top) / picgotel.outerHeight());

			var _checkpic = function () {
				if (breakpoint.matches === true) { /* for mobiles */
					picouter = picsect.find('.pic-place.pos22').find('.in');
					picouteralt = picsect.find('.pic-place.pos27').find('.in');

					picposh = 19.084;
					picposv = 100;
					picrot = 0;
					pictelnum = (100 - (piccalctel * 100)).toFixed(6);
					picoutnumh = (piccalctel * picposh).toFixed(6);
					picoutnumv = (piccalctel * picposv).toFixed(6);
					picrotate1 = (picrot * piccalctel).toFixed(6);
					picrotate2 = (picrot - (piccalctel * picrot)).toFixed(6);
					picnumscale = (1 + (0.1 * piccalctel)).toFixed(6);
				} else if (breakpoint.matches === false) { /* for desktop */
					picouter = picsect.find('.pic-place.pos27').find('.in');
					picouteralt = picsect.find('.pic-place.pos22').find('.in');

					picposh = 100;
					picposv = -200;
					picrot = 15;
					pictelnum = (100 - (piccalctel * 100)).toFixed(6);
					picoutnumh = (piccalctel * picposh).toFixed(6);
					picoutnumv = (piccalctel * picposv).toFixed(6);
					picrotate1 = (picrot * piccalctel).toFixed(6);
					picrotate2 = (picrot - (piccalctel * picrot)).toFixed(6);
					picnumscale = (1 + (0.1 * piccalctel)).toFixed(6);
				}
			};

			breakpoint.addListener(_checkpic);
			_checkpic();

			var picinner = picouter.find('> *');

			if (picgotel.offset().top < t) {
				picouteralt.removeAttr('style');

				if (piccalctel < 0) {
					tel2wrap.css('transform', 'translate3d(0, -100%, 0)');
					picouter.css('transform', 'translate3d(0, 0, 0)');
					picinner.css('transform', 'scale(1) rotate(0deg)');
					picsect.removeClass('is-tel');
					tel2sect.removeClass('is-tel');
				} else if (piccalctel <= 0.5 > 0) {
					tel2wrap.css('transform', 'translate3d(0, -' + pictelnum + '%, 0)');
					picouter.css('transform', 'translate3d(' + picoutnumh + '%, ' + picoutnumv + '%, 0)');
					picinner.css('transform', 'scale(' + picnumscale + ') rotate(-' + picrotate1 + 'deg)');
					picsect.removeClass('is-tel');
					tel2sect.removeClass('is-tel');
				} else if (piccalctel <= 1 > 0.5) {
					tel2wrap.css('transform', 'translate3d(0, -' + pictelnum + '%, 0)');
					picouter.css('transform', 'translate3d(' + picoutnumh + '%, ' + picoutnumv + '%, 0)');
					picinner.css('transform', 'scale(' + picnumscale + ') rotate(-' + picrotate2 + 'deg)');
					picsect.removeClass('is-tel');
					tel2sect.removeClass('is-tel');
				} else {
					tel2wrap.css('transform', 'translate3d(0, 0%, 0)');
					picouter.css('transform', 'translate3d(' + picposh + '%, ' + picposv + '%, 0)');
					picinner.css('transform', 'scale(1.1) rotate(0deg)');
					picsect.addClass('is-tel');
					tel2sect.addClass('is-tel');
				}
			} else {
				tel2wrap.css('transform', 'translate3d(0, -100%, 0)');
				picouter.css('transform', 'translate3d(0, 0, 0)');
				picinner.css('transform', 'scale(1) rotate(0deg)');
				picsect.removeClass('is-tel');
				tel2sect.removeClass('is-tel');
			}

			if (picgobounce.offset().top < t) {
				picsect.addClass('is-bounce');
				tel2sect.addClass('is-bounce');
			} else {
				picsect.removeClass('is-bounce');
				tel2sect.removeClass('is-bounce');
			}

			if ((picgobounce.offset().top + picgobounce.outerHeight()) < t) {
				picsect.addClass('hide-bounce');
				tel2sect.addClass('hide-bounce');
			} else {
				picsect.removeClass('hide-bounce');
				tel2sect.removeClass('hide-bounce');
			}


			var tel2clip = 50;
			var tel2clipend1 = (tel2clip - tel2teltransh);
			var tel2clipend2 = (tel2clip + tel2teltransh);
			var tel2texttrans = 100;

			var tel2calcgotext1 = ((t - tel2gotext1.offset().top) / tel2gotext1.outerHeight()).toFixed(6);
			var tel2calchidetext1 = ((t - tel2hidetext1.offset().top) / tel2hidetext1.outerHeight()).toFixed(6);

			var tel2calcgotext2 = ((t - tel2gotext2.offset().top) / tel2gotext2.outerHeight()).toFixed(6);
			var tel2calchidetext2 = ((t - tel2hidetext2.offset().top) / tel2hidetext2.outerHeight()).toFixed(6);

			var tel2numtel1h = (tel2calcgotext1 * tel2teltransh);
			var tel2numtel1v = (tel2calcgotext1 * tel2teltransv);
			var tel2numclip1 = (tel2clip - (tel2calcgotext1 * (tel2clip - tel2clipend1)));
			var tel2numtext1 = (tel2texttrans - (tel2calcgotext1 * tel2texttrans));
			var tel2numtel1hideh = (tel2teltransh - (tel2calchidetext1 * tel2teltransh));
			var tel2numtel1hidev = (tel2teltransv - (tel2calchidetext1 * tel2teltransv));
			var tel2numclip1hide = (tel2clipend1 + (tel2calchidetext1 * tel2teltransh));
			var tel2numtext1hide = (tel2calchidetext1 * tel2texttrans);

			var tel2numtel2h = (tel2calcgotext2 * tel2teltransh);
			var tel2numtel2v = (tel2calcgotext2 * tel2teltransv);
			var tel2numclip2 = (tel2clip + (tel2calcgotext2 * (tel2clip - tel2clipend1)));
			var tel2numtext2 = (tel2texttrans - (tel2calcgotext2 * tel2texttrans));
			var tel2numtel2hideh = (tel2teltransh - (tel2calchidetext2 * tel2teltransh));
			var tel2numtel2hidev = (tel2teltransv - (tel2calchidetext2 * tel2teltransv));
			var tel2numclip2hide = (tel2clipend2 - (tel2calchidetext2 * tel2teltransh));
			var tel2numtext2hide = (tel2calchidetext2 * tel2texttrans);

			var _checktext = function () {
				if (breakpoint.matches === true) { /* for mobiles */
					tel2teltransh = 0;
					tel2teltransv = 40;
					tel2opgo1 = (tel2calcgotext1 * 1);
					tel2opback1 = (1 - (tel2calchidetext1 * 1));
					tel2opgo2 = (tel2calcgotext2 * 1);
					tel2opback2 = (1 - (tel2calchidetext2 * 1));
					tel2opend = 0;

				} else if (breakpoint.matches === false) { /* for desktop */
					tel2teltransh = 15;
					tel2teltransv = 0;
					tel2opgo1 = 1;
					tel2opback1 = 1;
					tel2opgo2 = 1;
					tel2opback2 = 1;
					tel2opend = 1;
				}
			};

			breakpoint.addListener(_checktext);
			_checktext();


			if (tel2gotext1.offset().top < t) {
				tel2sect.addClass('ready-text1');

				if (tel2calcgotext1 < 0) {
					tel2wrapin.css('transform', 'translate3d(0, 0, 0)');
					tel2text1.css('transform', 'translate3d(-' + tel2texttrans + '%, 0, 0)');
					tel2text1.css('opacity', '' + tel2opend + '');
					tel2textwrap1.css('clip-path', 'polygon(' + tel2clip + '% 0%, 100% 0, 100% 100%, ' + tel2clip + '% 100%)');
				} else if (tel2calcgotext1 <= 1 > 0) {
					tel2wrapin.css('transform', 'translate3d(-' + tel2numtel1h + 'vw, -' + tel2numtel1v + 'vh, 0)');
					tel2text1.css('transform', 'translate3d(-' + tel2numtext1 + '%, 0, 0)');
					tel2text1.css('opacity', '' + tel2opgo1 + '');
					tel2textwrap1.css('clip-path', 'polygon(' + tel2numclip1 + '% 0%, 100% 0, 100% 100%, ' + tel2numclip1 + '% 100%)');
				} else {
					tel2wrapin.css('transform', 'translate3d(-' + tel2teltransh + 'vw, -' + tel2teltransv + 'vh, 0)');
					tel2text1.css('transform', 'translate3d(0, 0, 0)');
					tel2text1.css('opacity', '1');
					tel2textwrap1.css('clip-path', 'polygon(' + tel2clipend1 + '% 0%, 100% 0, 100% 100%, ' + tel2clipend1 + '% 100%)');
				}
			} else {
				tel2sect.removeClass('ready-text1');
			}

			if (tel2hidetext1.offset().top < t) {
				if (tel2calcgotext1 < 0) {
					tel2wrapin.css('transform', 'translate3d(-' + tel2teltransh + 'vw, -' + tel2teltransv + 'vh, 0)');
					tel2text1.css('transform', 'translate3d(0, 0, 0)');
					tel2text1.css('opacity', '1');
					tel2textwrap1.css('clip-path', 'polygon(' + tel2clipend1 + '% 0%, 100% 0, 100% 100%, ' + tel2clipend1 + '% 100%)');
				} else if (tel2calchidetext1 <= 1 > 0) {
					tel2wrapin.css('transform', 'translate3d(-' + tel2numtel1hideh + 'vw, -' + tel2numtel1hidev + 'vh, 0)');
					tel2text1.css('transform', 'translate3d(-' + tel2numtext1hide + '%, 0, 0)');
					tel2text1.css('opacity', '' + tel2opback1 + '');
					tel2textwrap1.css('clip-path', 'polygon(' + tel2numclip1hide + '% 0%, 100% 0, 100% 100%, ' + tel2numclip1hide + '% 100%)');
				} else {
					tel2wrapin.css('transform', 'translate3d(0, 0, 0)');
					tel2text1.css('transform', 'translate3d(-' + tel2texttrans + '%, 0, 0)');
					tel2text1.css('opacity', '' + tel2opend + '');
					tel2textwrap1.css('clip-path', 'polygon(' + tel2clip + '% 0%, 100% 0, 100% 100%, ' + tel2clip + '% 100%)');
				}
			}

			if ((tel2hidetext1.offset().top + tel2hidetext1.outerHeight()) < t) {
				tel2sect.removeClass('ready-text1');
				tel2wrapin.css('transform', 'translate3d(0, 0, 0)');
			}

			if (tel2gotext2.offset().top < t) {
				tel2sect.addClass('ready-text2');
				if (tel2calcgotext2 < 0) {
					tel2wrapin.css('transform', 'translate3d(0, 0, 0)');
					tel2text2.css('transform', 'translate3d(' + tel2texttrans + '%, 0, 0)');
					tel2text2.css('opacity', '' + tel2opend + '');
					tel2textwrap2.css('clip-path', 'polygon(0% 0%, ' + tel2clip + '% 0, ' + tel2clip + '% 100%, 0% 100%)');
				} else if (tel2calcgotext2 <= 1 > 0) {
					tel2wrapin.css('transform', 'translate3d(' + tel2numtel2h + 'vw, ' + tel2numtel2v + 'vh, 0)');
					tel2text2.css('transform', 'translate3d(' + tel2numtext2 + '%, 0, 0)');
					tel2text2.css('opacity', '' + tel2opgo2 + '');
					tel2textwrap2.css('clip-path', 'polygon(0% 0%, ' + tel2numclip2 + '% 0, ' + tel2numclip2 + '% 100%, 0% 100%)');
				} else {
					tel2wrapin.css('transform', 'translate3d(' + tel2teltransh + 'vw, ' + tel2teltransv + 'vh, 0)');
					tel2text2.css('transform', 'translate3d(0, 0, 0)');
					tel2text2.css('opacity', '1');
					tel2textwrap2.css('clip-path', 'polygon(0% 0%, ' + tel2clipend2 + '% 0, ' + tel2clipend2 + '% 100%, 0% 100%)');
				}
			} else {
				tel2sect.removeClass('ready-text2');
			}

			if (tel2hidetext2.offset().top < t) {
				if (tel2calcgotext2 < 0) {
					tel2wrapin.css('transform', 'translate3d(' + tel2teltransh + 'vw, ' + tel2teltransv + 'vh, 0)');
					tel2text2.css('transform', 'translate3d(0, 0, 0)');
					tel2text2.css('opacity', '1');
					tel2textwrap2.css('clip-path', 'polygon(0% 0%, ' + tel2clipend2 + '% 0, ' + tel2clipend2 + '% 100%, 0% 100%)');
				} else if (tel2calchidetext2 <= 1 > 0) {
					tel2wrapin.css('transform', 'translate3d(' + tel2numtel2hideh + 'vw, ' + tel2numtel2hidev + 'vh, 0)');
					tel2text2.css('transform', 'translate3d(' + tel2numtext2hide + '%, 0, 0)');
					tel2text2.css('opacity', '' + tel2opback2 + '');
					tel2textwrap2.css('clip-path', 'polygon(0% 0%, ' + tel2numclip2hide + '% 0, ' + tel2numclip2hide + '% 100%, 0% 100%)');
				} else {
					tel2wrapin.css('transform', 'translate3d(0, 0, 0)');
					tel2text2.css('transform', 'translate3d(' + tel2texttrans + '%, 0, 0)');
					tel2text2.css('opacity', '' + tel2opend + '');
					tel2textwrap2.css('clip-path', 'polygon(0% 0%, ' + tel2clip + '% 0, ' + tel2clip + '% 100%, 0% 100%)');
				}
			}

			if ((tel2hidetext2.offset().top + tel2hidetext2.outerHeight()) < t) {
				tel2wrapin.css('transform', 'translate3d(0, 0, 0)');
			}

			var tel2angle;
			var tel2scale;

			var _checktel2 = function () {
				if (breakpoint.matches === true) { /* for mobiles */
					tel2angle = 0;
					tel2scale = 1.2;
				} else if (breakpoint.matches === false) { /* for desktop */
					tel2angle = 90;
					tel2scale = 1.5;
				}
			};

			breakpoint.addListener(_checktel2);
			_checktel2();


			var tel2calcrotate = ((t - tel2gorotate.offset().top) / tel2gorotate.outerHeight()).toFixed(6);
			var tel2numangle = (tel2calcrotate * tel2angle).toFixed(6);

			if (tel2gorotate.offset().top < t) {
				tel2sect.addClass('is-rotate');

				if (tel2calcrotate < 0) {
					tel2wraprotate.css('transform', 'rotate(0deg)');
				} else if (tel2calcrotate <= 1 > 0) {
					tel2wraprotate.css('transform', 'rotate(' + tel2numangle + 'deg)');
				} else {
					tel2wraprotate.css('transform', 'rotate(' + tel2angle + 'deg)');
				}
			} else {
				tel2sect.removeClass('is-rotate');
				tel2wraprotate.css('transform', 'rotate(0deg)');
			}

			var tel2calcscale = ((t - tel2goscale.offset().top) / tel2goscale.outerHeight()).toFixed(6);
			var tel2numscale = (1 + ((tel2scale - 1) * tel2calcscale)).toFixed(6);
			var tel2numcover = (1 - (tel2calcscale * 1)).toFixed(6);


			if (tel2goscale.offset().top < t) {
				tel2sect.addClass('is-scaled');

				if (tel2calcscale < 0) {
					tel2wraprotate.css('transform', 'rotate(' + tel2angle + 'deg) scale(1)');
					//tel2bg.css('opacity', '1');
					tel2cover.css('opacity', '1');
				} else if (tel2calcscale <= 1 > 0) {
					tel2wraprotate.css('transform', 'rotate(' + tel2angle + 'deg) scale(' + tel2numscale + ')');
					//tel2bg.css('opacity', '' + tel2numcover + '');
					tel2cover.css('opacity', '' + tel2numcover + '');
				} else {
					tel2wraprotate.css('transform', 'rotate(' + tel2angle + 'deg) scale(' + tel2scale + ')');
					//tel2bg.css('opacity', '0');
					tel2cover.css('opacity', '0');
				}
			} else {
				tel2sect.removeClass('is-scaled');
				//tel2bg.removeAttr('style');
				tel2cover.removeAttr('style');
			}


			var tel3calcscale = ((t - tel3goscale.offset().top) / tel3goscale.outerHeight()).toFixed(6);
			var tel3numscale = (1 + ((tel2scale - 1) * tel3calcscale)).toFixed(6);
			var tel3numcover = (1 - (tel3calcscale * 1)).toFixed(6);


			if (tel3goscale.offset().top < t) {
				tel3sect.addClass('is-scaled');

				if (tel3calcscale < 0) {
					tel3wraprotate.css('transform', 'rotate(' + tel2angle + 'deg) scale(1)');
					//tel2bg.css('opacity', '1');
					tel3cover.css('opacity', '1');
				} else if (tel3calcscale <= 1 > 0) {
					tel3wraprotate.css('transform', 'rotate(' + tel2angle + 'deg) scale(' + tel3numscale + ')');
					//tel2bg.css('opacity', '' + tel2numcover + '');
					tel3cover.css('opacity', '' + tel3numcover + '');
				} else {
					tel3wraprotate.css('transform', 'rotate(' + tel2angle + 'deg) scale(' + tel2scale + ')');
					//tel2bg.css('opacity', '0');
					tel3cover.css('opacity', '0');
				}
			} else {
				tel3sect.removeClass('is-scaled');
				//tel2bg.removeAttr('style');
				tel3cover.removeAttr('style');
			}


			var mapcalcbg = ((t - tel2gomapbg.offset().top) / tel2gomapbg.outerHeight()).toFixed(6);
			var mapnumbg = (mapcalcbg * 25).toFixed(6);


			if (tel2gomapbg.offset().top < t) {

				if (mapcalcbg < 0) {
					tel2mapbg.css('background-position', '0 0');
				} else if (mapcalcbg <= 1 > 0) {
					tel2mapbg.css('background-position', '0 ' + mapnumbg + '%');
				} else {
					tel2mapbg.css('background-position', '0 25%');
				}
			} else {
				tel2mapbg.css('background-position', '0 0');
			}

			if (tel2gomaptext1.offset().top < t) {
				tel2sect.addClass('show-maptext1');
			} else {
				tel2sect.removeClass('show-maptext1');
			}
			if ((tel2gomaptext1.offset().top + tel2gomaptext1.outerHeight()) < t) {
				tel2sect.addClass('hide-maptext1');
			} else {
				tel2sect.removeClass('hide-maptext1');
			}

			if (tel2gomaptext2.offset().top < t) {
				tel2sect.addClass('show-maptext2');
			} else {
				tel2sect.removeClass('show-maptext2');
			}
			if ((tel2gomaptext2.offset().top + tel2gomaptext2.outerHeight()) < t) {
				tel2sect.addClass('hide-maptext2');
			} else {
				tel2sect.removeClass('hide-maptext2');
			}

			var mapcalcbg3 = ((t - tel3gomapbg.offset().top) / tel3gomapbg.outerHeight()).toFixed(6);
			var mapnumbg3 = (mapcalcbg3 * 25).toFixed(6);


			if (tel3gomapbg.offset().top < t) {

				if (mapcalcbg3 < 0) {
					tel3mapbg.css('background-position', '0 0');
				} else if (mapcalcbg3 <= 1 > 0) {
					tel3mapbg.css('background-position', '0 ' + mapnumbg3 + '%');
				} else {
					tel3mapbg.css('background-position', '0 25%');
				}
			} else {
				tel3mapbg.css('background-position', '0 0');
			}

			if (tel3gomaptext1.offset().top < t) {
				tel3sect.addClass('show-maptext1');
			} else {
				tel3sect.removeClass('show-maptext1');
			}
			if ((tel3gomaptext1.offset().top + tel3gomaptext1.outerHeight()) < t) {
				tel3sect.addClass('hide-maptext1');
			} else {
				tel3sect.removeClass('hide-maptext1');
			}

			if (tel3gomaptext2.offset().top < t) {
				tel3sect.addClass('show-maptext2');
			} else {
				tel3sect.removeClass('show-maptext2');
			}
			if ((tel3gomaptext2.offset().top + tel3gomaptext2.outerHeight()) < t) {
				tel3sect.addClass('hide-maptext2');
			} else {
				tel3sect.removeClass('hide-maptext2');
			}


			var tel2calcrotateback = ((t - tel2gorotateback.offset().top) / tel2gorotateback.outerHeight()).toFixed(6);
			var tel2numangleback = (tel2angle - (tel2calcrotateback * tel2angle)).toFixed(6);

			var tel2numscaleback = (tel2scale - ((tel2scale - 1) * tel2calcrotateback)).toFixed(6);
			var tel2numscalemapback = (3.5 - (2.5 * tel2calcrotateback)).toFixed(6);

			if (tel2gorotateback.offset().top < t) {
				tel2sect.addClass('is-rotate-back');

				if (tel2calcrotateback < 0) {
					tel2wraprotate.css('transform', 'rotate(' + tel2angle + 'deg) scale(' + tel2scale + ')');
					tel2mappar.css('transform', 'scale(3.5)');
				} else if (tel2calcrotateback <= 1 > 0) {
					tel2wraprotate.css('transform', 'rotate(' + tel2numangleback + 'deg) scale(' + tel2numscaleback + ')');
					tel2mappar.css('transform', 'scale(' + tel2numscalemapback + ')');
				} else {
					tel2wraprotate.css('transform', 'rotate(0deg) scale(1)');
					tel2mappar.css('transform', 'scale(1)');
				}
			} else {
				tel2sect.removeClass('is-rotate-back');
				tel2mappar.css('transform', 'scale(3.5)');
			}


			var tel3calcrotateback = ((t - tel3gorotateback.offset().top) / tel3gorotateback.outerHeight()).toFixed(6);
			var tel3numangleback = (tel2angle - (tel3calcrotateback * tel2angle)).toFixed(6);

			var tel3numscaleback = (tel2scale - ((tel2scale - 1) * tel3calcrotateback)).toFixed(6);
			var tel3numscalemapback = (3.5 - (2.5 * tel3calcrotateback)).toFixed(6);

			if (tel3gorotateback.offset().top < t) {
				tel3sect.addClass('is-rotate-back');

				if (tel3calcrotateback < 0) {
					tel3wraprotate.css('transform', 'rotate(' + tel2angle + 'deg) scale(' + tel2scale + ')');
					tel3mappar.css('transform', 'scale(3.5)');
				} else if (tel3calcrotateback <= 1 > 0) {
					tel3wraprotate.css('transform', 'rotate(' + tel3numangleback + 'deg) scale(' + tel3numscaleback + ')');
					tel3mappar.css('transform', 'scale(' + tel3numscalemapback + ')');
				} else {
					tel3wraprotate.css('transform', 'rotate(0deg) scale(1)');
					tel3mappar.css('transform', 'scale(1)');
				}
			} else {
				tel3sect.removeClass('is-rotate-back');
				tel3mappar.css('transform', 'scale(3.5)');
			}

			var mapcardscalc = ((t - tel2cards.offset().top) / tel2cards.outerHeight()).toFixed(6);

			var card1x = (25 * mapcardscalc).toFixed(6);
			var card1y = (370 * mapcardscalc).toFixed(6);
			var card1s = (1 + (mapcardscalc * 0.9)).toFixed(6);

			var card2x = (240 * mapcardscalc).toFixed(6);
			var card2y = (250 * mapcardscalc).toFixed(6);
			var card2s = (1 + (mapcardscalc * 1)).toFixed(6);

			var card3x = (260 * mapcardscalc).toFixed(6);
			var card3y = 0;
			var card3s = (1 + (mapcardscalc * 0.95)).toFixed(6);

			var card4x = (220 * mapcardscalc).toFixed(6);
			var card4y = (280 * mapcardscalc).toFixed(6);
			var card4s = (1 + (mapcardscalc * 0.35)).toFixed(6);

			var card5x = (25 * mapcardscalc).toFixed(6);
			var card5y = (370 * mapcardscalc).toFixed(6);
			var card5s = (1 + (mapcardscalc * 0.35)).toFixed(6);

			var card6x = (250 * mapcardscalc).toFixed(6);
			var card6y = (250 * mapcardscalc).toFixed(6);
			var card6s = (1 + (mapcardscalc * 0.5)).toFixed(6);

			var card7x = (280 * mapcardscalc).toFixed(6);
			var card7y = (10 * mapcardscalc).toFixed(6);
			var card7s = (1 + (mapcardscalc * 1)).toFixed(6);

			var card8x = (190 * mapcardscalc).toFixed(6);
			var card8y = (240 * mapcardscalc).toFixed(6);
			var card8s = (1 + (mapcardscalc * 0.6)).toFixed(6);


			if (tel2cards.offset().top < t) {
				tel2sect.addClass('is-cards');

				if (mapcardscalc < 0) {
					tel2sect.find('.map-card.pos1').css('transform', 'translate3d(0, 0, 0) scale(1)');
					tel2sect.find('.map-card.pos2').css('transform', 'translate3d(0, 0, 0) scale(1)');
					tel2sect.find('.map-card.pos3').css('transform', 'translate3d(0, 0, 0) scale(1)');
					tel2sect.find('.map-card.pos4').css('transform', 'translate3d(0, 0, 0) scale(1)');
					tel2sect.find('.map-card.pos5').css('transform', 'translate3d(0, 0, 0) scale(1)');
					tel2sect.find('.map-card.pos6').css('transform', 'translate3d(0, 0, 0) scale(1)');
					tel2sect.find('.map-card.pos7').css('transform', 'translate3d(0, 0, 0) scale(1)');
					tel2sect.find('.map-card.pos8').css('transform', 'translate3d(0, 0, 0) scale(1)');
				} else if (mapcardscalc <= 1 > 0) {
					tel2sect.find('.map-card.pos1').css('transform', 'translate3d(-' + card1x + '%, -' + card1y + '%, 0) scale(' + card1s + ')');
					tel2sect.find('.map-card.pos2').css('transform', 'translate3d(' + card2x + '%, -' + card2y + '%, 0) scale(' + card2s + ')');
					tel2sect.find('.map-card.pos3').css('transform', 'translate3d(' + card3x + '%, -' + card3y + '%, 0) scale(' + card3s + ')');
					tel2sect.find('.map-card.pos4').css('transform', 'translate3d(' + card4x + '%, ' + card4y + '%, 0) scale(' + card4s + ')');
					tel2sect.find('.map-card.pos5').css('transform', 'translate3d(-' + card5x + '%, ' + card5y + '%, 0) scale(' + card5s + ')');
					tel2sect.find('.map-card.pos6').css('transform', 'translate3d(-' + card6x + '%, ' + card6y + '%, 0) scale(' + card6s + ')');
					tel2sect.find('.map-card.pos7').css('transform', 'translate3d(-' + card7x + '%, -' + card7y + '%, 0) scale(' + card7s + ')');
					tel2sect.find('.map-card.pos8').css('transform', 'translate3d(-' + card8x + '%, -' + card8y + '%, 0) scale(' + card8s + ')');
				} else {
					tel2sect.find('.map-card.pos1').css('transform', 'translate3d(-25%, -370%, 0) scale(1.9)');
					tel2sect.find('.map-card.pos2').css('transform', 'translate3d(240%, -250%, 0) scale(2)');
					tel2sect.find('.map-card.pos3').css('transform', 'translate3d(260%, 0, 0) scale(1.95)');
					tel2sect.find('.map-card.pos4').css('transform', 'translate3d(220%, 280%, 0) scale(1.35)');
					tel2sect.find('.map-card.pos5').css('transform', 'translate3d(-25%, 370%, 0) scale(1.35)');
					tel2sect.find('.map-card.pos6').css('transform', 'translate3d(-250%, 250%, 0) scale(1.5)');
					tel2sect.find('.map-card.pos7').css('transform', 'translate3d(-280%, -10%, 0) scale(2)');
					tel2sect.find('.map-card.pos8').css('transform', 'translate3d(-190%, -240%, 0) scale(1.6)');
				}
			} else {
				tel2sect.removeClass('is-cards');
				tel2sect.find('.map-card.pos1').css('transform', 'translate3d(0, 0, 0) scale(1)');
				tel2sect.find('.map-card.pos2').css('transform', 'translate3d(0, 0, 0) scale(1)');
				tel2sect.find('.map-card.pos3').css('transform', 'translate3d(0, 0, 0) scale(1)');
				tel2sect.find('.map-card.pos4').css('transform', 'translate3d(0, 0, 0) scale(1)');
				tel2sect.find('.map-card.pos5').css('transform', 'translate3d(0, 0, 0) scale(1)');
				tel2sect.find('.map-card.pos6').css('transform', 'translate3d(0, 0, 0) scale(1)');
				tel2sect.find('.map-card.pos7').css('transform', 'translate3d(0, 0, 0) scale(1)');
				tel2sect.find('.map-card.pos8').css('transform', 'translate3d(0, 0, 0) scale(1)');
			}

			if (bot.offset().top < (t + h)) {
				vid.trigger('play');
			} else {
				vid.trigger('pause');
			}

		};

		_calc();
		$(window).on('scroll', function () {
			_calc();
		});
	});

}
