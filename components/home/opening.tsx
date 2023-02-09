const Opening = () => {
  return (
    <div className="p-6 md:mt-28 mt-6 ml-3 container mx-auto flex flex-col items-center">
      <h1 className="md:text-4xl text-2xl font-bold mb-4">
        The <span className="text-fuchsia-300">World's</span> Fastest <br />{' '}
        Growing <span className="text-fuchsia-300">Crypto App</span>
      </h1>
      <h3 className="font-semibold md:text-xl text-sm mb-4 text-center">
        All of the tools and resources you need to bootstrap <br /> community
        and fundraise.
      </h3>
      <div className="flex">
        <div className="flex items-center justify-center border-2 rounded-2xl border-fuchsia-300 w-36 md:w-48 p-2 m-2 cursor-pointer hover:border-white">
          <img className="h-5 md:h-7 pr-2" src="./images/mac.png" alt="" />
          <div>
            <h1 className="text-xs md:text-sm">Download on the</h1>
            <h1 className="text-sm md:text-md font-semibold">App Store</h1>
          </div>
        </div>
        <div className="flex items-center  justify-center border-2 rounded-2xl border-fuchsia-300 w-36 md:w-48 p-2 m-2 cursor-pointer hover:border-white">
          <img
            className="h-5 md:h-7 pr-2"
            src="./images/playstore.png"
            alt=""
          />
          <div>
            <h1 className="text-xs md:text-sm">Download on the</h1>
            <h1 className="text-sm md:text-md font-semibold">Play Store</h1>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mt-4">
          SECURELY BUY, SELL, STORE, SEND and TRACK
        </h3>
      </div>
    </div>
  )
}

export default Opening
