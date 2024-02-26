import express, { Request, Response } from 'express';
import path from 'path';
import { StrictMode } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { App } from '../client/App';

const app = express();

app.use(express.static(path.resolve(__dirname, '../', 'client')));

app.get('/*', (req: Request, res: Response) => {
  const { pipe } = renderToPipeableStream(
    <StrictMode>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </StrictMode>,
    {
      bootstrapScripts: ['main.js'],
      onShellError(err) {
        res.statusCode = 500;
        res.send(err);
      },
      onShellReady() {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(
          '<!DOCTYPE html><html><head><meta charset="utf-8" /><title>My React App</title></head><body><div id="root">',
        );
        pipe(res);
        res.on('finish', () => {
          res.write('</body></html>');
          res.end();
        });
      },
    },
  );
});

app.listen(9001, () => {
  console.log(`Application is started on  http://localhost:9001/`);
});
