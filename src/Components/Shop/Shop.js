import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import Snackbar from '@mui/material/Snackbar';
import "./Shop.css"
import imagen from './exo-protesis.png'

import CloseIcon from '@mui/icons-material/Close'

const Shop = () => {
	const precio = 955200
	
	const [ onBuy, setOnBuy ] = useState(false)
	const [ snack, setSnack ] = useState(false)
	const [ shop, setShop ] = useState([])
	const [ producto, setProducto ] = useState({
		color: "#000000",
		talla: "S"
	})
	const [form, setForm] = useState({
		nombre: "",
		telefono: "",
		email: "",
		departmento: "",
		municipio: "",
		direccion: "",
		numeroTarjeta: "",
		titular: "",
		expiracion: "",
		codigo: ""
		
	})
	
	const addProduct = () => {
		setShop([...shop, {...producto, id: Math.random()}])
		setProducto({
			color: "#000000",
			talla: "S"
		})
	}
	
	const comprar = () => {
		if (shop.length > 0){
			setOnBuy(true)
		}
	}
	
	const pagar = () => {
		setOnBuy(false)
		setShop([])
		setForm({
			nombre: "",
			telefono: "",
			email: "",
			departmento: "",
			municipio: "",
			direccion: "",
			numeroTarjeta: "",
			titular: "",
			expiracion: "",
			codigo: ""
		})
	}
	
	const remove = ele => {
		setShop(shop.filter(act => act.id !== ele.id))
	}
	
	const actualizarTelefono = (value) => {
		if ("1234567890 ".includes(value.slice(-1)) && value.length <= 10){
			setForm({...form, telefono: value})
		} 
	}
	
	const actualizarTarjeta = (value) => {
		if (value.length < form.numeroTarjeta.length) {
			setForm({...form, numeroTarjeta: value})
		} else {
			if ("1234567890".includes(value.slice(-1)) && value.split("").filter(act => act !== " ").length <= 16){
				if (value.split("").filter(act => act !== " ").length % 4 === 0 && value.length <= 18) {
					setForm({...form, numeroTarjeta: value + " "})
				} else {
					setForm({...form, numeroTarjeta: value})
				}
			} 
		}
	}
	 
	const actualizarCodigo = (value) => {
		if ("1234567890".includes(value.slice(-1)) && value.length <= 3){
			setForm({...form, codigo: value})
		}
	}
	
	const actualizarExpiracion = (value) => {
		if (value.length < form.expiracion.length) {
			setForm({...form, expiracion: value})
		} else {
			if ("1234567890".includes(value.slice(-1)) && value.split("").filter(act => act !== "/").length <= 4){
				if (value.split("").filter(act => act !== "/").length % 2 === 0 && value.length <= 4) {
					setForm({...form, expiracion: value + "/"})
				} else {
					setForm({...form, expiracion: value})
				}
			} 
		}
	}

	return (
		<div className='shop' id='shop'>
			<div className='shop__producto'>
				<div className='shop__image'>
					<img src={imagen} alt="Imagen de referencia"/>
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
						<button onClick={ comprar }>{ shop.length > 0 ? "Pagar" : "Añade productos"}</button>
					</div>
				</div>
			</div>
			<CSSTransition in={ onBuy } unmountOnExit appear enter exit timeout={500}>
				<div className='shop__pay'>
					<CloseIcon className="shop__cerrarComprar" onClick={() => setOnBuy(false)} />
					<div className='shop__form'>
						<form>
							<div className='shop__identificacion'>
								<h2>Identificación</h2>
								<input className="shop__input" type='text' onChange={(e) => setForm({...form, nombre: e.target.value})} value={ form.nombre } placeholder='Nombre'/>
								<input className="shop__input" type='email' onChange={(e) => setForm({...form, email: e.target.value})} value={ form.email } placeholder='E-mail'/>
								<input className="shop__input" type='text' onChange={(e) => actualizarTelefono(e.target.value)}  value={ form.telefono } placeholder='Telefono'/>
							</div>
							<div className='shop__envio'>
								<h2>Envio</h2>
								<input className="shop__input" type='text' onChange={(e) => setForm({...form, departamento: e.target.value})} value={ form.departamento } placeholder='Departamento'/>
								<input className="shop__input" type='text' onChange={(e) => setForm({...form, municipio: e.target.value})} value={ form.municipio } placeholder='Municipio'/>
								<input className="shop__input" type='text' onChange={(e) => setForm({...form, direccion: e.target.value})} value={ form.direccion } placeholder='Direccion'/>
							</div>
							<div className='shop__pago'>
								<h2>Pago</h2>
								<div>
									<label for="numeroTarjeta">Numero de tarjeta:</label>
									<input className="shop__inputPago" id="numeroTarjeta" type='text' onChange={(e) => actualizarTarjeta(e.target.value)} value={ form.numeroTarjeta } placeholder='0000 0000 0000 0000'/>
								</div>
								<div>
									<label for="expiracion">Fecha de expiración:</label>
									<input className="shop__inputPago" id="expiracion" type='text' onChange={(e) => actualizarExpiracion(e.target.value)} value={ form.expiracion } placeholder='MM/YY'/>
								</div>
								<div>
									<label for="codigo">Codigo de seguridad:</label>
									<input className="shop__inputPago" id="codigo" type='text'  onChange={(e) => actualizarCodigo(e.target.value)} value={ form.codigo } placeholder='000'/>
								</div>
							</div>
						</form>
					</div>
					<div className='shop__pedido'>
						<h2>Tu pedido:</h2>
						<div className='shop__listaContenidoPedido'>
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
							</div>))} 
						</div>
						<div className='shop__pagarBotones'>
						<p>Precio total: ${(precio * shop.length).toLocaleString("en-US")}</p>
							<button onClick={ () => setOnBuy(false) }>Cancelar</button>
							<button onClick={ pagar }>Pagar</button>
						</div>
					</div>
				</div> 
			</CSSTransition>
		</div>
	)
}

export default Shop
