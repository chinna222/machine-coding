import { lazy } from 'react'

// One entry per machine coding question.
export const questions = [
  {
    path: 'undo-redo',
    title: 'Undo / Redo',
    Component: lazy(() => import('./components/undo-redo/UndoRedo.jsx')),
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    Component: lazy(() => import('./components/dashboard/dashboard.jsx')),
  },
]
