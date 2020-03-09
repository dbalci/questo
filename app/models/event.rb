class Event < ApplicationRecord

    validates :title, :start_date, :end_date, :code, presence: true
    validates :code, uniqueness: true
    validates :code, length: { minimum: 4 }
    validates :is_ended, inclusion: { in: [ true, false ] }

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    has_many :questions,
    foreign_key: :event_id,
    class_name: :Question
    
end
