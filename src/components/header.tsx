import Logo from './logo'

export default function Header() {
  return (
    <header>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between">
          <div className="ml-6">
            <Logo title="随机诗词" />
          </div>
        </div>
      </div>
    </header>
  )
}
