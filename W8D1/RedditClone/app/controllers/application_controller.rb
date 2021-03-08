class ApplicationController < ActionController::Base
    helper_method :current_user, :require_login, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_login
        redirect_to new_session_url unless logged_in?
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
        
    end

    def logged_in?
        !!current_user
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def require_moderator
        if @sub.creator_id != current_user.id
            redirect_to subs_url
        end
    end

    def require_author
        if @post.author_id != current_user.id
            redirect_to sub_url(@post)
        end
    end
end
