@pokemon.each do |pokemon|
  json.set! pokemon.id do 
    json.extract! pokemon, :id, :name, :img_url
  end
end