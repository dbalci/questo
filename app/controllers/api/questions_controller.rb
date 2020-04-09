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
        @question = Question.find_by(params[:id])
        if @question
            @question.destroy
            render :show
        else
            render ['Could not find the question']
        end
    end


    def update
        @question = Question.find_by(params[:id])
        if @question && question.update_attributes(question_params)
            render :show
        elsif !@question
            render json: ['Could not locate question'], status: 400
        else
            render json: @question.errors.full_messages, status: 401
        end
    end

    private

    def question_params
        params.require(:question).permit(:body, :event_id, :user_id, :answered)
    end
end
