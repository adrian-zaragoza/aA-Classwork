require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board, :next_mover_mark
  attr_accessor :prev_move_pos
  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos unless prev_move_pos.nil?
  end

  def losing_node?(evaluator)
    return false if board.over? && board.winner == evaluator
    return true if board.over? && board.winner != evaluator

    if next_mover_mark == :o
      self.children.each do |child|
        if child.losing_node?(evaluator) == false
          return false
        end
      end
      return true
    else
      self.children.each do |child|
        if child.losing_node?(evaluator) == true
          return true
        end
      end
      return false
    end
  end

  def winning_node?(evaluator)
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    arr = []
    mark = next_mover_mark
     if mark == :x
      mark = :o
    else
      mark = :x
    end
    (0...Board.blank_grid.length).each do |row|
      (0...Board.blank_grid.length).each do |col|
        pos = [row,col]
        if @board.empty?(pos)
          duplicate_board = @board.dup
          duplicate_board[pos] = self.next_mover_mark
          prev_move_pos = pos
          arr << TicTacToeNode.new(duplicate_board, mark , prev_move_pos)
        end
      end
    end
    arr
  end
 

end
