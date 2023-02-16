import Card from '@/components/Card'

export default function HomePageLoader() {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div
        className='w-16 h-16 border-4 border-dashed rounded-full animate-spin 
        border-white border-opacity-80
      '></div>
    </div>
  )
}
