# Next.js self hosted

## Currently

- Dockerized with `Dockerfile`
- Kubernetes cluster generted using `k8s/`
- Auth with `supabase` and `server actions`

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

It is a local cluster setup using [minikube](https://minikube.sigs.k8s.io/), for a production ready setup you'll need a little bit more.

Start the local cluster:

```bash
minikube start
```

Apply the cluster config:

```bash
minikube kubectl -- apply -f k8s/service.yaml
minikube kubectl -- apply -f k8s/deployment.yaml
```

or in a single command:

```bash
minikube kubectl -- apply -R -f k8s/
```

Check if everything is working correctly:

```bash
minikube kubectl -- get pods
minikube kubectl -- get services
```

ensure the `next-self-hosted` pod is running and the service is correctly bound to the port.

Access service via `minikube service`:

```bash
minikube service next-self-hosted
```

It will open the exposed minikube url automaticly, or if not:

```bash
minikube ip
```

then go to `http://<minikube-ip>:30000`.
