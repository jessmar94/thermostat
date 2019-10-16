$(document).ready(function() {

  var thermostat = new Thermostat()
  $("#temperature").text(thermostat.temp) 

  $("#temperature-up").click(function() {
    thermostat.up();
    $("#temperature").text(thermostat.temp)
  })

  $("#temperature-down").click(function() {
    thermostat.down();
    $("#temperature").text(thermostat.temp)
  })


});
