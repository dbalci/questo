Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :events, only: [:index, :show, :create, :destroy] 
    resources :events, only: [:show] do
      resources :questions, only: [:index]
    end
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :questions
  end

end
