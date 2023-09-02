import React from 'react'
import './projects.css'
import { Link } from '@chakra-ui/react'
import { Zoom } from "react-awesome-reveal";


export const Projects = ({ numberProject, title, description, image, alt, invertContent, apkUrl, href }) => {

  const handleImageClick = () => {
    const apkFilePath = '/src/assets/APK/mobile-app.apk';
    const desiredFileName = 'mobile-app.apk';

    const link = document.createElement('a');
    link.href = apkFilePath;
    link.target = '_blank';
    link.download = desiredFileName;
    link.click();
  };


  return (
    <Zoom triggerOnce duration={2500}>
      <div className={invertContent ? 'container-projects-inviert' : 'container-projects'}>
            <div className='description'>
          <p> proyecto  {numberProject}</p>
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


