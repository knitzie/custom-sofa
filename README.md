# custom-sofa
How to set up a simple angular project with yeoman and use a single sofa component, e.g. the basket

## Release v1.0
The following shows you how to set up the whole project, without cloning this sample project from git.
If you just clone it, you don't need the following steps

### Set up the project
Make sure you installed node (`http://nodejs.org/download/`), bower, grunt, yeoman and the angular creator global on your system
If not, open commandline as administrator (windows) or use sudo (linux):
```
$ npm install -g bower grunt grunt-cli yo generator-angular
```
```
$ cd <projectPath>\custom-sofa\
```
```
$ yo angular
```

Answer the following Questions how you like. I said: Yes, Yes, Yes, angular-resource.js and angular-route.js

Edit the bower.json in your new root folder:
```
{
  "name": "custom-sofa",
  "version": "0.0.0",
  "dependencies": {
    //...
    "angular-touch": "1.2.16",
    "sofa-core": "0.10.1",
    "sofa-checkout-service": "0.6.0"
  },
  //...
}
```
```
$ bower install
```

You may have to select the right version of sofa-core. Simply choose the newest one.

The basics are installed, now you can start coding. 

### Project content
Create angularJs factories for basketService, storageService and confiServide (== `custom-sofa\app\scripts\factory.js`)
Do something with your new basket inside your controller (== `custom-sofa\app\scripts\controllers\main.js`)
Don't forget to import your scipts inside `custom-sofa\app\index.html` and show something in `custom-sofa\app\views\main.html`

![screenshot version 1.0](/screenshot_v100.jpg?raw=true "screenshot version 1.0")

## Release v2.0
In this release I added some features like the angularJS snap tool and angular broadcast. I like to separate that into 
another version than the basic project for beginners. If there will be more features, I'll place them in this version.

![screenshot version 2.0](/screenshot_v200.jpg?raw=true "screenshot version 2.0")

## You can help
If you've found a bug, a bugfix or something other helpfull, message me: `knitzie0815@gmail.com`