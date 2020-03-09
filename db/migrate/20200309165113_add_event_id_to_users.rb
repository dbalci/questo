class AddEventIdToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :event_id, :integer
  end
end
