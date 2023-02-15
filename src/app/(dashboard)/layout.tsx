import GlassPane from '@/components/GlassPane'
import Sidebar from '@/components/Sidebar'

export default function DashRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GlassPane className='w-full h-full p-1 flex gap-2 items-center '>
      <Sidebar />
      {children}
    </GlassPane>
  )
}
