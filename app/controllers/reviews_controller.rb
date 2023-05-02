class ReviewsController < ApplicationController
    before_action :authenticate_user!, only: [:create, :destroy]
  
    def create
      @product = Product.find(params[:product_id])
      @review = @product.product_reviews.build(review_params)
      @review.user = current_user
  
      if @review.save
        redirect_to @product, notice: 'Review was successfully created.'
      else
        redirect_to @product, alert: 'Unable to create review.'
      end
    end
  
    def destroy
      @product = Product.find(params[:product_id])
      @review = @product.product_reviews.find(params[:id])
  
      if @review.user == current_user
        @review.destroy
        redirect_to @product, notice: 'Review was successfully deleted.'
      else
        redirect_to @product, alert: 'You are not authorized to delete this review.'
      end
    end
  
    private
  
    def review_params
      params.require(:product_review).permit(:rating, :comment)
    end
  end
  