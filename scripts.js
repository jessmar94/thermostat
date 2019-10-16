$(document).ready(function() {

  var thermostat = new Thermostat()
  updateTemperature()

  $("#temperature-up").click(function() {
    thermostat.up();
    updateTemperature();
  })

  $("#temperature-down").click(function() {
    thermostat.down();
    updateTemperature();
  })

  $("#temperature-reset").click(function() {
    thermostat.reset();
    updateTemperature();
  })

  $("#powersaving-on").click(function() {
    thermostat.switchPowerSaveOn();
    $("#power-saving-status").text("On")
  })

  $("#powersaving-off").click(function() {
    thermostat.switchPowerSaveOff();
    $("#power-saving-status").text("Off")
  })

  function updateTemperature() {
    $("#temperature").text(thermostat.temp)
    $("#temperature").attr('class', thermostat.energyUsage())
    $("#celsius").attr('class', thermostat.energyUsage())
  }

  $("#city").change(function() {
    var city = $("#city").val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $("#temp-api").text(data.main.temp);
    })
    $("#chosen-city").text(city)
  })

//   $("#city").change(function() {
//     // $("#picture").attr('src', $(this).find(":selected").attr("data-src"))
//     $("#picture").attr('src', $("#city").val())
//   })
// });

$(".london").change(function() {
  $("#picture").attr('src', 'public/London_sketch.jpg')
})

$(".paris").change(function() {
  $("#picture").attr('src', 'public/Paris-sketch.jpg')
})