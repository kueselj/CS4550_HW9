defmodule EventsSpaWeb.Router do
  use EventsSpaWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", EventsSpaWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  scope "/api/v1", EventsSpaWeb do

    pipe_through :api
    IO.puts("create stuff?")
    resources "/session", SessionController, only: [:create]
    resources "/users", UserController, except: [:new, :edit]
    resources "/posts", PostController, except: [:new, :edit]
    
  end

  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser
      live_dashboard "/dashboard", metrics: EventsSpaWeb.Telemetry
    end
  end
end
