require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'password' do
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
     # invalid_user = User.create(username: "", password: "password")
      it "should return false" do
        expect(:invalid_user).to_not be valid
      end
    end
 

end
