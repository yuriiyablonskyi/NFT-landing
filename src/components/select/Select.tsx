import { Variants, motion } from 'framer-motion'
import { FC, useEffect, useRef, useState } from 'react'
import { LanguageOption, SelectProps } from '../../../types'
import { InternetIcon } from '../../assets/icons'
import styles from './Select.module.sass'

const menuVariants: Variants = {
  open: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
    },
  },
  closed: {
    scale: 0.45,
    opacity: 0,
    y: -60,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.5,
      delay: 0.1,
    },
  },
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    transition: { duration: 0.2, delay: 0.2 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
}

const Select: FC<SelectProps> = ({ options, selectedLanguageValue, onChangeLanguage }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const selectRef = useRef<HTMLDivElement | null>(null)

  const toggleDropdown = () => setIsOpen(prev => !prev)

  const handleOptionSelect = (option: LanguageOption) => {
    setIsOpen(false)
    onChangeLanguage(option)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.wrapper} ref={selectRef}>
      <motion.button onClick={toggleDropdown} className={`${styles.select} ${isOpen ? styles.select_open : ''}`}>
        <img src={InternetIcon} alt="" className={styles.select__icon} />
        <span className={styles.select__value}>{selectedLanguageValue}</span>
      </motion.button>

      <motion.ul
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        className={styles.select__menu}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        {options.map(option => (
          <motion.li
            key={option.value}
            onClick={() => handleOptionSelect(option)}
            className={styles.select__item}
            variants={itemVariants}
          >
            {option.label}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Select
