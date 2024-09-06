# Next.js self hosted

## Create a realist app

Create a [Next.js](https://nextjs.org) app with `pnpm` and init [Shacn-ui](https://ui.shadcn.com) using its cli:

```bash
pnpm create next-app <my-app>
cd <my-app>
pnpm dlx shadcn@latest init -d
```

Go get a dashboard example from [shadcn-ui blocks](https://ui.shadcn.com/blocks) or add your custom code. You're good to go.

## Dockerfile

From [Next.js deploy doc](https://nextjs.org/docs/app/building-your-application/deploying#docker-image), get the `Dockerfile` and add it to your project with a `.dockerignore`.

Do not forget to set output mode to `standalone` in the next config:

```jsx
const nextConfig = {
  output: "standalone",
};
```

To create and store the image of your app, follow the steps:

Build and test your app locally:

```bash
docker build -t <image-name> .
dcoker run -p 3000:3000 <image-name>
```

Push it to [DockerHub](https://hub.docker.com/):

```bash
docker login -u <username>
docker tag <image-name> <username>/<public-img-name>
docker push <username>/<public-img-name>
```

## Kubernetes

TODO...
