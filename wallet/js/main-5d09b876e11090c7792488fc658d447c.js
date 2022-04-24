$(document).ready(function () {
	initScroll();
	//initCookie();
	initOpenBlock();
	initMenu();
	initInputs();
});

function initCookie() {
	$('.cookie').each(function () {
		var hold = $(this);
		var cl = hold.find('.close');

		if (!Cookies.get('cookieIsHidden')) {
			hold.addClass('show');
		}

		cl.on('click', function () {
			hold.removeClass('show');
			Cookies.set('cookieIsHidden', true);
			return false;
		});
	});
}


function initInputs() {
	$('.input-in input, .input-in textarea').each(function () {
		var _el = $(this);
		var _par = $(this).parent().parent('.input');
		var _val = _el.val();

		if (_val === '') {
			_par.addClass('placeholder');
		} else {
			_par.removeClass('placeholder');
		}

		_el.on('keyup', function () {
			if (this.value === '') {
				_par.addClass('placeholder');
			} else {
				_par.removeClass('placeholder');
			}
		});

		_el.on('focus', function () {
			_par.addClass('focus');
		}).on('blur', function () {
			_par.removeClass('focus');
		});
	});

	$('.input select').each(function () {
		var _el = $(this);
		var _par = $(this).parents('.input');
		var _text = _el.find('option.placeholder').text();
		var _val = $(this).find('option:selected').text();

		if (_val === _text) {
			_par.addClass('placeholder');
		} else {
			_par.removeClass('placeholder');
		}

		_el.on('change', function () {
			_par.removeClass('focus');
			var _newText = $(this).find('option:selected').text();

			if (_text !== _newText) {
				_par.removeClass('placeholder');
			} else {
				_par.addClass('placeholder');
			}
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
