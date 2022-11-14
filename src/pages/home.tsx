import PageLayout from '../layouts/page'
import Loader from '../components/loader'
import Center from '../components/center'
import { If, Then, Else } from 'react-if'
import { useQuery } from 'react-query'
import axios from '../helpers/axios'
import random from 'lodash/random'

async function findFirst() {
  const { data } = await axios.get('/shih-ching')
  return data
}

export default function HomePage() {
  const title = 'shih-ching'
  const { isLoading, data } = useQuery('shih-ching', () => findFirst())

  return (
    <PageLayout page={{ title }}>
      <Center height="calc(100vh - 115px)">
        <If condition={isLoading}>
          <Then>
            <Loader />
          </Then>
          <Else>
            <div className="flex items-center divide-x divide-zinc-300 p-6">
              <h3 className="text-2xl text-zinc-600 pr-4">👋</h3>
              <p className="text-zinc-600 leading-relaxed pl-4 py-2">
                <span className="duration-200 ease-in-out transition-[background-size] bg-gradient-to-r from-sky-300 to-lime-300 bg-left-bottom bg-no-repeat bg-[length:0px_2px] hover:bg-[length:100%_2px]">
                  {data?.content[random(data.length - 1)]}
                </span>
              </p>
            </div>
          </Else>
        </If>
      </Center>
    </PageLayout>
  )
}
