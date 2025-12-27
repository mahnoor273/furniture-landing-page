import React from 'react'
import './index.css'
import Herosection from './Herosection'
import DealsSection from './Dealssection'
import ProductFeatureCard from './ProductFeatureCard'
import ProductCard from './ProductCard'
import NewArrivalProducts from './NewArrivalProducts'
import ReviewSection from './ReviewSection'
import Footer from './Footer'

const App = () => {
  return (
    <div>
 <Herosection />
 <DealsSection />
 <ProductFeatureCard />
 <ProductCard />
 <NewArrivalProducts />
 <ReviewSection />
 <Footer />
    </div>
  )
}

export default App

