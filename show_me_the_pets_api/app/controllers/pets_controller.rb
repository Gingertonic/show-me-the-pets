class PetsController < ApplicationController
  def index
    render :json => Pet.all
  end
  #
  # def dogs
  #   render :json => Pet.where("animal_type = 'Dog'")
  # end
  #
  # def cats
  #   render :json => Pet.where("animal_type = 'Cat'")
  # end

end
