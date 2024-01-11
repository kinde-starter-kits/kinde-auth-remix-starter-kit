# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)
- [Kinde Remix SDK Guide](https://kinde.notion.site/Remix-guide-eeba8882b6254b7b9db20a62a927cc29?pvs=4)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
