class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :quantity, :image, :image1, :image2, :image3, :category
end
