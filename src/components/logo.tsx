import { Link } from 'react-router-dom'
import { If, Then, Else } from 'react-if'

interface LogoProps {
  title?: string
  src?: string
}

export default function Logo({ title = 'Logo', src }: LogoProps) {
  return (
    <Link className="flex items-center h-14" to="/">
      <If condition={src}>
        <Then>
          <img alt={title} src={src} />
        </Then>
        <Else>
          <span className="font-medium text-slate-900 px-2">{title}</span>
        </Else>
      </If>
    </Link>
  )
}
