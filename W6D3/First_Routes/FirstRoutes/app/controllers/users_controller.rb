class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(new_user_info)
    
    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def show
    user = User.find_by(id: params[:id])
    render json: user
  end

  def update
    
    user = User.find_by(id: params[:id])

    if user.update(new_user_info)
      render json: user
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def new_user_info
    params.require(:user).permit(:name, :email)
  end

  def destroy
    user = User.find_by(id: params[:id])
    user.destroy

    render json: user
  end
  
end