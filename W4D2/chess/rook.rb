require_relative "piece.rb"
require_relative "slideable.rb"

class Rook < Piece

  include Slideable

  def symbol
    :R
  end

  private
  def move_dirs
    [[1, 0], [0, 1], [-1, 0], [0, -1]]
  end
end