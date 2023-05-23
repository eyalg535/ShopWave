class CartsController < ApplicationController
  skip_before_action :authorize, only: [:create, :update, :checkout, :show, :index, :current_user_cart]

  def create
    cart = Cart.create(user_id: params[:user_id])
    user = User.find(params[:user_id])
    render json: user, include: { carts: { include: { orders: { include: :product } } } }
  end

  def show
    cart = Cart.find(params[:id])
    render json: cart, include: { orders: { include: :product } }
  end

  def update
    product_params = params[:products].permit(:id, :title, :description, :price, :quantity, :image, :image1, :image2, :image3)
    cart = Cart.find(params[:id])
    product = Product.find_or_initialize_by(id: product_params[:id])
    product.assign_attributes(product_params)
    cart.products << product
    if cart.save
      render json: cart, status: :ok
    else
      render json: { error: 'Failed to add product to cart' }, status: :unprocessable_entity
    end
  end

  def destroy
    cart = Cart.find(params[:id])
    orders = cart.orders

    if params[:order_id].present?
      # Delete a single order/product
      order = orders.find(params[:order_id])
      order.destroy
    else
      # Delete all orders/products
      orders.destroy_all
    end

    # Return a success response
    head :no_content
  end

  def current_user_cart
    user = User.find(params[:user_id])
    cart = user.carts.last
    render json: cart, include: { orders: { include: :product } }
  end
  
  
  def checkout
    user = User.find(params[:id])
    cart = user.carts.last
    render json: cart, include: { orders: { include: :product } }
  end
end
