class EventsController < ApplicationController

    def index
        @events = Event.all
    end

    def create
        @event = Event.create!(event_params)
        render :show
    end

    def show
        @event = Event.find(params[:id])
    end

    def delete
        @event = Event.find(params[:id])

    end

    private

    def event_params
        params.rewuire(:event).permit(:title, :start_date, :end_date, :code, :is_ended)
    end

end
