interface Props {
  coin: string
  label: string
}

const CoinModalInfo = ({ label, coin }: Props) => {
  return (
    <div className="flex justify-between py-1">
      <p className=" text-white lg leading-relaxed">{label}</p>
      <span className="text-lg">{coin}</span>
    </div>
  )
}

export default CoinModalInfo
