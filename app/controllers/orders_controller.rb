class OrdersController < ApplicationController
  skip_before_action :authorize, only: [:create, :index, :show]

  def create
    order = Order.create(
      product_id: params[:product_id],
      cart_id: params[:cart_id],
    )
    render json: order, include: [:product, :cart]
  end

  def show
    order = Order.find(params[:id])
    render json: order, include: [:product, :cart]
  end

  def index
    orders = Order.all
    render json: orders
  end
end
