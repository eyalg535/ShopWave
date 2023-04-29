class Product < ApplicationRecord
    has_many :product_reviews
    has_many :users, through: :product_reviews
end
