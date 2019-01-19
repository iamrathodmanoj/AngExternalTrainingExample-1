This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

# Angular
[NavigateToSite](https://angular.io/)
Electron is used to convert the JS web applications to desktop applications.

JS frameworks are character based which is Command Line Interface – **CLI**

Check node version using command `node -v`-----------(8+)

Install angular cli using command `npm install -g @angular/cli@1`

Check angular cli version using command `ng -v` ---------(1 for A5 and latest 6 for A5+)    

Install web service in your system using command `npm install -g json-server`

Check Json server version using `json-server -v` -------------(0.14.2)

All dependencies for your project will be in `“node_modules”`

Add configurations to your project using `npm init`, we can use `npm init -y` without asking any questions it will create the package.json file with default values.

**Package.json** is a metadata for your project which has project info and dependencies.

Install bootstrap using command `npm install bootstrap` -------- it is local, not installed globally.

**Webpack** is a module bundler which allows to bundle all the JS files for your project.

Scripting is **case sensitive**.

Install webpack using command `npm install -D webpack-cli webpack`

Run your files using webpack `node_modules\.bin\webpack js.app.js` ------------- webpack and file path
To run our own scripts apart from default use run command – **npm run <own_Script_CommandName>**
Example: npm run test1

---
**Var** is global scope variable and **let** is for block scope. --------- ES6

JS is an **Interpreter** whereas C# is a **compiler**, same type scripting needs to be included using language called as **Typescript**.

JS is **Object based language**.

Typescript/c# is **Object oriented language**.

Install typescript using command `npm install -g typescript`.

Implicit declaration and Explicit declaration (type annotation).

Transpile ts file to js file by `node_modules\.bin\tsc ts\test.ts` ------------ tsc and ts file name.

`node_modules\.bin\tsc --init` generates the configuration file for Typescript. 
Add "noEmitOnError": true, in order not to generate the js file if there is an error in ts. 

    "transpile": "tsc ts\\test.ts", //if left just with tsc it takes the root directory
    "transpileWatch": "tsc -w" // any changes for ts files will be watched

---

JavaScript is case sensitive – **function** is declaring function, **Function** is data type

    1.Primitive types: string, number and Boolean
    2.Special types: any, void
    3.Array types: [], Array
    4.Function types: Function
    5.Object types: {}

**Decorator**: More info about a class/data/method
`Ng serve` is used to run the application
`Ng serve -o` is used to run and open the same in browser 

#Features of Angular:
Angular is made of Tree structure of components.
Each project should have a root component
Component Convention: Name + component => AppComponent

**BrowserModule**: Help us to render custom tags to browser.