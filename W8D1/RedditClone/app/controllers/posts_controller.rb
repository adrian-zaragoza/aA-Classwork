class PostsController < ApplicationController
  before_action :require_author, only:[:edit, :update]
  before_action :require_login, only:[:new, :create, :edit, :update]

  def new
    @post = Post.new
    @sub_id = params[:sub_id]
    render :new
  end

  def create
    @post = Post.new(post_params)
    @post.sub_id = params[:sub_id]
    @post.author_id = current_user.id
    if @post.save
      redirect_to post_url(@post)
    else
      render :new
    end
  end

  def show
    @post = Post.find_by(id: params[:id])

    render :show
  end

  def edit
    @post = Post.find_by(id: params[:id])

    render :edit
  end

  def update
    @post = Post.find_by(id: params[:id])

    if @post.update(post_params)
      redirect_to post_url(@post)
    else
      render :edit
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :url, :content)
  end
end
