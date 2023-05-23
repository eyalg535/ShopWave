class User < ApplicationRecord
    has_secure_password

    has_many :carts
    has_many :orders, through: :carts
    has_many :reviews
    def cart
        carts.last || carts.create
      end
    
    validates :username, presence: true, uniqueness: true
end
