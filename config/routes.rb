Rails.application.routes.draw do
  resources :reviews
  resources :orders
  resources :products
  resources :carts
  resources :users

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#me"

  get "/users/:id/carts", to: "users#show"
  get "/users/:id/orders", to: "orders#show"
  get "/users/:id/carts/checkout", to: "carts#checkout"
  get "/users/:user_id/carts/current_user_cart", to: "carts#current_user_cart"
  delete "/users/:id/carts", to: "users#destroy"
  
  get "/cart/:id", to: "carts#show"
  patch "/cart/:id", to: "carts#update"
  delete "/carts/:id/orders/:order_id", to: "carts#destroy", as: "delete_order"
  delete "/carts/:id", to: "carts#destroy", as: "empty_cart"

  get "/products", to: "products#index"
  get "/products/:id", to: "products#show"
  delete "/products/:id", to: "products#destroy"
end

