'use client'

import * as React from 'react'
import { Languages } from 'lucide-react'

import { useRouter, usePathname } from '../../navigation'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MenuProps } from './Menu'

export function LanguageToggle({ lang }: Partial<MenuProps>) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {lang!.map((language, index) => (
          <DropdownMenuItem
            onClick={() => router.push(pathname, { locale: language.locale })}
            key={index}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
