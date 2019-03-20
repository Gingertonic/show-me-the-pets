class PetsController < ApplicationController
  def dogs
    render :json => [{name: "hi"}, name: "there"]
    # Pet.where("animal_type = 'Dog'")
  end
end
