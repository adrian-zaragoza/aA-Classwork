FactoryBot.define do
  factory :user do
    username {Faker::MOVIES::HarryPotter.character}
    password {"realpassword"}
   factory :invalid_user do
    username {}
    password {"realpassword"}
   end
  end
  
end
