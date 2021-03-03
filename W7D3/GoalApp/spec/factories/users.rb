FactoryBot.define do
  factory :user do
    username {Faker::MOVIES::HarryPotter.character}
    #username {"Harry Potter"}
    password {"realpassword"}
    email {"mike@aa.com"}
   factory :harry_potter do
    username {"Harry Potter"}
    #password {"realpassword"}
   end
  end
  
end
