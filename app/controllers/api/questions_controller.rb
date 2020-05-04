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
        if @question
            #adding authorization violations: check if user is event owner 
            @user = current_user()
            @event = Event.find_by(id: @question.event_id)
            if @user.id == @event.user_id 
                @question.update_attributes(question_params)
                render :show
            else
                render json: ['Not authorized to answer this question'], status: 403
            end
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
