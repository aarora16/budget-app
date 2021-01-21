class CreateUserBudgets < ActiveRecord::Migration[6.0]
  def change
    create_table :user_budgets do |t|
      t.integer :budget_id
      t.integer :user_id

      t.timestamps
    end
  end
end
