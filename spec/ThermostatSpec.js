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
  });
});
