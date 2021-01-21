# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_21_173108) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "budgets", force: :cascade do |t|
    t.integer "salary"
    t.integer "passive_income"
    t.integer "rent_or_mortgage"
    t.integer "taxes"
    t.integer "insurance"
    t.integer "electricity"
    t.integer "water"
    t.integer "home_gas"
    t.integer "car_maintenance"
    t.integer "car_gas"
    t.integer "phone_bill"
    t.integer "food"
    t.integer "entertainment"
    t.integer "charity"
    t.integer "debt"
    t.integer "loans"
    t.integer "clothing"
    t.boolean "featured"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_budgets", force: :cascade do |t|
    t.integer "budget_id"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
