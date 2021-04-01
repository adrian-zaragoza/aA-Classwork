class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)

    if @user && self.login!(@user)
      redirect_to users_url
    else
      render "User does not exist", status: 422 
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])

    if @user
      self.logout!
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
