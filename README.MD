## Information
This is an Express framework based on my personal habit, not based on the Express Generator.
Other web application could be build on the foundation of this one.

## Install
```
git clone <repository link > #clone the code
npm install #install the package if develop else use --production
npm install --production #used in production
```
## Backend
* Frame: Express
  * config.js: configuration file
  * app.js: application layer
  * routes: router layer all the restful api should be in this folder
* Database: depends on your need, mkdir database

## Frontend
* static files: mkdir<css,images,javascript> under the public fold
* Gulp: build tools
* Frame: reactjs,augularjs depends on your need
