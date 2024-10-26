import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Category } from '../../../types/data'
import { useCategoriesData } from '../../mock-data/use-categories-data.ts'
import Container from '../container/Container.tsx'
import styles from './CategoriesSection.module.sass'

const CategoriesSection: FC = () => {
  const { t } = useTranslation()
  const categoriesData: Category[] = useCategoriesData()

  return (
    <section>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{t('sections.categoriesSection.header.title')}</h2>
          <div className={styles.categoriesList}>
            {categoriesData.map(({ id, label, img, icon }) => (
              <a key={id} className={styles.categoriesList__item} href="#">
                <div className={styles.categoriesList__imageContainer}>
                  <img className={styles.categoriesList__img} src={img} alt={label} />
                  <div className={styles.categoriesList__blurOverlay}></div>
                  <img src={icon} className={styles.categoriesList__icon} alt={label} />
                </div>
                <p className={styles.categoriesList__label}>{t(label)}</p>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
export default CategoriesSection
