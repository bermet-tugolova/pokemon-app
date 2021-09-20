export const ADD_POKEMON = 'ADD_POKEMON'
export const DELETE_POKEMON = 'DELETE_POKEMON'
export const FAV_POKEMON = 'FAV_POKEMON'

// функция-добавление
// redux-thunk
export const add_pokemon =
	(pokemon) =>
	(dispatch, getState, { getFirebase }) => {
		const firestore = getFirebase().firestore()
		firestore
			.collection('pokemons') // в базе данных откроется или в сущ-ую коллекцию
			.add({ // будет добавляться покемон с датой добавления
				...pokemon,
				date: new Date(),
			})
			.then(() => {
				dispatch({
					type: ADD_POKEMON,
					pokemon,
				})
			})
	}

// функция-удаление
export const delete_pokemon =
	(taskId) =>
	(dispatch, getState, { getFirebase }) => {
		const firestore = getFirebase().firestore()
		firestore
			.collection('pokemons')
			.doc(taskId.id)
			.delete()
			.then(() => {
				dispatch({
					type: DELETE_POKEMON,
				})
			})
	}

// функция-добавить в избранное 
export const fav_pokemon =
	(pokemon) =>
	(dispatch, getState, { getFirebase }) => {
		const firestore = getFirebase().firestore()

		firestore
			.collection('pokemons')
			.doc(pokemon.id)
			.set(
				{
					...pokemon,
					checked: !pokemon.checked,
				},
				{ merge: true },
			)
			.then(() => {
				dispatch({
					type: FAV_POKEMON,
					pokemon,
				})
			})
	}
