json.event do
  json.partial! '/api/events/event', event: @event
end

json.questions do 
  @event.questions.each do |question|
    json.partial! '/api/questions/question', question: question
  end
end