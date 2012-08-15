/*!
 * jquery-standalone v1.0.0
 * http://github.com/terrasoftlabs/jquery-standalone
 *
 * Copyright © 2012 Gabriel Nahmias.
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

( function ($) {
	
	if ( window.navigator.userAgent.match(/iphone/gi) != null ) {
		
		// Might as help indicate if we're on an iPhone or not.
		
		$.browser.iphone = true;
		
		if ( ("standalone" in window.navigator) && !window.navigator.standalone ) {
			
			$.browser.standalone = false;
			
		} else {
			
			$.browser.standalone = true;
			
			// Add a class to the body indicating we're on an iPhone and it's a web application
			// to facilitate custom styling, etc.
			
			$("html").addClass("iphone-standalone");
			
		}
		
	} else {
		
		// No go.
		
		$.browser.iphone = false;
		$.browser.standalone = false;
		
	}
	
} )(jQuery);