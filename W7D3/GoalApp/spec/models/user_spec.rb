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
   
   it "should check username for uniqueness" do
    it {should validate_uniqueness_of(:username)}
   end
    
   it "should check the length of the password to be 6 or more characters" do
     it {should validate_length_of(:password).is_at_least(6)}
   end

   it "validates presence of email" do 
     it {should validate_presence_of(:email)}
   end
  end

end
