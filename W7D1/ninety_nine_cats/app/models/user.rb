class User < ApplicationRecord
  before_validation :password
  after_initialize :set_session_token
  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6}

  attr_accessor :password

  def self.find_by_credentials(user_name, password)
    user = User.find_by(username: user_name)

    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def set_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password) 
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
