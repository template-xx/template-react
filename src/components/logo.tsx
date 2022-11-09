import { Link } from 'react-router-dom'

interface LogoProps {
  title: string
  src?: string
}

export default function Logo({ title = 'Logo', src }: LogoProps) {
  return (
    <Link className="flex items-center h-14" to="/">
      <span className="font-medium px-2">{title}</span>
    </Link>
  )
}
