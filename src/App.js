import React from 'react'

import './App.scss'

// components
import Uploader from './components/Uploader/Uploader'
import Slider from './components/Slider/Slider'

const App = () => {
	return (
		<main className='main'>
			<div className='main__container'>
				<Uploader />

				<Slider />
			</div>
		</main>
	)
}

export default App
