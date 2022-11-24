import DefaultLayout from '../layouts/default'
import Center from '../components/center'

export default function NotFoundPage() {
  const title = '抱歉，没有找到对应的页面'
  return (
    <DefaultLayout page={{ title }}>
      <Center height="calc(100vh - 100px)">
        <div className="flex items-center divide-x divide-zinc-300">
          <h3 className="text-2xl text-zinc-600 pr-4">🙁</h3>
          <p className="text-zinc-600 pl-4 py-2">{title}</p>
        </div>
      </Center>
    </DefaultLayout>
  )
}
