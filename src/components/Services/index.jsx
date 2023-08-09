import React from 'react'
import './services.css'
import { Icon } from '@iconify/react';

export const Services = ({ nameIcon,title, description }) => {
  return (
    <div className='prueba'>
      <div className='container-gradient'>
        <div className='section-service'>
          <div className='container-image-service'>
            <Icon icon={ nameIcon} color="red" width={40} height={40} />
          </div>
          <p>{ title}</p>
        </div>
        <div className='service-description'>
          <p>{ description}</p>
        </div>
      </div>
    </div>
  )
}
