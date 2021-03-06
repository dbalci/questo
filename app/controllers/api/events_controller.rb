class Api::EventsController < ApplicationController
  def index
    @user = current_user()    
    @events = Event.where(user_id: @user.id)
  end

  def query
    @event = Event.where(code: params[:code]).first!()
    render :show
  end

  def show
    @event = Event.find(params[:id])
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find_by(id: params[:id])
    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy

    render :show
  end

  private

  def event_params
    params.require(:event).permit(:title, :start_date, :end_date, :code, :is_ended, :user_id)
  end
end
