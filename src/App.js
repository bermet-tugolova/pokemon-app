import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Pokemons from './components/Pokemons'

export const App = ({pokemon}) => {
	return (
		<div>
			<ToastContainer />
			<Pokemons />
		</div>
	)
}
