import { useState } from 'react';

export const Count = () => {
  const [count, setCount] = useState<number>(0);

  const onClickHandler = () => {
    setCount((prev) => prev + 1);
  };

  console.log('2432432');

  return (
    <div>
      <div>{count}</div>
      <button type="button" onClick={onClickHandler}>
        fdаghfghgf54365465
      </button>
    </div>
  );
};
