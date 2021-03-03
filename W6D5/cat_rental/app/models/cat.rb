require 'action_view'

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper

  COLOR = %w(orange white black grey tabby)
  SEX = %w(M F)

  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :color, inclusion: {in: COLOR}
  validates :sex, inclusion: {in: SEX}

  def age
    # calculates age in years rounded down to nearest integer
    time_ago_in_words(self.birth_date)
  end
  


end
