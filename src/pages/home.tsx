import PageLayout from '../layouts/page'
import Center from '../components/center'

export default function HomePage() {
  const title = 'Home'
  return (
    <PageLayout page={{ title }}>
      <Center height="calc(100vh - 120px)">
        <div className="flex items-center divide-x divide-zinc-500">
          <h3 className="text-2xl text-zinc-700 pr-4">👋</h3>
          <p className="text-base text-zinc-700 pl-4 py-2">{title}</p>
        </div>
      </Center>
    </PageLayout>
  )
}
