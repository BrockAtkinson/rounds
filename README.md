# Rounds

This is a standalone `gun` chain plugin that converts gun's `.map()` function into an array, for use in `riot` packages.

```
npm install riot gun rounds
```

In your app initialization:

```
var Gun = require('gun')
Gun.chain.convert = require('rounds');
```

And then inside your riot tag, expecting gun passed as an opt object:

```
tag
  ul
    li(each='{ item in items }') { item }
  script.
    this.on('mount', init)

    function init() {
      opts.gun.get('path/to/data').rounds(this.items)
    }
```

The variable `this.items` will now stay in sync with gun's data when created or edited via `gun.set({ /* ... */ })`.