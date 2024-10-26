import { useTranslation } from 'react-i18next'
import { Showcase } from '../../types'
import {
  AstronautGirl,
  BlueWhaleImg,
  DotguImg,
  GalacticExplorerImg,
  JuanieImg,
  SpaceWithKidImg,
} from '../assets/images'

export const useShowcaseData = (): Showcase[] => {
  const { t } = useTranslation()
  return [
    {
      id: 1,
      img: GalacticExplorerImg,
      title: t('sections.showcaseSection.items.distantGalaxy.label'),
      icon: JuanieImg,
      username: 'MoonDancer',
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      id: 2,
      img: SpaceWithKidImg,
      title: t('sections.showcaseSection.items.lifeOnEdena.label'),
      icon: BlueWhaleImg,
      username: 'NebulaKid',
      price: '0.21 ETH',
      highestBid: '0.81 wETH',
    },
    {
      id: 3,
      img: AstronautGirl,
      title: t('sections.showcaseSection.items.astroFiction.label'),
      icon: DotguImg,
      username: 'Spaceone',
      price: '4.57 ETH',
      highestBid: '0.26 wETH',
    },
  ]
}
