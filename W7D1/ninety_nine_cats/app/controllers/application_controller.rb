class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def current_user
        @current ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        @current != nil
    end

end
