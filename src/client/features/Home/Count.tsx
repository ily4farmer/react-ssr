import { increment, useAppDispatch, useAppSelector } from '~store';

export const Count = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const onClickHandler = () => {
    dispatch(increment());
  };

  return (
    <div>
      <div>{count}</div>
      <button type="button" onClick={onClickHandler}>
        fdаgh
      </button>
    </div>
  );
};
