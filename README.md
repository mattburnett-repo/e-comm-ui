# E-comm-ui

Basic e-commerce ui.

Provides a front end for [e-comm-api](https://github.com/mattburnett-repo/e-comm-api) application.

The scope of this effort is to implement Minimally Viable Product (MVP) functionality. This functionality integrates a front-end UI with a back-end API and Stripe payment processing.

Users can browse products, add products to a cart, and pay for an order using Stripe.

To-do items / improvements are listed in the [Issues section](https://github.com/mattburnett-repo/e-comm-ui/issues).

## Tech Stack

- React 18
- Vite
- Redux / Redux Toolkit / Redux Persist
- Axios
- Sass

## Getting started

Clone the repo.

```bash
git repo clone mattburnett-repo/e-comm-ui
```

Copy sample.env to .env file and add values for the vars.

```bash
VITE_API_TOKEN=from the api
VITE_API_URL=url to your API (deployment uses: https://e-comm-api.fly.dev/)
VITE_STRIPE_KEY=public key from Stripe
```
