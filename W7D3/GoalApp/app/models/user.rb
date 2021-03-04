class User < ApplicationRecord
  attr_reader :password
  
  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end
end
