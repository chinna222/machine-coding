import { useReducer } from 'react'
import styles from './UndoRedo.module.css'

// count:     the number shown on screen
// undoStack: earlier counts you can go back to, oldest first
// redoStack: counts you undid, next redo first
const INITIAL_STATE = { count: 0, undoStack: [], redoStack: [] }

function reducer(state, action) {
  const { count, undoStack, redoStack } = state

  switch (action.type) {
    case 'change':
      // A new change saves the current count for undo and clears the redo stack.
      return {
        count: count + action.delta,
        undoStack: [...undoStack, count],
        redoStack: [],
      }
    case 'undo':
      if (!undoStack.length) return state
      return {
        count: undoStack[undoStack.length - 1],
        undoStack: undoStack.slice(0, -1),
        redoStack: [count, ...redoStack],
      }
    case 'redo':
      if (!redoStack.length) return state
      return {
        count: redoStack[0],
        undoStack: [...undoStack, count],
        redoStack: redoStack.slice(1),
      }
    case 'reset':
      return INITIAL_STATE
    default:
      return state
  }
}

export default function UndoRedo() {
  const [{ count, undoStack, redoStack }, dispatch] = useReducer(
    reducer,
    INITIAL_STATE,
  )

  return (
    <div className={styles.question}>
      <div className={styles.container}>
        <h2>Counter App</h2>
        <div className={styles.counterDisplay}>
          <h5>Current Count: {count}</h5>
        </div>
        <div className={styles.actionContainer}>
          <button onClick={() => dispatch({ type: 'change', delta: 1 })}>
            + Increment
          </button>
          <button onClick={() => dispatch({ type: 'change', delta: -1 })}>
            - Decrement
          </button>
        </div>
        <div className={styles.horizontalLine} />
        <div className={styles.historyContainer}>
          <button
            onClick={() => dispatch({ type: 'undo' })}
            disabled={!undoStack.length}
          >
            Undo
          </button>
          <button
            onClick={() => dispatch({ type: 'redo' })}
            disabled={!redoStack.length}
          >
            Redo
          </button>
        </div>
        <div className={styles.resetContainer}>
          <div className={styles.undoRedo}>Undo: {undoStack.length} | Redo: {redoStack.length}</div>
          <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
      </div>
    </div>
  )
}
