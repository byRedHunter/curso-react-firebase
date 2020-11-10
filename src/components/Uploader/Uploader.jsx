import React, { useState } from 'react'

// components
import DragImage from './DragImage'
import LoaderImage from './LoaderImage'

import './Uploader.scss'

const Uploader = () => {
	const [loading, setLoading] = useState(false)
	const [file, setFile] = useState(null)

	return (
		<section className='uploader'>
			{loading ? (
				<LoaderImage file={file} setFile={setFile} setLoading={setLoading} />
			) : (
				<DragImage setMedia={setFile} setLoading={setLoading} />
			)}
		</section>
	)
}

export default Uploader
