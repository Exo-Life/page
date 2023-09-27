import { React, useState } from 'react'
import "./Shop.css"
import imagen from './product_tr.png'

import CloseIcon from '@mui/icons-material/Close'

const Shop = () => {
	const precio = 859200
	
	const [ shop, setShop ] = useState([])
	const [ producto, setProducto ] = useState({
		color: "#000000",
		talla: "S"
	})
	
	const addProduct = () => {
		setShop([...shop, {...producto, id: Math.random()}])
		setProducto({
			color: "#000000",
			talla: "S"
		})
	}
	
	const comprar = () => {
		setShop([])
		setForm({
			name: "",
			email: "",
		})
	}
	
	const [form, setForm] = useState({
		name: "",
		email: "",
	})
	
	const remove = ele => {
		console.log(ele)
		
		setShop(shop.filter(act => act.id !== ele.id))
	}

	return (
		<div className='shop' id='shop'>
			<div className='shop__producto'>
				<div className='shop__image'>
					<img src={imagen} />
				</div>
				<div className='shop__info'>
					<div className='shop__personalizar'>
						<div className='shop__nombreProducto'>
							<h2>Protesis de brazo</h2>
							<p>Precio: ${precio.toLocaleString("en-US")}</p>
						</div>
						<div className='shop__personalizarProducto'>
							<div className='shop__talla'>
								<label for="talla">Talla:</label>
								<select id="talla" name="talla" value={ producto.talla } onChange={(e) => setProducto({...producto, talla: e.target.value})}>
									<option value="S">S</option>
									<option value="M">M</option>
									<option value="L">L</option>
								</select>
							</div>
							<div className='shop__color'>
								<label for="color">Color:</label>
								<input type='color' id="color" value={ producto.color } onChange={(e) => setProducto({...producto, color: e.target.value})} />
							</div>
							<button onClick={ addProduct }>Añadir</button>
						</div>
					</div>
				</div>
			</div>
			<div className='shop__carrito'>
				<h2>Carrito:</h2>
				<div className='shop__lista'>
					{ shop.length > 0 ? 
						<div className='shop__listaContenido'>
							{ shop.map((act, idx) => (
							<div className='shop__tarjeta' key={idx}>
								<div className='shop__tarjetaInfo'>
									<div className='shop__tarjetaColor' style={{ backgroundColor: act.color }}></div>
									<p>
										<span>Protesis</span><br/>
										Talla: { act.talla } <br />
										Precio: { precio.toLocaleString("en-US") }
									</p>
								</div>
								<div className='shop__tarjetaIcon'>
									<CloseIcon onClick={() => remove(act)} />
								</div>
							</div>))} 
						</div>
						: 
						<diV className='shop__letrero'>
							<p>No hay productos en el carrito</p>
						</diV>
					}
				</div>
				<div className='shop__comprar'>
					<div className='shop__precio'>
						<p>Precio total: ${(precio * shop.length).toLocaleString("en-US")}</p>
						<button onClick={ comprar }>Comprar</button>
					</div>
					<div className='shop__form'>
						<input className='shop__input' type='text' placeholder='Nombre' value={form.name} onChange={(e) => setForm({ ...form, name: e.value })} />
						<input className='shop__input' type='text' placeholder='E-mail' value={form.email} onChange={(e) => setForm({ ...form, email: e.value })} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Shop