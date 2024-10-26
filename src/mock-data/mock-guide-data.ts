import { CollectionImg, EarningImg, WalletImg } from '../assets/images'

import { useTranslation } from 'react-i18next'
import { Guide } from '../../types'

export const useGuideData = (): Guide[] => {
  const { t } = useTranslation()
  return [
    {
      id: 1,
      icon: WalletImg,
      title: t('sections.guideSection.items.wallet.title'),
      text: t('sections.guideSection.items.wallet.text'),
    },
    {
      id: 2,
      icon: CollectionImg,
      title: t('sections.guideSection.items.collection.title'),
      text: t('sections.guideSection.items.collection.text'),
    },
    {
      id: 3,
      icon: EarningImg,
      title: t('sections.guideSection.items.earning.title'),
      text: t('sections.guideSection.items.earning.text'),
    },
  ]
}
