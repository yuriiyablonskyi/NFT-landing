export interface Creator {
  id: number
  title: string
  img: string
}

export interface Category {
  id: number
  label: string
  img: string
  icon: string
}

export interface GalleryItem {
  id: number
  mainImg: string
  miniImgs: string[]
  title: string
  username: string
  userIcon: string
}

export interface Showcase {
  id: number
  img: string
  title: string
  icon: string
  username: string
  price: string
  highestBid: string
}

export interface Guide {
  id: number
  icon: string
  title: string
  text: string
}
