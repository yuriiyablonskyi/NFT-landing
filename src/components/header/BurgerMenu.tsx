import { motion } from 'framer-motion'
import { FC } from 'react'
import { BurgerMenuProps } from '../../../types'
import styles from './Header.module.sass'

const topLineVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 12 },
}

const middleLineVariants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
}

const bottomLineVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -12 },
}

const BurgerMenu: FC<BurgerMenuProps> = ({ menuOpen, toggleMenu }) => (
  <div className={styles.burgerMenu} onClick={toggleMenu}>
    <motion.div className={styles.burgerMenu__line} variants={topLineVariants} animate={menuOpen ? 'open' : 'closed'} />
    <motion.div
      className={styles.burgerMenu__line}
      variants={middleLineVariants}
      animate={menuOpen ? 'open' : 'closed'}
    />
    <motion.div
      className={styles.burgerMenu__line}
      variants={bottomLineVariants}
      animate={menuOpen ? 'open' : 'closed'}
    />
  </div>
)

export default BurgerMenu
