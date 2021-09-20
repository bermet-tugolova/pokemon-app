import {
	ADD_POKEMON,
	DELETE_POKEMON,
	FAV_POKEMON,
} from '../actions'
import { toast } from 'react-toastify'

export const pokemonReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_POKEMON: {
			toast.success('Pokemon added', { //при добавлении выйдет алерт с этим текстом
				position: 'bottom-left', // где будет находиться
				pauseOnHover: false, // чтобы не останавливался при наведении мыши на алерт
			})
			return state
		}
		case DELETE_POKEMON: {
			toast.success('Successfully deleted', { // удаление
				position: 'bottom-left',
				pauseOnHover: false,
			})
			return state
		}
		case FAV_POKEMON: {
			toast.success( // в избранное
				action.pokemon && action.pokemon.checked // если не в избранном
					? 'Remove from favorites' // тогда этот алерт
					: 'Added to favorite', // если добавлено в избранное
				{
					position: 'bottom-left',
					pauseOnHover: false,
				},
			)
			return state
		}
		default:
			return state
	}
}
