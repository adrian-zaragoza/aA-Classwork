require_relative "piece"

class Queen < Piece


  def symbol
    :Q
  end

  private
  def move_dirs
    [[-1,1], [-1, -1], [1, -1], [1, 1], [1, 0], [0, 1], [-1, 0], [0, -1]]
  end

end