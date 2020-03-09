# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Question.destroy_all
Event.destroy_all
User.destroy_all

# user1 = User.create(name: Faker::Movies::LordOfTheRings.name, lastname: Faker::Movies::LordOfTheRings.lastname, email: Faker::Internet.email, password: 'qazwsx')
# user2 = User.create(name: Faker::Movies::LordOfTheRings.name, lastname: Faker::Movies::LordOfTheRings.lastname, email: Faker::Internet.email, password: 'qazwsx')
# user3 = User.create(name: Faker::Movies::LordOfTheRings.name, lastname: Faker::Movies::LordOfTheRings.lastname, email: Faker::Internet.email, password: 'qazwsx')
# user4 = User.create(name: Faker::Movies::LordOfTheRings.name, lastname: Faker::Movies::LordOfTheRings.lastname, email: Faker::Internet.email, password: 'qazwsx')
# user5 = User.create(name: Faker::Movies::LordOfTheRings.name, lastname: Faker::Movies::LordOfTheRings.lastname, email: Faker::Internet.email, password: 'qazwsx')
# user6 = User.create(name: Faker::Movies::LordOfTheRings.name, lastname: Faker::Movies::LordOfTheRings.lastname, email: Faker::Internet.email, password: 'qazwsx')


user1 = User.create(name: 'demo', lastname: 'demot', email: 'demo', password: 'qazwsx')
# event1 = Event.create(title: Faker::Movies::LordOfTheRings.quote, start_date:Faker::Date.between(from: 14.days.ago, to: 7.days.ago), end_date: Faker::Date.between(from: 7.days.ago, to: Date.today), code: Faker::Alphanumeric.alphanumeric(number:4, min_alpha:1, min_numeric: 3), is_ended: true)
event1 = Event.create(title: 'first', start_date: '07/07/07', end_date: '09/09/09', code: '#DES', is_ended: true , user_id: user1.id)
event2 = Event.create(title: 's', start_date: '07/07/07', end_date: '09/09/09', code: '#DER', is_ended: true , user_id: user1.id)
event3 = Event.create(title: 't', start_date: '07/07/07', end_date: '09/09/09', code: '#DET', is_ended: true , user_id: user1.id)

question1 = Question.create!( body: 'aa', user_id: user1.id, event_id: event1.id, answered: true)
question2 = Question.create!( body: 'we', user_id: user1.id, event_id: event1.id, answered: true)
question3 = Question.create!( body: 'sd', user_id: user1.id, event_id: event1.id, answered: true)

