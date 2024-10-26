import { motion } from 'framer-motion'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Guide } from '../../../types/data'
import useElementInView from '../../hooks/useInViewObserver.ts'
import { useGuideData } from '../../mock-data/mock-guide-data'
import Container from '../container/Container.tsx'
import SectionHeader from '../section-header/SectionHeader.tsx'
import styles from './GuideSection.module.sass'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeInOut',
    },
  }),
}

const GuideSection: FC = () => {
  const { t } = useTranslation()
  const guideData: Guide[] = useGuideData()
  const [targetRef, isInView] = useElementInView({ threshold: 0.25 })

  return (
    <section ref={targetRef}>
      <Container>
        <div className={styles.wrapper}>
          <SectionHeader
            title={t('sections.guideSection.header.title')}
            subtitle={t('sections.guideSection.header.subtitle')}
          />
          <div className={styles.guideList}>
            {guideData.map(({ id, icon, title, text }, index) => (
              <motion.div
                key={id}
                className={styles.guideList__item}
                custom={index}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={cardVariants}
              >
                <img className={styles.guideList__img} src={icon} alt={t(title)} />
                <div className={styles.guideList__info}>
                  <h4 className={styles.guideList__title}>{t(title)}</h4>
                  <p className={styles.guideList__text}>{t(text)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default GuideSection
