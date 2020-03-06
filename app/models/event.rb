class Event < ApplicationRecord

    validates :title, :start_date, :end_date, :code, presence: true
    validates :code, uniqueness: true
    validates :code, length: { minimum: 3 }
    validates :is_endedn, inclusion: { in: [ true, false ] }

    
end
