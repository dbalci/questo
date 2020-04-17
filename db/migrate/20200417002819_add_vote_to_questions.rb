class AddVoteToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :vote, :integer, default: 0, null: false
  end
end
