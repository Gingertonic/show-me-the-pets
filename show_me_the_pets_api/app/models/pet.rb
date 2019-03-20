class Pet < ActiveRecord::Base
  # attr_accessor :id, :name, :animal_type, :gender, :breed, :color
  self.primary_key = "animal_id"

  def self.new_from_csv(row)
    elements = row.to_s.split(",")
    attrs = {
      animal_id: elements[0],
      name: elements[1],
      animal_type: elements[2],
      gender: elements[3],
      breed: elements[4],
      color: elements[5],
      address: elements[6]
    }
    Pet.create(attrs)
  end

end
