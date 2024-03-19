import Head from 'next/head'

interface CommonPageProps{ title?: string, children: React.ReactNode
}

export const CommonPage = ({ title, children }:CommonPageProps ) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="relative z-8 top-36 animate-fadeIn">
        <h1 className="text-center text-primary-foreground flex justify-center uppercase font-bold text-2xl">
          {title}
        </h1>

        <div className=" border border-input max-w-7xl h-full bg-white z-10 m-4 auto rounded-lg p-6 text-black mx-auto">
          {children}
        </div>
      </div>
    </>
  )
}
