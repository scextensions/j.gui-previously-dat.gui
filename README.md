# j.gui
A lightweight graphical user interface for changing variables in JavaScript. A progressive version of Dat.GUI, since dat.GUI has since been shutdown / development ended.

Get started with j.gui by reading the [tutorial](http://workshop.chromeexperiments.com/examples/gui)
or the [API documentation](API.md).



## Packaged Builds
The easiest way to use dat.GUI in your code is by using the built source at `build/j.gui.min.js`. These built JavaScript files bundle all the necessary dependencies to run dat.GUI.

In your `head` tag, include the following code:
```html
<script type="text/javascript" src="j.gui.min.js"></script>
```

## Installing from npm (j.gui isnt available on NPM yet)
```bash
$ npm install --save j.gui
```
## Importing with a script:
### CommonJS:
```js
const dat = require('j.gui');
```

### Javascript
```js
import * as dat from 'j.gui';

const gui = new dat.GUI();
```

## Directory Contents
```
├── build - Compiled source code.
├── src - Source files.
└── tests - Tests.
```

## Building your own dat.GUI

In the terminal, enter the following:

```
$ npm install
$ npm run build
```

## npm scripts

- npm run build - Build development and production version of scripts.
- npm run dev - Build development version of script and watch for changes.


## Working with Content Security Policy
If you're using a server with a Content Security Policy in place that blocks 'unsafe-inline', you will have problems when dat.gui.js tries to inject style information. To get around this, load 'build/dat.gui.css' as an external style sheet.

## Changes
View the [Change Log](CHANGELOG.md)

## Thanks
The following libraries / open-source projects were used in the development of dat.GUI:
 * [Rollup](https://rollupjs.org)
 * [Sass](http://sass-lang.com/)
 * [Node.js](http://nodejs.org/)
 * [QUnit](https://github.com/jquery/qunit) / [jquery](http://jquery.com/)
