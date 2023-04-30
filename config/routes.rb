Rails.application.routes.draw do
  
  resources :product_reviews
  resources :products
  resources :users
  resources :carts, only: [:index, :create, :update, :destroy]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/shop", to: "products#index"
  # post "/add_to_cart/:product_id", to: "carts#add_to_cart", as: "add_to_cart"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
