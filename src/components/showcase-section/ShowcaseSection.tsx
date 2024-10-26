import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Showcase } from '../../../types/data'
import { EyeIcon } from '../../assets/icons'
import { useShowcaseData } from '../../mock-data/use-showcase-data.ts'
import Button from '../button/Button.tsx'
import Container from '../container/Container.tsx'
import SectionHeader from '../section-header/SectionHeader.tsx'
import styles from './ShowcaseSection.module.sass'

const ShowcaseSection: FC = () => {
  const { t } = useTranslation()
  const showcaseData: Showcase[] = useShowcaseData()

  return (
    <section>
      <Container>
        <div className={styles.wrapper}>
          <SectionHeader
            title={t('sections.showcaseSection.header.title')}
            subtitle={t('sections.showcaseSection.header.subtitle')}
          />
          <div className={styles.showcaseList}>
            {showcaseData.map(({ id, img, title, icon, username, price, highestBid }) => (
              <div key={id} className={styles.showcaseList__item}>
                <img className={styles.showcaseList__img} src={img} alt={t(title)} />
                <div className={styles.showcaseList__info}>
                  <h4 className={styles.showcaseList__title}>{t(title)}</h4>
                  <div className={styles.showcaseList__user}>
                    <img className={styles.showcaseList__userIcon} src={icon} alt={username} />
                    <span className={styles.showcaseList__userLabel}>{username}</span>
                  </div>
                  <div className={styles.сostWrapper}>
                    <div className={styles.сostWrapper__price}>
                      <p className={styles.сostWrapper__label}>{t('sections.showcaseSection.cardInfo.price')}</p>
                      <p className={styles.сostWrapper__value}>{price}</p>
                    </div>
                    <div className={styles.сostWrapper__highestBid}>
                      <p className={styles.сostWrapper__label}>{t('sections.showcaseSection.cardInfo.highestBid')}</p>
                      <p className={styles.сostWrapper__value}>{highestBid}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.buttonCenter}>
            <Button icon={EyeIcon} text={t('sections.showcaseSection.buttonText')} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ShowcaseSection
