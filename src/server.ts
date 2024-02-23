import express from 'express';
import path from 'path';

import { rendeMiddleware } from './server/server-render-middleware';

const app = express();

app.use(express.static(path.resolve(__dirname, '../', 'client')));

app.get('/*', rendeMiddleware);

app.listen(9001, () => {
  console.log(`Application is started on  http://localhost:9001/`);
});
