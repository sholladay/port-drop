# port-drop

> Bind to a port and drop privileges.

## Why?

 - Running as root is unsafe.
 - Ports below 1024 require root privileges.
 - Drop privileges fast by binding to a port early.

## Install

```sh
npm install port-drop --save
```

## Usage

Get it into your program.

```js
const portDrop = require('port-drop');
```

Allocate file descriptors for some ports you intend to use and immediately drop privileges.

```js
const fd = portDrop.allocate({
    http  : 80,
    https : 443
});
```

The returned `fd` object has the same properties as the input object, but with the values being file descriptors. You can then pass these to Node's [Server#listen()](https://nodejs.org/api/http.html#http_server_listen_handle_callback) method, for example.

## Contributing

See our [contributing guidelines](https://github.com/sholladay/port-drop/blob/master/CONTRIBUTING.md "The guidelines for participating in this project.") for more details.

1. [Fork it](https://github.com/sholladay/port-drop/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/port-drop/compare "Submit code to this project for review.").

## License

[MPL-2.0](https://github.com/sholladay/port-drop/blob/master/LICENSE "The license for port-drop.") © [Seth Holladay](http://seth-holladay.com "Author of port-drop.")

Go make something, dang it.
