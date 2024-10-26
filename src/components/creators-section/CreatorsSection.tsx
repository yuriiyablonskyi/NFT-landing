import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { RocketLaunchIcon } from '../../assets/icons'
import { creatorsData } from '../../mock-data/mock-creators-data'
import Button from '../button/Button.tsx'
import Container from '../container/Container.tsx'
import SectionHeader from '../section-header/SectionHeader.tsx'
import styles from './CreatorsSection.module.sass'

const CreatorsSection: FC = () => {
  const { t } = useTranslation()

  return (
    <section>
      <Container>
        <div className={styles.wrapper}>
          <SectionHeader
            title={t('sections.creatorsSection.header.title')}
            subtitle={t('sections.creatorsSection.header.subtitle')}
          />
          <div className={styles.creatorsList}>
            {creatorsData.map(({ id, title, img }, index) => (
              <div key={id} className={styles.creatorsList__item}>
                <p className={styles.creatorsList__number}>{index + 1}</p>
                <img className={styles.creatorsList__img} src={img} alt={title} />
                <div className={styles.creatorsList__info}>
                  <h4 className={styles.creatorsList__title}>{title}</h4>
                  <p>
                    <span className={styles.creatorsList__label}>{t('sections.creatorsSection.totalSalesLabel')}:</span>
                    <span className={styles.creatorsList__count}>34.53 ETH</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.buttonCenter}>
            <Button icon={RocketLaunchIcon} text={t('sections.creatorsSection.buttonText')} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CreatorsSection
