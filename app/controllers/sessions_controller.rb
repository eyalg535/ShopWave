class SessionsController < ApplicationController
  skip_before_action :authorize

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    if session[:user_id]
      session.delete(:user_id)
      render json: { message: "Logged out" }
    else
      render json: { message: "Not logged in" }, status: :unauthorized
    end
  end
end
