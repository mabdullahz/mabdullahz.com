interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'LabXchange',
    description: `LabXchange is a Harvard University-based not-for-profit science education project funded by the
    Amgen Foundation. I have been mainly working in a Data Engineering role, along with providing support across
    the platform stack.`,
    imgSrc: '/static/images/projects/labxchange.jpeg',
    href: 'https://www.labxchange.org',
  },
  {
    title: 'Xiangqi: Chinese Chess',
    description: `Xiangqi.com is a global community of Chinese Chess players, novices to masters.
    Xiangqi.com is a place where Chinese Chess players from around the world can meet, chat, and play
    Xiangqi online.`,
    imgSrc: '/static/images/projects/xiangqi.jpeg',
    href: 'https://xiangqi.com',
  },
  {
    title: 'Philanthropy University',
    description: `Philanthropy U is the premier online learning platform for social impact, with
    world-class courses, communities and data-driven insights to social impact organizations
    anywhere in the world.`,
    imgSrc: '/static/images/projects/philu.jpg',
    href: 'https://xiangqi.com',
  },
  {
    title: 'Overjet',
    description: `Overjet is the #1 dental AI company that supports DSOs, dentists, dental groups,
    insurance companies and health plans on their quest to improve oral health.`,
    imgSrc: '/static/images/projects/overjet.jpg',
    href: 'https://xiangqi.com',
  },
]

export default projectsData
