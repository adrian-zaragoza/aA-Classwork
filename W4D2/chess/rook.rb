
require_relative "slideable.rb"
require_relative "piece.rb"


class Rook < Piece

  include Slideable
  # def initialize(color, board, pos)
  #   super
  # end

  def symbol
    :R
  end

  private
  def move_dirs
    [[1, 0], [0, 1], [-1, 0], [0, -1]]
  end
end