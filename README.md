# Hello, Angular World!

This code sample demonstrates how to implement authentication in an Angular Single-Page Application (SPA).

![Hello, Angular World!](https://cdn.auth0.com/blog/hello-auth0/hello-angular.png)

The `add-authentication` branch offers a functional application that consumes data from Auth0 and a remote API to hydrate the user interface.

## Get Started

Install the project dependencies:

```bash
npm install
```

Create a `.env` file under the root project directory and populate it as follows:

```bash
AUTH0_DOMAIN=
AUTH0_CLIENT_ID=
AUTH0_AUDIENCE=
AUTH0_CALLBACK_URL=http://localhost:4040/callback
API_SERVER_URL=http://localhost:6060
```

In the Auth0 Dashboard, be sure to set `http://localhost:4040/callback` as a value in the **Allowed Callback URLs** section of your Auth0 Application settings.

Run the application:

```bash
npm start
```

Visit [`http://localhost:4040/`](http://localhost:4040/) to access the starter application.
