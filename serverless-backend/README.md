# Backend servers and Serverless deployment

## Backend servers

- We used express to create a Backend server.
- When you have to deploy it on the internet, there are a few ways like Go to AWS, GCP, Azure, Cloudflare etc
  - Rent a VM (Virtual Machine) and deploy your app
  - Put it in an Auto scaling group
  - Deploy it in a Kubernetes cluster
- There are a few downsides to doing this - 
  - Taking care of how/when to scale 
  - Base cost even if no one is visiting your website
  - Monitoring various servers to make sure no server is down
 
What if, you could just write the code and someone else could take care of all of these problems?

## Serverless Backend

- `Serverless` is a backend deployment in which the cloud provider dynamically manages the allocation and provisioning of servers. The term "serverless" doesn't mean there are no servers involved. Instead, it means that developers and operators do not have to worry about the servers.
- Means you could just write your express routes and run a command. The app would automatically **Deploy**, **Auto-scale**, Charge you on **a per request basis** (rather than you paying for VMs)
- Downside/Problems ?
  - More expensive when application scales
  - Cold start problem - If request doesn't come for long time, provider will shut the backend, and later if request come then sender will face latency as server will take time to boot up and being ready to serve traffic again
  - Can solve above problem by keeping warm pool (like one or two server always active or pining our server a certain time gaps)
- There are many famous backend serverless providers: 
  - AWS Lambda
  - Google Cloud Functions
  - Cloudflare Workers
- So when should you use a serverless architecture?
  - When you have to get off the ground fast and don’t want to worry about deployments
  - When you can’t anticipate the traffic and don’t want to worry about autoscaling
  - If you have very low traffic and want to optimize for costs

## Cloudfare backend worker setup

- Cloudfare provides serverless backend for free and they have their own run time and this service is called `workers` | [Article](https://developers.cloudflare.com/workers/reference/how-workers-works/#:~:text=Though%20Cloudflare%20Workers%20behave%20similarly,used%20by%20Chromium%20and%20Node)
  - Local setup commands to initialize:
    ```sh
      npm create cloudflare -- cloudfare-backend-app
    ```
  - To start worker locally
    ```sh
      npm run dev
    ```
- It provides `wrangler` (check *package.json*) as CLI tool which takes care of all the server listening code and stuff
- Cloudflare expects you to just write the logic to handle a request.
- Creating an HTTP server on top is handled by cloudflare and `wrangler` locally.
- How to write code using cloudfare like we write using `express`? | [Link](https://github.com/princebansal7/Web-Development-Concepts/blob/main/serverless-backend/cloudfare-backend/src/index.ts)

## Deploying on Internet from local

- After writing the server logic, how to deploy ?
- Using `wrangler` tool
  - Login to Cloudfare account
    ```sh
        npx wrangler login
    ```
  - Checking login status
    ```sh
        npx wrangler whoami
    ``` 
  - To deploy local backend to cloudfare and starts a worker (internally below command will run `wrangler deploy`)
    ```sh
        npm run deploy
    ``` 
  - To delete the deployment from cloudfare
    ```sh
        npx wrangler delete deployment
    ``` 
- Check cloudfare `Worker & pages` section, application will be deployed with the same local folder name (in our example `cloudfare-backend`)
- You can create new workers by updating `wrangler.toml` file
- We saw there was not easy way to write routing we want to write cloudfare worker backend
- And if we already have an NodeJS application which relies on express server and we now need to deploy it on cloudfare then
  - Either need to write the code hard way
  - Or minimize the code which depends on express and segregate and still need to write some code as per cloudfare

## Using hono library 

- To make this process easier, use `hono` library:
- To Setup, use below commands:
  - Initialize new app
    ```sh
        npm create hono@latest hono-cloudfare-backend
    ```
  - Check example | [Link](https://github.com/princebansal7/Web-Development-Concepts/blob/main/serverless-backend/hono-cf-backend/src/index.ts) 
