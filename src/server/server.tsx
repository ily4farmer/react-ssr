import express, { Request, Response } from 'express';
import path from 'path';
import { renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import { store } from '~store';

import { App } from '../client/App';

const app = express();

app.use(express.static(path.resolve(__dirname, '../', 'client')));

app.get('/*', (req: Request, res: Response) => {
  const { pipe } = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Provider>,
    {
      bootstrapScripts: ['main.js'],
      onAllReady() {
        const preloadedState = store.getState();

        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(
          `<!DOCTYPE html>
            <html>
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="utf-8" />
                <title>My React App</title>
                <script>
                  window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
              </head>
              <body>
                <div id="root">`,
        );
        pipe(res);

        res.write(`</div></body></html>`, 'utf8');
        res.end();
      },
      onShellError(err) {
        res.statusCode = 500;
        res.send(err);
      },
    },
  );
});

app.listen(9001, () => {
  console.log(`Application is started on  http://localhost:9001/`);
});
