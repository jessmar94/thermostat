'use strict';

describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('thermostat temperature', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });

    it('increases the temperature with up()', function() {
      thermostat.up()
      expect(thermostat.getCurrentTemp()).toEqual(21);
    });

    it('decreases the temperature with down()', function() {
      thermostat.down()
      expect(thermostat.getCurrentTemp()).toEqual(19);
    });

    it('has a min temp of 10', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemp()).toEqual(10);
    });

    // it('has a max temp of 25', function() {
    //   for (var i = 0; i < 6; i++) {
    //     thermostat.up();
    //   }
    //   expect(thermostat.getCurrentTemp()).toEqual(25);
    // });
  });

  describe('power saving mode', function() {
    it('returns true if power saving mode is on', function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
    it('can switch PSM off', function() {
      thermostat.switchPowerSaveOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });
    it('can switch PSM on', function() {
      thermostat.switchPowerSaveOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSaveOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });
});
