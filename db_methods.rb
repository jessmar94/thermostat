def save_temp(temperature:)
  connection = PG.connect(dbname: 'thermostat')
  connection.exec("TRUNCATE TABLE temperature;")
  connection.exec("INSERT INTO temperature (temp) VALUES(#{temperature});")
end

def load_temp
  connection = PG.connect(dbname: 'thermostat')
  temp = connection.exec("SELECT temp FROM temperature;").first
  temp["temp"].to_i
end

def save_city(city:)
  connection = PG.connect(dbname: 'thermostat')
  connection.exec("TRUNCATE TABLE city;")
  connection.exec("INSERT INTO city (name) VALUES('#{city}');")
end

def load_city
  connection = PG.connect(dbname: 'thermostat')
  city = connection.exec("SELECT name FROM city;").first
  city["name"]
end
