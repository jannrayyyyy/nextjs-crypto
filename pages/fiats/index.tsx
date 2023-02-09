import axios from 'axios'
import Link from 'next/link'

interface Props {
  fiatsData?: [
    {
      name: string
      rate: number
      symbol: string
      imageUrl: string
    }
  ]
}

const Fiats = ({ fiatsData }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {fiatsData?.map((e) => {
        return (
          <div className="m-4 p-4 border border-fuchsia-300 hover:border-white">
            <div className="flex items-center">
              <img
                className="w-16 aspect-square object-contain mr-3"
                src={e.imageUrl}
                alt={e.imageUrl}
              />
              <div className="">
                <p className="font-bold">
                  {e.name} - <span className="text-xs">{e.symbol}</span>{' '}
                </p>
                <p className="text-sm">Price: {e.rate}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await axios.get('https://api.coinstats.app/public/v1/fiats')

  return {
    props: {
      fiatsData: data.data,
    },
  }
}

export default Fiats
