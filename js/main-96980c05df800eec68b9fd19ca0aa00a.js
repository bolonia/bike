$(document).ready(function () {
	initScroll();
	initMapPlace();
	initOpenBlock();
	initOpenText();
	initInputs();
	initBtnMenu();
	initPlacesGrid();
	initAppCover();
	initTags();
	initGallery();
	initMenu();
	initTrustFeatures();
	
		$('a.js_goto').click(function () {
		$('html').removeClass('open-menu');
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, {
			queue: false,
			duration: 500
		});
		return false;
	});

	$('.js_tabs').newTabs();

	$('.show-on-map').find('.btn').on('click', function () {
		$('html').toggleClass('show-map');
	});

	$('.top-categories').each(function () {
		var hold = $(this).find('.swiper-container');
		var act = hold.find('.swiper-slide.active');
		var num = ($(act).index() - 1);

		var mySwiper = new Swiper(hold, {
			slidesPerView: 'auto',
			freeMode: true,
			speed: 200,
			initialSlide: num
		});
	});

	$('.place-photos').each(function () {
		var hold = $(this).find('.swiper-container');

		var mySwiper = new Swiper(hold, {
			slidesPerView: 'auto',
			freeMode: true,
			speed: 200,
		});
	});

	$('.fast-tags').each(function () {
		var hold = $(this).find('.swiper-container');
		var prev = $(this).find('.swiper-prev');
		var next = $(this).find('.swiper-next');
		var act = hold.find('.swiper-slide.active');
		var num = ($(act).index() - 1);
		var fastSwiper;


		next.on('click', function () {
			var i = fastSwiper.activeIndex;
			fastSwiper.slideTo(i + 3);
		});

		prev.on('click', function () {
			var i = fastSwiper.activeIndex;
			fastSwiper.slideTo(i - 3);
		});

		fastSwiper = new Swiper(hold, {
			slidesPerView: 'auto',
			freeMode: true,
			speed: 200,
			initialSlide: num,
			navigation: {
				prevEl: prev,
				nextEl: next,
			}
		});
	});

	$('.slider-attendance').each(function () {
		var hold = $(this).find('.swiper-container');
		var prev = $(this).find('.swiper-prev');
		var next = $(this).find('.swiper-next');

		var mySwiper = new Swiper(hold, {
			slidesPerView: 'auto',
			spaceBetween: 0,
			freeMode: true,
			speed: 200,
			navigation: {
				nextEl: next,
				prevEl: prev,
			}
		});
	});

	$('.direction-links').each(function () {
		var hiddens = $(this).find('.visually-hidden');
		$(this).find('.more-fife-sections').each(
			function () {
				$(this).children().on('click', function () {
					$(this).parent().addClass('visually-hidden');
					hiddens.each(function () {
						$(this).removeClass('visually-hidden');
					});
				})
			}
		);
	});

	$('.slider-places').each(function () {
		var hold = $(this).find('.swiper-container');
		var prev = $(this).find('.swiper-prev');
		var next = $(this).find('.swiper-next');

		var mySwiper = new Swiper(hold, {
			slidesPerView: 'auto',
			spaceBetween: 0,
			freeMode: true,
			speed: 200,
			navigation: {
				nextEl: next,
				prevEl: prev,
			}
		});
	});

	$('.slider-categories').each(function () {
		var hold = $(this).find('.swiper-container');

		var mySwiper = new Swiper(hold, {
			slidesPerView: 'auto',
			spaceBetween: 0,
			freeMode: true,
			speed: 200,
		});
	});

	$('.place-tabs-slider').each(function () {
		var hold = $(this).find('.swiper-container');

		var mySwiper = new Swiper(hold, {
			slidesPerView: 'auto',
			spaceBetween: 0,
			freeMode: true,
			speed: 200,
		});
	});

	$('.directions-tabs-slider').each(function () {
		var hold = $(this).find('.swiper-container');

		var mySwiper = new Swiper(hold, {
			slidesPerView: 'auto',
			spaceBetween: 0,
			freeMode: true,
			speed: 200,
		});
	});

	$('.slider-directions').each(function () {
		var hold = $(this).find('.swiper-container');
		var prev = $(this).find('.swiper-prev');
		var next = $(this).find('.swiper-next');

		var mySwiper = new Swiper(hold, {
			slidesPerView: 'auto',
			spaceBetween: 0,
			freeMode: true,
			speed: 200,
			navigation: {
				nextEl: next,
				prevEl: prev,
			}
		});
	});

	$('.slider-directions-categories').each(function () {
		var hold = $(this).find('.swiper-container');
		var prev = $(this).find('.swiper-prev');
		var next = $(this).find('.swiper-next');

		var mySwiper = new Swiper(hold, {
			slidesPerView: 'auto',
			spaceBetween: 0,
			freeMode: true,
			speed: 200,
			navigation: {
				nextEl: next,
				prevEl: prev,
			}
		});
	});
});

