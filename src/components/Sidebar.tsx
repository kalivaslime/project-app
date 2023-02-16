import Card from './Card'
import Image from 'next/image'
// import logo from '@/assets/images/logo.png'
import SidebarLink from './SidebarLink'

export type Link = {
  label: string
  icon: 'Settings' | 'User' | 'Calendar' | 'Grid'
  link: '/calendar' | '/profile' | '/settings' | '/home'
}

const links: Link[] = [
  { label: 'Home', icon: 'Grid', link: '/home' },
  {
    label: 'Calendar',
    icon: 'Calendar',
    link: '/calendar',
  },
  { label: 'Profile', icon: 'User', link: '/profile' },
  {
    label: 'Settings',
    icon: 'Settings',
    link: '/settings',
  },
]

const Sidebar = () => {
  return (
    // <Card className='h-full w-40 flex items-center justify-between flex-wrap'>
    <Card
      className='h-full flex lg:flex-col
      md:flex-row
    justify-around '>
      {links.map(link => (
        <SidebarLink key={link.label} link={link} />
      ))}
    </Card>
  )
}

export default Sidebar
