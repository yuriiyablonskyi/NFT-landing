import CategoriesSection from './components/categories-section/CategoriesSection'
import CountdownSection from './components/countdown-section/CountdownSection'
import CreatorsSection from './components/creators-section/CreatorsSection'
import Footer from './components/footer/Footer'
import GallerySection from './components/gallery-section/GallerySection'
import GuideSection from './components/guide-section/GuideSection'
import Header from './components/header/Header'
import HeroSection from './components/hero-section/HeroSection'
import ShowcaseSection from './components/showcase-section/ShowcaseSection'
import SubscriptionSection from './components/subscription-section/SubscriptionSection'
import './styles/global.sass'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <GallerySection />
      <CreatorsSection />
      <CategoriesSection />
      <ShowcaseSection />
      <CountdownSection />
      <GuideSection />
      <SubscriptionSection />
      <Footer />
    </>
  )
}

export default App
