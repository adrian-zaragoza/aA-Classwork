require_relative "piece.rb"

class Board

  attr_reader :rows

  def initialize
    @rows = Array.new(8) { Array.new(8) }
    self.populate

  end

  def populate
    @rows.each.with_index do |row, i|
      if i == 0 || i == 1
        row.each.with_index do |_, j|
          @rows[i][j] = Piece.new(:white, @rows, [i, j])
        end
      elsif i == 6 || i == 7
        row.each.with_index do |_, j|
          @rows[i][j] = Piece.new(:black, @rows, [i, j])
        end
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