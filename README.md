# NoSleep.js

Prevent display sleep and enable wake lock in all Android and iOS web browsers.

Check out the [live demo](https://richtr.github.io/NoSleep.js/example.html) in any Android or iOS web browser.

## Installation

This library is available on [Bower](http://bower.io/) as **nosleep**.

    $> bower install nosleep

Alternatively, you can manually add [NoSleep.js](https://github.com/richtr/NoSleep.js/blob/master/NoSleep.js) to your project (or the [minified version](https://github.com/richtr/NoSleep.js/blob/master/NoSleep.min.js)).

## Usage

Create a new NoSleep object and then enable or disable it when needed as follows:

``` javascript
var noSleep = new NoSleep();

// Enable wake lock
noSleep.enable();

// ...

// Disable wake lock
noSleep.disable();
```

NOTE FOR ANDROID BROWSERS: The user must interact with your page, by e.g. touching the screen, *at least once* for the wake lock to take effect!

## License

MIT. Copyright (c) Rich Tibbett
