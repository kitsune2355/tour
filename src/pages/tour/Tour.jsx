import React from 'react'
import Accommodation from './Content/Accommodation'
import Deal from './Content/Deal'
import Evoucher from './Content/Evoucher'
import Navbar from './Content/Navbar'
import Place from './Content/Place'
import Product from './Content/Product'
import Type from './Content/Type'
import View from './Content/View'
import Header from './Header'

const Tour = () => {
    return (
        <div>
            <Header/>
            <Type/>
            <Deal/>
            <Product/>
            <View/>
            <Accommodation/>
            <Evoucher/>
            <Place/>
            <Navbar/>
        </div>
    )
}

export default Tour
