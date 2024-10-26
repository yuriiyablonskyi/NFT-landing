import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { RocketLaunchIcon } from '../../assets/icons'
import { AnimakidImg, AstronautKidImg } from '../../assets/images'
import Button from '../button/Button'
import Container from '../container/Container'
import styles from './HeroSection.module.sass'

const HeroSection: FC = () => {
  const { t } = useTranslation()

  return (
    <section>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.wrapper__description}>
            <h1 className={styles.title}>{t('sections.heroSection.title')}</h1>
            <p className={styles.subtitle}>{t('sections.heroSection.subtitle')}</p>
            <Button icon={RocketLaunchIcon} text={t('sections.heroSection.buttonText')} />
            <div className={styles.info}>
              <div className={styles.info__item}>
                <p className={styles.info__count}>240k+ </p>
                <p className={styles.info__description}>{t('sections.heroSection.info.totalSale')}</p>
              </div>
              <div className={styles.info__item}>
                <p className={styles.info__count}>100k+</p>
                <p className={styles.info__description}>{t('sections.heroSection.info.auctions')}</p>
              </div>
              <div className={styles.info__item}>
                <p className={styles.info__count}>240k+</p>
                <p className={styles.info__description}>{t('sections.heroSection.info.artists')}</p>
              </div>
            </div>
          </div>
          <div className={styles.wrapper__image}>
            <img src={AstronautKidImg} alt={t('sections.heroSection.img.imgAlt')} className={styles.img} />
            <div className={styles.img__info}>
              <h4 className={styles.img__title}>{t('sections.heroSection.img.label')}</h4>
              <div className={styles.img__user}>
                <img src={AnimakidImg} alt={t('sections.heroSection.img.iconAlt')} className={styles.img__icon} />
                <span className={styles.img__label}>Animakid</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
export default HeroSection
