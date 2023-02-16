import clsx from 'clsx'

const GlassPane = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={clsx(
        // 'glass rounded-md border-solid border-2 border-transparent',
        className
      )}>
      {children}
    </div>
  )
}

export default GlassPane
