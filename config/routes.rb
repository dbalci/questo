Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    resources :events, only: [:index, :show, :create, :destroy] #bonus: update
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    
  end

  root "static_pages#root"
end
