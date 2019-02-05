# npm: electron-main-window

- Author: [Ganesh Rathinavel](https://www.linkedin.com/in/ganeshrvel "Ganesh Rathinavel")
- License: [MIT](https://github.com/ganeshrvel/openmtp/blob/master/LICENSE "MIT")
- Website URL: [https://github.com/ganeshrvel/npm-electron-main-window](https://github.com/ganeshrvel/npm-electron-main-window/ "https://github.com/ganeshrvel/npm-electron-main-window")
- Repo URL: [https://github.com/ganeshrvel/npm-electron-main-window](https://github.com/ganeshrvel/npm-electron-main-window/ "https://github.com/ganeshrvel/npm-electron-main-window")
- Contacts: ganeshrvel@outlook.com

### Introduction

##### Get the main window of an Electron Application.

Finding the main window of an electron app can be tricky, this npm package solves this issue. Follow further instructions to implement the same inside your app.

Initially, I'd created **electron-main-window** package for [OpenMTP  - Advanced Android File Transfer Application for macOS](https://github.com/ganeshrvel/openmtp "OpenMTP  - Advanced Android File Transfer Application for macOS"). It works fine with [Electron React Redux Advanced Boilerplate](https://github.com/ganeshrvel/electron-react-redux-advanced-boilerplate "Electron React Redux advanced boilerplate") and [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate "electron-react-boilerplate")

## Installation

```shell
$ npm install electron-main-window

or 

$ yarn add electron-main-window
```

## Usage

```javascript
// Import ES6 way
import { getMainWindow } from 'electron-main-window';
const mainWindow = getMainWindow();

// Import ES2015 way
const mainWindow = require('electron-main-window').getMainWindow();

// e.g:
if(mainWindow !== null ){
	mainWindow.webContents.send('mainWindowCommunication', "This is a test message");
}
```

## Building from Source

Requirements: [Node.js v6+](https://nodejs.org/en/download/ "Install Node.js"), [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git "Install Git") and [npm](https://www.npmjs.com/get-npm "Install Node package manager")


### Clone
```shell
$ git clone --depth 1 --single-branch --branch master https://github.com/ganeshrvel/npm-electron-main-window.git

$ cd npm-electron-main-window
```

### Contribute
- Fork the repo and create your branch from master.
- Ensure that the changes pass linting.
- Update the documentation if needed.
- Make sure your code lints.
- Issue a pull request!

When you submit code changes, your submissions are understood to be under the same [MIT License](https://github.com/ganeshrvel/npm-electron-main-window/blob/master/LICENSE "MIT License") that covers the project. Feel free to contact the maintainers if that's a concern.


### Buy me a coffee
Help me keep the app FREE and open for all.
Paypal me: [paypal.me/ganeshrvel](https://paypal.me/ganeshrvel "paypal.me/ganeshrvel")

### Contacts
Please feel free to contact me at ganeshrvel@outlook.com

### More repos
- [Electron React Redux Advanced Boilerplate](https://github.com/ganeshrvel/electron-react-redux-advanced-boilerplate "Electron React Redux Advanced Boilerplate")
- [OpenMTP  - Advanced Android File Transfer Application for macOS](https://github.com/ganeshrvel/openmtp "OpenMTP  - Advanced Android File Transfer Application for macOS")
- [Tutorial Series by Ganesh Rathinavel](https://github.com/ganeshrvel/tutorial-series-ganesh-rathinavel "Tutorial Series by Ganesh Rathinavel")

### License
electron-main-window | Get the main window of an Electron Application is released under [MIT License](https://github.com/ganeshrvel/npm-electron-main-window/blob/master/LICENSE "MIT License").

Copyright © 2018-Present Ganesh Rathinavel
