require 'sinatra/base'
require 'json'
require 'pg'
require_relative 'db_methods'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*' # required for privacy reasons
    load_temp.to_json
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*' # required for privacy reasons
    save_temp(temperature: params[:temperature])
  end

  get '/city' do
    headers 'Access-Control-Allow-Origin' => '*' # required for privacy reasons
    load_city.to_json
  end

  post '/city' do
    headers 'Access-Control-Allow-Origin' => '*' # required for privacy reasons
    save_temp(city: params[:city])
  end

  run! if app_file = $0
end
