Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :events, only: [:show, :create, :destroy] 
    resources :user, only: [:show] do 
      resources :events, only: [:index]
    end
    resources :events, only: [:show] do
      resources :questions, only: [:index]
    end
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :questions, only: [:show, :create, :destroy] 
    get 'eventCode/:code', to: 'events#query'
  end

end
