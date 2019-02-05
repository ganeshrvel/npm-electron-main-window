'use strict';

// Checks if we are in renderer process
module.exports.isRenderer = process.type === 'renderer';
