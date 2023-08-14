import React from 'react'
import './projects.css'
import { saveAs } from 'file-saver';
import { Link } from '@chakra-ui/react'
import Zoom from 'react-reveal/Zoom';


export const Projects = ({ numberProject, title, description, image, alt, invertContent, apkUrl, href }) => {
  const handleImageClick = () => {
    saveAs('/src/assets/APK/app-release.apk', 'movie-app.apk');
  };

  return (
    <Zoom>
      <div className={invertContent ? 'container-projects-inviert' : 'container-projects'}>
            <div className='description'>
          <p> projecto  {numberProject}</p>
              <p>{title}</p>
              <p>{description}</p>
            </div>
            <div className='container-image-project'>
              <div className="square-frame">
            <Link href={href} target='_blank'>
              <img
                className="framed-image"
                src={image}
                alt={alt}
                onClick={apkUrl ? handleImageClick : null} 
                  />
            </Link>
              </div>
            </div>
      </div>
    </Zoom>
  )
}


