$(document).ready(function () {
	initScroll();
	initOpenBlock();
	initMenu();
	speedBlock();
	initRewards();
	howSlider();

	$('.js_tabs').newTabs();
});

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

function speedBlock() {
	$('.js_speed').each(function () {
		var hold = $(this);
		var txt = hold.find('.text-here');

		txt.html('0');
		txt.prop('number', 0);

		var _run = function () {
			txt.animateNumber({
				number: 100
			}, {
				easing: 'linear',
				duration: 2000
			});
		};


		var _calc = function () {

			if ((hold.offset().top + (hold.outerHeight() / 2)) < ($(window).scrollTop() + $(window).outerHeight())) {
				if (!hold.hasClass('visible')) {
					hold.addClass('visible');
					_run();
				}
			}
		};

		_calc();
		$(window).on('scroll resize', function () {
			_calc();
		});

	});
}

function initRewards() {
	$('.rewards').each(function () {
		var hold = $(this);
		var link = hold.find('.toggle').find('.link');
		var text = hold.find('.folded');

		link.on('click', function () {
			text.slideDown(200, function () {
				hold.addClass('open');
			});
		});
	});
}

function howSlider() {
	$('.how-it-works').each(function () {
		var hold = $(this).find('.swiper-container');
		var dial = $(this).find('.knob');
		var howSwiper;
		var max = 350;
		var count = 0;
		var newVal, intervalID;
		var links = $(this).find('.nav');
		var breakpoint = window.matchMedia('(max-width: 1020px) and (orientation: portrait)');


		dial.knob({
			'min': 0,
			'max': max,
			'readOnly': true,
			'width': 65,
			'height': 65,
			'fgColor': '#6E7FFC',
			'bgColor': 'transparent',
			'displayInput': true,
			'dynamicDraw': false,
			'ticks': 0,
			'thickness': 0.1,
			'lineCap': 'round'
		});

		var goTimer = function () {
			clearInterval(intervalID);
			dial.val(0).trigger('change');
			count = 0;

			intervalID = setInterval(function () {
				newVal = ++count;
				dial.val(newVal).trigger('change');
			}, 10);
		};

		var goNav = function () {
			links.find('li').removeClass('active');
			setTimeout(function () {
				links.find('li').eq(howSwiper.activeIndex).addClass('active');
			}, 10);
		};

		var breakpointChecker = function () {
			if (breakpoint.matches === false) {
				if (howSwiper !== undefined) {
					howSwiper.destroy(true, true);
				}
				howSwiper = new Swiper(hold, {
					slidesPerView: 1,
					speed: 500,
					init: false,
					autoplay: {
						delay: 4000,
						disableOnInteraction: false,
						waitForTransition: false
					}
				});

				howSwiper.on('init', function () {
					goTimer();
					goNav();
				}).on('slideChange', function () {
					goTimer();
					goNav();
				});

				howSwiper.init();
			} else if (breakpoint.matches === true) {
				if (howSwiper !== undefined) {
					howSwiper.destroy(true, true);
				}
				howSwiper = new Swiper(hold, {
					slidesPerView: 'auto',
					speed: 500,
					init: false,
				});
				howSwiper.init();
			}
		};

		breakpoint.addListener(breakpointChecker);
		breakpointChecker();

		links.find('li').on('click', function () {
			var ind = $(this).index();
			howSwiper.slideTo(ind);
		});
	});
}

// Tabs start

(function ($) {
	var _error = function (text) {
			if (typeof console == 'object') console.warn(text);
		},
		_setTab = function (data, tab) {
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
				};
			}
			data.onChange();
			$(window).trigger('resize');
		},
		_initEvents = function (data) {
			data.links.bind('click.tabs', function () {
				if (!$(this).hasClass(data.disabledTab)) _setTab(data, $(this).data('tab'));
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
			hiddenClass: "hidden-tab",
			visibleClass: "visible",
			activeTab: "active",
			disabledTab: "disabled",
			steps: false,
			onChange: function () {}
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

// Tabs end
