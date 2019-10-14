'use strict';

function Thermostat() {
  this.temp = 20;
}

Thermostat.prototype.getCurrentTemp = function() {
  return this.temp; 
};
