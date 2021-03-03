FactoryBot.define do
  factory :user do
    username {Faker::MOVIES::HarryPotter.character}
    password {"realpassword"}
  end
end
