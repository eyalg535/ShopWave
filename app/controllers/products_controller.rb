class ProductsController < ApplicationController
  skip_before_action :authorize

  def index
    products = Product.all
    render json: products
  end

  def show
    product = Product.find(params[:id])
    render json: product
  end

  def destroy
    product = Product.find(params[:id])
    product.destroy
    head :no_content
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.permit(:title, :price, :quantity, :description, :image, :image1, :image2, :image3, :category)
  end
end
