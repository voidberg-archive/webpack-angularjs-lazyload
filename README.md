# webpack-angular-lazyload
Simple example on how to use Webpack, Angular and ocLazyLoad.

## What's this?

This is a simple example that shows how you can use Webpack's code splitting with AngularJS and ocLazyLoad. ocLazyLoad is not used to load the code but rather notify AngularJS that a new module has been loaded.

It's only loading the module code and the CSS but templates can be lazy loaded via a `templateProvider` as well, e.g.:

```
templateProvider: ['$q', function($q) {
  var deferred = $q.defer();

  require.ensure([], function(require) {
    var template = require('./foo/foo.html');
    deferred.resolve(template);
  });
            
  return deferred.promise;
}],
```

**Note:** Keep an eye on ocLazyLoad since support for Webpack is in the roadmap for version 1.2: [Milestone 1.2 - Tools](https://github.com/ocombe/ocLazyLoad/issues/141).

## Installation

* `npm install -g webpack webpack-dev-server`
* `npm install`
* `bower install`

## Running the example

* `npm start`
* Open `http://localhost:8080` or `http://localhost:8080/webpack-dev-server/`.
* Look in the network tab to see the chunks loaded on demand.

## Issues

* Webpack's UglifyJsPlugin breaks the lazyloading code. To get around this you either need to disable mangling or add `$q` and `$ocLazyLoad` to the mangle exception list, like so:

```
new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  warnings: false,
  mangle: {
    except: ['$q', '$ocLazyLoad']
  },
  sourceMap: false
})
```
