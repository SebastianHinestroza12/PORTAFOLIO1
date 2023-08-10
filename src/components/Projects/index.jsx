import React from 'react'
import './projects.css'
import { saveAs } from 'file-saver';

export const Projects = ({ numberProject, title, description, image, alt, invertContent, apkUrl, href }) => {

  const handleImageClick = () => {
    saveAs('/src/assets/APK/app-release.apk', 'movie-app.apk');
  };

  return (
    <>
      {
        invertContent ? (
          <div className='container-projects'>
            <div className='container-image-project'>
              <div className="square-frame">
                <a href={href} target='_blank'>
                  <img
                    className="framed-image"
                    src={image}
                    alt={alt}
                    onClick={apkUrl ? handleImageClick : null} 
                  />
                </a>
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
                <a href={href} target='_blank'>
                  <img
                    className="framed-image"
                    src={image}
                    alt={alt}
                    onClick={apkUrl ? handleImageClick : null}  
                  />
                </a>
              </div>
            </div>
          </div>
      }
    </>
  )
}


