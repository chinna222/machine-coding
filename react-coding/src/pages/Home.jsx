import { Link } from 'react-router-dom'
import { questions } from '../questions.js'

export default function Home() {
  return (
    <div>
      <h1>Machine Coding Questions</h1>
      <ul>
        {questions.map(({ path, title }) => (
          <li key={path}>
            <Link to={`/${path}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
