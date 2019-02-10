import Link from 'next/link'
import { useReducer, useRef } from 'react'

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
			<div>Welcome to Home.js!</div>
			<Link href='index'>
				<a>Index Page</a>
			</Link>
			<form onSubmit={handleForm}>
				<input type='text' name='text' ref={MyRef} />
			</form>

			{todos.map((t, i) => (
				<h2 key={i}> {t.body} </h2>
			))}
		</div>
	)
}
