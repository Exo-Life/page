import React from 'react'
import "./Header.css"
import logo from './logo.png'


const Header = () => {
  return (
	<div className='header'>
		<div className='header__title'>
			<img src={logo} alt="Logo" />
			<h1>EXO-LIFE</h1>
		</div>
		<div className='header__sections'>
			<a href='#main'>Home</a>
			<a href='#about'>About Us</a>
			<a href='#shop'>Shop</a>
			<a href='#contact'>Contact</a>
		</div>
	</div>
  )
}

export default Header