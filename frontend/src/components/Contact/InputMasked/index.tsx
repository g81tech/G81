import { cn } from '@/lib/utils'
import * as React from 'react'
import InputMask from 'react-input-mask'

export interface InputMaskedProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  mask: string
}

const InputMasked = React.forwardRef<HTMLInputElement, InputMaskedProps>(
  ({ mask, className, type, ...props }, ref) => {
    return (
      <InputMask
        mask={mask}
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

InputMasked.displayName = 'InputMasked'

export { InputMasked }
