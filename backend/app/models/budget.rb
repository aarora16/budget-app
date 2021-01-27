class Budget < ApplicationRecord
  has_one :user, through: :user_budget
  has_many :user_budgets
end
