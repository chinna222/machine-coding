import { useUndoRedo } from '../../hooks/useUndoRedo.js'

export default function UndoRedo() {
  const { value, set, undo, redo, canUndo, canRedo } = useUndoRedo('')

  function handleKeyDown(e) {
    if (!(e.ctrlKey || e.metaKey)) return

    const key = e.key.toLowerCase()
    const isUndo = key === 'z' && !e.shiftKey
    const isRedo = key === 'y' || (key === 'z' && e.shiftKey)

    if (isUndo) {
      e.preventDefault()
      undo()
    } else if (isRedo) {
      e.preventDefault()
      redo()
    }
  }

  return (
    <div>
      <h1>Undo / Redo</h1>
      <div>
        <button onClick={undo} disabled={!canUndo}>
          Undo
        </button>
        <button onClick={redo} disabled={!canRedo}>
          Redo
        </button>
      </div>
      <textarea
        value={value}
        onChange={(e) => set(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={10}
        cols={60}
        placeholder="Type something, then press Ctrl+Z / Ctrl+Y"
      />
    </div>
  )
}
