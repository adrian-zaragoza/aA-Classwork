class AttrAccessorObject
  def self.my_attr_accessor(*names)
    names.each do |name|
      define_method(name) do
        instance_variable_get("@" + name.to_s)
      end
      new_name = name.to_s + "="
      define_method(new_name) do |new_val|
        instance_variable_set("@" + name.to_s, new_val)
      end
    end
  end
end
