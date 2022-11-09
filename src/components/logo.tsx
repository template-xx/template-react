import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link className="flex items-center h-14" to="/">
        <span className="font-medium mx-4">Logo</span>
      </Link>
    </div>
  )
}
