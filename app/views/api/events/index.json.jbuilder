json.events do
    @events.each do |event|
        json.set! event.id do 
            json.partial! '/api/events/event', event: event
        end
    end
end

# { 
#     1: { 
#         title: 'bir'
#     },
#     2: { 
#         title: 'iki'
#     }
# }