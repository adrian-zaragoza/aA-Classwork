require_relative "00_tree_node.rb"

class KnightPathFinder
  attr_reader :root_node, :considered_positions
    
    def self.valid_moves(pos_arr)
  
        #if first index is less than zero or if the second index is more than 7
        valid_moves = []
        modifiers = [[+1,+2], [+1,-2], [+2,-1], [+2,+1],[-1,+2], [-1,-2], [-2,-1], [-2,+1]]

        modifiers.each do |array|
            row, col = array[0] + pos_arr[0], array[1] + pos_arr[1]

            if row >= 0 && row <= 7 && col >= 0 && col <= 7
                valid_moves << [row, col]
            end
        end
        valid_moves
    end

    def initialize(pos_arr)
        @root_node = PolyTreeNode.new(pos_arr)
        @considered_positions = [pos_arr]
        self.build_move_tree
    end

    #looks for valid moves that weren't already considered
    def new_move_positions(pos)
      valid_moves = KnightPathFinder.valid_moves(pos)
      @considered_positions.each do |pos|
        #use .include? to check for uniqueness
        valid_moves.delete(pos) 
      end
      p valid_moves
      @considered_positions.concat(valid_moves)
      valid_moves
    end

    def build_move_tree
        arr = [@root_node] 
        until arr.empty?
          node = arr.shift
          self.new_move_positions(node.value).each do |pos|
            new_node = PolyTreeNode.new(pos)
            node.add_child(new_node)
            arr << new_node
          end
        end
    end

    def find_path(end_pos)
        self.trace_path_back(root_node.bfs(end_pos))
    end

    def trace_path_back(node)
        arr = [node]
        end_arr = []

        until arr.empty?
            position = arr.shift
            if !position.nil?
                arr << position.parent 
                end_arr.unshift(position.value)
            end
        end
        end_arr
    end
end