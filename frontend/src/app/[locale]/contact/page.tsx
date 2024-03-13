import { useTranslations } from 'next-intl'
import { Suspense } from 'react'
import Loading from './loading'
import { CommonPage } from '@/components/CommonPage'
import { Button } from '@/components/ui/button'
import { X, Instagram, Facebook, Linkedin } from 'lucide-react'
import { ContactForm } from '@/components/Contact/Form'
import Image from 'next/image'

export default function ContactPage() {
  const t = useTranslations('Menu')
  const t2 = useTranslations('Contact')
  const t3 = useTranslations('Shared')

  return (
    <Suspense fallback={<Loading />}>
      <CommonPage title={t('contact')}>
          <span>@g81tech </span>
        <div className="flex flex-wrap gap-2	bg-black bg-opacity-10 p-3 rounded-md">
          <a
            href="https://linkedin.com/company/g81tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="icon">
              <Linkedin className=" h-[1.2rem] w-[1.2rem]" />
            </Button>
          </a>
          <a
            href="https://instagram.com/g81tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="icon">
              <Instagram className=" h-[1.2rem] w-[1.2rem]" />
            </Button>
          </a>
          <a
            href="https://facebook.com/g81tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="icon">
              <Facebook className=" h-[1.2rem] w-[1.2rem]" />
            </Button>
          </a>
          <a
            href="https://twitter.com/g81tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="icon">
              <X className=" h-[1.2rem] w-[1.2rem]" />
            </Button>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Button size="icon">
              <Image
                src="/whatsapp.svg"
                width={22}
                height={22}
                alt="Whatsapp G81"
              />
            </Button>
          </a>
        </div>
        <ContactForm
          formItens={{
            email: t2('form.email'),
            name: t2('form.name'),
            phone: t2('form.phone'),
            message: t2('form.message'),
            subject: {
              options: {
                b1: t2('form.subject.b1'),
                b2: t2('form.subject.b2'),
                b3: t2('form.subject.b3'),
                b4: t2('form.subject.b4'),
                b5: t2('form.subject.b5'),
                b6: t2('form.subject.b6'),
              },
              
              title: t2('form.subject.title'),
            }
          }}
          buttons={{ send: t3('buttons.send'), clear: t3('buttons.clear') }}
          messages={{
            errorMessage: {
              required: t2('form.errorMessage.required'),
        fullName: t2('form.errorMessage.fullName'),
        email: t2('form.errorMessage.email'),
        message: t2('form.errorMessage.message'),
            },
            placeholder: t2('form.placeholder'),
          }}
        />
      </CommonPage>
    </Suspense>
  )
}
