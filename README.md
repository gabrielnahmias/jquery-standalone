jquery-standalone
=============

**jquery-standalone** is a **jQuery _plugin_** that helps in detecting if a website is in iOS' (Apple's mobile operating system) native web application mode.

What does it do?
-----------

* Adds the `iphone-standalone` CSS class to the document element to facilitate web-application-specific styling.
* Ammends jQuery's `browser` namespace so it's **neat**.
* Adds that touch o' *KADOW!*

How to use it
-----------

Before doing anything, you must include **jQuery** and **jquery.standalone.js** (or the minified version, **jquery.standalone.min.js**) on your page like so

```javascript
<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script src="jquery.standalone.js" type="text/javascript"></script>
```

Finally, _that's_ over; we can move right on to the other stuff.

Examples
-----------

The structure of using **jquery-standalone** is as simple as the following:

```javascript
if ($.browser.standalone)
	alert('Hey, you're such a STANDOUT kinda guy.  You really... STAND ALONE if you catch my drift.');
```

If you don't understand conditional logic in JavaScript, I don't think I can continue typing for your face.

As mentioned, a class gets added to the document root to help stylize elements specifically for web application mode.  You could do something like this:

```css
.iphone-standalone body {
	
	padding-top: 20px;
	
}
```

This is a perfect example of using this plugin to its most logical potential; it compensates for the status bar at the top of the iPhone which is virtually permanent by adding a small amount of space to the `body`.

Browser support
-----------

* All that jQuery supports.

License
-----------

Public domain

Acknowledgements
------------

**jquery-standalone** is a project by [Gabriel Nahmias](http://github.com/terrasoftlabs "Terrasoft's GitHub"), co-founder of [Terrasoft](http://terrasoftlabs.com "Terrasoft's Homepage").