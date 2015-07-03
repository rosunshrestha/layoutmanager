require 'rails_helper'

RSpec.describe StaticController, type: :controller do

  describe '#index' do
    before do
      get :index
    end

    it { is_expected.to respond_with 302 }
    it { is_expected.to redirect_to '' }
  end

end
