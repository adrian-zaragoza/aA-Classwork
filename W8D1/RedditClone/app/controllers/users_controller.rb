class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user && @user.save
      login(@user)
      redirect_to users_url
    else
      render :new
    end
  end

  def index
    @users = User.all
    render :index
  end


  private
  def user_params
    params.require(:user).permit(:username,:password)
  end

  
end
