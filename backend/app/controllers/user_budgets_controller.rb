class UserBudgetsController < ApplicationController
  def index
    @user_budgets = UserBudget.all
    if @user_budgets
      render json: {
        user_budgets: @user_budgets
      }
    else
      render json: {
        status: 500
        errors: ['no user budgets found']
      }
    end
  end

  def show 
    @user_budget = UserBudget.find(params[:id])
    if @user_budget
      render json: {
        user_budget: @user_budget
      }
    else
      render json: {
        status: 500,
        errors: ['user budget not found']
      }
    end
  end

  def create
    @user_budget = UserBudget.new(user_budget_params)
    if @user_budget.save
      render json: {
        status: :created,
        user_budget: @user_budget
      }
    else
      render json: {
        status: 500,
        errors: @user.errors.full_messages
      }
    end
  end

  private
    def user_budget_params
      params.require(:user_budget).permit(:budget_id, :user_id)
    end
end
