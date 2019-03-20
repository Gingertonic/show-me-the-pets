Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/pets', to: 'pets#index'
  # get '/pets/dogs', to: 'pets#dogs'
  # get '/pets/cats', to: 'pets#cats'
  # post '/pets/search', to: 'pets#search'
end
