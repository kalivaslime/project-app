import { FC } from 'react'
import { Prisma, TASK_STATUS } from '@prisma/client'
import Card from './Card'
import clsx from 'clsx'

const projectWithTasks = Prisma.validator<Prisma.ProjectArgs>()({
  include: {
    tasks: true,
  },
})

type ProjectWithTasks = Prisma.ProjectGetPayload<typeof projectWithTasks>

const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

const ProjectCard = ({ project }: { project: ProjectWithTasks }) => {
  const completedCount = project.tasks.filter(
    task => task.status === TASK_STATUS.COMPLETED
  ).length

  const progress = Math.ceil((completedCount / project.tasks.length) * 100)

  return (
    <Card className=' hover:scale-105 text-gray-800 transition-all ease-in-out duration-200'>
      <div>
        <span className='text-sm'>{formatDate(project.createdAt)}</span>
      </div>
      <div className='mb-6'>
        <span className='text-3xl'>{project.name}</span>
      </div>
      <div className='mb-2'>
        <span>
          {completedCount}/{project.tasks.length} completed
        </span>
      </div>
      <div>
        <div className='w-full h-2 bg-violet-200 rounded-full mb-2'>
          <div
            className={clsx(
              'h-full text-center text-xs text-white rounded-full'
            )}
            style={{
              width: `${progress}%`,
              backgroundColor: `hsl(273, 90%, ${100 - progress}%)`,
            }}></div>
        </div>
        <div className='text-right'>
          <span className='text-sm text-gray-600 font-semibold'>
            {progress}%
          </span>
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard
