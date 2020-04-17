class Question < ApplicationRecord

    validates :body, :user_id, :event_id, presence:true
    validates :answered, inclusion: { in: [ true, false ] }

    belongs_to :event,
    foreign_key: :event_id,
    class_name: :Event

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
