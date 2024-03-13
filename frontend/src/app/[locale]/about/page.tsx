import { Suspense } from 'react'
import { CommonPage } from './../../../components/CommonPage'
import { useTranslations } from 'next-intl'
import Loading from './loading'

export default function About() {
  const t = useTranslations('Menu')
  const t2 = useTranslations('Home')
  const t3 = useTranslations('About')

  return (
    <CommonPage title={t('about')}>
      <Suspense fallback={<Loading />}>
        <section className="mb-8">
          <div className="text-center mb-8">
            <p className="mb-4 text-justify">{t3('resume.p1')}</p>
            <p className="mb-4 text-justify">{t3('resume.p2')}</p>
            <p className="mb-4 text-justify">{t3('resume.p3')}</p>
            <p className="mb-4 text-justify">{t3('resume.p4')}</p>
            <img
              src="/g81_ads.png"
              alt={t2('title')}
              className="mx-auto w-2/3 p-5 rounded-lg"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-4">{t3('mission.title')}</h2>
            <p>{t3('mission.p1')}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">{t3('vision.title')}</h2>
            <p>{t3('vision.p1')}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">{t3('objectives.title')}</h2>
            <p>{t3('objectives.p1')}</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl text-center font-bold mb-4">{t2('title')}</h2>

          <div className="text-center mb-8">
            <p className="mb-4 text-justify">{t3('trademark.p1')}</p>
          </div>
          <div className="text-center mb-8">
            <p className="mb-4 text-justify">{t3('trademark.p2')}</p>
          </div>
          <div className="text-center mb-8">
            <p className="mb-4 text-justify">{t3('trademark.p3')}</p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="border rounded p-4">
              <h3 className="text-xl font-bold mb-2">
                1- {t3('trademark.virtues.faith.title')}
              </h3>
              <p className="text-justify">{t3('trademark.virtues.faith.p1')}</p>
            </li>
            <li className="border rounded p-4">
              <h3 className="text-xl font-bold mb-2">
                2- {t3('trademark.virtues.selfAwareness.title')}
              </h3>
              <p className="text-justify">
                {t3('trademark.virtues.selfAwareness.p1')}
              </p>
              <p className="text-justify">
                {t3('trademark.virtues.selfAwareness.p2')}
              </p>
            </li>
            <li className="border rounded p-4">
              <h3 className="text-xl font-bold mb-2">
                3- {t3('trademark.virtues.humility.title')}
              </h3>
              <p className="text-justify">
                {t3('trademark.virtues.humility.p1')}
              </p>
            </li>
            <li className="border rounded p-4">
              <h3 className="text-xl font-bold mb-2">
                4- {t3('trademark.virtues.commitment.title')}
              </h3>
              <p className="text-justify">
                {t3('trademark.virtues.commitment.p1')}
              </p>
            </li>
            <li className="border rounded p-4">
              <h3 className="text-xl font-bold mb-2">
                5- {t3('trademark.virtues.sowing.title')}
              </h3>
              <p className="text-justify">
                {t3('trademark.virtues.sowing.p1')}
              </p>
            </li>
            <li className="border rounded p-4">
              <h3 className="text-xl font-bold mb-2">
                6- {t3('trademark.virtues.focus.title')}
              </h3>
              <p className="text-justify">{t3('trademark.virtues.focus.p1')}</p>
            </li>
            <li className="border rounded p-4">
              <h3 className="text-xl font-bold mb-2">
                7- {t3('trademark.virtues.communication.title')}
              </h3>
              <p className="text-justify">
                {t3('trademark.virtues.communication.p1')}
              </p>
            </li>
            <li className="border rounded p-4">
              <h3 className="text-xl font-bold mb-2">
                8- {t3('trademark.virtues.passion.title')}
              </h3>
              <p className="text-justify">
                {t3('trademark.virtues.passion.p1')}
              </p>
            </li>
          </ul>
        </section>
      </Suspense>
    </CommonPage>
  )
}
