import GlassPane from '@/components/GlassPane'

export default function DashRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GlassPane className='w-full h-full flex items-center justify-center'>
      {children}
    </GlassPane>
  )
}
