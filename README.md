# Browserify Demo

http://browserify.org/

## Get this Repo Set Up

You need `node` and `npm`.

    npm install

Running some of these commands might require ./node\_modules/.bin to be in your
`$PATH`.

## Describe the Modules and Their Dependencies

    npm ll

## Compiling Manually

    browserify -e app/js/index.js -o app/app.js

## Sourcemaps

    browserify -e app/js/index.js -o app/app.js -d

## Compressing

    browserify -e app/js/index.js | uglifyjs > app/app.js

## External Modules

* [Built in modules ported from node stdlib](https://github.com/substack/node-browserify#compatibility)
* They just work if installed dependencies in package.json (if browser-compatible.) See also [browserify search](http://browserify.org/search) but I don't know how that list is made.
* Just download and use.

## Watching with `eye`

    eye browserify -e app/js/index.js -o app/app.js -d

## Watching with express

    npm start
