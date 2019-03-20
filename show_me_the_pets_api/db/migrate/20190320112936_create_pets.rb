class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets, id: false do |t|
      t.string :animal_id, null: false
      t.string :name
      t.string :animal_type
      t.string :gender
      t.string :breed
      t.string :color
      t.string :address
    end
  end
end
