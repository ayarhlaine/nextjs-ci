## About
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) to demonstrate the ci/cd pipeline of next js project to AWS using Github actions.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy with Docker
Run
```
docker build -t nextjs-ci:latest .
docker run -p 80:3000 -t nextjs-ci:latest
```

