require 'sinatra/base'
require 'json'
require 'pg'
require_relative 'db_methods'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*' # required for privacy reasons
    # create var in database and return to json .to_i.to_json
    # if temperature == nil
    #   temperature = 20
    # end
    load_temp.to_json
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*' # required for privacy reasons
    # temperature = params[:temperature]
    save_temp(temperature: params[:temperature])
  end

  run! if app_file = $0
end
