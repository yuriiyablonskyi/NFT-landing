import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { EnvelopeIcon } from '../../assets/icons'
import { AstronautNewspaperImg } from '../../assets/images'
import Button from '../button/Button.tsx'
import Container from '../container/Container.tsx'
import SectionHeader from '../section-header/SectionHeader.tsx'
import styles from './SubscriptionSection.module.sass'

const SubscriptionSection: FC = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.subscription}>
          <img className={styles.subscription__img} src={AstronautNewspaperImg} alt="Astronaut" />
          <div className={styles.subscription__content}>
            <SectionHeader
              title={t('sections.subscriptionSection.header.title')}
              subtitle={t('sections.subscriptionSection.header.subtitle')}
            />
            <form className={styles.subscription__form}>
              <input
                type="email"
                placeholder={t('sections.subscriptionSection.form.inputPlaceholder')}
                className={styles.subscription__input}
                required
                aria-label="Email"
              />
              <Button icon={EnvelopeIcon} text={t('sections.subscriptionSection.form.buttonText')} type="submit" />
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
export default SubscriptionSection
