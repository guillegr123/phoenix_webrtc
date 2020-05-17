# PhoenixWebrtc

To start your Phoenix server:

  * Setup the project with `mix setup`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Learn more

  * Official website: https://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Forum: https://elixirforum.com/c/phoenix-forum
  * Source: https://github.com/phoenixframework/phoenix

## Deploy to Heroku

Using the Heroku CLI, create the Phoenix application on Heroku which will run our project:

```sh
$ heroku create --buildpack "https://github.com/HashNuke/heroku-buildpack-elixir.git"
```

Then add the buildpack to support static assets:

```sh
$ heroku buildpacks:add https://github.com/gjaldon/heroku-buildpack-phoenix-static.git
```

Finally push the code to Heroku for release:

```sh
$ git push heroku master
```

For more details, visit:
* https://alchemist.camp/episodes/deploy-phoenix-heroku
* https://www.icicletech.com/blog/elixir-phoenix-deployment-on-heroku
