require_relative "piece.rb"

class Board

  attr_reader :rows

  def initialize
    @rows = Array.new(8) { Array.new(8) }
    #@null_piece 
    @queens = [Piece.new("white", @rows, [7,3]), Piece.new("black", @rows, [0,5])]
    # @kings = []
    # @rooks = []
    # @knight = []
    # @bishops = []
    # @pawns = []
  end

  def [](pos)
    row, col = pos
    @board[row][col]
  end

  def []=(pos, value)
    row, col = pos
    @board[row][col] = value
  end

  def valid_pos?(pos)
    row, col = pos
    return false if row < 0 || row >= 8 || col < 0 || col >= 8
    true
  end

  def move_piece(color, start_pos, end_pos)
    if @board[start_pos] == nil || self.color != color
      raise "There is no piece at start position!"
    elsif !valid_pos?([end_pos]) && self.color == color
      raise "The piece cannot be moved to this end position!"
    end
    piece = @board[start_pos]
    piece.pos = end_pos

    @board[start_pos] = :null_piece
    @board[end_pos] = piece
  end

  private
  :null_piece
end