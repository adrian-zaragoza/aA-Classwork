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
end
