import { useState } from 'react'

// Keeps a list of every value we've seen, plus a pointer to the current one.
// Undo moves the pointer back, redo moves it forward, and a new change
// drops any redo entries that were ahead of the pointer.
export function useUndoRedo(initialValue) {
  const [state, setState] = useState({
    history: [initialValue],
    index: 0,
  })

  const value = state.history[state.index]
  const canUndo = state.index > 0
  const canRedo = state.index < state.history.length - 1

  function set(newValue) {
    setState(({ history, index }) => {
      if (newValue === history[index]) return { history, index }
      return {
        history: [...history.slice(0, index + 1), newValue],
        index: index + 1,
      }
    })
  }

  function undo() {
    setState((s) => (s.index > 0 ? { ...s, index: s.index - 1 } : s))
  }

  function redo() {
    setState((s) =>
      s.index < s.history.length - 1 ? { ...s, index: s.index + 1 } : s,
    )
  }

  return { value, set, undo, redo, canUndo, canRedo }
}
