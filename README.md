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

function enableNoSleep() {
  noSleep.enable();
  document.removeEventListener('touchstart', enableNoSleep, false);
}

// Enable wake lock.
// (must be wrapped in a user input event handler e.g. a mouse or touch handler)
document.addEventListener('touchstart', enableNoSleep, false);

// ...

// Disable wake lock at some point in the future.
// (does not need to be wrapped in any user input event handler)
noSleep.disable();
```

## License

MIT. Copyright (c) Rich Tibbett
