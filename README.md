# Kinde Starter Kit - Remix

This is a starter kit to get you started with Kinde on Remix

## Dependancies

- node.js (>=18)
- Kinde account - Get free account [here](https://app.kinde.com/register)
  - Kinde back-end web application setup

## Setup your local environment

1. [Fork](https://github.com/kinde-starter-kits/kinde-auth-remix-starter-kit/fork)
2. Clone the repository

```
git clone https://github.com/<your_github_username>/kinde-auth-remix-starter-kit.git
```

3. Within the project folder install the dependancies

```
> cd kinde-auth-remix-starter-kit
> npm i
```

4. Set up your environment

Rename `.env.sample` to `.env`

Update the file with your application settings. These can be found within the backend application details within the Kinde dashboard

```
KINDE_CLIENT_ID=<your_kinde_client_id>
KINDE_CLIENT_SECRET=<your_kinde_client_secret>
KINDE_ISSUER_URL=https://<your_kinde_subdomain>.kinde.com
```

## Setup Kinde

Within your back-end web application update your settings

**Allowed callback URLs**

```
http://localhost:3000/kinde-auth/callback
```

**Allowed logout redirect URLs**

```
http://localhost:3000
```

**Note: When you deploy your application, these URLs will have to be updated accordingly**

## Start your app

```
npm run dev
```

open `http://localhost:3000` in your browser

## Create your first user

Click on `Sign up` and register your first user for your business!

Within the Kinde Dashboard, you will see your new user listed within the user view. 🚀

# Resources

- [Kinde Remix SDK Docs](https://kinde.com/docs/developer-tools/remix-sdk/)
- [Kinde Management API Docs](https://kinde.com/api/docs/#kinde-management-api)

# Get help

- [Discord](https://discord.gg/wHX6j7wG5d)
- [Slack](https://join.slack.com/t/thekindecommunity/shared_invite/zt-26hdaavyc-CfOa06vP23guSwK~~OpFMQ)
