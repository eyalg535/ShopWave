Rails.application.routes.draw do
  resources :reviews
  resources :orders
  resources :products
  resources :carts
  resources :users
  post("/login", to: "sessions#create")
  post '/signup', to: 'users#create'
  patch '/cart/:id', to: 'carts#update'
  get("/users", to: "users#index")
  get("/users/:id", to: "users#show")
  get("/cart/:id", to: "carts#show")
  # get("/users/:id/cart/id:/order", to: "orders#show")
  get '/users/:id/carts', to: 'carts#checkout'

  get("/products", to: "products#index")
  get("/products/:id", to: "products#show")
  delete("/logout", to: "sessions#destroy")
  # get '/cart/:id', to: "cart#checkout"
  get("/me", to: "users#me")
  get('users/:id/carts/current_user_cart', to: 'carts#current_user_cart')
end
