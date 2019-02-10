import { useReducer, useRef } from 'react'
import Layout from '../components/Layout'

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return [
				...state,
				{
					body: action.body,
					completed: action.completed
				}
			]

		default:
			return state
	}
}

export default () => {
	const MyRef = useRef()
	const [todos, dispatch] = useReducer(reducer, [
		{
			body: 'run',
			completed: false
		}
	])

	const handleForm = e => {
		e.preventDefault()
		const t = MyRef.current.value
		console.log(t)
		dispatch({
			type: 'ADD',
			body: t,
			completed: false
		})
		MyRef.current.value = ''
	}

	return (
		<div>
			<Layout />
			<div>TODO APP</div>

			<form onSubmit={handleForm}>
				<input type='text' name='text' ref={MyRef} />
			</form>

			{todos.map((t, i) => (
				<h2 key={i}> {t.body} </h2>
			))}
		</div>
	)
}
