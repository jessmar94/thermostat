'use strict';

function Thermostat() {
  this.temp = 20;
  this.MINIMUM_TEMP = 10;
  this.powerSavingMode = true;
};

Thermostat.prototype.getCurrentTemp = function() {
  return this.temp;
};

Thermostat.prototype.up = function() {
  this.temp += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemp()) {
    return;
  }
  this.temp -= 1;
};

Thermostat.prototype.isMinimumTemp = function() {
  return this.temp === this.MINIMUM_TEMP;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSaveOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSaveOn = function() {
  this.powerSavingMode = true;
};
