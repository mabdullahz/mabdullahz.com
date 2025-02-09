import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

import './styles.css'

export default function Home({ posts }) {
  return (
    <div className="hero-section">
      <div className="divide-y divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hello <span className="waving-hand"> 👋 </span>, I'm Abdullah Z.
          </h1>
          <p className="text-lg leading-7 text-gray-400">
            Senior Software Engineer: Designing, Developing, and Delivering Digital Excellence
          </p>
        </div>
      </div>
    </div>
  )
}
