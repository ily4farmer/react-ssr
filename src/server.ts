import express from 'express';
import path from 'path';

import serverRenderMiddleware from './server/server-render-middleware';

const app = express();

app.get('/*', serverRenderMiddleware);

app.use(express.static(path.resolve(__dirname, 'build', 'client')));

app.listen(9001, () => {
  console.log(`Application is started on  http://localhost:9001/`);
});
