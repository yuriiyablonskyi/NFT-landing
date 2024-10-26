import { motion } from 'framer-motion'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { GalleryItem } from '../../../types/data'
import useElementInView from '../../hooks/useInViewObserver.ts'
import { useGalleryData } from '../../mock-data/use-gallery-data.ts'
import Container from '../container/Container.tsx'
import SectionHeader from '../section-header/SectionHeader.tsx'
import styles from './GallerySection.module.sass'

const GallerySection: FC = () => {
  const { t } = useTranslation()
  const galleryData: GalleryItem[] = useGalleryData()
  const [targetRef, isInView] = useElementInView({ threshold: 0.25 })

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

  return (
    <section ref={targetRef}>
      <Container>
        <div className={styles.wrapper}>
          <SectionHeader
            title={t('sections.gallerySection.header.title')}
            subtitle={t('sections.gallerySection.header.subtitle')}
          />
          <div className={styles.galleryList}>
            {galleryData.map(({ id, mainImg, miniImgs, title, username, userIcon }, index) => (
              <motion.div
                key={id}
                className={styles.galleryList__item}
                custom={index}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={cardVariants}
              >
                <img src={mainImg} className={styles.galleryList__mainImg} alt={t(title)} />
                <div className={styles.galleryList__images}>
                  {miniImgs.map((miniImg, idx) => (
                    <img key={idx} src={miniImg} className={styles.galleryList__miniImg} alt={title} />
                  ))}
                  <a href="#" className={styles.galleryList__link}>
                    1025+
                  </a>
                </div>
                <div className={styles.galleryList__info}>
                  <h4 className={styles.galleryList__title}>{t(title)}</h4>
                  <p className={styles.galleryList__username}>
                    <img src={userIcon} className={styles.galleryList__userIcon} alt={username} />
                    <span className={styles.galleryList__userLabel}>{username}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default GallerySection
