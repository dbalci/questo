json.event do
    @events.each do |event|
        json.partial! '/api/events/event', event: event
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