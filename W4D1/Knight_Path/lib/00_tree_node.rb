class PolyTreeNode

  attr_reader :parent, :children, :value
  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  def parent=(node)
    if node.nil?
      parent.children.delete(self)
    elsif node.children.include?(self)
      return
    elsif @parent.nil?
      node.children << self
    else
      node.children << self
      parent.children.delete(self)
    end

    @parent = node 
    
  end

  def add_child(child_node)
    child_node.parent = self
  end

  def remove_child(child_node)
    child_node.parent = nil
  end

  def dfs(target_value)
    return self if self.value == target_value
    
    children.each do |child|
      search_result = child.dfs(target_value)
      return search_result unless search_result.nil?
    end
    nil
  end

  def bfs(target_value)
    arr = []
    arr.unshift(self)

    while arr.length > 0
        ele = arr.pop
        return ele if ele.value == target_value
        ele.children.each {|child| arr.unshift(child)}
    end

    nil

  end



end


