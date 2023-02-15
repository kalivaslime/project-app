import GlassPane from '@/components/GlassPane'
import Sidebar from '@/components/Sidebar'

export default function DashRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GlassPane className='w-full h-full flex items-center '>
      <Sidebar />
      {children}
    </GlassPane>
  )
}
