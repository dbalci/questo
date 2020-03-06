class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :start_date, null: false
      t.string :end_date, null: false
      t.string :code, null: false
      t.boolean :is_ended, null: false
      t.timestamps
    end
    add_index :events, :code, unique: true
  end
end
