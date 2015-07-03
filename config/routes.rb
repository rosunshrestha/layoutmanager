Rails.application.routes.draw do
  root controller: 'static', action: '/'
  resources 'static', only: :index
end
