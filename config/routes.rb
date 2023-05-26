Rails.application.routes.draw do

  # USERS
  # resources users
  get "/api/me", to: "users#show"
  get "/api/users", to: "users#index"
  post "/api/signup", to: "users#create"
  patch "/api/users/:id", to: "users#update"
  delete "/api/users/delete", to: "users#destroy"

  #SESSIONS
  post "/api/login", to: "sessions#create"
  delete "/api/logout", to: "sessions#destroy"
end
