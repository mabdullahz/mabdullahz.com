import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="flex flex-col h-screen px-4 sm:px-6">{children}</section>
  )
}
