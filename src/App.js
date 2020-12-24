import logo from './logo.svg'
import './styles/App.css'
import FormComponent from './FormComponent'

function App() {
	return (
		<div className="background-img">
			<div className="App">
				<div className="App__header">
					<img src={logo} className="App__logo" alt="logo" />
					<h1>React Toxicity Analyzer</h1>
				</div>
				<FormComponent />
			</div>
		</div>
	)
}

export default App
