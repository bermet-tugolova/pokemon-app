import React, { useState } from 'react'
import { add_pokemon } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import './Form.css'

const Form = () => {
	const [name, setName] = useState('') // название
	const [des, setDes] = useState('') // описание
	const [img, setImg] = useState('') // ссылка на фотографию

	const dispatch = useDispatch()

	// добавление покемонов
	const onAdd = (e) => {
		e.preventDefault() // отмена действия,чтобы страница не перезагружалась из-за <form></form>
		if (name && img && des) { // если эти параметры заполнены
			dispatch(add_pokemon({ name: name, img: img, des: des })) // появится новый покемон с заполненными параметрами
		}
		setName('')
		setImg('')
		setDes('')
	}

	return (
		<div className='card-body'>
			<form
				className='container'
				autoComplete={'off'}
				onSubmit={onAdd}
			>
				<h4>Pokemon name</h4>
				<input
					type='text '
					placeholder='Pokemon name'
					className='form-control'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<h4>Pokemon description</h4>
				<input
					type='text'
					placeholder='Pokemon description'
					className='form-control'
					value={des}
					onChange={(e) => setDes(e.target.value)}
				/>
				<h4>Pokemon image URL</h4>
				<input
					type='text'
					placeholder='img URL'
					className='form-control'
					value={img}
					onChange={(e) => setImg(e.target.value)}
				/>
				<div
					style={{
						marginTop: '20px',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<button type='submit' className='btn btn-primary'>
						Add pokemon
					</button>
				</div>
			</form>
		</div>
	)
}
export default Form
