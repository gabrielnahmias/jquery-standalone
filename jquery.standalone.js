/*!
 * jquery-standalone v1.0.1
 * http://github.com/terrasoftlabs/jquery-standalone
 *
 * Copyright © 2012 Gabriel Nahmias.
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

( function ($) {
	
	var that = this,
	
	// Constants:
		CLASS = "iphone-standalone";
	
	if (!$.browser)
		$.browser = {};
	
	$.browser.__standaloneOn = false;
	
	var methods = {
		toggle: function(oParams) {
			
			this.oSettings = $.extend( {
				spacer: true
			}, oParams);
			
			if ($.browser.__standaloneOn) {
				$("."+CLASS+".spacer").remove();
				document.documentElement.className.replace( ( ( document.documentElement.className.split(" ").length <= 1 ) ? "" : " ") + CLASS , "");
				$.browser.__standaloneOn = false;
			} else {
				if ( window.navigator.userAgent.match(/iphone/gi) != null ) {
					
					// Might as well help indicate if we're on an iPhone or not.
					$.browser.iphone = true;
					
					if ( ("standalone" in window.navigator) && !window.navigator.standalone ) {
						$.browser.standalone = false;
					} else {
						$.browser.standalone = true;
						
						// Add a class to the root element indicating we're on an iPhone and it's a web application
						// to facilitate custom styling, etc.
						document.documentElement.className +=
						((document.documentElement.className == "") ? "" : " ") + CLASS;
						
						if (this.oSettings.spacer) {
							// Optionally, add a small spacer to the top of the page to prevent page content
							// from being under the iPhone status bar.
							$("body").prepend('<div class='+CLASS+' spacer"></div>').css("padding-top", "20px");
						}
						
					}
					$.browser.__standaloneOn = true;
					
				} else {
					// No go.
					$.browser.iphone = false;
					$.browser.standalone = false;
				}
			}
		}
	}
		
	$.standalone = function(method) {
		// Main execution.
		if ( methods[method] )
			return methods[method].apply( this, Array.prototype.slice.call(arguments, 1) );
		else if (typeof method === 'object' || !method)
			return methods['toggle'].apply(this, arguments);
		else
			$.error('Method ' + method + ' does not exist in jQuery.standalone.');
	};
	
} )(jQuery);