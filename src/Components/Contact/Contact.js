import  React, { useState } from 'react'

import "./Contact.css"
import protesis from "./mano_protesis.png"

const Contact = () => {

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: ""
	})

	const send = (e) => {
		e.preventDefault()
		setForm({
			name: "",
			email: "",
			message: ""
		})
	}

	return (
		<div className='contact' id="contact">
			<div class="contact__circle"></div>
			<div className='contact__form'>
				<h2>Contáctanos:</h2>
				<div className='contact__input'>
					<input type='text' placeholder='Nombre' value={form.name} onChange={(e) => setForm({ ...form, name: e.value })} />
					<input type='text' placeholder='E-mail' value={form.email} onChange={(e) => setForm({ ...form, email: e.value })} />
					<input type='text' placeholder='Mensaje' value={form.message} onChange={(e) => setForm({ ...form, message: e.value })} />
				</div>
				<button onClick={(e) => send(e)}>ENVIAR</button>
			</div>
			<div className='contact__image'>
				<img src={protesis} alt="Imagen de referencia"/>
			</div>
		</div>
	)
}

export default Contact
