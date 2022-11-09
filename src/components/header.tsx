import Logo from './logo'

export default function Header() {
  return (
    <header>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between">
          <Logo title="template-react" />
        </div>
      </div>
    </header>
  )
}
