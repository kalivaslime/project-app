import { cva, VariantProps } from 'class-variance-authority'

const buttonClasses = cva(
  [
    'rounded-md',
    'font-bold',
    'active:scale-100',
    'transition',
    'duration-300',
    'ease-in-out',
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-purple-600',
          'text-white',
          'border-transparent',
          'hover:bg-purple-500',
        ],
        secondary: [
          'bg-white',
          'text-black',
          'border-gray-400',
          'hover:bg-gray-100',
          'border-solid',
          'border-2',
        ],
        text: ['bg-transparent', 'text-black', 'hover:bg-gray-100'],
      },
      size: {
        small: ['text-md', 'py-1', 'px-2'],
        medium: ['text-lg', 'px-6', 'py-2'],
        large: ['text-xlg', 'px-8', 'py-4'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
)
// export interface ButtonProps
//   extends React.HTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonClasses> {
//   children: React.ReactNode
// }

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  VariantProps<typeof buttonClasses>

const Button = ({
  children,
  className,
  intent,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonClasses({ intent, size, className })} {...props}>
      {children}
    </button>
  )
}

export default Button
