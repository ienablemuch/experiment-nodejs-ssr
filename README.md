Simplest SSR. Followed these steps: https://medium.com/atticus-engineering/server-side-rendering-with-react-and-typescript-8cebb4400b3c


**run the server-side webpack build**

$ webpack --env.platform=server

**run the client-side webpack build**

$ webpack --env.platform=web

**run server**

$ node dist/js/server.js

