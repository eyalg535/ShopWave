class User < ApplicationRecord
  has_secure_password
  has_many :cart_items
  has_many :products, through: :cart_item
  has_many :product_reviews

  validates :username, presence: true, uniqueness: true
end
