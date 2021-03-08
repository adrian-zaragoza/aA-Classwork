class Post < ApplicationRecord
    validates :title,:sub_id,:author_id, presence:true

    belongs_to(
        :sub,
        class_name: :Sub,
        foreign_key: :sub_id
    )
end
