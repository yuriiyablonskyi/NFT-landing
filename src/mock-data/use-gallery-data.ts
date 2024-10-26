import { useTranslation } from 'react-i18next'
import { GalleryItem } from '../../types'

import {
  BearImg,
  CatImg,
  DogImg,
  MrFoxImg,
  Psychodelic1Img,
  Psychodelic2Img,
  PsychodelicImg,
  Robot1Img,
  Robot2Img,
  RobotImg,
  RoboticaImg,
  ShroomieImg,
} from '../assets/images'

export const useGalleryData = (): GalleryItem[] => {
  const { t } = useTranslation()
  return [
    {
      id: 1,
      mainImg: DogImg,
      miniImgs: [CatImg, BearImg],
      title: t('sections.gallerySection.items.dsgnAnimals.label'),
      username: 'MrFox',
      userIcon: MrFoxImg,
    },
    {
      id: 2,
      mainImg: PsychodelicImg,
      miniImgs: [Psychodelic1Img, Psychodelic2Img],
      title: t('sections.gallerySection.items.magicMushrooms.label'),
      username: 'Shroomie',
      userIcon: ShroomieImg,
    },
    {
      id: 3,
      mainImg: RobotImg,
      miniImgs: [Robot1Img, Robot2Img],
      title: t('sections.gallerySection.items.discoMachines.label'),
      username: 'Robotica',
      userIcon: RoboticaImg,
    },
  ]
}
