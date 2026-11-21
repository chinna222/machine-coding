import styles from './UndoRedo.module.css'
import { useState } from 'react'
export default function UndoRedo() {
  const [count, setCount] = useState(0)
  const undo = () => {
  }
  const redo = () => {
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <div className={styles.container}>
      <h1>Counter App</h1>
      <div>
        <h5>Current Count: {count}</h5>
      </div>
      <div>
        <button onClick={() => setCount(count - 1)}>- Increment</button>
        <button onClick={() => setCount(count + 1)}>+ Decrement</button>
      </div>
      <div className={styles.horizontalLine}/>
      <div>
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
