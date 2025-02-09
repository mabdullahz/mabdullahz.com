import { genPageMetadata } from 'app/seo'

import 'app/styles.css'

export const metadata = genPageMetadata({ title: 'Resume' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Resume
          </h1>
        </div>

        <div className="resume-container p-8">
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vSKiEw9U1ErlV61S4CwCk7UdvTP-A2DgZzj5ztLp1FbGCFrGovhyKXVNKay0v47hh0bFeYFEqxGj7B5/pub?embedded=true"
            width="840px"
            height="1000px"
            title="Resume"
          />
        </div>
      </div>
    </>
  )
}