function initTrustFeatures() {
	$('.trust-features').each(function () {
		var all = $(this).find('.head');

		all.each(function () {
			var el = $(this);
			var link = el.find('.bg');
			var cross = el.next('.text').find('.cross');
			var fader = el.next().next('.fader');

			link.on('click', function () {
				all.removeClass('open');
				all.removeClass('open-mob');
				el.addClass('open');
				el.addClass('open-mob');
				$('html').addClass('open-popup');
			});

			var _closeText = function () {
				el.removeClass('open');
				el.removeClass('open-mob');
				$('html').removeClass('open-popup');
			};

			cross.on('click', function () {
				_closeText();
			});

			fader.on('click', function () {
				_closeText();
			});
		});
	});
}

function initScroll() {
	var _scroll = function () {
		if ($(window).scrollTop() > 0) {
			$('body').addClass('scrolled');
		} else {
			$('body').removeClass('scrolled');
		}
	};

	_scroll();
	$(window).on('scroll resize', function () {
		_scroll();
	});
}

function initAppCover() {
	$('.app-cover').each(function () {
		var hold = $(this);
		var cl = hold.find('.close');

		if (!Cookies.get('appCookieIsHidden')) {
			hold.addClass('show');
		}

		cl.on('click', function () {
			hold.removeClass('show');
			Cookies.set('appCookieIsHidden', true);
			return false;
		});

		if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
			hold.addClass('android');
		} else {
			hold.addClass('ios');
		}
	});
}

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

function initPlacesGrid() {

	$('.slider-places-big').each(function () {

		var hold = $(this).find('.swiper-container');

		var breakpoint = window.matchMedia('(max-width:1090px)');
		var placesSwiper;

		var enableSwiper = function () {
			placesSwiper = new Swiper(hold, {
				slidesPerView: 'auto',
				spaceBetween: 0,
				freeMode: true,
				speed: 200
			});
		};

		var breakpointChecker = function () {
			if (breakpoint.matches === false) {
				if (placesSwiper !== undefined) {
					placesSwiper.destroy(true, true);
				}
				return;
			} else if (breakpoint.matches === true) {
				enableSwiper();
			}
		};

		breakpoint.addListener(breakpointChecker);
		breakpointChecker();
	});
}

function initBtnMenu() {
	$('.inner-btns-menu').each(function () {
		var hold = $(this);
		var list = hold.find('.list');
		var li = list.find('> li');
		var all = hold.find('.all');
		var allList = all.find('.popup').find('ul');

		var _pos = function () {
			li.each(function () {
				var l = $(this);
				var lclone = l.clone();

				if (l.position().top > 0) {
					all.addClass('show');
					lclone.appendTo(allList);
				} else {
					allList.children(lclone).remove();
				}
				if (!$.trim(allList.html())) {
					all.removeClass('show');
				}
				if (all.find('.btn.active').length) {
					all.addClass('active-here');
				} else {
					all.removeClass('active-here');
				}
			});
		};

		_pos();
		$(window).on('resize', function () {
			_pos();
		});
	});
}

function initInputs() {
	$('.input input, .input textarea').each(function () {
		var inp = $(this);
		var par = $(this).parent('.input');
		var cl = par.find('.clear');

		cl.on('click', function () {
			inp.val('');
			inp.focus();
			_check();
		});

		var _check = function () {
			var v = inp.val();

			if (v === '') {
				par.addClass('placeholder');
			} else {
				par.removeClass('placeholder');
			}
		};

		_check();

		inp.on('keyup', function () {
			_check();
		});


	});

}


