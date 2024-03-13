'use client'
import { Button } from '@/components/ui/button'
import { UserCog } from 'lucide-react'

interface AccountToggleProps {
  handleAccountToggle: () => void
}
export function AccountToggle({ handleAccountToggle }: AccountToggleProps) {
  return (
    <Button onClick={handleAccountToggle} variant="outline" size="icon">
      <UserCog className=" h-[1.2rem] w-[1.2rem]" />
    </Button>
  )
}
