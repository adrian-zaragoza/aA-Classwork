

class Bishop < Piece


  def symbol
    :B
  end

  private
  def move_dirs
    [[-1,1], [-1, -1], [1, -1], [1, 1]]
  end

end