class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title
      t.integer :price
      t.integer :quantity
      t.string :description
      t.string :image
      t.string :image1
      t.string :image2
      t.string :image3
      t.string :category

      t.timestamps
    end
  end
end
