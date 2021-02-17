import React from 'react'
import ContactUs from './contactUs'
import Foot from './foot'
import MasterHeader from './mastheader'
import NavBar from './navBar'
import Products from './products'
import ProductsModals from './productsModals'
import Storyline from './storyline'
import ContactDemo from './testComponnents/contactDemo'
import TopCarousel from './topCarousel'

const Body = () => (
    <div id="page-top">
        <NavBar />
        <MasterHeader />
        <Products />
        <TopCarousel />
        <Storyline />
        <ContactUs />
        {/* <ContactDemo /> */}
        <Foot />
        <ProductsModals />

    </div>
)

export default Body