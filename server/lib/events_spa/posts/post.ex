defmodule EventsSpa.Posts.Post do
  use Ecto.Schema
  import Ecto.Changeset

  schema "posts" do
    field :name, :string
    field :body, :string
    field :date, :string

    belongs_to :user, EventsSpa.Users.User
    

    timestamps()
  end

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, [:name, :body, :date, :user_id])
    |> validate_required([:name, :body, :date, :user_id])
  end
end
