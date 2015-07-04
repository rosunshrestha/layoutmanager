require 'rails_helper'

RSpec.describe Api::LayoutController, type: :controller do

  describe '#generate' do
    before do
      get :generate
    end

    it { is_expected.to respond_with :ok }

    after do
      FileUtils.rm_rf("#{Rails.root}/public/layout.zip")
      FileUtils.rm_rf("#{Rails.root}/public/layout/css/layout.css")
      FileUtils.rm_rf("#{Rails.root}/public/layout/layout.html")
    end
  end

end
