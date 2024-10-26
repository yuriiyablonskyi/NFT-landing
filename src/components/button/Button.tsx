import { motion } from 'framer-motion'
import { FC } from 'react'
import { ButtonProps } from '../../../types'
import styles from './Button.module.sass'

const Button: FC<ButtonProps> = ({ icon, text, type = 'button', color = 'purple' }) => {
  const buttonClass = color === 'purple' ? styles.buttonPurple : styles.buttonWhite

  return (
    <motion.button
      type={type}
      className={buttonClass}
      whileHover={{ scale: 1.04, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <img src={icon} alt={text || 'button icon'} className={styles.icon} />}
      <span className={styles.button__text}>{text}</span>
    </motion.button>
  )
}

export default Button
