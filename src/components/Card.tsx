import clsx from 'clsx'

const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={clsx(
        'rounded-md p-2  px-10 py-4 drop-shadow-xl bg-white bg-opacity-30',
        className
      )}>
      {children}
    </div>
  )
}

export default Card
