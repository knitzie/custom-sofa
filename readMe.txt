##################
# How to set up a simple angular project with yeoman
# and use a single sofa component, e.g. the basket 
##################

The following shows you how to set up the whole project, without cloning this sample project from git.
If you just clone it, you don't need the following steps


Make sure you installed node ( http://nodejs.org/download/), bower, grunt, yeoman and the angular creator global on your system
If not, open commandline as administrator (windows) or use sudo (linux):
$ npm install -g bower grunt grunt-cli yo generator-angular

$ cd <projectPath>\custom-sofa\

$ yo angular

Answer the following Questions how you like. I said: Yes, Yes, Yes, angular-resource.js and angular-route.js

Edit the bower.json in your new root folder:
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

$ bower install

You may have to select the right version of sofa-core. Simply choose the newest one.

The basics are installed, now you can start coding. 
Create angularJs factories for basketService, storageService and confiServide (<==> custom-sofa\app\scripts\factory.js)
Do something with your new basket inside your controller (<==> custom-sofa\app\scripts\controllers\main.js)
Don't forget to import your scipts inside custom-sofa\app\index.html and show something in custom-sofa\app\views\main.html

###
# bug
###
There is something wrong with the dependency installation of sofa-checkout-service. When adding the import for sofa-q-service, it selects the wrong path. You need to change that line in index.html into:
<script src="bower_components/sofa-q-service/dist/sofa.qService.js"></script>