import axios from 'axios'
import Link from 'next/link'

interface Props {
  newsData?: {
    news: [
      {
        id: string
        feedDate: number
        source: string
        title: string
        isFeatured: boolean
        description: string
        imgURL: string
        link: string
        sourceLink: string
        reactionsCount: {}
        shareURL: string
        relatedCoins: []
      }
    ]
  }
}

const News = ({ newsData }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {newsData?.news.map((e) => {
        return (
          <div className="m-4 p-4">
            <div className="md:flex">
              <img
                className="aspect-square object-cover mr-3 md:w-44 rounded-lg"
                src={e.imgURL}
                alt={e.imgURL}
              />
              <div className="mt-4">
                <p className="font-bold mb-2">{e.title}</p>
                <p className="text-sm mb-6">{e.description}</p>
                <a className="text-sm font-bold text-fuchsia-300" href={e.link}>
                  {'View more..'}
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await axios.get(
    'https://api.coinstats.app/public/v1/news/bearish?skip=0&limit=20'
  )

  return {
    props: {
      newsData: data.data,
    },
  }
}

export default News
