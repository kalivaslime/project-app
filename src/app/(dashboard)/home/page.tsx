import Greeding from '@/components/Greeding'
import GreetingsSkeleton from '@/components/GreedingSkeleton'
import { delay } from '@/lib/async'
import { getUserFromCookie } from '@/lib/auth'
import { db } from '@/lib/db'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { Suspense } from 'react'
import ProjectCard from '@/components/ProjectCard'
import TaskCard from '@/components/TaskCard'

const getData = async () => {
  const user = await getUserFromCookie(cookies())
  const projects = await db.project.findMany({
    where: {
      ownerId: user?.id,
    },
    include: {
      tasks: true,
    },
  })

  return { projects }
}

export default async function Page() {
  await delay(1000)
  const { projects } = await getData()

  return (
    <div className='h-full overflow-y-auto w-full'>
      <div className=' h-full items-stretch justify-center min-h-[content]'>
        <div className='flex-1 grow flex p-3'>
          <Suspense fallback={<GreetingsSkeleton />}>
            {/* @ts-expect-error */}
            <Greeding />
          </Suspense>
        </div>
        <div className='flex  flex-wrap'>
          {projects.map(project => (
            <div
              className='
              sm:w-1/2 w-full
              md:w-1/3
              lg:w-1/4
              p-3
            '
              key={project.id}>
              <Link href={`/project/${project.id}`}>
                <ProjectCard project={project} />
              </Link>
            </div>
          ))}
          <div className='w-1/3 p-3'>{/* new project here */}</div>
        </div>
        <div className='mt-6 flex-2 grow w-full flex'>
          <div className='w-full'>
            {/* @ts-expect-error */}
            <TaskCard title='Upcoming Tasks' />
          </div>
        </div>
      </div>
    </div>
  )
}
