class PetsController < ApplicationController
  def dogs
    render :json => Pet.where("animal_type = 'Dog'")
  end

  def cats
    render :json => Pet.where("animal_type = 'Cat'")
  end

  def search
    binding.pry
  end
end
