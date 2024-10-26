import { FC } from 'react'
import { SectionHeaderProps } from '../../../types'
import styles from './SectionHeader.module.sass'

const SectionHeader: FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className={styles.headerWrapper}>
    <h2 className={styles.headerWrapper__title}>{title}</h2>
    <p className={styles.headerWrapper__subtitle}>{subtitle}</p>
  </div>
)

export default SectionHeader