function initOpenText() {
	$('.js_open_text').each(function () {
		var hold = $(this);
		hold.addClass('ready');
		var p = hold.find('.text-full').find('> p:first-child');

		var txt = new String;
		txt = p.html().match(/[^\.!\?]+[\.!\?]+["']?|.+$/g);
		if (txt) {
			var txtFirst = txt[0];
			txt.shift();

			p.html('<span class="first">' + txtFirst + '</span><span>' + txt.join(' ') + '</span>');

			if (txt.length < 1 && p.is(':last-child')) {
				hold.addClass('min');
			}

			var link = hold.find('.js_toggle');

			link.on('click', function () {
				hold.toggleClass('open');
			});
		}
	});
}

function initOpenBlock() {
	$('.js_open_block').each(function () {
		var hold = $(this);
		var cl = hold.find('.js_close');

		cl.on('click', function () {
			hold.removeClass('open');
		});

		hold.hover(function () {
			hold.addClass('hovering');
			hold.addClass('open');
		}, function () {
			hold.removeClass('hovering');
			hold.removeClass('open');
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

function initMapPlace() {
	$('.map-wrapper').each(function () {
		var hold = $(this);
		var f = $('.bottom-content');

		var _scroll = function () {
			var h = f.outerHeight();
			var t = f.offset().top;

			if (t < ($(window).scrollTop() + $(window).outerHeight())) {
				var p = Math.round($(window).scrollTop() + $(window).outerHeight() - t);
				hold.css({
					'bottom': p
				});
			} else {
				hold.css({
					'bottom': 0
				});
			}
		};

		_scroll();
		$(window).on('scroll', function () {
			_scroll();
		});
	});
}



function initGallery() {
	var galleryIndex = 0;

	$('.gallery-link-index').on('click', function () {
		galleryIndex = $(this).parent().index();
	});

	$('.gallery-link').magnificPopup({
		type: 'ajax',
		closeBtnInside: true,
		closeOnBgClick: false,
		mainClass: 'mfp-gallery',
		fixedContentPos: true,
		callbacks: {
			ajaxContentAdded: function () {
				$('.js_tabs').newTabs();
				_galleryInit();
			},
			close: function () {
				galleryIndex = 0;
			},
		}
	});

	var _galleryInit = function () {
		$('.gallery').find('.gallery-bottom').each(function () {
			var hold = $(this);
			var ind = galleryIndex;
			if (!hold.hasClass('visible')) {
				ind = 0;
			}
			var big = hold.find('.big').find('.swiper-container');
			var bigprev = big.parent().find('.swiper-prev');
			var bignext = big.parent().find('.swiper-next');
			var pag = hold.find('.swiper-pagination');
			var small = hold.find('.small').find('.swiper-container');

			var gallerySmall = new Swiper(small, {
				slidesPerView: 'auto',
				freeMode: true,
				initialSlide: ind,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				centeredSlides: false,
				on: {
					init: function () {
						setTimeout(function () {
							small.find('.swiper-slide').each(function () {
								$(this).removeClass('swiper-slide-thumb-active');
							});
							small.find('.swiper-slide').eq(ind).addClass('swiper-slide-thumb-active');
						}, 100);
					},
				},

			});

			var galleryBig = new Swiper(big, {
				lazy: true,
				initialSlide: ind,
				keyboard: {
					enabled: true,
				},
				//mousewheel: true, /*problem with inertial scrolling, use careful*/
				navigation: {
					nextEl: bignext,
					prevEl: bigprev,
				},
				pagination: {
					el: pag,
					type: 'fraction',
				},
				on: {
					init: function () {
						if (big.find('.swiper-slide').is(':only-child')) {
							hold.addClass('single');
						} else {
							hold.removeClass('single');
						}
					},
				},
				thumbs: {
					swiper: gallerySmall
				},

			});
		});
	};
}

function initTags() {
	$('.tags').each(function () {

		var $nav = $(this);
		var $btn = $nav.find('> .btn');
		var $btnspan = $btn.find('> span');
		var $vlinks = $nav.find('> ul.show');
		var $hlinks = $nav.find('> ul.hide');

		var breaks = [];

		function updateNav() {

			var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 50;

			// The visible list is overflowing the nav
			if ($vlinks.width() > availableSpace) {

				// Record the width of the list
				breaks.push($vlinks.width());

				// Move item to the hidden list
				$vlinks.children().last().prependTo($hlinks);

				// Show the dropdown btn
				if ($btn.hasClass('hidden')) {
					$btn.removeClass('hidden');
				}

				// The visible list is not overflowing
			} else {

				// There is space for another item in the nav
				if (availableSpace > breaks[breaks.length - 1]) {

					// Move the item to the visible list
					$hlinks.children().first().appendTo($vlinks);
					breaks.pop();
				}

				// Hide the dropdown btn if hidden list is empty
				if (breaks.length < 1) {
					$btn.addClass('hidden');
					$hlinks.addClass('hidden');
				}
			}

			// Keep counter updated
			$btnspan.attr("count", breaks.length);

			// Recur if the visible list is still overflowing the nav
			if ($vlinks.width() > availableSpace) {
				updateNav();
			}

		}

		// Window listeners

		$(window).resize(function () {
			updateNav();
		});

		updateNav();
	});
}

(function ($) {
	var _error = function (text) {
			if (typeof console == 'object') console.warn(text);
		},
		_setTab = function (data, tab, _this) {
			data.links
				.removeClass(data.activeTab)
				.filter('[data-tab="' + tab + '"]')
				.addClass(data.activeTab);
			data.boxes
				.removeClass(data.visibleClass + ' ' + data.hiddenClass)
				.addClass(data.hiddenClass)
				.filter(tab)
				.addClass(data.visibleClass);
			if (data.steps) {
				if (data.maxStep < data.steps.index(data.steps.filter('.' + data.activeTab))) data.maxStep = data.steps.index(data.steps.filter('.' + data.activeTab));
				data.steps.removeClass(data.disabledTab);
				for (var i = data.maxStep + 1; i <= data.steps.length; i++) {
					data.steps.eq(i).addClass(data.disabledTab);
				}
				;
			}
			data.onChange(_this);
			$(window).trigger('resize');
		},
		_initEvents = function (data) {
			data.links.bind('click.tabs', function () {
				if (!$(this).hasClass(data.disabledTab)) _setTab(data, $(this).data('tab'), $(this));
				return false;
			});
		},
		methods = {
			init: function (options) {
				return this.each(function () {
					var $this = $(this);
					$this.data("tabs", jQuery.extend({}, defaults, options));
					var data = $this.data("tabs");
					data.context = $this;
					data.links = $this.find('[data-tab]').not('.detected').addClass('detected');
					data.boxes = $();

					if (data.steps) {
						data.steps = $this.find(data.steps).eq(0).find('[data-tab]');
						data.maxStep = data.steps.index(data.steps.filter('.' + data.activeTab));
					}

					data.links.each(function () {
						data.boxes = data.boxes.add($($(this).data('tab')));
					});

					_setTab(data, data.links.filter('.' + data.activeTab).eq(0).data('tab'));
					_initEvents(data);
				});
			},
			setTab: function (tab) {
				return this.each(function () {
					var $this = $(this),
						data = $this.data("tabs");
					if (data && typeof tab == 'string') {
						_setTab(data, tab);
					} else {
						_error('Second param need to be String');
					}
				})
			},
			option: function (name, set) {
				if (set) return this.each(function () {
					var data = $(this).data("tabs");
					if (data) data[name] = set;
				});
				else {
					var ar = [];
					this.each(function () {
						var data = $(this).data("tabs");
						if (data) ar.push(data[name])
					});
					return ar.length > 1 ? ar : ar[0];
				}
			},
			destroy: function () {
				return this.each(function () {
					var $this = $(this),
						data = $this.data("tabs");
					if (data) {
						data.context.find("*").unbind(".tabs").removeClass(data.hiddenClass + ' ' + data.visibleClass);
						$(window).unbind(".tabs");
						$this.removeData("tabs")
					}
				})
			}
		},
		defaults = {
			hiddenClass: "folded-tab",
			visibleClass: "visible",
			activeTab: "active",
			disabledTab: "disabled",
			steps: false,
			onChange: function () {
			}
		};
	$.fn.newTabs = function (method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else {
			if (typeof method === 'object' || !method) {
				return methods.init.apply(this, arguments);
			} else {
				_error('Method ' + method + ' does not exist on jQuery.tabs');
			}
		}
	};
})(jQuery);

/*!
 * jQuery Cookie Plugin
 * ! js-cookie v3.0.0-rc.0 | MIT */
! function (e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self, function () {
		var r = e.Cookies,
			n = e.Cookies = t();
		n.noConflict = function () {
			return e.Cookies = r, n
		}
	}())
}(this, function () {
	"use strict";

	function e(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = arguments[t];
			for (var n in r) e[n] = r[n]
		}
		return e
	}
	var t = {
		read: function (e) {
			return e.replace(/%3B/g, ";")
		},
		write: function (e) {
			return e.replace(/;/g, "%3B")
		}
	};
	return function r(n, i) {
		function o(r, o, u) {
			if ("undefined" != typeof document) {
				"number" == typeof (u = e({}, i, u)).expires && (u.expires = new Date(Date.now() + 864e5 * u.expires)), u.expires && (u.expires = u.expires.toUTCString()), r = t.write(r).replace(/=/g, "%3D"), o = n.write(String(o), r);
				var c = "";
				for (var f in u) u[f] && (c += "; " + f, !0 !== u[f] && (c += "=" + u[f].split(";")[0]));
				return document.cookie = r + "=" + o + c
			}
		}
		return Object.create({
			set: o,
			get: function (e) {
				if ("undefined" != typeof document && (!arguments.length || e)) {
					for (var r = document.cookie ? document.cookie.split("; ") : [], i = {}, o = 0; o < r.length; o++) {
						var u = r[o].split("="),
							c = u.slice(1).join("="),
							f = t.read(u[0]).replace(/%3D/g, "=");
						if (i[f] = n.read(c, f), e === f) break
					}
					return e ? i[e] : i
				}
			},
			remove: function (t, r) {
				o(t, "", e({}, r, {
					expires: -1
				}))
			},
			withAttributes: function (t) {
				return r(this.converter, e({}, this.attributes, t))
			},
			withConverter: function (t) {
				return r(e({}, this.converter, t), this.attributes)
			}
		}, {
			attributes: {
				value: Object.freeze(i)
			},
			converter: {
				value: Object.freeze(n)
			}
		})
	}(t, {
		path: "/"
	})
});

/*!
 * jQuery Cookie Plugin end
 */
