import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

import "./Main.css"

const Main = () => {
  return (
	<div id="main" className='main'>
		<div className='main__background'></div>
		<div className='main__content'>
			<div className='main__title'>
				<h1>EXO <span> x </span> LIFE</h1>
				<div className='main__text'>
					<h2>Descubre un Nuevo Mañana con Nuestras Prótesis Impresas en 3D.</h2>
					<p>
						En EXO-LIFE, unimos tecnología y esperanza para crear prótesis personalizadas que transforman vidas. Deja atrás las limitaciones y abraza un futuro sin barreras. Bienvenido a la evolución de la movilidad.
					</p>
				</div>
			</div>
		</div>
		<div className='main__follow'>
				<h3>Siguenos</h3>
				<div>
					<TwitterIcon className='main__icon' href="https://x.com/DONEEEEEWEEN?t=1KR2mSDhBByg7qFT5R_AUQ&s=09"/>
					<InstagramIcon className='main__icon' href="https;//instagram.com/exo___life?igshid=YTQwZjQ0NmI0OA=="/>
				</div>
			</div>
		<div className='main__link'>
			<a href="#shop">
				Compra ya
				<KeyboardArrowDownIcon />
			</a>
		</div>
	</div>
  )
}

export default Main
