class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :quantity, :rate, :category
end
