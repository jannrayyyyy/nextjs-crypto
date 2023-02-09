import Link from 'next/link'
import { useState } from 'react'

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const onClicked = () => {
    setNav(!nav)
    console.log(nav)
  }

  const [home, setHome] = useState(true)
  const [coins, setCoins] = useState(false)
  const [news, setNews] = useState(false)
  const [market, setMarket] = useState(false)
  const [fiats, setFiats] = useState(false)

  return (
    <div className="md:flex md:justify-between w-full items-center">
      <div className="flex justify-between">
        <Link href={'/'}>
          <h1 className="text-xl font-bold p-2">WCA</h1>
        </Link>
        <button onClick={onClicked} className="md:hidden">
          =
        </button>
      </div>
      <ul
        className={`md:flex flex-col md:flex-row items-end ${
          nav ? 'flex' : 'hidden'
        }`}
      >
        <li
          onClick={() => {
            setHome(true)
            setCoins(false)
            setNews(false)
            setMarket(false)
            setFiats(false)
          }}
          className={`md:mr-6 font-semibold hover:text-fuchsia-300 transition duration-500 ${
            home ? 'text-fuchsia-300' : 'text-white'
          } `}
        >
          <Link href={'/'}>Home</Link>
        </li>
        <li
          onClick={() => {
            setHome(false)
            setCoins(true)
            setNews(false)
            setMarket(false)
            setFiats(false)
          }}
          className={`md:mr-6 font-semibold hover:text-fuchsia-300 transition duration-500 ${
            coins ? 'text-fuchsia-300' : 'text-white'
          } `}
        >
          <Link href={'/coins'}>Coins</Link>
        </li>
        <li
          onClick={() => {
            setHome(false)
            setCoins(false)
            setNews(true)
            setMarket(false)
            setFiats(false)
          }}
          className={`md:mr-6 font-semibold hover:text-fuchsia-300 transition duration-500 ${
            news ? 'text-fuchsia-300' : 'text-white'
          } `}
        >
          <Link href={'/news'}>News</Link>
        </li>
        <li
          onClick={() => {
            setHome(false)
            setCoins(false)
            setNews(false)
            setMarket(true)
            setFiats(false)
          }}
          className={`md:mr-6 font-semibold hover:text-fuchsia-300 transition duration-500 ${
            market ? 'text-fuchsia-300' : 'text-white'
          } `}
        >
          <Link href={'/markets'}>Market</Link>
        </li>
        <li
          onClick={() => {
            setHome(false)
            setCoins(false)
            setNews(false)
            setMarket(false)
            setFiats(true)
          }}
          className={`md:mr-6 font-semibold hover:text-fuchsia-300 transition duration-500 ${
            fiats ? 'text-fuchsia-300' : 'text-white'
          } `}
        >
          <Link href={'/fiats'}>Fiats</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
