class PetsController < ApplicationController
  def dogs
    render :json => Pet.where("animal_type = 'Dog'")
  end
end
