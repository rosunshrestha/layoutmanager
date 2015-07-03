Rails.application.routes.draw do
  root controller: 'static', action: '/'
  resources 'static', only: :index
  namespace :api do
      resources :layout, :except => [:new, :edit, :update, :show, :destroy] do
        collection do
          get :generate
        end
    end
  end

end
