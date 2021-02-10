require_relative "piece.rb"
require_relative "rook.rb"
require_relative "knight.rb"
require_relative "queen.rb"
require_relative "bishop.rb"
require_relative "king.rb"
require_relative "pawn.rb"
require_relative "null_piece.rb"

class Board

  attr_reader :rows

  def initialize
    @rows = Array.new(8) { Array.new(8) }
    self.populate

  end

  def populate
    populate_null
    populate_pawn
    populate_rook
    
  end

  def populate_null
    (2..5).each do |i|
      @rows[i].each_with_index do |_, j|
        @rows[i][j] = NullPiece.new
      end
    end
  end

  def populate_pawn
    i = 1
    @rows[i].each_with_index do |_, j|
        @rows[i, j] = Pawn.new(:white, rows, [i, j])
    end

    i = 6
    @rows[i].each_with_index do |_, j|
      @rows[i, j] = Pawn.new(:black, rows, [i, j])

  end

  def populate_rook
    rook_pos = [[0, 0], [0, 7], [7, 0], [7, 7]]

    rook_pos.each_with_index do |pos, i|
      if i <= 1
        self[pos] = Rook.new(:white, rows, pos)
      else
        self[pos] = Rook.new(:black, rows, pos)
      end
    end
  end

  def populate_knight
    knight_pos = [[0, 1], [0, 6], [7, 1], [7, 6]]

    knight_pos.each_with_index do |pos, i|
      if i <= 1
        self[pos] = Knight.new(:white, rows, pos)
      else
        self[pos] = Knight.new(:black, rows, pos)
      end
    end
  end


  def [](pos)
    row, col = pos
    @rows[row][col]
  end

  def []=(pos, value)
    row, col = pos
    @rows[row][col] = value
  end

  def valid_pos?(pos)
    row, col = pos
    return false if row < 0 || row >= 8 || col < 0 || col >= 8
    true
  end

  def move_piece(start_pos, end_pos)
    if !valid_pos?(start_pos)
      raise "There is no piece at start position!"
    elsif !valid_pos?(end_pos)
      raise "The piece cannot be moved to this end position!"
    end
    piece = self[start_pos]
    self[start_pos] = nil
    self[end_pos] = piece
  end

  private
  :null_piece
end

