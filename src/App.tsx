import { useState } from 'react'
import './App.scss'

export const App = () => {

  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(prev => ++prev)}></button>
    </div>
  )
}
