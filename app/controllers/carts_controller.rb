class CartsController < ApplicationController
    before_action :authenticate_user!
  
    def index
      @cart_items = current_user.cart_items
    end
  
    def create
      @cart_item = current_user.cart_items.build(cart_params)
      if @cart_item.save
        redirect_to carts_path, notice: 'Item was successfully added to your cart.'
      else
        render :new
      end
    end
  
    def update
      @cart_item = current_user.cart_items.find(params[:id])
      if @cart_item.update(cart_params)
        redirect_to carts_path, notice: 'Item was successfully updated in your cart.'
      else
        render :edit
      end
    end
  
    def destroy
      @cart_item = current_user.cart_items.find(params[:id])
      @cart_item.destroy
      redirect_to carts_path, notice: 'Item was successfully removed from your cart.'
    end
  
    private
  
    def cart_params
      params.require(:cart_item).permit(:product_id, :quantity)
    end
  end
  