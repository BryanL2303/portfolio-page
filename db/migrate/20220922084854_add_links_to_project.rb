class AddLinksToProject < ActiveRecord::Migration[7.0]
  def change
    change_table :projects do |t|
      t.string :gitLink
      t.string :siteLink
    end
  end
end
