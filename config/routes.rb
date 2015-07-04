Rails.application.routes.draw do
  root controller: 'static', action: '/'
  resources 'static', only: :index
  namespace :api do
      resources :layout, only: [:generate, :download] do
        collection do
          post :generate
          get :download
        end
    end
  end
end
