import axios from 'axios'
import Link from 'next/link'

interface Props {
  marketData?: [
    { price: number; exchange: string; pair: String; volume: number }
  ]
  exchangeData?: {
    supportedExchanges: []
  }
}

const Markets = ({ marketData, exchangeData }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {marketData?.map((e) => {
          return (
            <div className="m-4 p-4 border border-fuchsia-300 hover:border-white">
              <div className="flex">
                <div className="">
                  <p className="font-bold">{e.exchange}</p>
                  <p className="text-sm">Price: {e.price}</p>
                  <p className="text-xs">Pair: {e.pair}</p>
                  <p className="text-xs">Volume: {e.volume}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div>
        <h1 className="p-6">Exchanges</h1>
        <div className="p-7 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
          {exchangeData?.supportedExchanges.map((e) => {
            return <h1 className="p-1 hover:text-fuchsia-300">{e}</h1>
          })}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const market = await axios.get(
    'https://api.coinstats.app/public/v1/markets?coinId=bitcoin'
  )

  const exchange = await axios.get(
    'https://api.coinstats.app/public/v1/exchanges'
  )

  return {
    props: {
      marketData: market.data,
      exchangeData: exchange.data,
    },
  }
}

export default Markets
