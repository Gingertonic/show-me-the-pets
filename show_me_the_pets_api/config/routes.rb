Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/pets/dogs', to: 'pets#dogs'
  get '/pets/cats', to: 'pets#cats'
end
