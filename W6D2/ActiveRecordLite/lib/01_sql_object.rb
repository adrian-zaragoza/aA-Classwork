require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @columns if @columns

    columns = DBConnection.execute2(<<-SQL)
      SELECT
        *
      FROM
        #{table_name}
    SQL

    @columns = columns[0].map(&:to_sym)
  end

  def self.finalize!
    self.columns.each do |column|
      define_method(column) do
        attributes[column]
      end
      define_method(column.to_s + "=") do |value|
        attributes[column] = value
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name ||= self.to_s.tableize
  end

  def self.all
    all_data = DBConnection.execute(<<-SQL)
    SELECT
      *
    FROM
      #{table_name}
    SQL
    self.parse_all(all_data)
  end

  def self.parse_all(results)
    results.map {|result| self.new(result)}
  
  end

  def self.find(id)
    DBConnection.execute(<<-SQL)
    SELECT
      *
    FROM
      #{table_name}
    WHERE
    #{table_name}.id = #{id}
    SQL
  end

  def initialize(params = {})
    params.each do |attr_name, value|
      if !self.class.columns.include?(attr_name.to_sym)
        raise "unknown attribute '#{attr_name}'"
      else
        send("#{attr_name}=", value)
      end

    end
  end

  def attributes
    @attributes ||= Hash.new

  end

  def attribute_values
    
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end

end
