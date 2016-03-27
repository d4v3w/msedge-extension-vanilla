/*!
 * ---------------------------------------------------------
 * Copyright(C) d4v3w. All rights reserved.
 * ---------------------------------------------------------
 */
(function () {
	var opts = {
		itemOne : 0,
		itemTwo : 0
	},
	newTab = "about:blank",
	isMsBrowser = function () {
		typeof msBrowser != "undefined" ? (chrome = msBrowser, newTab = "about:tabs") : typeof browser != "undefined" ? (chrome = browser, newTab = "about:tabs") : newTab = "chrome://newtab"
	},
	doExtension = function () {
		console.log("doing...");
	};
	isMsBrowser();
	doExtension();
})()
