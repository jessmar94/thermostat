'use strict';

function Thermostat() {
  this.temp = 20;
  this.MINIMUM_TEMP = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.powerSavingMode = true;
};

Thermostat.prototype.getCurrentTemp = function() {
  return this.temp;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemp()) {
    return;
  }
  this.temp += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemp()) {
    return;
  }
  this.temp -= 1;
};

Thermostat.prototype.reset = function() {
  return this.temp = 20;
}; 

Thermostat.prototype.isMinimumTemp = function() {
  return this.temp === this.MINIMUM_TEMP;
};

Thermostat.prototype.isMaximumTemp = function() {
  if (this.powerSavingMode === false) {
    return this.temp === this.MAX_TEMP_PSM_OFF;
  }
  return this.temp === this.MAX_TEMP_PSM_ON;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSaveOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSaveOn = function() {
  this.powerSavingMode = true;
};
