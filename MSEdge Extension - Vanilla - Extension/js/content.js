/*!
 * ---------------------------------------------------------
 *	Vanilla Extension
 *	The Microsoft boilerplate extension
 *  Copyright (C) 2016 Dave Williams - d4v3w. All rights reserved.
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
		console.log("initing...");
		isMsBrowser();
		extend();
		doExtension();
	},
	isMsBrowser = function () {
		typeof msBrowser != "undefined" ? chrome = msBrowser : typeof browser != "undefined" && (chrome = browser)
	},
	extend = function () {
		//self = jQuery.extend(!0, {}, opts);
	},
	doExtension = function () {
		console.log("doing my ting...");
		var items = window.document.getElementsByTagName("div") || [];
		if (items) {
			for (i = 0; items.length; i++) {
				items[i].style.border = "1px solid red";
			}
		}
	};
	window.addEventListener("load", init, !1);
})()
