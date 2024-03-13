'use client'

import * as React from 'react'
import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify'

import { cn } from '@/lib/utils'
// import { Icons } from '@/components/icons'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { ModeToggle } from '@/components/ModeToggle'
import { AccountToggle } from '@/components/AccountToggle'
import { LanguageToggle } from '@/components/LanguageToggle'

import { Button } from '../ui/button'
import { Menu as MenuMobile } from 'lucide-react'
import { usePathname } from 'next/navigation'

//import {} from "@g81-tech/business-rules.g81" //Interface da regra de negócios


const newPosts: {
  title: string
  href: string
  description: string
  img: string
}[] = []
/* [
  {
    title: 'Excelentes bibliotecas para desenvolvimento de aplicativos Android',
    href: '/#',
    img: 'https://g81.com.br/wp-content/uploads/2019/04/Fazendo_Aplicativos_G81.png',

    description:
      'Retrofit – Um ótimo REST client para Android, que pode ser utilizado para mapear sua API utilizando annotations. Gson – Biblioteca para converter Json em Objetos Java e vice-versa. Picasso – Uma poderosa biblioteca para download e caching de imagens para Android.      ',
  },
  {
    title:
      'Estudante baiano, negro e de universidade pública, vence competição no maior evento de tecnologia nacional.',
    href: '/#',
    img: 'https://g81.com.br/wp-content/uploads/2019/04/Fazendo_Aplicativos_G81.png',

    description:
      'A Campus Party Brasil é o principal acontecimento tecnológico realizado anualmente no Brasil. Nele são tratados os mais diversos temas relacionados à Internet, reunindo um grande número de comunidades e usuários da rede mundial de computadores envolvidos com tecnologia e cultura digital. Nesse evento, acontece o Hackathon, maratona de programação. O termo resulta de uma combinação das palavras inglesas “hack” (programar de forma excepcional) e “marathon” (maratona). O Hackathon reúne programadores, designers e outros profissionais ligados ao desenvolvimento de software numa maratona de programação, cujo objetivo é desenvolver um software que atenda a um fim específico, ou projetos livres que sejam inovadores e utilizáveis.',
  },
  {
    title: 'Progress',
    href: '/#',
    img: 'https://g81.com.br/wp-content/uploads/2019/04/Fazendo_Aplicativos_G81.png',

    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/#',
    img: 'https://g81.com.br/wp-content/uploads/2019/04/Fazendo_Aplicativos_G81.png',

    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/#',
    img: 'https://g81.com.br/wp-content/uploads/2019/04/Fazendo_Aplicativos_G81.png',

    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/#',
    img: 'https://g81.com.br/wp-content/uploads/2019/04/Fazendo_Aplicativos_G81.png',

    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
] */

export interface MenuProps {
  items: {
    home: string
    about: string
    posts: {
      title: string
      b1: string
    }
    contact: string
    emptyPage: string
    postList: string
  }
  lang: {
    name: string
    locale: string
  }[]
  theme: {
    light: string
    dark: string
    system: string
  }
  newPosts: any[] //Pegar a interface da regra de negócios
}

export default function Menu({ items, lang, theme }: MenuProps) {
  const emptyPage = () => {
    toast.info(items.emptyPage)
  }
  const [isOpen, setIsOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLElement>(null)
  const pathname = usePathname()

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])
  return (
    <>
      <div className="flex justify-between p-4 items-center">
        <NavigationMenu ref={menuRef}>
          <Button
            className="md:hidden"
            variant="outline"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuMobile className=" h-[1.2rem] w-[1.2rem]" />
          </Button>

          <NavigationMenuList
            className={`hidden md:flex ${
              isOpen
                ? 'block absolute bg-background border border-input p-5 -ml-10 mt-6 rounded-lg'
                : 'hidden'
            }`}
          >
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {items.home}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {items.about}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              {isOpen ? (
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink
                    onClick={emptyPage}
                    className={navigationMenuTriggerStyle()}
                  >
                    {items.posts.title}
                  </NavigationMenuLink>
                </Link>
              ) : (
                <>
                  <NavigationMenuTrigger>
                    {items.posts.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="text-neutral-950 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {newPosts.length
                        ? newPosts.map((component) => (
                            <ListItemPosts
                              key={component.title}
                              title={component.title}
                              href={component.href}
                              img={component.img}
                              className="hover:bg-secondary"
                            >
                              {component.description}
                            </ListItemPosts>
                          ))
                        : items.postList}

                      <Button
                        disabled={!newPosts.length}
                        onClick={emptyPage}
                        className="text-neutral-950 w-fit mt-auto ml-auto col-start-2 bg-secondary hover:bg-primary"
                      >
                        {items.posts.b1}
                      </Button>
                    </ul>
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {items.contact}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="grid grid-rows-1 z-10 grid-flow-col gap-4">
          <AccountToggle handleAccountToggle={emptyPage} />
          <ModeToggle theme={theme} />
          <LanguageToggle lang={lang} />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
  img?: string
}

const ListItemPosts = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="flex">
              {props.img && (
                <img
                  src={props.img}
                  alt=""
                  className="w-20 h-20 object-cover rounded-md"
                />
              )}
              <div className="mx-3 py-1.5">
                <div className="line-clamp-4 font-medium leading-none">
                  {title}
                </div>
              </div>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItemPosts.displayName = 'ListItem'
