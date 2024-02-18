import './App.scss';

import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const onClickHandler = () => setCount((prev) => prev + 1);

  return (
    <div>
      <div>{count}</div>
      <button type="button" onClick={onClickHandler}>
        fdfd
      </button>
    </div>
  );
};
