import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { DiscordIcon, EnvelopeIcon, InstagramIcon, LogoIcon, TwitterIcon, YoutubeIcon } from '../../assets/icons'
import Button from '../button/Button'
import Container from '../container/Container'
import styles from './Footer.module.sass'

const Footer: FC = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.footer}>
          <div className={styles.footer__item}>
            <a href="#" className={styles.footer__logo}>
              <img src={LogoIcon} alt={t('layout.footer.logo.logoAlt')} />
            </a>
            <p className={styles.footer__text}>{t('layout.footer.logo.description')}</p>
            <div className={styles.footer__social}>
              <p className={styles.footer__text}>{t('layout.footer.social.joinCommunity')}</p>
              <a href="#" className={styles.footer__socialLink}>
                <img
                  className={styles.footer__socialIcon}
                  src={DiscordIcon}
                  alt={t('layout.footer.social.links.discordAlt')}
                />
              </a>
              <a href="#" className={styles.footer__socialLink}>
                <img
                  className={styles.footer__socialIcon}
                  src={YoutubeIcon}
                  alt={t('layout.footer.social.links.youtubeAlt')}
                />
              </a>
              <a href="#" className={styles.footer__socialLink}>
                <img
                  className={styles.footer__socialIcon}
                  src={TwitterIcon}
                  alt={t('layout.footer.social.links.twitterAlt')}
                />
              </a>
              <a href="#" className={styles.footer__socialLink}>
                <img
                  className={styles.footer__socialIcon}
                  src={InstagramIcon}
                  alt={t('layout.footer.social.links.instagramdAlt')}
                />
              </a>
            </div>
          </div>
          <div className={styles.footer__item}>
            <h4 className={styles.footer__header}>{t('layout.footer.explore.title')}</h4>
            <a href="#" className={styles.footer__link}>
              {t('layout.footer.explore.links.marketplace')}
            </a>
            <a href="#" className={styles.footer__link}>
              {t('layout.footer.explore.links.rankings')}
            </a>
            <a href="#" className={styles.footer__link}>
              {t('layout.footer.explore.links.connectWallet')}
            </a>
          </div>
          <div className={styles.footer__item}>
            <h4 className={styles.footer__header}>{t('layout.footer.newsletter.title')}</h4>
            <p className={styles.footer__text}>{t('layout.footer.newsletter.description')}</p>
            <form className={styles.footer__form}>
              <input
                type="email"
                placeholder={t('layout.footer.newsletter.form.inputPlaceholder')}
                className={styles.footer__input}
                required
                aria-label="Email"
              />
              <Button icon={EnvelopeIcon} text={t('layout.footer.newsletter.form.buttonText')} type="submit" />
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Footer
