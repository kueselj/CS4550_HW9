# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     EventsSpa.Repo.insert!(%EventsSpa.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias EventsSpa.Repo
alias EventsSpa.Users.User
alias EventsSpa.Posts.Post

defmodule Inject do

  def user(name, email, pass) do
    hash = Argon2.hash_pwd_salt(pass)
    Repo.insert!(%User{name: name, email: email, password_hash: hash})
  end
end

alice = Inject.user("alice", "alice.com", "test1")
bob = Inject.user("bob", "bob.com", "test2")

alicePost = Repo.insert!(%Post{user_id: alice.id, name: "Burgers!", date: "March 1st", body: "Alice says Hi!"})
bobPost = Repo.insert!(%Post{user_id: bob.id, name: "Sexy Time", date: "Right Now", body: "A word with god!"})