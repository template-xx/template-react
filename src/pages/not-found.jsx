import DefaultLayout from '../layouts/default'

export default function NotFoundPage() {
  const title = '抱歉，没有找到对应的页面'

  return (
    <DefaultLayout>
      <div className="p-4">
        <div className="flex flex-col">
          <p className="leading-loose">{title}</p>
        </div>
      </div>
    </DefaultLayout>
  )
}
