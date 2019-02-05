'use strict';

const electron = require('electron');
const IS_RENDERER = require('./electronEnv').isRenderer;
const funcs = require('./funcs');

const BrowserWindow = electron.BrowserWindow;
const remote = electron.remote;
const undefinedOrNull = funcs.undefinedOrNull;

const getMainWindow = () => {
  // renderer process
  if (IS_RENDERER) {
    const mainWindow = remote.BrowserWindow.getAllWindows();

    if (
      undefinedOrNull(mainWindow) ||
      undefinedOrNull(mainWindow[mainWindow.length - 1])
    ) {
      return null;
    }

    return mainWindow[mainWindow.length - 1];
  }

  // main process
  const mainWindow = BrowserWindow.getAllWindows();
  if (
    undefinedOrNull(mainWindow) ||
    undefinedOrNull(mainWindow[mainWindow.length - 1])
  ) {
    return null;
  }

  return mainWindow[mainWindow.length - 1];
};

module.exports.getMainWindow = getMainWindow;
