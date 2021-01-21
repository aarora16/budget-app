# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
featured_budgets = [
  {
    salary: 6000,
    passive_income: 1000,
    rent_or_mortgage: 1500,
    taxes: 1200,
    insurance: 500,
    electricity: 100,
    water: 20,
    home_gas: 0,
    car_maintenance: 50,
    car_gas: 300,
    phone_bill: 100,
    food: 500,
    entertainment: 300,
    charity: 0,
    debt: 50,
    loans: 0,
    clothing: 100,
    featured: true
  },
  {
    salary: 4000,
    passive_income: 0,
    rent_or_mortgage: 1000,
    taxes: 800,
    insurance: 300,
    electricity: 80,
    water: 20,
    home_gas: 0,
    car_maintenance: 40,
    car_gas: 200,
    phone_bill: 80,
    food: 300,
    entertainment: 300,
    charity: 50,
    debt: 50,
    loans: 50,
    clothing: 50,
    featured: true
  },
  {
    salary: 3000,
    passive_income: 200,
    rent_or_mortgage: 600,
    taxes: 600,
    insurance: 300,
    electricity: 50,
    water: 10,
    home_gas: 10,
    car_maintenance: 20,
    car_gas: 150,
    phone_bill: 50,
    food: 200,
    entertainment: 100,
    charity: 10,
    debt: 0,
    loans: 0,
    clothing: 50,
    featured: true
  }
]

featured_budgets.each do |budget| 
  Budget.create(budget)
end