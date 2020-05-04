class Api::QuestionsController < ApplicationController

    def index
        @questions = Question.where(event_id: params[:event_id])
    end

    def show
        @question = Question.find_by(params[:id])
    end

    def create
        @question = Question.new(question_params)
        if @question.save
            render :show
        else
            render @question.errors.full_messages, status: 401
        end
    end

    def destroy
        @question = Question.find(params[:id])
        @question.destroy
        render :show
        
    end


    def update
        @question = Question.find(params[:id])
        if @question && @question.update_attributes(question_params)
            #adding authorization violations: check if user is event owner 
            render :show
        elsif !@question
            render json: ['Could not locate question'], status: 400
        else
            render json: @question.errors.full_messages, status: 401
        end
    end

    private

    def question_params
        params.require(:question).permit(:body, :event_id, :user_id, :answered, :created_at)
    end
end
