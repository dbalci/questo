class ChangesInColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :event_id
    remove_column :questions, :answered
    add_column :questions, :answered, :boolean, default: false
  end
end
