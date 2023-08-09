import React from 'react'
import './projects.css'

export const Projects = ({ numberProject, title, description, image, alt, invertContent }) => {
  return (
    <>
      {
        invertContent ? (
          <div className='container-projects'>
            <div className='container-image-project'>
              <div className="square-frame">
                <img
                  className="framed-image"
                  src={image}
                  alt={alt}
                />
              </div>
            </div>
            <div className='description'>
              <p> project  {numberProject}</p>
              <p>{title}</p>
              <p>{description}</p>
            </div>
          </div>
        )
          : 
          <div className='container-projects'>
            <div className='description'>
              <p> project  {numberProject}</p>
              <p>{title}</p>
              <p>{description}</p>
            </div>
            <div className='container-image-project'>
              <div className="square-frame">
                <img
                  className="framed-image"
                  src={image}
                  alt={alt}
                />
              </div>
            </div>
          </div>

      }
  </>
  )
}


