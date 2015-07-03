require 'rails_helper'

RSpec.describe StaticController, type: :controller do

  describe '#index' do
    before do
      get :index
    end

    it { is_expected.to respond_with 302 }

    it 'redirect to public index' do
      expect(response).to redirect_to ''
    end
  end

end
