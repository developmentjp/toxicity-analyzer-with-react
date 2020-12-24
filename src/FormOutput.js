import React from 'react'

export default function FormOutput(props) {
	const { label, results } = props.obj
	return (
		<div className="output__result__container">
			<p className="output__label">{label.split('_').join(' ').toUpperCase()}:&nbsp;</p>
			<p className="output__result">{results[0].match.toString().toUpperCase()}</p>
		</div>
	)
}
