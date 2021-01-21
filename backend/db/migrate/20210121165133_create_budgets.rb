class CreateBudgets < ActiveRecord::Migration[6.0]
  def change
    create_table :budgets do |t|
      t.integer :salary
      t.integer :passive_income
      t.integer :rent_or_mortgage
      t.integer :taxes
      t.integer :insurance
      t.integer :electricity
      t.integer :water
      t.integer :home_gas
      t.integer :car_maintenance
      t.integer :car_gas
      t.integer :phone_bill
      t.integer :food
      t.integer :entertainment
      t.integer :charity
      t.integer :debt
      t.integer :loans
      t.integer :clothing

      t.timestamps
    end
  end
end
