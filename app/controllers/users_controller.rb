class UsersController < ApplicationController

  def index
    render json: User.where.not(id: session[:user_id]), status: :ok
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user, status: :accepted
    else
      render json: { error: "No user is logged in." }, status: :unauthorized
    end
  end

  def create 
    new_user = User.create!(user_params)
    session[:user_id] = new_user.id
    render json: new_user, status: :created
  end

  def destroy
    user = User.find_by(id: session[:user_id])
    user.destroy
    head :no_content, status: :accepted
  end

  private

  def invalid_record e
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  def user_params
    params.permit(:username, :avatar, :password, :password_confirmation)
  end
end
