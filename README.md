# angular-metas
Dynamic <meta> tags setter for AngularJS compatible with default [router](https://github.com/angular/router) and [ui-router](https://github.com/angular-ui/ui-router)

[![npm:](https://img.shields.io/bower/v/angular-metas.svg)](https://www.npmjs.com/arm4design/angular-metas)
[![github:](https://img.shields.io/github/release/arm4design/angular-metas.svg)](https://github.com/arm4design/angular-metas)
[![github:](https://img.shields.io/github/issues/arm4design/angular-metas.svg)](https://github.com/arm4design/angular-metas/issues)
[![Build Status](https://img.shields.io/travis/arm4design/angular-metas.svg)](https://travis-ci.org/arm4design/angular-metas)

### Install
You can use bower, npm or just download the files from the [repository](https://github.com/arm4design/angular-metas)
##### bower
````javascript
bower install angular-metas --save
````
##### npm
````javascript
npm install angular-metas
````

Then, include the module file into your index HTML file
````html
<script src="${wherever-your-dependencies-are}/angular-metas/metas.js" />
````

### Usage
##### Configuration
You should define the metas defaults during the config runtime. Just inject the provider and make use of ````.setDefaults()```` method passing an object with the default values
````javascript
app.config(['metasProvider', function(metasProvider){
    metasProvider.setDefaults({
        title: 'Default title',
        description: 'Default description',
        author: 'John Doe'
    });
}]);
````
Then synchronize those defaults with your ````<meta>```` tags in ````<head>````
````html
<meta name="title" content="{{ metas.title }}" />
<meta name="description" content="{{ metas.description }}" />
<meta name="author" content="{{ metas.author }}" />
````
Typically, the number of properties in defaults would be the same as the number of ````<meta>```` tags.
##### Service Usage
Inject the metas service into your controllers and use ````.setMetas()```` to define the values
````javascript
app.controller('PageController', ['metas', function(metas){
    metas.setMetas({
        title: 'Page title',
        description: 'Page description'
    })
}]);
````
In the case above, the author meta will be set with the default value defined through the provider.
##### Using defaults
Passing *null* or *no argument* or *empty object* or *undefined* will set **defaults**.
````javascript
// All below calls will set default metas
metas.setMetas(null);
metas.setMetas();
metas.setMetas({});
metas.setMetas(undefined);
````

### Full documentation
Check the jsdoc [here](http://asoriano.me/jsdoc/angular-metas/1.0.0/index.html)
or create it locally just installing [jsdoc](https://github.com/jsdoc3/jsdoc) and
````javascript
jsdoc --readme ${path-to-readme} --package ${path-to-package.json} ${path-to-cloned-folder}
````

### Tests
It uses [protractor](https://angular.github.io/protractor/#/tutorial)
##### Run tests using npm
From inside the angular-metas cloned repository run
````javascript
npm test
````

### Demo
Check it out working [here](http://asoriano.me/demo/angular-metas/index.html)

### License
[MIT](https://github.com/arm4design/angular-metas/blob/master/LICENSE)
