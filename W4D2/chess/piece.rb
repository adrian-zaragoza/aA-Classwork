require_relative "board.rb"

class Piece

  attr_reader :color, :board, :pos

  def initialize

  end

  def []=(pos, val)
    row, col = pos
    self[row][col] = val
  end
end