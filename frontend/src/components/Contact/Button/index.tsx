import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'
import { Loader2 } from 'lucide-react'

interface ButtonProps {
  variant: 'finish' | 'send' | 'error' | 'warning' | 'primary' | 'loading'
  text: string
}
export function ButtonTheme({ variant = 'primary', text }: ButtonProps) {
  return (
    <Button
      style={{ backgroundColor: '#ec2' }}
      className="flex justify-between items-center space-8"
      disabled={variant == 'loading'}
    >
      {text}
      {variant == 'send' && <Send className="h-4 w-4 ml-3" />}
      {variant == 'loading' && <Loader2 className="h-4 w-4 ml-3" />}
    </Button>
  )
}
