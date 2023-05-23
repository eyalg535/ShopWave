class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email
  has_many :carts
  has_many :orders, through: :carts
  has_many :reviews
end
