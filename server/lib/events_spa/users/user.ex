defmodule EventsSpa.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :email, :string
    field :name, :string
    field :password_hash, :string
    has_many :posts, EventsSpa.Posts.Post

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :email, :password_hash])
    |> add_password_hash(attrs["password_hash"])
    |> validate_required([:name, :email, :password_hash])
  end

  def add_password_hash(cset, nil) do
    cset
  end

  def add_password_hash(cset, password) do
  
    change(cset, Argon2.add_hash(password))
  end
end
