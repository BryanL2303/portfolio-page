Rails.application.routes.draw do
  root "pages#index"

  resources :project do 
    member do
      post '/create_project' => 'project#createProject'
      post '/update_project' => 'project#updateProject'
    end
  end

  get '*path', to: 'pages#index', via: :all
end
