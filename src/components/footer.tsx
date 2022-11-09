import type { ReactNode } from 'react'

interface FooterProps {
  copyright: string | ReactNode
}

export default function Footer({ copyright }: FooterProps) {
  return (
    <footer>
      <div className="max-w-4xl mx-auto">{copyright}</div>
    </footer>
  )
}
