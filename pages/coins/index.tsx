import CoinModalInfo from '@/components/coins/coinmodal-info'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'

interface Props {
  coinData?: {
    coins: [
      {
        availableSupply: string
        exp: []
        icon: string
        id: string
        marketCap: string
        name: string
        price: string
        rank: string
        symbol: string
        totalSupply: string
        twitterUrl: string
        volume: string
        websiteUrl: string
      }
    ]
  }
  id: string
}

const Coins = ({ coinData }: Props) => {
  const [showModal, setShowModal] = React.useState(false)
  const [coin, setCoin] = useState({
    name: '',
    symbol: '',
    rank: '',
    availableSupply: '',
    totalSupply: '',
    volume: '',
    websiteUrl: '',
    twitterUrl: '',
    exp: [],
  })
  const getCoin = ({ id }: Props) => {
    coinData?.coins.some(function (coin) {
      var result
      if (coin.id === id) {
        result = coin
        setCoin(result)
        console.log(result)
      }
      return result
    })
  }

  return (
    <div>
      <div className={'coins'}>
        {coinData?.coins.map((e) => {
          return (
            <div
              onClick={() => {
                setShowModal(true)
                getCoin(e)
              }}
              className="coin-container"
              key={e.id}
            >
              <div className="flex">
                <img className="coin-icon" src={e.icon} alt={e.icon} />
                <div>
                  <p className="font-bold">{e.name}</p>
                  <p className="text-xs">{e.symbol}</p>
                  <p className="text-sm">Price: {e.price}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {showModal ? (
        <>
          <div className="modal">
            <div>
              <div className="modal-container">
                <a href={coin['websiteUrl']}>
                  <div className="flex items-end p-5">
                    <h3 className="text-3xl font-semibold pr-2 text-fuchsia-300">
                      {coin['name']}
                    </h3>
                    <h6 className="text-fuchsia-300">({coin['symbol']})</h6>
                  </div>
                </a>
                {/*body*/}
                <div className="relative px-6 pb-6 pt-2 w-96">
                  <CoinModalInfo label={'Rank:'} coin={coin['rank']} />
                  <CoinModalInfo
                    label={'Available Supply:'}
                    coin={coin['availableSupply']}
                  />
                  <CoinModalInfo
                    label={'Total Supply:'}
                    coin={coin['totalSupply']}
                  />
                  <CoinModalInfo label={'volume'} coin={coin['volume']} />
                </div>
                <div className="flex items-center justify-between">
                  <a
                    className="text-blue-300 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    href={coin['twitterUrl']}
                  >
                    Twitter
                  </a>
                  <div className="flex items-center justify-end py-6">
                    <a
                      className="text-fuchsia-300 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      href={coin['exp'][0]}
                    >
                      Explore
                    </a>
                    <button
                      className="text-fuchsia-300 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await axios.get(
    'https://api.coinstats.app/public/v1/coins?skip=0'
  )

  return {
    props: {
      coinData: data.data,
    },
  }
}

export default Coins
