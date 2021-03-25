import React, { createRef, useState } from 'react'
import { useScreenshot } from 'use-react-screenshot'



function Shot(props) {
    const ref = createRef(null)
    const getImage = () => takeScreenshot(ref.current)
    const [image, takeScreenshot] = useScreenshot()
    return (
        <div>
            <div>
                <button style={{ marginBottom: '10px' }} onClick={getImage}>
                    Take screenshot
        </button>
            </div>
            <img width="100%" src={image} alt={'Screenshot'} />
            <div ref={ref}>
                <h1>use-react-screenshot</h1>
                <p>
                    <div className="bg-dark p-5" >

                    </div>
                    <strong>hook by @vre2h which allows to create screenshots</strong>
                </p>
            </div>
        </div>
    )
}
export default Shot