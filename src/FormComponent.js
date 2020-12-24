import React, { useState } from 'react'
import '@tensorflow/tfjs'
import * as toxicity from '@tensorflow-models/toxicity'
import FormOutput from './FormOutput'

export default function FormComponent() {
	const [answer, setAnswer] = useState()
	const [predictions, setPredictions] = useState()
	const [isAnalyzing, setIsAnalyzing] = useState(false)

	function checkToxicity() {
		if (answer) {
			setPredictions(null)
			setIsAnalyzing(true)
			const threshold = 0.9
			toxicity.load(threshold).then((model) => {
				model.classify(answer).then((output) => {
					setPredictions(output)
					console.log(output)
					setIsAnalyzing(false)
				})
			})
		} else {
			alert('Please enter something first')
		}
	}

	return (
		<>
			<div className="form__container">
				<label className="form__label" htmlFor="answer">
					Enter Your Input Here
				</label>
				<textarea
					className="form__textarea"
					name="answer"
					id="answer"
					cols="50"
					rows="7"
					placeholder="Enter your input here"
					value={answer}
					onChange={(e) => setAnswer(e.target.value)}
				/>
				<button className="form__btn" onClick={checkToxicity}>
					Analyze Toxicity
				</button>
			</div>
			{isAnalyzing && <span className="analyzing-loader">Analyzing Toxicity...</span>}
			{predictions && (
				<div className="output">
					<h2 className="output__header">Analysis Report</h2>
					{predictions.map((obj) => (
						<FormOutput key={obj.label} obj={obj} />
					))}
				</div>
			)}
		</>
	)
}
