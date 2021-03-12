import React from 'react'
import Carousel from './carousel/carousel'
import TopCarousel from './carousel/topCarousel'
import ContactUs from './contactUs'
import Foot from './foot'
import MasterHeader from './mastheader'
import NavBar from './navBar'
import Pristatymas from './pristatymas'
import Products from './products'
import ProductsModals from './productsModals'
import Storyline from './storyline'
import ContactDemo from './testComponnents/contactDemo'

const Body = () => (
    <div id="page-top">
        <NavBar />
        <MasterHeader />
        <Products />
        <Pristatymas />
        {/* <TopCarousel /> */}
        {/* <Carousel /> */}
        
        <Storyline />
        <ContactUs />
        {/* <ContactDemo /> */}
        <Foot />
        <ProductsModals />

    </div>
)

export default Body