import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'
import { delete_pokemon, fav_pokemon } from '../../redux/actions'
import Form from '../Form'
import './Pokemons.css'

const Pokemons = ({ checked }) => {
	const state = useSelector((state) => state)
	const data = state.firestore.ordered.pokemons
	const dispatch = useDispatch()

	useFirestoreConnect([
		{
			collection: 'pokemons',
			orderBy: ['date', 'desc'],
		},
	])
	return (
		<div>
			<Form />
			<div className='main-pokemon'>
				{data &&
					data.map((item) => {
						return (
							<div className='pokemon'>
								<img
									width='270px'
									height='300px'
									src={item.img}
									alt=''
								/>
								<h3>{item.name}</h3>
								<p>{item.des}</p>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										class='bi bi-heart-fill'
										viewBox='0 0 16 16'
										style={
											item.checked
												? { color: 'red' }
												: { color: 'black' }
										}
										onClick={() =>
											dispatch(fav_pokemon(item))
										}
									>
										<path
											fill-rule='evenodd'
											d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
										/>
									</svg>

									<button className='btn'>
										<span
											onClick={() =>
												dispatch(delete_pokemon(item))
											}
										>
											<img
												width='30'
												src='https://image.flaticon.com/icons/png/512/3221/3221897.png'
												alt="img"
											/>
										</span>
									</button>
								</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default Pokemons
