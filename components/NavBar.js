import Link from 'next/link'
export default () => (
	<div>
		<Link href='index'>
			<a>HOME</a>
		</Link>
		<span>-------</span>
		<Link href='todo'>
			<a>TODO </a>
		</Link>
	</div>
)
