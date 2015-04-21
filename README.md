# NoSleep.js

Prevent display sleep and enable wake lock in all Android and iOS web browsers.

## Installation

This library is available on [Bower](http://bower.io/) as **nosleep**.

    $> bower install nosleep

Alternatively, you can manually add [NoSleep.js](https://github.com/richtr/NoSleep.js/blob/master/NoSleep.js) to your project and then also copy the [video files](https://github.com/richtr/NoSleep.js/blob/master/resources/) provided to a `./resources` sub-directory.

Also check out the [live demo of NoSleep.js](https://richtr.github.io/NoSleep.js/example.html).

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

## License

MIT. Copyright (c) Rich Tibbett
