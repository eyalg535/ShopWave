class OrderSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :cart_id, :created_at, :updated_at
end