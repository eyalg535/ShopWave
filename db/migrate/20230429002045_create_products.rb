class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.float :price
      t.integer :quantity
      t.float :rate

      t.timestamps
    end
  end
end
