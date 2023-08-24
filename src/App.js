import React from 'react'
import Header from './Components/Header/Header.js'
import Main from './Components/Main/Main.js'
import Shop from './Components/Shop/Shop.js'
import Contact from './Components/Contact/Contact.js'
import About from './Components/About/About.js'

import "./App.css"

const App = () => {
    return (
        <div className='app'>
            <Header />
            <div className='app__content'>
                <Main />
                <About />
                <Shop />
                <Contact />
            </div>
        </div>
    )
}

export default App