import express, { Request, Response } from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';

import { App } from '../client/App';

const appContent = renderToString(<App />);

const app = express();

app.use(express.static(path.resolve(__dirname, '../', 'client')));

app.get('/*', (req: Request, res: Response) => {
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>My React App</title>
    </head>
    <body>
      <div id="root">${appContent}</div>
      <script src="main.js"></script>
    </body>
  </html>
`;
  res.send(html);
});

app.listen(9001, () => {
  console.log(`Application is started on  http://localhost:9001/`);
});
