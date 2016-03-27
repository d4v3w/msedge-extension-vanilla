/*!
 * ---------------------------------------------------------
 * Copyright(C) d4v3w. All rights reserved.
 * ---------------------------------------------------------
 */
(function () {
	var name = "vanilla",
	desc = "description text",
	opts = {
		itemOne : !0,
		itemTwo : !0,
		mapping : {
			first : "One",
			second : "Two"
		}
	},
	self = null,
	init = function () {
		isMsBrowser();
		extend();
		content();
	},
	isMsBrowser = function () {
		typeof msBrowser != "undefined" ? chrome = msBrowser : typeof browser != "undefined" && (chrome = browser)
	},
	extend = function () {
		self = jQuery.extend(!0, {}, opts);
	},
	content = function () {
		var items = ["Item 1", "Item 2", "Item 3", "Item 4"]
			.reduce(function (items, item, i) {
			return i === 1 && (items = "<li>" + items + "<\/li>"),
			items + "<li>" + item + "<\/li>";
		});
		$(".menu").html(items);
	};
	window.addEventListener("load", init, !1);
})()
