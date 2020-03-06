Rails.application.routes.draw do
  
  resources :events, only: [:index, :show, :create, :destroy] #bonus: update
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    
  end

  root "static_pages#root"
end
