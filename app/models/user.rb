class User < ApplicationRecord
    has_secure_password

    has_many :product_reviews
    has_many :products, through: :product_review
    
    validates :username, presence: true, uniqueness: true
end
