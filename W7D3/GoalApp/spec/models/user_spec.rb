require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'password' do
    #subject(:mike) {User.create(username: "")}
    let(:user) {FactoryBot.build(:user)}
    context "with valid password" do
      it "should return true" do
        expect(user.password("realpassword")).to_be true
      end
    end

    context "with invalid password" do
      it "should return false" do
        expect(user.password("wrongpassword")).to_be false
      end
    end    
  end

  describe 'username' do
    context "with valid username" do
      it {should validate_presence_of(:username)} 
    end
  end

    context "without valid username" do
      subject(:mike) {User.create(username: "")}
      #invalid_user = User.create(username: "")
      it "should return false" do
        expect{mike}.to raise_error("Password cannot be empty")
      end
    end
 
  describe "encryption" do
    it "does not save password in the database" do
      FactoryBot.create(:harry_potter) 
      user = User.find_by("Harry Potter")
      expect(user.password).not_to eq("wrongpassword")
    end

    it "creates a password digest" do
      expect(BCrypt::Password).to receive(:create).with("wrongpassword")
      FactoryBot.build(:user, password: "wrongpassword")
    end
  end

  describe "uniqueness and password length" do
   subject(:user2) {User.create(username: 'ron weasly', password: 'password', email: "ron@hogwarts.com")}
   
    context "should validate username as unique" do
    it {should validate_uniqueness_of(:username)}
    end
    
    context "should check the length of the password to be 6 or more characters" do
     it {should validate_length_of(:password).is_at_least(6)}
    end

    context "validates presence of email" do 
     it {should validate_presence_of(:email)}
    end
  end

  describe "find user by credentials" do
    context "with a valid username and password" do
      it "should return the proper user" do
        bob = User.create(username: "bob", password:"password")
        user = User.find_by_credentials("bob", "password")
        expect(bob.username).to eq(user.username)
        expect(bob.password_digest).to eq(user.password_digest)
      end
    end

    context "with invalid username and password" do
      it "should return nil" do
        lauren = User.create(username: "lauren", password: "123456")
        user = User.find_by_credentials("lauren", "random")
        expect(user).to be_nil
      end
    end
  end

  subject(:user) {User.create(username: "paul", password: "realpassword")}
  describe "session token" do
    it "assigns a token" do
      expect(user.session_token).not_to be_nil
    end
    it "resets the session token" do
      current_session_token = user.session_token
      new_session_token = user.reset_session_token!
      expect(current_session_token).not_to eq(new_session_token)
    end
  end

  describe do
    it "ensure session token" do
      tim = User.create(username: "tim", password: "password18")
      user = tim.ensure_session_token
      token = tim.reset_session_token!
      expect(user).to eq(token)
    end
  end
end
