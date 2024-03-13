'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { InputMasked } from '../InputMasked'
import { ToastContainer, toast } from 'react-toastify'

interface MessageErrorFormSchemaProps {
  fullname: string
  email: string
  message: string
}

const FormSchema = ({email, fullname, message}:MessageErrorFormSchemaProps)=> {
  
  return z.object({
  fullname: z.string().min(3, {
    message: `${fullname}`,
  }),
  email: z
    .string()
    .email({
     message: `${email}`,
    }),

  subject: z.string(),
  message: z.string().min(3, {
    message: `${message}`,
  }),
  phone: z.string().optional(),
})
}

interface ContactFormProps {
  formItens: {
    name: string
    email: string
    phone: string
    message: string
    subject: {
      title: string
      options: {
        b1: string
        b2: string
        b3: string
        b4: string
        b5: string
        b6: string
      }
    }
  }
  buttons: {
    send: string
    clear: string
  }
  messages: {
    errorMessage: {
      required: string
      fullName: string
      email: string
      message: string
    }
    placeholder: string
  }
}

export function ContactForm({
  formItens,
  buttons,
  messages,
}: ContactFormProps) {
  const firstOptionValue = formItens.subject.options.b1

  const _FormSchema = FormSchema({email: messages.errorMessage.email, fullname: messages.errorMessage.fullName, message: messages.errorMessage.message});
  const form = useForm<z.infer<typeof _FormSchema>>({
    resolver: zodResolver(_FormSchema),
    defaultValues: {
      fullname: '',
      email: '',
      subject: firstOptionValue,
      message: '',
      phone: '',
    },
  })

  function onSubmit(data: z.infer<typeof _FormSchema>) {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Erro na requisição')
        toast.success('Enviado com sucesso!')
        return response.json()
      })
      .catch((error) => {
        console.error('Erro ao enviar a requisição:', error)
        toast.error('Erro no envio do e-mail!')
      })
      .finally(() => form.reset())
  }
  const handleReset = () => {
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formItens.name}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={
                      messages.placeholder +
                      ' ' +
                      formItens.name.toLocaleLowerCase() +
                      '...'
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formItens.email}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={
                      messages.placeholder +
                      ' ' +
                      formItens.email.toLocaleLowerCase() +
                      '...'
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formItens.phone}</FormLabel>
                <FormControl>
                  <InputMasked mask="(99) 99999-9999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formItens.subject.title}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          messages.placeholder +
                          ' ' +
                          formItens.subject.title.toLocaleLowerCase() +
                          '...'
                        }
                      />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent className="bg-white">
                    {Object.entries(formItens.subject.options).map(
                      ([key, value]) => (
                        <SelectItem
                          key={key}
                          className="hover:bg-gray-200 focus:bg-gray-300 text-black hover:text-gray-800 focus:text-gray-900"
                          value={value}
                        >
                          {value}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{formItens.message}</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=" flex w-100  justify-end space-x-5">
          <Button variant="ghost" type="button" onClick={handleReset}>
            {buttons.clear}
          </Button>

          <Button className="text-dark bg-green-500 hover:bg-green-600 w-1/4" type="submit">
            {buttons.send}
          </Button>
        </div>
      </form>
      <ToastContainer />
    </Form>
  )
}
