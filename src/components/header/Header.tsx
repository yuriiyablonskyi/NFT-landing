import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageOption } from '../../../types'
import { LogoIcon, UserIcon } from '../../assets/icons'
import Button from '../button/Button'
import Select from '../select/Select'
import BurgerMenu from './BurgerMenu'
import styles from './Header.module.sass'

const options: LanguageOption[] = [
  { value: 'en', label: 'English' },
  { value: 'uk', label: 'Українська' },
  { value: 'pl', label: 'Polski' },
]

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const { t, i18n } = useTranslation()

  const defaultLanguage = 'en'
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(() => {
    const storedLanguage = localStorage.getItem('language') || defaultLanguage
    return options.find(option => option.value === storedLanguage) || { value: 'en', label: 'English' }
  })

  const toggleMenu = () => setMenuOpen(prevMenuOpen => !prevMenuOpen)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    setScrolled(scrollTop > 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || defaultLanguage
    i18n.changeLanguage(storedLanguage)
  }, [i18n])

  const handleChangeLanguage = (selectedOption: LanguageOption) => {
    setSelectedLanguage(selectedOption)
    i18n.changeLanguage(selectedOption.value).then(() => {
      localStorage.setItem('language', selectedOption.value)
    })
  }

  return (
    <motion.header
      animate={{
        boxShadow: scrolled ? '0 8px 20px 0 rgba(0, 0, 0, 0.5)' : 'none',
      }}
      className={styles.header}
    >
      <a href="#" className={styles.header__logo}>
        <img src={LogoIcon} alt={t('layout.header.logoAlt')} className={styles.header__logoImg} />
      </a>
      <nav className={`${styles.header__list} ${menuOpen ? styles.header__list_open : ''}`}>
        <a className={styles.header__link} href="#marketplace">
          {t('layout.header.menu.marketplace')}
        </a>
        <a className={styles.header__link} href="#rankings">
          {t('layout.header.menu.rankings')}
        </a>
        <a className={styles.header__link} href="#connect_a_wallet">
          {t('layout.header.menu.connectWallet')}
        </a>
        <Select
          options={options}
          selectedLanguageValue={selectedLanguage.value}
          onChangeLanguage={handleChangeLanguage}
        />
        <Button icon={UserIcon} text={t('layout.header.menu.buttonText')} />
      </nav>
      <BurgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </motion.header>
  )
}

export default Header
