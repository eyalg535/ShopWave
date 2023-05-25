class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def create
    user = User.create(user_params)
    Cart.create(user_id: user.id)
    if user.valid?
      session[:user_id] = user.id
      render json: { success: true, id: user.id }
    else
      render json: { success: false }
    end
  end

  def show
    current_user = User.find(params[:id])
    render json: current_user, include: { carts: { include: { orders: { include: :product } } }, orders: { include: :product } }
  end

  def index
    users = User.all
    render json: users
  end

  def me
    if session[:user_id]
      user = User.find(session[:user_id])
      render json: user
    else
      render json: { error: "User not logged in" }, status: :unauthorized
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :address, :email, :user_id)
  end
end
