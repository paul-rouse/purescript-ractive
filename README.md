
# purescript-ractive

RactiveJS bindings for PureScript (Work in progress)

Based on the original sources from <a href="https://github.com/AitorATuin/purescript-ractive" target="_blank">AitorATui</a>

This version is compatible with **psc 0.8.0.0**.

The original Grunt mechanics were replaced by Gulp/WebPack.

For quick testing a <a href="https://github.com/brakmic/purescript-ractive/blob/master/demo/scripts/app.purs">small demo app</a> with detailed comments is available.

### Screenshot
<img src="http://fs5.directupload.net/images/160103/tevk6oy3.png" width="378" height="472">

My <a href="http://blog.brakmic.com/webapps-with-purescript-and-ractivejs/" target="_blank">article</a> on using PureScript with RactiveJS.

### Currently implemented APIs

- <a href="http://docs.ractivejs.org/latest/ractive-get" target="_blank">get</a>
- <a href="http://docs.ractivejs.org/latest/ractive-set" target="_blank">set</a>
- <a href="http://docs.ractivejs.org/latest/ractive-on" target="_blank">on</a>
- <a href="http://docs.ractivejs.org/latest/ractive-off" target="_blank">off</a>
- <a href="http://docs.ractivejs.org/latest/ractive-push" target="_blank">push</a>
- <a href="http://docs.ractivejs.org/latest/ractive-pop" target="_blank">pop</a>

### Future planning

To map all of the <a href="http://docs.ractivejs.org/latest/get-started" target="_blank">Ractive APIs</a> to PureScript.

### Building the Bindings

```
npm install (initial build only)
bower update (initial build only)
gulp
```

### Building the Demo

```
gulp build-demo
open index.html from subdir demo
```

### Bugs / Issues etc.

There's a <a href="https://github.com/purescript/purescript/issues/1767" target="_blank">bug</a> in the current PureScript release that leads to generation of invalid identifiers (e.g *fʹ* or *w'*).

This <a href="https://github.com/purescript/purescript/pull/1737" target="_blank">will be fixed</a> in the next RC/release and until then I'm shipping the autogenerated & cleaned JS files in the **output** directory.

### License

<a href="https://github.com/brakmic/purescript-ractive/blob/master/LICENSE">MIT</a>
