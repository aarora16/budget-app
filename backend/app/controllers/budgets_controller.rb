class BudgetsController < ApplicationController
  def index
    @budgets = Budget.all
    if @budgets
      render json: {
        budgets: @budgets
      }
    else
      render json: {
        status: 500,
        errors: ['no budgets found']
      }
    end
  end

  def show 
    @budget = Budget.find(params[:id])
    if @budget
      render json: {
        budget: @budget
      }
    else
      render json: {
        status: 500,
        errors: ['budget not found']
      }
    end
  end

  def create
    @budget = Budget.new(budget_params)
    if @budget.save
      render json: {
        status: :created,
        budget: @budget
      }
    else
      render json: {
        status: 500,
        errors: @budget.errors.full_messages
      }
    end
  end

  private
    def budget_params
      params.require(:budget).permit(
        :salary, 
        :passive_income, 
        :rent_or_mortgage,
        :taxes,
        :insurance,
        :electricity,
        :water,
        :home_gas,
        :car_maintenance,
        :car_gas,
        :phone_bill,
        :food,
        :entertainment,
        :charity,
        :debt,
        :loans,
        :clothing,
        :featured
      )
    end
end
