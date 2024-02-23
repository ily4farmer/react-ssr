import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { renderToString } from 'react-dom/server';

import { App } from '../App';

export const rendeMiddleware = (req: Request, res: Response) => {
  const appContent = renderToString(<App />);
  const indexFile = path.resolve(path.resolve(__dirname, '../', 'client', 'index.html'));

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading index.html:', err);
      return res.status(500).send('Internal server error');
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${appContent}</div>`));
  });
};
