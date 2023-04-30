class ProductsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index
        products = Product.all
        render json: products
    end

    def show
        product = Product.find(params[:id])
        render json: product
    end

    
end
