class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_one :product
  has_one :cart
end
