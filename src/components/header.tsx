import Logo from './logo'

export default function Header() {
  return (
    <header>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between">
          <Logo className="ml-6" title="随机诗词" />
        </div>
      </div>
    </header>
  )
}
