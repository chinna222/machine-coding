import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { questions } from './questions.js'

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        {questions.map(({ path, Component }) => (
          <Route key={path} path={`/${path}`} element={<Component />} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default App
